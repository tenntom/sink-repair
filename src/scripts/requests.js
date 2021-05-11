import { getRequests } from "./dataAccess.js"

export const Requests = () => {
    const requests = getRequests()

    let html = "<ul>"

    let requestStuff = requests.map(
        (request) => {
            return `<li> ${request.description} </li>`
        }
    )

    html += requestStuff.join("")
    html += "</ul>"    
    return html
}