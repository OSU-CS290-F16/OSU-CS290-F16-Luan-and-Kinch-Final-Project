function toLogin() {
    var username = document.getElementById('login-input-username');
    var password = document.getElementById('login-input-password');

    window.location.href = '/' + username.value + ',' + password.value;
}

window.addEventListener('DOMContentLoaded', function(event) {
    var loginButton = document.getElementsByClassName('login-form-login')[0];

    if(loginButton) {
        loginButton.addEventListener('click', toLogin);
    }
});
