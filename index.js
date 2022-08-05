let myLeads = []
let oldLeads = []
const inputEL = document.getElementById("input-el")
const inputbtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deletebtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}
function render(leads) {
    let listItems = ""
    for(let i =0;i<leads.length;i++) {

        listItems  +=`
            <li>
                <a target='_blank' href='${leads[i]}'>
                   ${leads[i]}
                </a>
            </li> 
        `
}
    ulEl.innerHTML = listItems
}
deletebtn.addEventListener("dblclick",function() {
    // console.log("Double clicked!!")
    localStorage.clear()
    myLeads = []
    render(myLeads)
})


// console.log(leadsFromLocalStorage)
inputbtn.addEventListener("click",function() {
    // console.log("Button clicked from addEventListener")
    myLeads.push(inputEL.value)
    inputEL.value = ""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
    // console.log(localStorage.getItem("myLeads"))
})

// const recipient = "James"
// const sender = "Shubham"
// const email = `
// Hey ${recipient}!
// How is it going?
// Cheers ${sender}
// `
// console.log(email)

