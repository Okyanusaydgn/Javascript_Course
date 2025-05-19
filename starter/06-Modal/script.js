'use strict';

// 🪟 Selecting the modal window
const modal = document.querySelector('.modal');
// 🌫️ Selecting the overlay background
const overlay = document.querySelector('.overlay');
// ❌ Button to close the modal
const btnsCloseModal = document.querySelector('.close-modal');
// 🔘 Buttons that open the modal (returns a NodeList)
const btnsOpenModal = document.querySelectorAll('.show-modal');

// ❌ Function to close the modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// ✅ Function to open the modal
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// 🔁 Loop through all buttons to add click event to open the modal
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

// ❌ Close the modal when close button is clicked
btnsCloseModal.addEventListener('click', closeModal);

// 🌫️ Close the modal when overlay is clicked
overlay.addEventListener('click', closeModal);

// ⌨️ Close the modal when the Escape key is pressed
document.addEventListener('keydown', function (e) {
  console.log(e.key); // 🔍 Log the key that was pressed
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal(); // Only close if modal is currently visible
  }
});
