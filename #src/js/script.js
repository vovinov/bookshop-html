@@include('./jquery.js');
@@include('./slick.min.js');


$(document).ready(function() { 
  
    // Slider - intro
    $('.intro__slider').slick({
      dots: true,
      arrows: false,
      slidesToShow: 1,
      // autoplay: true
    });

     // Slider - best
     $('.best__list').slick({
      arrows: true,
      slidesToShow: 5,
      // autoplay: true
    });
  });
  