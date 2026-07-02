import { hazards } from "./hazard-data.js";

const sidebar = document.getElementById("sidebar");
const content = document.getElementById("content");
const categoriesBar = document.getElementById("categories");

let currentCategory = null;

// 1. Build top categories (HTML header)
function loadCategories() {
    Object.keys(hazards).forEach(category => {

        const btn = document.createElement("button");
        btn.textContent = category;

        btn.onclick = () => {
            currentCategory = category;
            loadSubcategories(category);
        };

        categoriesBar.appendChild(btn);
    });
}

// 2. Build sidebar (hazard titles)
function loadSubcategories(category) {

    sidebar.innerHTML = "";

    Object.keys(hazards[category]).forEach(title => {

        const div = document.createElement("div");
        div.textContent = title;
        div.classList.add("item");

        div.onclick = () => {
            renderHazard(category, title);
        };

        sidebar.appendChild(div);
    });
}

// 3. Show hazard details in HTML
function renderHazard(category, title) {

    const h = hazards[category][title];

    content.innerHTML = `
        <h2>${title}</h2>

        <h3>Event</h3>
        <p>${h.eventDescription}</p>

        <h3>Consequence</h3>
        <p>${h.consequenceDescription}</p>

        <h3>Hazard Rating</h3>
        <p><strong>${h.consequenceRating}</strong></p>

        <h3>Risk Management</h3>
        <ul>
            ${h.riskManagementMeasures.map(m => `<li>${m}</li>`).join("")}
        </ul>
    `;

    // create copy buttons
    const copyDesButton = document.createElement("button");
    copyDesButton.textContent = "📋 Description";

    copyDesButton.addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText(h.eventDescription);
            copyDesButton.textContent = "✓ Copied";

            setTimeout(() => {
                copyDesButton.textContent = "📋 Description";
            }, 1500);
        } catch (err) {
            console.error(err);
        }
    });

    content.appendChild(copyDesButton);

    const copyConsButton = document.createElement("button");
    copyConsButton.textContent = "📋 Consequence";

    copyConsButton.addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText(h.consequenceDescription);
            copyConsButton.textContent = "✓ Copied";

            setTimeout(() => {
                copyConsButton.textContent = "📋 Consequence";
            }, 1500);
        } catch (err) {
            console.error(err);
        }
    });

    content.appendChild(copyConsButton);

    const copyMeasuButton = document.createElement("button");
    copyMeasuButton.textContent = "📋 Measures";

    copyMeasuButton.addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText(h.riskManagementMeasures);
            copyMeasuButton.textContent = "✓ Copied";

            setTimeout(() => {
                copyMeasuButton.textContent = "📋 Measures";
            }, 1500);
        } catch (err) {
            console.error(err);
        }
    });

    content.appendChild(copyMeasuButton);


}

// INIT PAGE
loadCategories();
loadSubcategories("Vulnerable Details and Material Hazards")
renderHazard("Vulnerable Details and Material Hazards", "Segmental Joints – Narrow In-Situ Mortar")