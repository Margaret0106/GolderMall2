'use strict';

import myModule from './module-to-import';

$(document).ready(function () {

  $('.selectpicker').selectpicker({
    size: 4
  });

  var mySwiper = new Swiper ('.main-slider .swiper-container', {

    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

  })

  var swiper = new Swiper('.catalog-slider .swiper-container', {
    slidesPerView: 6,
    slidesPerGroup: 6,
    slidesPerColumn: 2,
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // imported module
  myModule('myModule');
});