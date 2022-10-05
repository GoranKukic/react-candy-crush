import React, { useEffect, useState } from 'react';
import ScoreBoard from './components/ScoreBoard';
import blueCandy from './images/blue-candy.png';
import greenCandy from './images/green-candy.png';
import purpleCandy from './images/purple-candy.png';
import orangeCandy from './images/orange-candy.png';
import redCandy from './images/red-candy.png';
import yellowCandy from './images/yellow-candy.png';
import blank from './images/blank.png';

const width = 8;
const candyColors = [
  blueCandy,
  greenCandy,
  orangeCandy,
  purpleCandy,
  redCandy,
  yellowCandy,
];

function App() {
  const [currentColorArrangement, setCurrentColorArrangement] = useState([]);
  const [squareBeingDraged, setSquareBeingDraged] = useState(null);
  const [squareBeingReplaced, setSquareBeingReplaced] = useState(null);
  const [scoreDisplay, setScoreDisplay] = useState(0);

  //Check is there match of four squares in column
  const checkForColumnOfFour = () => {
    for (let i = 0; i <= 39; i++) {
      const columnOfFour = [i, i + width, i + width * 2, i + width * 3]; //checks index 0, 8, 16, 24  (1,9,17,25)
      const decidedColor = currentColorArrangement[i];
      const isBlank = currentColorArrangement[i] === blank; // check for blank scuares -their matches does not count

      if (
        columnOfFour.every(
          (square) =>
            currentColorArrangement[square] === decidedColor && !isBlank
        )
      ) {
        setScoreDisplay((score) => score + 4);
        columnOfFour.forEach(
          (square) => (currentColorArrangement[square] = blank)
        );
        return true;
      }
    }
  };

  //Check is there match of four squares in row
  const checkForRowOfFour = () => {
    for (let i = 0; i <= 64; i++) {
      const rowOfFour = [i, i + 1, i + 2, i + 3]; //checks index 0, 1, 2, 3
      const decidedColor = currentColorArrangement[i];
      const notValid = [
        5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53,
        54, 55, 62, 63, 64,
      ];
      const isBlank = currentColorArrangement[i] === blank; // check for blank scuares -their matches does not count

      if (notValid.includes(i)) continue;

      if (
        rowOfFour.every(
          (square) =>
            currentColorArrangement[square] === decidedColor && !isBlank
        )
      ) {
        setScoreDisplay((score) => score + 4);
        rowOfFour.forEach(
          (square) => (currentColorArrangement[square] = blank)
        );
        return true;
      }
    }
  };

  //Check is there match of three squares in column
  const checkForColumnOfThree = () => {
    for (let i = 0; i <= 47; i++) {
      const columnOfThree = [i, i + width, i + width * 2]; //checks index 0, 8, 16 (1,9,17)
      const decidedColor = currentColorArrangement[i];
      const isBlank = currentColorArrangement[i] === blank; // check for blank scuares -their matches does not count

      if (
        columnOfThree.every(
          (square) =>
            currentColorArrangement[square] === decidedColor && !isBlank
        )
      ) {
        setScoreDisplay((score) => score + 3);
        columnOfThree.forEach(
          (square) => (currentColorArrangement[square] = blank)
        );
        return true;
      }
    }
  };

  //Check is there match of three squares in row
  const checkForRowOfThree = () => {
    for (let i = 0; i <= 64; i++) {
      const rowOfThree = [i, i + 1, i + 2]; //checks index 0, 1, 2
      const decidedColor = currentColorArrangement[i];
      const notValid = [
        6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64,
      ];
      const isBlank = currentColorArrangement[i] === blank; // check for blank scuares -their matches does not count

      if (notValid.includes(i)) continue;

      if (
        rowOfThree.every(
          (square) =>
            currentColorArrangement[square] === decidedColor && !isBlank
        )
      ) {
        setScoreDisplay((score) => score + 3);
        rowOfThree.forEach(
          (square) => (currentColorArrangement[square] = blank)
        );
        return true;
      }
    }
  };

  //console.log(scoreDisplay);

  //Chech and fill empty squares
  const moveInteSquareBelow = () => {
    for (let i = 0; i <= 55; i++) {
      const firstRow = [0, 1, 2, 3, 4, 5, 6, 7];
      const isFirstRow = firstRow.includes(i);

      if (isFirstRow && currentColorArrangement[i] === blank) {
        //if there is empty square in first row
        let randomNumber = Math.floor(Math.random() * candyColors.length); // generate random number from 0 to 7
        currentColorArrangement[i] = candyColors[randomNumber]; //generate color to empty square
      }

      if (currentColorArrangement[i + width] === blank) {
        //if square below (index +8) looped square(index) is ""
        currentColorArrangement[i + width] = currentColorArrangement[i]; //then square below is = looped square
        currentColorArrangement[i] = blank; //and looped square is now ""
      }
    }
  };

  //
  const dragStart = (e) => {
    // console.log(e.target); //selected element is being console logged
    // console.log('drag start'); // constant is being console logged
    setSquareBeingDraged(e.target); //function called on selected element
  };

  const dragDrop = (e) => {
    // console.log(e.target); //selected element is being console logged
    // console.log('drag drop'); // constant is being console logged
    setSquareBeingReplaced(e.target); //function called on selected element
  };

  const dragEnd = () => {
    // console.log(e.target); //selected element is being console logged
    // console.log('drag end'); // constant is being console logged

    const squareBeingDraggedId = parseInt(
      squareBeingDraged.getAttribute('data-id')
    ); //id of square that is being dragged
    const squareBeingReplacedId = parseInt(
      squareBeingReplaced.getAttribute('data-id')
    ); //here we are getting id of square that is being replaced

    currentColorArrangement[squareBeingReplacedId] =
      squareBeingDraged.getAttribute('src'); //changing color to square where we are dropping
    currentColorArrangement[squareBeingDraggedId] =
      squareBeingReplaced.getAttribute('src'); // changing color of square widh we dragged

    // console.log('squareBeingDraggedId', squareBeingDraggedId);
    // console.log('squareBeingReplacedId', squareBeingReplacedId);

    const validMoves = [
      squareBeingDraggedId - 1,
      squareBeingDraggedId - width,
      squareBeingDraggedId + 1,
      squareBeingDraggedId + width,
    ];

    const validMove = validMoves.includes(squareBeingReplacedId); //check is index of replaced square valid

    const isAColumnOfFour = checkForColumnOfFour(); //if returns true, constant will be true
    const isARowOfFour = checkForRowOfFour(); //if returns true, constant will be true
    const isAColumnOfThree = checkForColumnOfThree(); //if returns true, constant will be true
    const isARowOfThree = checkForRowOfThree(); //if returns true, constant will be true

    if (
      squareBeingReplacedId &&
      validMove &&
      (isARowOfThree || isARowOfFour || isAColumnOfFour || isAColumnOfThree)
    ) {
      // if all of that is true we can drop it
      setSquareBeingDraged(null); //reeset value for next move
      setSquareBeingReplaced(null); //reeset value for next move
    } else {
      currentColorArrangement[squareBeingReplacedId] =
        squareBeingReplaced.getAttribute('src'); //change everything back to default
      currentColorArrangement[squareBeingDraggedId] =
        squareBeingDraged.getAttribute('src'); //change everything back to default
      setCurrentColorArrangement([...currentColorArrangement]);
    }
  };

  const createBoard = () => {
    const randomColorArrangement = [];
    for (let i = 0; i < width * width; i++) {
      const randomColor =
        candyColors[Math.floor(Math.random() * candyColors.length)];
      randomColorArrangement.push(randomColor);
    }
    setCurrentColorArrangement(randomColorArrangement);
  };

  useEffect(() => {
    createBoard();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      checkForColumnOfFour();
      checkForColumnOfThree();
      checkForRowOfThree();
      moveInteSquareBelow();
      setCurrentColorArrangement([...currentColorArrangement]);
    }, 100);

    return () => clearInterval(timer);
  }, [
    checkForColumnOfFour,
    checkForRowOfFour,
    checkForColumnOfThree,
    checkForRowOfThree,
    moveInteSquareBelow,
    currentColorArrangement,
  ]);

  //console.log(currentColorArrangement);

  return (
    <div className="app">
      <ScoreBoard score={scoreDisplay} />
      <div className="game">
        {currentColorArrangement.map((candyColor, index) => (
          <img
            key={index}
            src={candyColor}
            alt={candyColor}
            data-id={index}
            draggable={true}
            onDragStart={dragStart}
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={(e) => e.preventDefault()}
            onDragLeave={(e) => e.preventDefault()}
            onDrop={dragDrop}
            onDragEnd={dragEnd}
          />
        ))}
      </div>
      {/* <button className="reset-btn" onClick={handleForceupdateMethod}>
        reset
      </button> */}
    </div>
  );
}

export default App;
