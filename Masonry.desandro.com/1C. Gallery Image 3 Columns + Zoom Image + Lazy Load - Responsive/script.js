$(function() {
  // Initialisation de Masonry
  var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-item',
    percentPosition: true
  });

  // Cacher les images après la 9ème
  $grid.find('.grid-item:gt(8)').hide();

  // Afficher les images suivantes et mettre à jour le layout de Masonry
  $(document).on('scroll', function() {
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
      $grid.find('.grid-item:hidden:lt(9)').show();
      $grid.masonry('layout');
    }
  });

  // Personnalisation du message de numérotation pour la galerie d'images
  lightbox.option({
    'albumLabel': 'Image %1 sur %2'
  });
});
