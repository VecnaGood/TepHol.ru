// const icon = document.querySelector('.icon');
// const search = document.querySelector('.search');
// const clear = document.querySelector('.clear');
const menu_btn = document.querySelector('.menu_btn');
const header_item = document.querySelector('.header_item');
const search__buttone = document.querySelector('.search__buttone');
const search_screen = document.querySelector('.search_screen');


search__buttone.addEventListener('click',()=>{
  search_screen.classList.toggle('buttone__search--active');
});
// Меню бургер
menu_btn.addEventListener('click',()=>{
  header_item.classList.toggle('menu__list--open');
});
// Поиск
// icon.onclick = function(){
//   search.classList.toggle('active')
// }
// // Поиск
// clear.onclick = function(){
//   document.getElementById('mySearch').value = '';
 
// }

// Слайдер
var swiper = new Swiper(".mySwiper",{
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-left",
      prevEl: ".swiper-button-right",
    },
    pagination: {
      el: ".swiper-pagination",
    },
});

// Популярыне
var swiper = new Swiper(".mySwiper_Popular", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-left",
    prevEl: ".swiper-button-right",
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    400: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});
//  Партнерс
var swiper = new Swiper(".mySwiper_Partners", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-left",
    prevEl: ".swiper-button-right",
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    360: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

