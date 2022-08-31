document.addEventListener("DOMContentLoaded", () => {
    const hamburgerButton = document.querySelector('#hamburgerMenu');
    const menuCloseButton = document.querySelector('#closeMenuBtn');
    const menu = document.querySelector('#slideOutNav');

    hamburgerButton.addEventListener('click', (e) => {
        menu.classList.add('open');
    });

    menuCloseButton.addEventListener('click', (e) => {
        menu.classList.remove('open');
    })








})