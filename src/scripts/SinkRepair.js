
import { Requests } from "./requests.js"
import { ServiceForm } from "./ServiceForm.js"

//This is the module that pulls our form and requests display together and sends the html to the main.js
export const SinkRepair = () => {
    return `
    <h1>Maude and Merle's Sink Repair</h1>
    <section class="serviceForm">
        ${ServiceForm()}
    </section>
    <section class="serviceRequests">
        <h2>Service Requests</h2>
        ${Requests()}
    </section>
    `
}

