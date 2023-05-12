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
  $(document).on('click', '#load-more', function() {
    $grid.find('.grid-item:hidden:lt(9)').show();
    $grid.masonry('layout');
    
    // Masquer le bouton "Voir plus" si toutes les images ont été chargées
    if ($grid.find('.grid-item:hidden').length === 0) {
      $('#load-more').hide();
    }
  });

  // Personnalisation du message de numérotation pour la galerie d'images
  lightbox.option({
    'albumLabel': 'Image %1 sur %2'
  });
});
