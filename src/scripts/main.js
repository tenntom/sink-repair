import { fetchRequests, fetchPlumbers, fetchCompletions} from "./dataAccess.js"
import { SinkRepair } from "./SinkRepair.js"


const mainContainer = document.querySelector("#container")

//this re-renders the page each time a stateChanged event takes place. 
mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

//this defines what happens when we render the page. We get the updated information from the API and then run it through the SinkRepair moduel, which sends the info through other related modules. 
const render = () => {
    fetchRequests()
        .then(fetchPlumbers)
        .then(fetchCompletions)
        .then(() => {
            mainContainer.innerHTML = SinkRepair()
        }
    )
}

//this invokes the render function when we load the page. 
render()


