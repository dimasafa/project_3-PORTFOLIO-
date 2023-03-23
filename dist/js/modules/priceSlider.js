//Price Slider


function priceSlider () {
    let priceParent = document.querySelector('.price__wrapper');
    let priceBox = document.querySelectorAll('.price__box');
    let priceBoxTitle = document.querySelectorAll('.price__box__title');
    let priceBoxSum = document.querySelectorAll('.price__box__sum');
    let priceBoxMonth = document.querySelectorAll('.price__box__per_month');
    let priceBoxLine1 = document.querySelectorAll('.price__box__line-1');
    let priceBoxLine2 = document.querySelectorAll('.price__box__line-2');
    let priceBoxLine3 = document.querySelectorAll('.price__box__line-3');
    
    let priceBoxText1 = document.querySelectorAll('.price__box__text-1');
    let priceBoxText2 = document.querySelectorAll('.price__box__text-2');
    let priceBoxText3 = document.querySelectorAll('.price__box__text-3');
    
    
    
    function hidePrice() {
    
        priceBox.forEach(item => {
            item.classList.remove('price__box_active');
        });
    
        priceBoxTitle.forEach(item => {
            item.classList.remove('price__box__title_active');
        });
    
        priceBoxSum.forEach(item => {
            item.classList.remove('price__box__sum_active');
        });
    
        priceBoxMonth.forEach(item => {
            item.classList.remove('price__box__per_month_active');
        });
    
        priceBoxLine1.forEach(item => {
            item.classList.remove('price__box__line-1_active');
        });
    
        priceBoxLine2.forEach(item => {
            item.classList.remove('price__box__line-2_active');
        });
    
        priceBoxLine3.forEach(item => {
            item.classList.remove('price__box__line-3_active');
        });
    
        priceBoxText1.forEach(item => {
            item.classList.remove('price__box__text-1_active');
        });
    
        priceBoxText2.forEach(item => {
            item.classList.remove('price__box__text-2_active');
        });
    
        priceBoxText3.forEach(item => {
            item.classList.remove('price__box__text-3_active');
        });
    };
    
    function showPrice(i=1) {
    
        priceBox[i].classList.add('price__box_active');
        priceBoxTitle[i].classList.add('price__box__title_active');
        priceBoxSum[i].classList.add('price__box__sum_active');
        priceBoxMonth[i].classList.add('price__box__per_month_active');
        priceBoxLine1[i].classList.add('price__box__line-1_active');
        priceBoxLine2[i].classList.add('price__box__line-2_active');
        priceBoxLine3[i].classList.add('price__box__line-3_active');
    
    
        priceBoxText1[i].classList.add('price__box__text-1_active');
        priceBoxText2[i].classList.add('price__box__text-2_active');
        priceBoxText3[i].classList.add('price__box__text-3_active');
    }
    
    hidePrice();
    showPrice();
    
    
    
    priceParent.addEventListener('click', function(event) {
        const target = event.target;
    
        if(target && target.classList.contains('price__box')) {
            priceBox.forEach((item, i) => {
                if(target === item) {
                    hidePrice();
                    showPrice(i);
                }
            });
        }
    })
}

export default priceSlider;