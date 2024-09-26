let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slides img').length;

// Hàm hiển thị slideshow
function showSlides(index) {
    slides.style.transform = `translateX(${-index * 100}%)`;
}

// Sự kiện cho mũi tên chuyển đổi
document.querySelector('.arrow-right').addEventListener('click', () => {
    slideIndex++;
    if (slideIndex >= totalSlides) {
        slideIndex = 0; // Quay lại ảnh đầu tiên
    }
    showSlides(slideIndex);
});

// Nếu cần thêm mũi tên bên trái
document.querySelector('.arrow-left').addEventListener('click', () => {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = totalSlides - 1; // Quay về ảnh cuối cùng
    }
    showSlides(slideIndex);
});
