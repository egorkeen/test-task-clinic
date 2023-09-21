const navigation = document.querySelector('.navigation');
const toggleButton = document.getElementById('header__toggle');
const sliderLine = document.querySelector('.services__slider-line');
const slideWidth = document.querySelector('.slide').offsetWidth;
const nextButton = document.querySelector('.services__button_next')
const prevButton = document.querySelector('.services__button_prev');
const pagesElement = document.querySelector('.services__pages');
const showPopupButton = document.getElementById('show-popup');
const popup = document.getElementById('popup');
const closePopupButton = document.getElementById('close-popup');
const modalForm = document.forms['modal-form'];
const textInput = document.getElementById('message');

export {
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
};