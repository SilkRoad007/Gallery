var grid = document.querySelector('.grid');
var masonry = new Masonry(grid, {
  itemSelector: '.grid-item',
  columnWidth: '.grid-item',
  percentPosition: true
});

lightbox.option({
  'showImageNumberLabel': false,
  'wrapAround': true,
  'alwaysShowNavOnTouchDevices': true,
  'fadeDuration': 300,
  'imageFadeDuration': 300,
  'resizeDuration': 300
});