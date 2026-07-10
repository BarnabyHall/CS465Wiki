async function loadNavbar() {
    const response = await fetch("navbar.html");

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const html = await response.text();
    document.getElementById("navbar").innerHTML = html;

    // Highlight the current page
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll("#navbar a").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
}

loadNavbar().catch(console.error);