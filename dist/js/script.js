import cardsMitClients from './modules/cardsMitClients';
import { postData, getResource, bindPostData } from './services/json-server';
import formPost from './modules/forms';
import hamburgerMenu from './modules/hamburgerMenu';
import headerTabs from './modules/headerTabs';
import modalWindow from './modules/modal';
import priceSlider from './modules/priceSlider';
import initializeSlider from './modules/slider';

window.addEventListener('DOMContentLoaded', function(){

    cardsMitClients();
    formPost('#firstform');
    hamburgerMenu();
    headerTabs();
    modalWindow();
    priceSlider();
    initializeSlider({
        photoAll: '.request__photo',
        kommaAll: '.request__pointe',
        komaBox: '.request__pointBox',
        photoAktive: 'request__photo_active',
        kommaAktive: 'request__pointe_active'
    });

});

