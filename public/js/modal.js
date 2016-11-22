function displayModalDialog() {
    var backdrop = document.getElementById('modal-backdrop');
    var modal = document.getElementById('add-category-modal');

    backdrop.classList.remove('hidden');
    modal.classList.remove('hidden');
}

function closeModalDialog() {
    var backdrop = document.getElementById('modal-backdrop');
    var modal = document.getElementById('add-category-modal');

    backdrop.classList.add('hidden');
    modal.classList.add('hidden');

    clearInputValues();
}

function clearInputValues() {
    var inputComponents = document.getElementsByClassName('todo-input-element');

    for (var i = 0; i < inputComponents.length; i++) {
        var input = inputComponents[i].querySelector('input, textarea');
        input.value = '';
    }
}

window.addEventListener('DOMContentLoaded', function(event) {
    var addCategoryItem = document.getElementById('add-category-item');

    if (addCategoryItem) {
        addCategoryItem.addEventListener('click', displayModalDialog);
    }

    var modalCloseButton = document.querySelector('#add-category-modal .modal-close-button');

    if (modalCloseButton) {
        modalCloseButton.addEventListener('click', closeModalDialog);
    }

    var modalCancelButton = document.querySelector('#add-category-modal .modal-cancel-button');

    if (modalCancelButton) {
        modalCancelButton.addEventListener('click', closeModalDialog);
    }
});
