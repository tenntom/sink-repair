import { fetchRequests, fetchPlumbers, fetchCompletions, getRequests} from "./dataAccess.js"
import { SinkRepair } from "./SinkRepair.js"


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)
const render = () => {
    fetchRequests()
        .then(fetchPlumbers)
        .then(fetchCompletions)
        // .then(console.log(getRequests()))
        .then(() => {
            mainContainer.innerHTML = SinkRepair()
        }
    )
}

render()


