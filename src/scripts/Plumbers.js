import { getPlumbers } from "./dataAccess.js"

// export const plumberDeal =

//     `<select class="plumbers" id="plumbers">
// <option value="">Choose one</options>
// <option value=1>MaudeA</option>
// <option value=2>MerleB</option>
// </select>`

// export const plumberDeal2 = () => {
//     const plumbers = getPlumbers()
//     debugger
//     let HTML = "<select class= 'plumbers'>"

//     HTML += "<option value=''>Choose one</option>"

//     let plumberStuff =
//         plumbers.map((plumber) => {
//             return `<option>${plumber.name}</option>`}
//         )

//     HTML += plumberStuff.join("")

//     HTML += "</select>"


//     return
//     `<select class="plumbers" id="plumbers">
//         <option value="">Choose one</options>
//         <option value=1>MaudeA</option>
//         <option value=2>MerleB</option>
//         </select>`
// }


// // export const plumberList = () => {
// //     const plumbers = getPlumbers()

// //     let html = "<select class='plumbers' id='plumbers'><option value=''>Choose</option>"

// //     const plumberChoices = plumbers.map(
// //         plumber => {
// //             return `<option value="${request.id}--${plumber.id}">${plumber.name}</option>`
// //         }
// //     ).join("")

// //     html += plumberChoices
// //     html += "</select>"
// // }
// // const plumbers = getPlumbers()

// // export const ourList = plumbers.map(
// //     plumber => {
// //         return `<option value="${request.id}--${plumber.id}">${plumber.name}</option>`
// //     }
// // ).join("")

// // export const plumberTryAgain = () => {
// //     return `
// //     <select class="plumbers" id="plumbers">
// //     <option value="">Choose</option>
// //     ${ourList}
// //     } </select>`
// // }

