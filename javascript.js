const mainContainer = document.querySelector('#main-container');
const GRIDSIZE = 16;

// Make a square
function makeSquare() {
  const gridSquare = document.createElement('div');
  gridSquare.id = 'grid-square';
  return gridSquare;
}

// Make the grid
function makeGrid(size) {
  for (i = 0; i < size; i++) {
    const gridSquare = makeSquare();
    mainContainer.appendChild(gridSquare);
    console.log('Added a square');
  }
}

makeGrid(GRIDSIZE);

const allSquares = document.querySelectorAll('#grid-square');
console.log(allSquares.length);

// Change square color when hovering over it
allSquares.forEach((gridSquare) =>
  gridSquare.addEventListener('mouseenter', () => {
    gridSquare.style.backgroundColor = 'blue';
  })
);

// Change square color when hovering off of it
allSquares.forEach((gridSquare) =>
  gridSquare.addEventListener('mouseleave', () => {
    gridSquare.style.backgroundColor = 'transparent';
  })
);
