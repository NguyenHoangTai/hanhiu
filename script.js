let currentIndex = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

// Hiển thị ảnh đầu tiên
slides[currentIndex].classList.add('active');

// Thêm sự kiện cho mũi tên trái
document.querySelector('.arrow-left').addEventListener('click', () => {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Chuyển về ảnh trước đó
    slides[currentIndex].classList.add('active');
});

// Thêm sự kiện cho mũi tên phải
document.querySelector('.arrow-right').addEventListener('click', () => {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalSlides; // Chuyển đến ảnh tiếp theo
    slides[currentIndex].classList.add('active');
});
