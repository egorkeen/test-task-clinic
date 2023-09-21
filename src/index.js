import {
  navigation,
  toggleButton,
  sliderLine,
  slideWidth,
  nextButton,
  prevButton,
  pagesElement,
  showPopupButton,
  popup,
  closePopupButton,
  modalForm,
  textInput
} from './scripts/utils/constants';

let offset = 0;
let currentPage = 1;

function updatePageIndicator() {
  pagesElement.textContent = currentPage;
}

showPopupButton.addEventListener('click', () => {
  // очищаем поле с сообщением перед открытием
  textInput.value = '';
  popup.classList.add('popup_active');
});

closePopupButton.addEventListener('click', () => {
  popup.classList.remove('popup_active');
});

// здесь можно описать запрос к api с отправкой сообщения
modalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert(`Сообщение: ${textInput.value}\nПисьмо отправлено на rbru-metrika@yandex.ru`);
    popup.classList.remove('popup_active');
});

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
});

toggleButton.addEventListener('click', () => {
  navigation.classList.toggle('navigation_visible');
});

updatePageIndicator();