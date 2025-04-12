const slider = document.querySelector('.slider');
const sliderItems = document.querySelectorAll('.slider-item');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;
let isDragging = false;
let startX = 0;

slider.addEventListener('touchstart', (e) => {
  isDragging = true;
  startX = e.touches[0].clientX;
});

slider.addEventListener('touchmove', (e) => {
  if (isDragging) {
    const currentX = e.touches[0].clientX;
    const diffX = currentX - startX;
    slider.style.transform = `translateX(${diffX}px)`;
  }
});

slider.addEventListener('touchend', (e) => {
  isDragging = false;
  const currentX = e.changedTouches[0].clientX;
  const diffX = currentX - startX;
  if (diffX < -100) {
    currentIndex++;
    if (currentIndex >= sliderItems.length) {
      currentIndex = 0;
    }
  } else if (diffX > 100) {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = sliderItems.length - 1;
    }
  }
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
});
