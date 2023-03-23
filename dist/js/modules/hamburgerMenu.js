// hamburger menu


function hamburgerMenu () {
    const hamburger = document.querySelector('.promo__hambuger');
    const hamMenu = document.querySelectorAll('.promo__hamItem');
    const parentHamMenu = document.querySelector('.promo__hamMenu');
    const menuClose = document.querySelector('.promo__close');
    const overlay = document.querySelector('.promo__overlay');

    function closeMenu() {
        parentHamMenu.style.display = 'none';
        overlay.style.display = 'none';
    }

    function openMenu() {
        parentHamMenu.style.display = 'block';
        overlay.style.display = 'block';
        
    }

    hamburger.addEventListener('click', openMenu);
    menuClose.addEventListener('click', closeMenu);

    parentHamMenu.addEventListener('click', (e) => {
        const target = e.target;

        if(target && target.classList.contains('promo__hamItem')) {
            hamMenu.forEach((item) => {
                if(target === item) {
                    closeMenu();
                }
            });
        }
    });
      
}

export default hamburgerMenu;


