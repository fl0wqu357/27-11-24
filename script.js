const form = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        errorMessage.textContent = 'Por favor, ingresa tanto usuario como contraseña.';
        return;
    }

    if (username === 'admin' && password === '12345') {
        alert('¡Bienvenido!');
    } else {
        errorMessage.textContent = 'Credenciales incorrectas. Intenta nuevamente.';
    }
});
