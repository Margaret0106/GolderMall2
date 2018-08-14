'use strict';

// import Inputmask from "inputmask";

$(document).ready(function () {

  $('a.local-scroll').on('click', function (e) {
    e.preventDefault();
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  })

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


  $('.panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.panel-heading').addClass('active');
  });

  $('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('active');
  });


  // Instantiate a slider

  let sliderRange, mySlider;

  mySlider = $("input.slider").slider({
    range: true,
    tooltip: 'hide'
  });


  if ($("input.slider").length > 0) {

    sliderRange = mySlider.slider('getValue')
    let min_rent = $("input.slider").data('slider-min'),
      max_rent = $("input.slider").data('slider-max')

    mySlider.on('change', function () {
      let sliderRange = mySlider.slider('getValue');
      $('.min-range-js').val(sliderRange[0]);
      $('.max-range-js').val(sliderRange[1]);

    }).change();


    $('.min-range-js').on('change', function () {
      let minVal = parseInt($(this).val());
      let maxVal = parseInt($('.max-range-js').val());
      minVal = Math.max(min_rent, minVal);
      minVal = Math.min(minVal, maxVal);
      $(this).val(minVal);

      mySlider.slider('setValue', [minVal, maxVal]);
    })

    $('.max-range-js').on('change', function () {
      let maxVal = parseInt($(this).val());
      let minVal = parseInt($('.min-range-js').val());
      maxVal = Math.max(minVal, maxVal);
      maxVal = Math.min(maxVal, max_rent);
      $(this).val(maxVal);
      mySlider.slider('setValue', [minVal, maxVal])
    })


  }



  $('.sidebar-toggle a').on('click', function (e) {
    e.preventDefault();
    let sidebar = $(this).closest('.sidebar')
    sidebar.find('.filters').slideToggle();
    sidebar.toggleClass('closed');
    if (sidebar.hasClass('closed')) {
      $(this).siblings('span').html('Показать фильтр')
    } else {
      $(this).siblings('span').html('Скрыть фильтр')
    }
  })


  $('#my-slider').sliderPro({
    responsive: true,
    autoHeight: true,
    thumbnailArrows: true,
    thumbnailsPosition: 'bottom',
    buttons: false,
    fadeThumbnailArrows: false,
    autoplay: false,
    // imageScaleMode: 'contain',  
    // thumbnailTouchSwipe: true
  });



  // This button will increment the value
  $('.qtyplus').click(function (e) {
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    var fieldName = $(this).attr('field');
    // Get its current value
    var currentVal = parseInt($(this).parent().find('input[name=' + fieldName + ']').val());
    // If is not undefined
    if (!isNaN(currentVal)) {


      $(this).parent().find('input[name=' + fieldName + ']').val(currentVal + 1);
      $(this).parent().find('.qtyminus').val("-").removeAttr('style');


    } else {
      // Otherwise put a 0 there
      $(this).parent().find('input[name=' + fieldName + ']').val(1);

    }
  });
  // This button will decrement the value till 0
  $(".qtyminus").click(function (e) {
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    var fieldName = $(this).attr('field');
    // Get its current value
    var currentVal = parseInt($(this).parent().find('input[name=' + fieldName + ']').val());
    // If it isn't undefined or its greater than 0
    if (!isNaN(currentVal) && currentVal > 1) {
      // Decrement one only if value is > 1
      $(this).parent().find('input[name=' + fieldName + ']').val(currentVal - 1);
      $(this).parent().find('.qtyplus').val("+").removeAttr('style');
    } else {
      // Otherwise put a 0 there
      $(this).parent().find('input[name=' + fieldName + ']').val(1);
      $(this).parent().find('.qtyminus').val("-").css('color', '#aaa');
      $(this).parent().find('.qtyminus').val("-").css('cursor', 'not-allowed');
    }
  });

  $('.datepicker input').datetimepicker({
    format: 'L',
    locale: 'ru',
    minDate: new Date()
  });

  let $mobileLink = $('.mobile-menu--child>li.has-child:not(.dropdown-show)>a');
  $mobileLink.on('click', function (e) {
    e.preventDefault();
    $('.main-mobile-container').addClass('active');
    $(this).closest('.has-child').addClass('dropdown-show');
    $('.mobile-menu').addClass('white');
    $('.mobile-back').show();
    $('.mobile-back').addClass('step1');
    console.log(1)
  })
  let $mobileChildLink = $('.mobile-submenu>li.has-child:not(.dropdown-show)>a');
  $mobileChildLink.on('click', function (e) {
    e.preventDefault();
    $(this).closest('.mobile-submenu').addClass('active');
    $('.has-child.dropdown-show').addClass('active');
    $(this).closest('.has-child').addClass('dropdown-show');
    $('.mobile-back').removeClass('step1');
    $('.mobile-back').addClass('step2');
    console.log(2)
  })

  let $backLink = $('.mobile-back a');
  $backLink.on('click', function (e) {
    e.preventDefault();
    if ($('.step1').length > 0) {
      $('.main-mobile-container').removeClass('active');
      $('.has-child').removeClass('dropdown-show');
      $('.mobile-menu').removeClass('white');
      $('.mobile-back').hide();
      $('.mobile-back').removeClass('step1');
      console.log('.step1')
    }
    else if ($('.step2').length > 0) {
      $('.main-mobile-container').addClass('active');
      $('.mobile-submenu').removeClass('active');
      $('.has-child.dropdown-show').removeClass('active');
      $('.mobile-submenu .has-child.dropdown-show').removeClass('dropdown-show');      
      $('.mobile-back').removeClass('step2');
      $('.mobile-back').addClass('step1');
      console.log('.step2')
    }
    console.log($backLink.hasClass('step1'))
  })

  $('.dropdown-show a').on('click', function (e) {
    e.preventDefault();

    console.log(3)
  })

  $('.mobile-menu-link').on('click', function(e) {
    e.preventDefault();
    $('.mobile-menu').toggleClass('open');
    $('html, body').toggleClass('menu-open');
    $('.menu-overlay').toggleClass('open');
  })

  $('.menu-overlay').on('click', function(e) {
    e.preventDefault();
    $('.mobile-menu').removeClass('open');
    $('html, body').removeClass('menu-open');
    $('.menu-overlay').removeClass('open');
  })

  $('.show-rekvizit').on('click', function(e) {
    e.preventDefault();
    $(this).next('.rekvizit-block').slideToggle();
  })



});