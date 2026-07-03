import { hazards } from "./hazard-data.js";

let activeCategory = ""
let hazardSidebarList = []

let content = document.getElementById("content")
let sideBar = document.getElementById("sidebar")
let hazardCategoriesContainer = document.getElementById("categories")


const hazardCategories = []

renderCategoriesHeader()
renderSidebarHazards()
renderHazardData ()

function renderCategoriesHeader () {
    // create a list of each unique category
    hazards.forEach((hazard, index) => {
    if (!hazardCategories.includes(hazard.hazardCategory)){
        hazardCategories.push(hazard.hazardCategory)
        }
    });
    
    // create elements for each category to append to header
    hazardCategories.forEach((hazardCategoryName, index) => {
        let button = document.createElement("button")
        button.textContent = hazardCategoryName
        button.classList.add("categories")
        button.id = "categories"
        button.addEventListener("click", () => {
            activeCategory = hazardCategoryName
            content.scrollTop = 0

            renderSidebarHazards()
            renderHazardData()
        })
        hazardCategoriesContainer.appendChild(button)
    })

    if (activeCategory == "") {
        activeCategory = hazardCategories[0]
    }
}


function renderSidebarHazards() {
    // clear the sidebar element before populating again
    sideBar.textContent = ""
    hazardSidebarList = []

    // create an array of all hazards in the active category
    hazards.forEach((hazard, index) => {
        let hazardName = hazard.hazardName
        if (hazard.hazardCategory == activeCategory) {
            hazardSidebarList.push(hazardName)
        }
    })

    // create elements to append to side bar      
    hazardSidebarList.forEach((hazardName, index) => {
        let div = document.createElement('div')
        let button = document.createElement("button")
        button.textContent = hazardName
        button.classList.add("item")
        button.addEventListener("click", () => {
            document.getElementById(hazardName).scrollIntoView({
                behavior: "smooth"
            })
        })
        
        div.appendChild(button)
        sideBar.appendChild(div)
    })
}


function renderHazardData () {
    // clear the element and arrays containing hazard data
    content.textContent = ""

    let div = document.createElement("div")
    hazards.forEach((hazard) => {
        let hazardName = hazard.hazardName;
        let hazardDescription = hazard.eventDescription
        let hazardConsquenceDescription = hazard.consequenceDescription
        let hazardConsquenceRating = hazard.consequenceRating
        let riskManagementMeasures = hazard.riskManagementMeasures

        if (hazardSidebarList.includes(hazardName)) {
            renderHazardCard(hazardName, hazardDescription, hazardConsquenceDescription, hazardConsquenceRating, riskManagementMeasures)
        }
    })
}


function renderHazardCard (hazardName, hazardDescription, hazardConsquenceDescription, hazardConsquenceRating, hazardRiskManagmentMeasures) {
    // create and append a hazard card
    let div = document.createElement("div")
    div.id = hazardName
    div.innerHTML = `
        <div class="hazard-box">
            <h2>${hazardName}</h2>
            <h3>Hazard Description</h3>
            <p>${hazardDescription}</p>
            <h3>Hazard Consequence</h3>
            <p>${hazardConsquenceDescription}</p>
            <h3>Recommended Hazard Risk Level</h3>
            <strong>${hazardConsquenceRating}</strong>
            <h3>Risk Management Measures</h3>
            <ul>
                ${hazardRiskManagmentMeasures.map(rmm => `<li>${rmm}</li>`).join("")}
            </ul>
        </div>
    `;
    content.appendChild(div)
}