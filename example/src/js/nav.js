$(document).ready(function() {
  const $burger = $('.header__burger');
  const $nav = $('.header__nav');
  const $header = $('.header');

  // Function to handle burger menu.
  const handleBurgerClick = () => {
    $burger.toggleClass('active');
    $nav.toggleClass('active');
    const isExpanded = $burger.hasClass('active');
    $burger.attr('aria-expanded', isExpanded);
  };

  // Click event for burger menu.
  $burger.on('click', handleBurgerClick);

  // Keydown event for burger menu (accessibility).
  $burger.on('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleBurgerClick();
    }
  });

  // Handle smooth scroll to anchors.
  $('.nav__link, .nav__sublink').on('click', function(e) {
    // Get the href attribute.
    const href = $(this).attr('href');

    // Only handle anchor links.
    if (href.startsWith('#')) {
      e.preventDefault();

      // Get target element.
      const $target = $(href);

      if ($target.length) {
        // Get header height dynamically.
        const headerHeight = $header.outerHeight();

        // Calculate target position considering header height.
        const targetPosition = $target.offset().top - headerHeight;

        // Animate scroll with swing easing.
        $('html, body').animate({
          scrollTop: targetPosition
        }, 800, 'swing');

        // Close mobile menu if open.
        if (window.innerWidth < 1024 && $burger.hasClass('active')) {
          handleBurgerClick();
        }
      }
    }
  });

  // Close menu on window resize if open.
  $(window).on('resize', function() {
    if (window.innerWidth >= 1024 && $burger.hasClass('active')) {
      handleBurgerClick();
    }
  });

  // Handle submenus in mobile.
  if (window.innerWidth < 1024) {
    $('.nav__link').on('click', function(e) {
      const $sublist = $(this).siblings('.nav__sublist');
      if ($sublist.length) {
        e.preventDefault();
        $sublist.slideToggle();
      }
    });
  }
});