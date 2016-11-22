function redirectWebpage(event) {
    var name = event.target.name;

    switch(name) {
        case 'home':
            window.location.href = '/';
            break;
        case 'login':
            break;
    }
}

window.addEventListener('DOMContentLoaded', function(event) {
    var redirectItems = document.getElementsByClassName('redirect-item');

    for(var i = 0; i < redirectItems.length; i ++) {
        if(redirectItems[i]) {
            redirectItems[i].addEventListener('click', redirectWebpage);
        }
    }
});
