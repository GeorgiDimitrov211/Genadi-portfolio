$(document).ready(function () {
  // Hamburger menu
  var cross = $('.cross');
  var hamburgerBtn = $('.hamburger');

  hamburgerBtn.on('click', function () {
    hamburgerBtn.hide(500);
    cross.delay(350).show(500);
  });

  cross.on('click', function () {
    hamburgerBtn.delay(350).show(500);
    cross.hide(500);
  });
  // Slider for projects
  $('.projects-section--slick, .aboutpage__section2--slick').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [{
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
  // Slider for testimonials and certificates
  $('.testimonials-section--slick').slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});