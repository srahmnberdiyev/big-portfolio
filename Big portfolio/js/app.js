window.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });
    const loader = document.querySelector('.loader');
    setTimeout(() => {
        setTimeout(() => {
            loader.style.display = 'none';
        })
        loader.style.opacity = '0';
    }, 2000);
});