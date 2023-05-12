var grid = document.querySelector('.grid');
var masonry = new Masonry(grid, {
  itemSelector: '.grid-item',
  columnWidth: '.grid-item',
  percentPosition: true
});
