const passwordInput = document.querySelector('#password-2');
const showPasswordButton = document.querySelector('#showPasswordButton');

showPasswordButton.addEventListener('click', function () {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
    
})