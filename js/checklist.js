import { hazards } from "./hazard-data.js";

const velnerableDetailContainer = document.getElementById("vulnerableDetails")



function renderHazardChecklist () {
    hazards.forEach((hazard, index) => {
        let hazardCat = hazard.hazardCategory
        if (hazardCat == "Vulnerable Details and Material Hazards") {

            createChecklistItem(hazard.hazardName, velnerableDetailContainer)
        }
    });
}

function createChecklistItem (hazardName, parentEl) {
    const li = document.createElement("li")
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"

    const text = document.createTextNode(" " + hazardName)

    li.appendChild(checkbox)
    li.appendChild(text)

    parentEl.appendChild(li)
} 

renderHazardChecklist()