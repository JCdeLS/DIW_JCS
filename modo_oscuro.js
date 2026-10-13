const toggleBtn = document.getElementById('cambiar-tema');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});