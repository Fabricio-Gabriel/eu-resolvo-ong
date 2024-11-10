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

