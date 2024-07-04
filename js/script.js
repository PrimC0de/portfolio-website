function toggleMenu() {
const menu = document.querySelector(".menu-links");
const icon = document.querySelector(".hamburger-icon");
menu.classList.toggle("open")
icon.classList.toggle("open")
}

let currentIndex = 0;
let startX = 0;
let endX = 0;

function showSlide(index) {
  const carouselInner = document.querySelector('.carousel-inner');
  const totalSlides = document.querySelectorAll('.carousel-item').length;
  if (index >= totalSlides) currentIndex = 0;
  if (index < 0) currentIndex = totalSlides - 1;
  carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
  updateIndicators();
}

function nextSlide() {
  currentIndex++;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex--;
  showSlide(currentIndex);
}

function goToSlide(index) {
  currentIndex = index;
  showSlide(currentIndex);
}

function updateIndicators() {
  const indicators = document.querySelectorAll('.indicator');
  indicators.forEach((indicator, index) => {
    if (index === currentIndex) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

function handleTouchStart(event) {
  startX = event.touches[0].clientX;
}

function handleTouchMove(event) {
  endX = event.touches[0].clientX;
}

function handleTouchEnd() {
  if (startX > endX + 50) {
    nextSlide();
  } else if (startX < endX - 50) {
    prevSlide();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.getElementById('carousel');
  carousel.addEventListener('touchstart', handleTouchStart);
  carousel.addEventListener('touchmove', handleTouchMove);
  carousel.addEventListener('touchend', handleTouchEnd);
  showSlide(currentIndex);
});
