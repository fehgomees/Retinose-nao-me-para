document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById('menu-icon');
    const mainMenu = document.getElementById('main-menu');

    menuIcon.addEventListener('click', function() {
        mainMenu.classList.toggle('active');
    });
});
