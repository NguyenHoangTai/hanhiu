let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slides img').length;

document.querySelector('.arrow-right').addEventListener('click', function() {
    slideIndex++;
    if (slideIndex >= totalSlides) {
        slideIndex = 0; // Quay lại slide đầu tiên khi đến slide cuối
    }
    slides.style.transform = `translateX(${-slideIndex * 100}%)`; // Chuyển đổi hình ảnh
});
