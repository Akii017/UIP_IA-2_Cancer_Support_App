let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        window.location.href = "html/welcome.html";
    } else {
        showSlide(currentSlide);
    }
}

function skipTour() {
    window.location.href = "html/welcome.html";
}

showSlide(currentSlide);
setInterval(nextSlide, 5000);
