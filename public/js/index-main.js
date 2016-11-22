// function displayContents() {
//     var box = document.getElementById('index-main-container');
//
//     for (var i = 0; i < 4; i ++) {
//         var contatiner = createSectionContainer(box, i + 1);
//
//         for (var j = 0; j < 3; j ++) {
//             createSectionItem(contatiner, i % 2 == 0);
//         }
//     }
// }
//
// function createSectionContainer(box, title) {
//     var section = document.createElement('section');
//     box.appendChild(section);
//
//     var container = document.createElement('div');
//     container.setAttribute('class', 'main-section-container');
//     section.appendChild(container);
//
//     var header = document.createElement('div');
//     header.innerHTML = 'Category ' + title;
//     header.setAttribute('class', 'section-title');
//     header.style.textAlign = (title % 2 == 0) ? 'right' : 'left';
//     header.style.color = (title % 2 == 0) ? 'ghostwhite' : '#303030';
//     container.appendChild(header);
//
//     return container;
// }
//
// function createSectionItem(container, flag) {
//     var section = document.createElement('section');
//     section.setAttribute('class', 'main-content-section');
//
//     if (flag) {
//         section.style.backgroundColor = '#303030';
//         section.style.borderColor = 'ghostwhite';
//     } else {
//         section.style.backgroundColor = 'ghostwhite';
//         section.style.borderColor = '#303030';
//     }
//
//     container.appendChild(section);
// }

function redirectWebpage(event) {
    var name = event.target.name;

    switch(name) {
        case 'home':
            window.location.href = '/';
            break;
        case 'about':
            window.location.href = '/about';
    }
}

window.addEventListener('DOMContentLoaded', function(event) {
    var redirectItems = document.getElementsByClassName('redirect-item');

    for(var i = 0; i < redirectItems.length; i ++) {
        redirectItems[i].addEventListener('click', redirectWebpage);
    }
});
