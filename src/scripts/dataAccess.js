const API = "http://localhost:8088"
const mainContainer = document.querySelector("#container")

//This creates our application state to store data that comes in from the API. The three arrays are empty initially.
const applicationState = {
    requests: [],
    plumbers: [],
    completions: []
}

//This retrieves the API data and stores it in the application state
export const fetchRequests = () => {
    return fetch(`${API}/requests`)
        .then(response => response.json())
        .then(
            (requestsData) => {
                applicationState.requests = requestsData
            }
        )
}

//This retrieves the API data and stores it in the application state
export const fetchPlumbers = () => {
    return fetch(`${API}/plumbers`)
        .then(response => response.json())
        .then(
            (plumberData) => {
                applicationState.plumbers = plumberData
            }
        )
}


//This function creates a copy of the local data to use in other functions.
export const getPlumbers = () => {
    return [...applicationState.plumbers]
}

//This retrieves the API data and stores it in the application state.
export const fetchCompletions = () => {
    return fetch(`${API}/completions`)
        .then(response => response.json())
        .then(
            (completionData) => {
                applicationState.completions = completionData
            }
        )
}

//This makes a copy for use in other functions.
export const getCompletions = () => {
    return [...applicationState.completions]
}


//This one makes a copy of the request for local use, and it also searches through the items in that array, assigns an isComplete=true valule to those that have corresponding completion RequestIds, and then creates a new array with the isComplete = true items at the end.

export const getCompleteRequests = () => {
    let requests = [...applicationState.requests]
    const completeRequests = []
    for (const request of requests) {
        let myCompletions = [...applicationState.completions]
        for (const completion of myCompletions) {
            if (request.id === completion.requestId) {
                request.plumberId = completion.plumberId
                request.isComplete = true
            }
        }
    }

    for (const request2 of requests) {
        if (request2.isComplete === true) {
            completeRequests.unshift(request2)
        }
    } return completeRequests
}

export const getIncompleteRequests = () => {
    let requests = [...applicationState.requests]
    const incompleteRequests = []
    for (const request of requests) {
        let myCompletions = [...applicationState.completions]
        for (const completion of myCompletions) {
            if (request.id === completion.requestId) {
                request.isComplete = true
            }
        }
    }

    for (const request2 of requests) {
        if (request2.isComplete !== true) {
            incompleteRequests.unshift(request2)
        }
    } return incompleteRequests
}


//This sends requests to the API and fetches the updated information.
export const sendRequest = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }


    return fetch(`${API}/requests`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

//This function sends the completion information to the API and returns the updated information.
export const saveCompletion = (completedJob) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(completedJob)
    }

    return fetch(`${API}/completions`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

//This deletes requests and also magically deletes the associated completions. I don't get how that works, but I guess it is related to the "DELETE" method for json.
export const deleteRequest = (id) => {
    return fetch(`${API}/requests/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}