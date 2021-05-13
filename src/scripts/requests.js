import { getRequests, deleteRequest, getPlumbers, saveCompletion} from "./dataAccess.js"


export const Requests = () => {
    const requests = getRequests()
    const plumbers = getPlumbers()

    let html = "<ul>"
    const requestStuff = requests.map(
        (request) => {
            return `<li> ${request.description}
            <select class="plumbers" id="plumbers">
            <option value="">Choose</option>
            ${
                plumbers.map(
                (plumber) => {
                    return `<option value="${request.id}--${plumber.id}">${plumber.name}</option>`
                }).join("")
            }
                </select>
            <button class="request__delete" id = "request--${request.id}"> Delete</button >
        </li> `
        }
    )

    html += requestStuff.join("")
    html += "</ul>"    
    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "plumbers") {
            const [requestId, plumberId] = event.target.value.split("--")
            // const requests = getRequests ()
            // requests.find((request) => {
            //     if( request.id === requestId) {
            //     sendRequest(isComplete = true)
            //     }
            // })

            // //     (request) => {
            // for (request of requests) {
            //         if (request.id===requestId) {
            //             sendRequest(request.isComplete = true)
            //         }
            //     }
            /*
                This object should have 3 properties
                   1. requestId
                   2. plumberId
                   3. date_created
            */
            const completion = { }
            completion.requestId = requestId
            completion.plumberId = plumberId
            completion.dateCreated = "2021-05-12"
            // requests.isComplete=true
            /*
            Invoke the function that performs the POST request
            to the `completions` resource for your API. Send the
            completion object as a parameter.
            */
            saveCompletion(completion)
            // markComplete(requestId)
        }
    }
)