//Header Tabs

let tabs = document.querySelectorAll('.promo__item');
let tabsParent = document.querySelector('.promo__items');

function hideHeadersTabs() {
    tabs.forEach(item => {
        item.classList.remove('promo__item_active');
    })
}

function showHeaderTabs(i=0) {
    tabs[i].classList.add('promo__item_active');
}

function headerTabs() {
    showHeaderTabs();
    hideHeadersTabs();

    tabsParent.addEventListener('click', function(event) {
        const target = event.target;

        if(target && target.classList.contains('promo__item')) {
            tabs.forEach((item,i) => {
                if(target === item) {
                    hideHeadersTabs();
                    showHeaderTabs(i);
                }
            });
        }
    });
}

export default headerTabs;
