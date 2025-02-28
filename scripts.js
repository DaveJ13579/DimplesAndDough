document.addEventListener("DOMContentLoaded", () => {
    // Load header, footer, and carousel on all pages
    fetch("header.html")
        .then(response => response.text())
        .then(data => document.getElementById("header").innerHTML = data);

    fetch("footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer").innerHTML = data);

    // Load carousel if the placeholder exists
    const carouselPlaceholder = document.getElementById("carousel");
    if (carouselPlaceholder) {
        fetch("carousel.html")
            .then(response => response.text())
            .then(data => carouselPlaceholder.innerHTML = data);
    }

    // Add page-specific scripts if needed
    if (document.body.classList.contains("menu-page")) {
        // Add menu-specific scripts here
    }

    if (document.body.classList.contains("events-page")) {
        // Add event-specific scripts here
    }

    if (document.body.classList.contains("about-page")) {
        // Add about-specific scripts here
    }
});