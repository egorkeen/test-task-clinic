document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".appointment__slider");
    const slides = document.querySelectorAll(".appointment__container");
    const prevSlideBtn = document.getElementById("prevSlide");
    const nextSlideBtn = document.getElementById("nextSlide");
    const currentPage = document.getElementById("currentPage");
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

    // Начнем с первого слайда
    updateSlide();
  });