@@include('./jquery.js');
@@include('./slick.min.js');


$(document).ready(function() { 
  
    // Slider - works
    $('.intro__slider').slick({
      dots: true,
      arrows: false,
      slidesToShow: 1,
      // autoplay: true
    });
  });
  