'use strict';

import myModule from './module-to-import';

$(document).ready(function () {

  $('.selectpicker').selectpicker({
    size: 4
  });

  var mySwiper = new Swiper('.main-slider .swiper-container', {
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    autoplay: {
      delay: 3000,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    }
  })

  var swiperLider = new Swiper('.liders-catalog .catalog-slider .swiper-container', {
    slidesPerView: 6,
    slidesPerGroup: 6,
    slidesPerColumn: 2,
    spaceBetween: 16,
    pagination: {
      el: '.liders-catalog .swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      // when window width is <= 320px
      320: {
        // slidesPerView: 1,
        // spaceBetween: 10
      },
      // when window width is <= 480px
      480: {
        // slidesPerView: 2,
        // spaceBetween: 20
      },
      // when window width is <= 640px
      640: {
        // slidesPerView: 3,
        // spaceBetween: 30
      },
      // when window width is <= 1440px
      1440: {
        slidesPerView: 5,
        slidesPerGroup: 5,
        spaceBetween: 8
      }
    }
  });

  var swiperNew = new Swiper('.news-catalog .catalog-slider .swiper-container', {
    slidesPerView: 6,
    slidesPerGroup: 6,
    slidesPerColumn: 2,
    spaceBetween: 16,
    pagination: {
      el: '.news-catalog .swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      // when window width is <= 320px
      320: {
        // slidesPerView: 1,
        // spaceBetween: 10
      },
      // when window width is <= 480px
      480: {
        // slidesPerView: 2,
        // spaceBetween: 20
      },
      // when window width is <= 640px
      640: {
        // slidesPerView: 3,
        // spaceBetween: 30
      },
      // when window width is <= 1440px
      1440: {
        slidesPerView: 5,
        slidesPerGroup: 5,
        spaceBetween: 8
      }
    }
  });

  // imported module
  myModule('myModule');
});