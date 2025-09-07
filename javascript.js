const mainContainer = document.getElementById('main-container');
const buttonsContainer = document.getElementById('buttons');
const resetButton = document.querySelector('#reset-button');
const squaresPerSideButton = document.querySelector('#squares-per-side');
const info = document.querySelector('#info');
const maxSquares = 100;
const mainContainerHeight = mainContainer.offsetHeight;
buttonsContainer.style.width = mainContainerHeight;

function playGame() {
  // Clear the grid
  while (mainContainer.lastChild) {
    mainContainer.removeChild(mainContainer.lastChild);
  }

  // Get squares per side
  let squaresPerSide = prompt(
    `How many squares per side?
    Max ${maxSquares}
    empty = random`
  );
  if (squaresPerSide > maxSquares) {
    squaresPerSide = maxSquares;
  } else if (squaresPerSide === null || squaresPerSide === '') {
    squaresPerSide = Math.floor(Math.random() * maxSquares + 1);
  }
  info.textContent = `Squares per side: ${squaresPerSide}`;

  // Calculate how many squares needed
  let squaresNeeded = squaresPerSide * squaresPerSide;
  // Populate grid
  for (i = 0; i < squaresNeeded; i++) {
    const square = document.createElement('div');
    square.id = 'grid-square';
    mainContainer.appendChild(square);
  }

  // Get all squares
  const allSquares = document.querySelectorAll('#grid-square');

  // Define size for all squares
  let squareSize = (mainContainerHeight - 2) / squaresPerSide + 'px';
  allSquares.forEach(
    (square) => (
      (square.style.width = squareSize), (square.style.height = squareSize)
    )
  );

  // Implement hover coloring of squares
  function randomRGB() {
    const ranA = Math.floor(Math.random() * 255 + 1);
    const ranB = Math.floor(Math.random() * 255 + 1);
    const ranC = Math.floor(Math.random() * 255 + 1);
    return `rgb(${ranA},${ranB},${ranC})`;
  }
  let startOpacity = 10;
  allSquares.forEach((square) =>
    square.addEventListener('mouseenter', () => {
      if (
        !square.style.backgroundColor ||
        square.style.backgroundColor === 'transparent'
      ) {
        square.style.backgroundColor = randomRGB();
        square.style.opacity = startOpacity + '%';
      } else if (square.style.backgroundColor) {
        let runningOpacity = square.style.opacity * 100;
        if (runningOpacity < 100) {
          runningOpacity += 10;
          square.style.opacity = runningOpacity + '%';
        }
      }
    })
  );

  // Implement Reset and Squares per side buttons
  function reset() {
    allSquares.forEach(
      (square) => (square.style.backgroundColor = 'transparent')
    );
  }
  resetButton.addEventListener('click', reset);
  squaresPerSideButton.addEventListener('click', playGame);
}

playGame();
