const mainContainer = document.querySelector('#main-container');
const GRIDSIZE = 16;

for (i = 0; i < GRIDSIZE; i++) {
  const gridSquare = document.createElement('div');
  gridSquare.id = 'grid-square';
  mainContainer.appendChild(gridSquare);
}
