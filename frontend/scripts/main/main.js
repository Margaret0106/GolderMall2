'use strict';

// import Inputmask from "inputmask";

$(document).ready(function () {

  $('select').selectpicker({
    size: 4
  });

  // Inputmask('999 9 9 9 9').mask('.tel-input');

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
    navigation: {
      nextEl: '.liders-catalog .swiper-button-next',
      prevEl: '.liders-catalog .swiper-button-prev',
    },
    breakpoints: {
      // when window width is <= 320px
      320: {
        // slidesPerView: 1,
        // spaceBetween: 10
      },
      // when window width is <= 480px
      560: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 8
      },
      750: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 8
      },
      // when window width is <= 640px
      991: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 8
      },
      // when window width is <= 1440px
      1280: {
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
    navigation: {
      nextEl: '.news-catalog .swiper-button-next',
      prevEl: '.news-catalog .swiper-button-prev',
    },
    breakpoints: {
      // when window width is <= 320px
      320: {
        // slidesPerView: 1,
        // spaceBetween: 10
      },
      // when window width is <= 480px
      560: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 8
      },
      // when window width is <= 640px
      750: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 8
      },
      // when window width is <= 1440px
      991: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 8
      },
      // when window width is <= 1440px
      1280: {
        slidesPerView: 5,
        slidesPerGroup: 5,
        spaceBetween: 8
      }
    }
  });

  $('body').on('click', '.next-modal', function (e) {
    e.preventDefault();
    let nextModal = $(this).data('target');
    console.log(nextModal);
    $(this).closest('.modal').modal('hide');
    setTimeout(function () {
      $(nextModal).modal('show');
    }, 500)
  })

});