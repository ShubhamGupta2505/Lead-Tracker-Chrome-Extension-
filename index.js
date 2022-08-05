let myLeads = []
let oldLeads = []
const inputEL = document.getElementById("input-el")
const inputbtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deletebtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")

if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click",function() {
    chrome.tabs.query({active: true,currentWindow: true},function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)
    })
    console.log(tabs[0].url)
})
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
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputbtn.addEventListener("click",function() {
    myLeads.push(inputEL.value)
    inputEL.value = ""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
})

 