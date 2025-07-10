$(document).ready(function() {
  // Animate scroll on click.
  $('.scroll-to-top__link').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 800);
  });
});