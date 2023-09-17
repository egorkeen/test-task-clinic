const slides = document.querySelectorAll(".appointment__container");
const prevSlideBtn = document.getElementById("prevSlide");
const nextSlideBtn = document.getElementById("nextSlide");
const currentPage = document.getElementById("currentPage");
const toggleButton = document.getElementById('header__toggle');
const navigation = document.querySelector('.navigation');
const totalSlides = slides.length;
let currentSlideIndex = 0;

function updateSlide() {
  slides.forEach((slide, index) => {
    if (index === currentSlideIndex) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });

  currentPage.textContent = currentSlideIndex + 1;
}

toggleButton.addEventListener('click', () => {
  // Переключаем класс navigation_visible
  navigation.classList.toggle('navigation_visible');
});

prevSlideBtn.addEventListener("click", () => {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
    updateSlide();
  }
});

nextSlideBtn.addEventListener("click", () => {
  if (currentSlideIndex < totalSlides - 1) {
    currentSlideIndex++;
    updateSlide();
  }
});

updateSlide();

