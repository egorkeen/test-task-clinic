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
  textInput,
  emailInput
} from './scripts/utils/constants';

import api from './scripts/utils/Api';

let offset = 0;
let currentPage = 1;

function updatePageIndicator() {
  pagesElement.textContent = currentPage;
}

// закрытие попапа
function closePopup () {
  popup.classList.remove('popup_active');
}

// закрытие попапа по кнопке esc
function handleEscClose(event) {
  if (event.key === 'Escape') {
    closePopup();
  };
};

// закрытие попапа по клику вне формы
popup.addEventListener('mousedown', (event) => {
  if (event.target === popup) {
    closePopup();
  };
});

// добавляем слушатель к кнопке открытия модальной формы
showPopupButton.addEventListener('click', () => {
  // очищаем поле с сообщением перед открытием
  document.addEventListener('keydown', handleEscClose);
  textInput.value = '';
  popup.classList.add('popup_active');
});

// следим за закрытием попапа
closePopupButton.addEventListener('click', () => {
  document.removeEventListener('keydown', handleEscClose);
  closePopup();
});

// здесь можно описать запрос к api с отправкой сообщения
modalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userEmail = emailInput.value;
    const message = textInput.value;
    // делаем запрос к серверу
    api.sendMessage(userEmail, message)
    .then(() => {
      // в случае успеха закрываем попап
      popup.classList.remove('popup_active');
    })
    .catch((err) => {
      // отлавливаем ошибку
      console.log(err);
    });
});

// переключаем слайд
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