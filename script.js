let slideIndex = 0; // Bắt đầu từ ảnh đầu tiên
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slides img').length;

// Hàm hiển thị slideshow
function showSlides(index) {
    slides.style.transform = `translateX(${-index * 100}%)`; // Dịch chuyển các slide
}

// Sự kiện cho mũi tên chuyển đổi
document.querySelector('.arrow-right').addEventListener('click', () => {
    slideIndex++;
    if (slideIndex >= totalSlides) {
        slideIndex = 0; // Quay lại ảnh đầu tiên
    }
    showSlides(slideIndex);
});
