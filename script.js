let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slides img').length;

function showSlides(index) {
    slides.style.transform = `translateX(${-index * 100}%)`;
}

document.querySelector('.arrow-right').addEventListener('click', () => {
    slideIndex++;
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }
    showSlides(slideIndex);
});
