"use strict"

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import './assets/css/style.css';

console.log("inicializando swiper");
const swiper = new Swiper(".swiper", {
    autoplay: {
        delay: 6000,
        disableOnInteraction: false
    },
    slidesPerView: 1,
    loop: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },

    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next"
    },

    grabCursor: true,
    effect: "fade", 
    fadeEffect: {
        crossFade: true
    }
});


// Algorito de alteração de data de acordo com o ano
let div = document.querySelector(".copyright");
let data = new Date().getFullYear();

if(data < 2024) {
    div.innerHTML = `Copyright © 2024. Todos os direitos reservados Eu Resolvo-ONG.`;
} else {
    div.innerHTML = `Copyright © ${data}. Todos os direitos reservados Eu Resolvo-ONG.`;
}
