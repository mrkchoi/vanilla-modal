/******************** 
VARIABLES 
********************/

// Set DOM variables
let btnMain = document.querySelector('.btn__main'),
    btnCloseModal = document.querySelector('.btn__modal'),
    modal = document.querySelector('.modal');
    modalBackground = document.querySelector('.modal__background');

/******************** 
EVENT LISTENERS
********************/
// Add event listener for main button
btnMain.addEventListener('click', openModal);
// Add event listener for modal close button
btnCloseModal.addEventListener('click', closeModal);
// Add event listener for off-modal click to close
window.addEventListener('click', function(e) {
    if(e.target.className === 'modal__background') {
        closeModal();
    }
});

/******************** 
FUNCTIONS
********************/
// Open modal
function openModal() {
    // Show the modal
    modal.style.opacity = '1';
    modal.style.transform = 'translate(-50%, -50%) scale(1)';
    modal.style.visibility = 'visible';

    // Show the modal background
    modalBackground.style.opacity = '1';
    modalBackground.style.visibility = 'visible';
}

// Close modal
function closeModal() {
    // Hide the modal
    modal.style.opacity = '0';
    modal.style.transform = 'translate(-50%, -50%) scale(.7)';
    modal.style.visibility = 'hidden';

    // Hide the modal background
    modalBackground.style.opacity = '0';
    modalBackground.style.visibility = 'hidden';
}

