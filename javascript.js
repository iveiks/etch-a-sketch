const mainContainer = document.querySelector('#main-container');
const squaresPerSide = 100;
const gridSize = squaresPerSide * squaresPerSide;
const squaresize = 700 / squaresPerSide + 'px';
console.log(`Grid size: ${squaresPerSide} * ${squaresPerSide}`);
console.log(`Square size: ${squaresize}`);

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
  }
}
makeGrid(gridSize);

const allSquares = document.querySelectorAll('#grid-square');
console.log(`Squares in allSquares NodeList: ${allSquares.length}`);

// Define square size according to squares per side
allSquares.forEach(
  (gridSquare) => (
    (gridSquare.style.width = squaresize),
    (gridSquare.style.height = squaresize)
  )
);

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
