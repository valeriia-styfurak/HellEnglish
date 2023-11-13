import $ from 'jquery';
import slick from 'slick-carousel';

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  infinite: false,
  asNavFor: '.slider-nav',
  mobileFirst: true,
  prevArrow: $('[data-slick-left]'),
  nextArrow: $('[data-slick-right]'),
});

$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  infinite: false,
  arrows: false,
  dots: false,
  focusOnSelect: true,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 7,
      },
    },
  ],
});
