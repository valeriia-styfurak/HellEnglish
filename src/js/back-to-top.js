import $ from 'jquery';

$(window).on('scroll', function () {
  if (window.scrollY > window.outerHeight) {
    $('#scrollToTop').addClass('active');
    setTimeout(function () {
      var theta =
        ($(window).scrollTop() -
          (window.outerHeight + window.outerHeight / 2)) /
        500;
      $('#scrollToTop').css({ transform: 'rotate(' + theta + 'rad)' });
    });
  } else {
    $('#scrollToTop').removeClass('active');
  }
});

$('#scrollToTop').on('click', function () {
  $('html, body').animate({ scrollTop: 0 }, 500);
});
