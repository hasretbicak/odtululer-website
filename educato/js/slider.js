let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function moveSlide(step) {
    currentSlide += step;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    updateSlidePosition();
}

function updateSlidePosition() {
    const slideWidth = slides[0].clientWidth;
    document.querySelector('.slider').style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

setInterval(() => {
    moveSlide(1);
}, 5000); 

