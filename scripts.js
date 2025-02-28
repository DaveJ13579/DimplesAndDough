document.addEventListener("DOMContentLoaded", () => {
    // Load header and footer on all pages
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
            .then(data => {
                carouselPlaceholder.innerHTML = data;
                initializeCarousel(); // Initialize the carousel after loading
            });
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

    // Initialize banner if it exists on the home page
    if (document.body.classList.contains("home-page")) {
        initializeBanner();
    }
});

// Auto-rotating banner script
function initializeBanner() {
    let currentSlide = 0;
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot');
    let interval = 5000; // Time between slides (in milliseconds)

    // Function to show a specific slide
    function showSlide(index) {
        // Hide all slides
        slides.forEach((slide) => slide.classList.remove('active'));
        dots.forEach((dot) => dot.classList.remove('active'));

        // Show the selected slide
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }

    // Function to go to the next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Function to go to a specific slide
    function goToSlide(index) {
        currentSlide = index;
        showSlide(currentSlide);
    }

    // Start auto-rotation
    let slideInterval = setInterval(nextSlide, interval);

    // Pause auto-rotation on hover
    let banner = document.querySelector('.banner');
    if (banner) {
        banner.addEventListener('mouseenter', () => clearInterval(slideInterval));
        banner.addEventListener('mouseleave', () => {
            slideInterval = setInterval(nextSlide, interval);
        });
    }

    // Show the first slide initially
    showSlide(currentSlide);
}

// Carousel functionality
function initializeCarousel() {
    let currentSlide = 0;
    let slides = document.querySelectorAll('.item');
    let dots = document.querySelectorAll('.dot');
    let interval = 5000; // Time between slides (in milliseconds)

    // Function to show a specific slide
    function showSlide(index) {
        // Hide all slides
        slides.forEach((slide) => slide.classList.remove('active'));
        dots.forEach((dot) => dot.classList.remove('active'));

        // Show the selected slide
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }

    // Function to go to the next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Function to go to a specific slide
    function goToSlide(index) {
        currentSlide = index;
        showSlide(currentSlide);
    }

    // Start auto-rotation
    let slideInterval = setInterval(nextSlide, interval);

    // Pause auto-rotation on hover
    let carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', () => clearInterval(slideInterval));
        carouselContainer.addEventListener('mouseleave', () => {
            slideInterval = setInterval(nextSlide, interval);
        });
    }

    // Show the first slide initially
    showSlide(currentSlide);
}