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
  
  var filtersElem = document.querySelector('.featured__navigation');
  filtersElem.addEventListener( 'click', function( event ) {
    if ( !matchesSelector( event.target, 'button' ) ) {
      return;
    }
    var filterValue = event.target.getAttribute('data-filter');
    iso.arrange({ filter: filterValue });

    document.querySelector(".navigation__button--active").classList.remove("navigation__button--active");
    event.target.classList.add("navigation__button--active");
  });

  // Slider - deals -------------------------------------------
  $('.deals__list').slick({
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true
  })
  // Slider - biography -------------------------------------------
  $('.biography__list').slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true
  });

  // Slider - authors -------------------------------------------
  $('.authors__list').slick({
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false
  });
  
});
  