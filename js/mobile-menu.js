const modal = document.querySelector('mobile-menu');
const modalBtnOpen = document.querySelector('.menu-button-open');
const modalBtnClose = document.querySelector('.menu-button-close');

const toggleModal = () => modal.classList.toggle('is-open');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);