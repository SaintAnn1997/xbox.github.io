const dropdownMenu = () => {
    const menu = document.querySelector('.menu');
    const menuLink = document.querySelectorAll('.menu__list-link');
    const submenu = document.querySelectorAll('.menu__submenu');


    function showMenu(i) {
        submenu[i].style.transform = 'scaleY(1)';
    };

    function hideMenu() {
        submenu.forEach(item => {
            item.style.transform = 'scaleY(0)';
        });
    };

    menu.addEventListener('mouseover', (e) => {
        const target = e.target;

        if (target && target.classList.contains('menu__list-link')) {
            menuLink.forEach((item, i) => {
                if (target === item) {
                    hideMenu();
                    showMenu(i);
                }
            });
        }
    });

    menu.addEventListener('mouseleave', () => {
        hideMenu();
    });


};

export default dropdownMenu;