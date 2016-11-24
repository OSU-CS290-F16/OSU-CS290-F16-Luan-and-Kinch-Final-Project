function redirectWebpage(event) {
    var name = event.target.name;

    switch(name) {
        case 'home-btn':
            window.location.href = '/';
            break;
        case 'home-item':
            window.location.href = '/';
            break;
        case 'about-item':
            window.location.href = '/about';
            break;
        case 'login-btn':
            window.location.href = '/login';
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

    var loginButton = document.querySelector('.login-form .login-form-login');
    
    if(loginButton) {
        loginButton.addEventListener('click', function() {
            window.location.href = '#';
        });
    }

    var cancelButton = document.querySelector('.login-form .login-form-cancel');

    if(cancelButton) {
        cancelButton.addEventListener('click', function() {
            window.location.href = '/';
        });
    }
});
