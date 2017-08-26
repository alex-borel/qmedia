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

  $('#date').click(function() {
    $('#myDate').datepicker();
  });

});

var myButton = document.getElementById('myButton');
var myModal = document.querySelector('.modal-window');
var myLayer = document.querySelector('.modal-layer');
var myClose = document.querySelector('.modal-window i');
var myForm = document.getElementById('myForm');
var myMessage = document.querySelector('.modal-message');
var closeMessage = document.querySelector('.modal-message i');

myButton.addEventListener('click', function(event) {
  event.preventDefault();
  myModal.classList.add('modal-show');
  myLayer.classList.add('layer-show');
});

myClose.addEventListener('click', function() {
  myModal.classList.remove('modal-show');
  myLayer.classList.remove('layer-show');
});

myForm.addEventListener('submit', function(event) {
  event.preventDefault();
  myModal.classList.remove('modal-show');
  myMessage.classList.add('modal-show');
});

closeMessage.addEventListener('click', function() {
  myMessage.classList.remove('modal-show');
  myLayer.classList.remove('layer-show');
});

window.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    myModal.classList.remove('modal-show');
    myLayer.classList.remove('layer-show');
    myMessage.classList.remove('modal-show');
  }
});
