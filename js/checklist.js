import { hazards } from "./hazard-data.js";

const vulnerableDetailContainer = document.getElementById("vulnerableDetails")
const conditionExtContainer = document.getElementById("conditionExt")
const conditionIntContainer = document.getElementById("conditionInt")
const historyContainer = document.getElementById("history")
const assessmentContainer = document.getElementById("assessment")

const vulnerableCountEl = document.getElementById("vulnerableCount")
const conditionExtCountEl = document.getElementById("conditionExtCount")
const conditionIntCountEl = document.getElementById("conditionIntCount")
const historyCountEl = document.getElementById("historyCount")
const assessmentCountEl = document.getElementById("assessmentCount")


const clearButton = document.getElementById("clearCheckboxesButton")

clearButton.addEventListener("click", () => {
    resetCheckboxes()
})


function renderHazardChecklist () {
    hazards.forEach((hazard, index) => {
        let hazardCat = hazard.hazardCategory
        let hazardName = hazard.hazardName

        if (hazardCat == "Vulnerable Details and Material Hazards") {
            createChecklistItem(hazardName, vulnerableDetailContainer, vulnerableCountEl)

        } else if (hazardCat == "Condition Hazards - External") {
            createChecklistItem(hazardName, conditionExtContainer, conditionExtCountEl)
            
        } else if (hazardCat == "Condition Hazards - Internal (Post-Tensioning)") {
            createChecklistItem(hazardName, conditionIntContainer, conditionIntCountEl)

        } else if (hazardCat == "History Hazards") {
            createChecklistItem(hazardName, historyContainer, historyCountEl)

        } else if (hazardCat == "Assessment Hazards") {
            createChecklistItem(hazardName, assessmentContainer, assessmentCountEl)
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
        updateCount(parentEl, countEl)
    })

    checkbox.addEventListener("click", (e) => {
        e.stopPropagation()
        updateCheckbox(checkbox, li)
        updateCount(parentEl, countEl)
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


function resetCheckboxes() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]')

    checkboxes.forEach((checkbox) => {
        checkbox.checked = false
        checkbox.closest(".checklist-item")?.classList.remove("checklist-item-active")
    })

    vulnerableCountEl.textContent = "(0)"
    conditionExtCountEl.textContent = "(0)"
    conditionIntCountEl.textContent = "(0)"
    historyCountEl.textContent = "(0)"
    assessmentCountEl.textContent = "(0)"
    
}


renderHazardChecklist()