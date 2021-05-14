import { getRequests, deleteRequest, getPlumbers, saveCompletion} from "./dataAccess.js"

//This is creating the area where we display the requests. The .map method goes through the requests array and creates an <li> item for each request in the array. The map method on the plumbers array puts the information from the plumbers array into a drop down menu. There is also a delete button on each item.
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
//this mainContainer is defined here and in other modules. Can we import a variable and if so, should we? OR is it better to define again?

//This deletes a request when the User clicks on the delete button.
mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

//This will send the complete
mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "plumbers") {
            const [requestId, plumberId] = event.target.value.split("--")
            const completion = { }
            completion.requestId = parseInt(requestId)
            completion.plumberId = parseInt(plumberId)
            completion.dateCreated = "2021-05-12"

            saveCompletion(completion)
        }
    }
)