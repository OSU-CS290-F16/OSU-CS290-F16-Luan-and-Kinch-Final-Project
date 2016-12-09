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

function addNewCategory(name, owner, width, height, description, url) {
    var exhibitionTemplate = Handlebars.templates.exhibition;
    var exhibitionHTML = exhibitionTemplate({
         name: name,
         owner: owner,
         width: width,
         height: height,
         description: description,
         url: url
    });

    return exhibitionHTML;
}

function pullUpdatedImage() {
    var user = document.getElementById('login-user-name').innerHTML;
    user = user.substr(0, user.indexOf('<i class="fa fa-caret-down"></i>'));
    window.location.href = '/' + user;
    // var inputName = document.getElementById('input-name').value || '';
    // var inputOwner = document.getElementById('input-owner').value || '';
    // var inputWidth = document.getElementById('input-width').value || '';
    // var inputHeight = document.getElementById('input-height').value || '';
    // var inputURL = document.getElementById('input-url').value || '';
    // var inputDescription = document.getElementById('input-description').value || '';
    //
    // if(inputDatabase.trim() && inputDirectory.trim() && inputName.trim()) {
    //     var exhibitionHTML = addNewCategory(
    //             inputName.trim(),
    //             inputOwner.trim(),
    //             inputWidth.trim(),
    //             inputHeight.trim(),
    //             inputDescription.trim(),
    //             inputURL.trim()
    //         );
    //     var container = document.querySelector('main');
    //     container.insertAdjacentHTML('beforeend', exhibitionHTML);
    // } else {
    //     alert('WARNING: Please ENTER specific Category and URL of table in database!!!');
    // }
}

function pushNewImage(name, type, owner, width, height, description, url, callback) {
    var postURL = '/' + owner + '/add-image';
    var postRequest = new XMLHttpRequest();

    postRequest.open('POST', postURL);
    postRequest.setRequestHeader('Content-Type', 'application/json');

    postRequest.addEventListener('load', function(event) {
        if (event.target.status == 200) {
            window.location.href='/';
        }
    });

    postRequest.send(JSON.stringify({
        name: name,
        type: type,
        owner: owner,
        width: width,
        height: height,
        description: description,
        url: url
    }));
}

function deleteItem(id) {
    var postURL = '/delete-item';
    var postRequest = new XMLHttpRequest();

    postRequest.open('POST', postURL);
    postRequest.setRequestHeader('Content-Type', 'application/json');
    
    postRequest.addEventListener('load', function(event) {
        if (event.target.status == 200) {
            window.location.href='/';
        }
    });

    postRequest.send(JSON.stringify({
        _id: id
    }));
}

function insertNewImage() {
    var inputName = document.getElementById('input-name').value || '';
    var inputType = document.getElementById('input-type').value || '';
    var inputOwner = document.getElementById('input-owner').value || '';
    var inputWidth = document.getElementById('input-width').value || '';
    var inputHeight = document.getElementById('input-height').value || '';
    var inputURL = document.getElementById('input-url').value || '';
    var inputDescription = document.getElementById('input-description').value || '';

    pushNewImage(inputName, inputType, inputOwner, inputWidth, inputHeight, inputDescription, inputURL, function(err) {
        if (err) {
            alert('Error: \n\n' + err);
        }
    });

    closeModalDialog();
}

window.addEventListener('DOMContentLoaded', function(event) {
    var pushImageButton = document.getElementById('insert-note-button');

    
    if (pushImageButton) {
        pushImageButton.addEventListener('click', displayModalDialog);
    }

    var pullImageButton = document.getElementById('update-note-button');

    if (pullImageButton) {
        pullImageButton.addEventListener('click', pullUpdatedImage);
    }

    var addCategoryItem = document.getElementById('add-category-item');

    if (addCategoryItem) {
        addCategoryItem.addEventListener('click', displayModalDialog);
    }

    var modalAcceptButton = document.querySelector('#add-category-modal .modal-accept-button');

    if (modalAcceptButton) {
        modalAcceptButton.addEventListener('click', insertNewImage);
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
