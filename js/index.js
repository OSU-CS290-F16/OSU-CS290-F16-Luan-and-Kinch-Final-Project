function displayContents() {
    var mainBox = document.getElementById('main-container');

    for (var i = 0; i < 4; i ++) {
        var contatiner = createMainSection(mainBox);

        for (var j = 0; j < 3; j ++) {
            createSectionTable(contatiner, i % 2 == 0);
        }
    }
}

function createMainSection(box, flag) {
    var section = document.createElement('section');
    section.setAttribute('id', 'main-container');
    box.appendChild(section);

    var container = document.createElement('div');
    container.setAttribute('class', 'main-section-container');
    section.appendChild(container);

    return container;
}

function createSectionTable(container, flag) {
    var section = document.createElement('section');
    section.setAttribute('class', 'main-content-section');

    if (flag) {
        section.style.backgroundColor = '#303030';
        section.style.borderColor = 'ghostwhite';
    } else {
        section.style.backgroundColor = 'ghostwhite';
        section.style.borderColor = '#303030';
    }

    container.appendChild(section);
}
