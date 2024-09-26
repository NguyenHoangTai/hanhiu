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

// Ngăn không cho slideshow tự động chuyển đổi
// Xóa hoặc không thêm bất kỳ mã nào tự động
