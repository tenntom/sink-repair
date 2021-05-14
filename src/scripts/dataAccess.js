const API = "http://localhost:8088"
const mainContainer = document.querySelector("#container")


const applicationState = {
    requests: [],
    plumbers: [],
    completions: []
}

export const fetchRequests = () => {
    return fetch(`${API}/requests`)
        .then(response => response.json())
        .then(
            (requestsData) => {
                applicationState.requests = requestsData
            }
        )
}



export const fetchPlumbers = () => {
    return fetch(`${API}/plumbers`)
        .then(response => response.json())
        .then(
            (plumberData) => {
                applicationState.plumbers = plumberData
            }
        )
}
export const getPlumbers = () => {
    return [...applicationState.plumbers]
}

export const fetchCompletions = () => {
    return fetch(`${API}/completions`)
        .then(response => response.json())
        .then(
            (completionData) => {
                applicationState.completions = completionData
            }
        )
}

export const getCompletions = () => {
    return [...applicationState.completions]
}





export const getRequests = () => {
    let requests = [...applicationState.requests]
    const displayRequests = []
    for (const request of requests) {
        let myCompletions = [...applicationState.completions]
        for (const completion of myCompletions) {
            if (request.id === parseInt(completion.requestId)) {
                request.isComplete = true
                //     displayRequests.push(request)
                // } else {
                //     displayRequests.unshift(request)
            }
        }
        // } requests.sort((current, next)=> {
        //     return current.isComplete - next.isComplete
    }
    for (const request2 of requests)
    if (request2.isComplete === true) {
        displayRequests.push(request2)
    } else {
        displayRequests.unshift(request2)
    }

    return displayRequests
}


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

// export const makeTrue = () => {
//     return fetch(`${API}/requests/${id}`, { method: "PUT" })
//         .then(
//             () => {
//                 mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
//             }
//         )
// }

// export const markComplete = (requestId) => {
//     const fetchOptions = {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(requestId)
//     }

// const specificRequest = () => {
//     const requests = getRequests()
//     for (const request of requests) {
//         if (request.id === requestId) {
//             return request
//         }
//     }
// }

// const thisRequest = specificRequest()


//     return fetch(`${API}/requests/${requestId}`, fetchOptions)
//         .then(response => response.json())
//         .then(() => {
//             // let requests = getRequests()
//             if (request.id === requestId) {
//                 request.isComplete = true
//             }
//         }
//     )
// }

export const deleteRequest = (id) => {
    return fetch(`${API}/requests/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}