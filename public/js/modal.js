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

function addNewCategory(data, url, name, owner, description) {
    var exhibitionTemplate = Handlebars.templates.exhibition;
    var exhibitionHTML = exhibitionTemplate({
         data: data,
         url: url,
         name: name,
         owner: owner,
         //width: width,
         //height: height,
         description: description
    });
    var generateHTML = '<div class="exhibition-container">'
                    + '<div class="category-title">' + data + '</div>'
                    + '<div class="">' + exhibitionHTML + '</div>';
                    + '</div>'
    return generateHTML;
}

function acceptInputValues() {
    var inputDatabase = document.getElementById('todo-input-category').value || '';
    var inputDirectory = document.getElementById('todo-input-url').value || '';
    
    var inputName = document.getElementById('input-name').value || '';
    var inputOwner = document.getElementById('input-owner').value || '';
    var inputDescription = document.getElementById('input-description').value || '';

    if(inputDatabase.trim() && inputDirectory.trim() && inputName.trim()) {
        var exhibitionHTML = addNewCategory(
            inputDatabase.trim(),
            inputDirectory.trim(),
            inputName.trim(),
            inputOwner.trim(),
            inputDescription.trim()
            );
        var container = document.querySelector('main');
        container.insertAdjacentHTML('beforeend', exhibitionHTML);

        closeModalDialog();
    } else {
        alert('WARNING: Please ENTER specific Category and URL of table in database!!!');
    }
}

window.addEventListener('DOMContentLoaded', function(event) {
    var addCategoryItem = document.getElementById('add-category-item');

    if (addCategoryItem) {
        addCategoryItem.addEventListener('click', displayModalDialog);
    }

    var modalAcceptButton = document.querySelector('#add-category-modal .modal-accept-button');

    if (modalAcceptButton) {
        modalAcceptButton.addEventListener('click', acceptInputValues);
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
