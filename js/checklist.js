import { hazards } from "./hazard-data.js";

const vulnerableDetailContainer = document.getElementById("vulnerableDetails")
const conditionExtContainer = document.getElementById("conditionExt")
const conditionIntContainer = document.getElementById("conditionInt")
const historyContainer = document.getElementById("history")
const assessmentContainer = document.getElementById("assessment")

const vulnerableCountEl = document.getElementById("vulnerableCount")



function renderHazardChecklist () {
    hazards.forEach((hazard, index) => {
        let hazardCat = hazard.hazardCategory
        let hazardName = hazard.hazardName

        if (hazardCat == "Vulnerable Details and Material Hazards") {
            createChecklistItem(hazardName, vulnerableDetailContainer, vulnerableCountEl)

        } else if (hazardCat == "Condition Hazards - External") {
            createChecklistItem(hazardName, conditionExtContainer)
            
        } else if (hazardCat == "Condition Hazards - Internal (Post-Tensioning)") {
            createChecklistItem(hazardName, conditionIntContainer)

        } else if (hazardCat == "History Hazards") {
            createChecklistItem(hazardName, historyContainer)

        } else if (hazardCat == "Assessment Hazards") {
            createChecklistItem(hazardName, assessmentContainer)
        }
    });
}

function createChecklistItem (hazardTitle, parentEl, countEl) {
    const li = document.createElement("li")
    const text = document.createTextNode(" " + hazardTitle)
    
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    
    li.classList.add("checklist-item")
    
    li.addEventListener("click", () => {
        checkbox.checked = !checkbox.checked
        updateCheckbox(checkbox, li)
        updateCount(vulnerableDetailContainer, countEl)
    })

    checkbox.addEventListener("click", (e) => {
        e.stopPropagation()
        updateCheckbox(checkbox, li)
        updateCount(vulnerableDetailContainer)
    })

    li.appendChild(checkbox)
    li.appendChild(text)

    parentEl.appendChild(li)
} 

function updateCheckbox (checkbox, hazardDiv) {
    if (checkbox.checked) {
        hazardDiv.classList.add("checklist-item-active")
    } else {
        hazardDiv.classList.remove("checklist-item-active")
    }
}

function updateCount(container, countEl) {
    let count = 0
    let checkboxList = container.querySelectorAll("input")
    checkboxList.forEach((checkbox) => {
        if (checkbox.checked) {           
            count ++
        }
    })
    countEl.textContent = "(" + count + ")"
}

renderHazardChecklist()