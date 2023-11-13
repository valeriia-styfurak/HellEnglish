const body = document.querySelector('body');
const modal = document.querySelector('#modal');
const modalOverlay = document.querySelector('#modal-overlay');
const closeButton = document.querySelector('#close-button');
const openButton = document.querySelector('#open-button');

const toggleModal = function () {
  modal.classList.toggle('closed');
  modalOverlay.classList.toggle('closed');
  body.classList.toggle('overflow-hidden');
};

closeButton.addEventListener('click', toggleModal);
modalOverlay.addEventListener('click', toggleModal);
openButton.addEventListener('click', toggleModal);
