const API = "http://localhost:8088"
const mainContainer = document.querySelector("#container")


const applicationState = {
    requests: []
}

export const fetchRequests = () => {
    return fetch (`${API}/requests`)
        .then(response => response.json())
        .then(
            (requestsData) => {
                applicationState.requests = requestsData
            }
        )
}

export const getRequests = () => {
    return [...applicationState.requests]
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

export const deleteRequest = (id) => {
    return fetch(`${API}/requests/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}