var exhibitSection = Handlebars.templates.exhibition;

function generateExhibition() {
    var section = exhibitSection({
        places: [{
            name: 'Name',
            author: 'Author'
        }]
    });

    return section;
}

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
    var container = document.querySelector('main');
    var exhibitionHTML = generateExhibition();

    container.insertAdjacentHTML('beforeend', exhibitionHTML);
    console.log('here');
    var redirectItems = document.getElementsByClassName('redirect-item');

    for(var i = 0; i < redirectItems.length; i ++) {
        redirectItems[i].addEventListener('click', redirectWebpage);
    }
});
