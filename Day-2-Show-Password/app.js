const eye = document.getElementById('eyeball');
const passwordInput = document.getElementById('password');


eye.addEventListener('click', e => {
    e.preventDefault();
    document.body.classList.toggle('show-password');
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password'
    passwordInput.focus();
});