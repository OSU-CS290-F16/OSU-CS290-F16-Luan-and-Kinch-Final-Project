function toLogin() {
    var username = document.getElementById('login-input-username').value;
    var password = document.getElementById('login-input-password').value;
    var postURL = '/' + username + '/to-login';
    var postRequest = new XMLHttpRequest();

    postRequest.open('POST', postURL);
    postRequest.setRequestHeader('Content-Type', 'application/json');

    postRequest.addEventListener('load', function(event) {
        if (event.target.status == 200) {
            window.location.href = '/' + username;
        }
    });

    postRequest.send(JSON.stringify({
        username: username,
        password: password
    }));
}

window.addEventListener('DOMContentLoaded', function(event) {
    var loginButton = document.getElementsByClassName('login-form-login')[0];

    if(loginButton) {
        loginButton.addEventListener('click', toLogin);
    }
});
