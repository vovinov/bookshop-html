@@include('./jquery.js');
@@include('./slick.min.js');
@@include('./isotope.min.js');


$(document).ready(function() { 
  
  // Slider - intro ---------------------------------------------
  $('.intro__slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    // autoplay: true
  });

    // Slider - best -------------------------------------------
    $('.best__list').slick({
    arrows: true,
    slidesToShow: 5,
    // autoplay: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 976,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 479.98,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  // Featured Filter -------------------------------------------
  const elem = document.querySelector('.featured__list');
  const iso = new Isotope( elem, {
    itemSelector: '.featured__item',
    percentPosition: true,
    masonry: {
      columnWidth: '.featured__item'
    }
  });
  
  var filtersElem = document.querySelector('.nav-featured');
  filtersElem.addEventListener( 'click', function( event ) {
    if ( !matchesSelector( event.target, 'button' ) ) {
      return;
    }
    var filterValue = event.target.getAttribute('data-filter');
    iso.arrange({ filter: filterValue });

    document.querySelector(".nav-featured__button--active").classList.remove("nav-featured__button--active");
    event.target.classList.add("nav-featured__button--active");
  });
  
});
  