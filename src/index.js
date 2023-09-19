const navigation = document.querySelector('.navigation');
const toggleButton = document.getElementById('header__toggle');
const sliderLine = document.querySelector('.services__slider-line');
const slideWidth = document.querySelector('.slide').offsetWidth;
const nextButton = document.querySelector('.services__button_next')
const prevButton = document.querySelector('.services__button_prev');
const pagesElement = document.querySelector('.services__pages');
let offset = 0;
let currentPage = 1;

toggleButton.addEventListener('click', () => {
  navigation.classList.toggle('navigation_visible');
});

function updatePageIndicator() {
  pagesElement.textContent = currentPage;
}

nextButton.addEventListener('click', () => {
  offset = offset + slideWidth;
  if (offset > slideWidth * 3) {
    offset = 0;
    currentPage = 1;
  } else {
    currentPage++;
  }
  sliderLine.style.left = -offset + 'px';
  updatePageIndicator();
});

prevButton.addEventListener('click', () => {
  offset = offset - slideWidth;
  if (offset < 0) {
    offset = slideWidth * 3;
    currentPage = 4;
  } else {
    currentPage--;
  }
  sliderLine.style.left = -offset + 'px';
  updatePageIndicator();
})

updatePageIndicator();