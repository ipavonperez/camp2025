$(document).ready(function() {
  // Create dialog element dynamically when needed.
  function createDialog(imgSrc, imgAlt) {
    const dialogHtml = `
      <dialog class="lightbox">
        <button class="lightbox__close" aria-label="Close image">×</button>
        <div class="lightbox__content">
          <img class="lightbox__image" src="${imgSrc}" alt="${imgAlt}">
        </div>
      </dialog>
    `;
    $('body').append(dialogHtml);
    return $('.lightbox')[0];
  }

  // Open lightbox when clicking on a grid image.
  $('.image-grid__item').click(function() {
    const imgSrc = $(this).attr('src');
    const imgAlt = $(this).attr('alt');

    const $dialog = createDialog(imgSrc, imgAlt);
    $dialog.showModal();
    $('body').css('overflow', 'hidden'); // Prevent scroll.

    // Close lightbox function.
    function closeLightbox() {
      $dialog.close();
      $('body').css('overflow', '');
      // Remove dialog from DOM after closing animation.
      setTimeout(() => {
        $($dialog).remove();
      }, 300);
    }

    // Close events.
    $('.lightbox__close').click(closeLightbox);
    $($dialog).click(function(e) {
      if (e.target === this) {
        closeLightbox();
      }
    });

    // Handle ESC key (native dialog behavior).
    $($dialog).on('cancel', function(e) {
      e.preventDefault(); // Prevent default dialog behavior.
      closeLightbox();
    });
  });
});