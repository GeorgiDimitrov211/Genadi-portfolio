$(document).ready(function () {
  // Hamburger menu
  var cross = $('.cross');
  var hamburgerBtn = $('.hamburger');
  var html = $('html');

  hamburgerBtn.on('click', function () {
    hamburgerBtn.hide(500);
    cross.delay(350).show(500);
    html.addClass('stop-scrolling');
    $('body, html').bind('touchmove touchstart', function (e) {
      e.preventDefault()
    });
  });

  cross.on('click', function () {
    hamburgerBtn.delay(350).show(500);
    cross.hide(500);
    html.removeClass('stop-scrolling');
    $('body, html').unbind('touchmove touchstart');
  });
  // Slider for projects
  $('.projects-section--slick').slick({
    centerMode: true,
    slidesToShow: 1
  });
    // Slider for certificates
    $('.aboutpage__section2--slick').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      centerMode: true,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true
          }
        }
      ]
    });
  // Slider for testimonials
  $('.testimonials-section--slick').slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  // Modal images 

  // Get the modal
  var modal = $('.skillspage__gallery--modal');

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = $('.skillspage__gallery img');
  var modalImg = $("#skillspage__gallery--modal-content");

  $(img).click(function () {
    modal.css('display', 'block');
    var imageSource = $(this).attr('src');
    modalImg.attr('src', imageSource);
    html.addClass('stop-scrolling');
    $('body, html').bind('touchmove touchstart', function (e) {
      e.preventDefault()
    });
  })

  // Get the <span> element that closes the modal
  var galleryCross = $('.skillspage__gallery--modal-cross');

  // When the user clicks on galleryCross, close the modal
  galleryCross.click(function () {
    modal.css('display', 'none')
        html.removeClass('stop-scrolling');
    $('body, html').unbind('touchmove touchstart');
  });
});