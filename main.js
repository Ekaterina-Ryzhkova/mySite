$(document).ready(function(){
    $('.slider__in').slick({
     arrows: false,
     dots: true,
    });

    $('.works__inner').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: '<button class="slick-arrow slick-prev"><img src="images/slider/prevarr.png" alt=""></button>',
      nextArrow: '<button class="slick-arrow slick-next"><img src="images/slider/nextarr.png" alt=""></button>',
    });
  });