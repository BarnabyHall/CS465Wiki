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


function renderHazardCard(
    hazardName,
    hazardDescription,
    consequenceDescription,
    consequenceRating,
    riskManagementMeasures,
) {
    // create the container for the elements to be appended to
    let parentDiv = document.createElement("div");
    parentDiv.id = hazardName;
    parentDiv.classList.add("hazard-box")
    parentDiv.addEventListener("click", () => {
        parentDiv.classList.toggle("selected")
    })


    // create and edit the card title
    let cardTitle = document.createElement("h2")
    cardTitle.textContent = hazardName
    

    // create the hazard description
    let descriptionHeaderEl = document.createElement("h3")
    descriptionHeaderEl.textContent = "Event"
    descriptionHeaderEl.appendChild(createCopyButton(hazardDescription))

    let descriptionContentEl = document.createElement("p")
    descriptionContentEl.textContent = hazardDescription


    // create the consequence description
    let consequenceHeaderEl = document.createElement("h3")
    consequenceHeaderEl.textContent = "Consequence"
    consequenceHeaderEl.appendChild(createCopyButton(consequenceDescription))

    let consequenceDescriptionEl = document.createElement("p")
    consequenceDescriptionEl.textContent = consequenceDescription

    let consequenceRatingEl = document.createElement("strong")
    consequenceRatingEl.textContent = consequenceRating


    // create risk management measures (inc. check for list >0)
    let riskManagementMeasuresHeaderEl = document.createElement("h3")
    riskManagementMeasuresHeaderEl.textContent = "Risk Management Measures"
    riskManagementMeasuresHeaderEl.appendChild(createCopyButton(riskManagementMeasures))

    let ul = document.createElement("ul")

    if (!riskManagementMeasures || riskManagementMeasures.length === 0) {
        ul.innerHTML = "<li> Risk Management Measure TBC</li>"
    } else {   
        riskManagementMeasures.forEach(rmm => {
            const li = document.createElement("li")
            li.textContent = rmm
            ul.appendChild(li)
        })
    }



    // append all the elements of the card in order
    parentDiv.appendChild(cardTitle)

    parentDiv.appendChild(descriptionHeaderEl)
    parentDiv.appendChild(descriptionContentEl)

    parentDiv.appendChild(consequenceHeaderEl)
    parentDiv.appendChild(consequenceDescriptionEl)
    parentDiv.appendChild(consequenceRatingEl)

    parentDiv.appendChild(riskManagementMeasuresHeaderEl)
    parentDiv.appendChild(ul)


    // move content to an input variable of the function
    content.appendChild(parentDiv)

}


function createCopyButton(textToCopy) {
    let button = document.createElement("button");
    button.textContent = "📋";
    button.classList.add("copy-button");

    if (Array.isArray(textToCopy)) {
        textToCopy = textToCopy.join("\n");
    }

    button.addEventListener("click", (e) => {
        e.stopPropagation(); // prevents the button interacting with other elements
        
        navigator.clipboard.writeText(textToCopy).then(() => {
            const original = button.textContent;
            button.textContent = "✔";

            setTimeout(() => {
                button.textContent = original;
            }, 1500);
        });
    });

    return button;
}


