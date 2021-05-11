const API = "http://localhost:8088"


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
