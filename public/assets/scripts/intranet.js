document.addEventListener('DOMContentLoaded', function () {
    const talkButton = document.querySelector('.buttons-grid button:first-child');

    talkButton.addEventListener('click', function () {
        alert('¡Hola! Estoy aquí para escucharte.');
    });
});
