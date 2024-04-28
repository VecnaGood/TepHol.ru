
const menu_btn = document.querySelector('.menu_btn');
const header_item = document.querySelector('.header_item');
const menu_btn_item_one = document.querySelector('.menu_btn_item_one');
const menu_btn_item_two = document.querySelector('.menu_btn_item_two');
const menu_btn_item_three = document.querySelector('.menu_btn_item_three');

const header_item_buttone = document.querySelector('.header_item_buttone');
const menu_list = document.querySelector('.menu_list');


const search__buttone = document.querySelector('.search__buttone');
const search_screen = document.querySelector('.search_screen');


const list_btn = document.querySelector('#list_btn');
const list_img = document.querySelector('#list_img');
const Installation_list = document.querySelector('.Installation_list');
//Второе скрытый список
const list_btn_two = document.querySelector('#list_btn_two');
const list_img_two = document.querySelector('#list_img_two');
const Installation_list_two = document.querySelector('.Installation_list_two');
//Третий скрытый список
const list_btn_three = document.querySelector('#list_btn_three');
const list_img_three = document.querySelector('#list_img_three');
const Installation_list_three = document.querySelector('.Installation_list_three');
//Четвертый скрытый список
const list_btn_four = document.querySelector('#list_btn_four');
const list_img_four = document.querySelector('#list_img_four');
const Installation_list_four = document.querySelector('.Installation_list_four');
//Пятый скрытый список
const list_btn_five = document.querySelector('#list_btn_five');
const list_img_five = document.querySelector('#list_img_five');
const Installation_list_five = document.querySelector('.Installation_list_five');



search__buttone.addEventListener('click',()=>{
  search_screen.classList.toggle('buttone__search--active');
});

// Меню бургер
menu_btn.addEventListener('click',()=>{
  header_item.classList.toggle('menu__list--open');
  menu_btn_item_one.classList.toggle('menu_btn_active');
  menu_btn_item_two.classList.toggle('menu_btn_active');
  menu_btn_item_three.classList.toggle('menu_btn_active');
});

// Скрытое меню header
header_item_buttone.addEventListener('click',()=>{
  menu_list.classList.toggle('header__list--open');
});
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

//Скрытые списки

list_btn.addEventListener('click',()=>{
  list_img.classList.toggle('list--img');
  Installation_list.classList.toggle('closs_list--menu');
});

list_btn_two.addEventListener('click',()=>{
  list_img_two.classList.toggle('list--img_two');
  Installation_list_two.classList.toggle('closs_list--menu_two');
});

list_btn_three.addEventListener('click',()=>{
  list_img_three.classList.toggle('list--img_three');
  Installation_list_three.classList.toggle('closs_list--menu_three');
});

list_btn_four.addEventListener('click',()=>{
  list_img_four.classList.toggle('list--img_four');
  Installation_list_four.classList.toggle('closs_list--menu_four');
});

list_btn_five.addEventListener('click',()=>{
  list_img_five.classList.toggle('list--img_five');
  Installation_list_five.classList.toggle('closs_list--menu_five');
});










