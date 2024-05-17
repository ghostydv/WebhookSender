document.querySelectorAll('.subscribe-btn').forEach(button => {
    button.addEventListener('click', () => {
        button.textContent = 'Suscrito!';
        button.style.backgroundColor = '#5cb85c';
        button.style.cursor = 'default';
        setTimeout(() => {
            button.textContent = '¡Gracias!';
        }, 1000);
    });
});
