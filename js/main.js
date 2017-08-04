$(function() {

  setTimeout(function() {
    $('.spinner').addClass('spinner-hide');
  }, 600);

  $(window).resize(function() {
    var myWindow = $(window).width();
    if (myWindow < 1200) {
      $('.main-header .nav').addClass('navbar-right');
    }
    if (myWindow > 1200) {
      $('.main-header .nav').removeClass('navbar-right');
    }
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.scroll-up').fadeIn();
      $('.navbar').addClass('navbar-fixed-top');
    } else {
      $('.scroll-up').fadeOut();
      $('.navbar').removeClass('navbar-fixed-top');
    }
  });

  $('.scroll-up').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 900);
    return false;
  });

});
