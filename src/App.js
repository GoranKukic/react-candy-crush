import { useEffect, useState } from "react";

const width = 8;
const candyColors = [
  'blue',
  'green',
  'orange',
  'purple',
  'red',
  'yellow'
]

const App = () => {

  const [currentColorArrangement, setCurrentColorArrangement] = useState ([])
  const [squareBeingDraged, setSquareBeingDraged]  =useState (null)
  const [squareBeingReplaced, setSquareBeingReplaced]  =useState (null)

  //Check is there match of four squares in column
  const checkForColumnOfFour = () => {
    for (let i = 0; i <= 39; i++){
      const columnOfFour = [i, i + width, i + width * 2, i + width * 3] //checks index 0, 8, 16, 24  (1,9,17,25)
      const decidedColor = currentColorArrangement[i];

      if (columnOfFour.every(square => currentColorArrangement[square] === decidedColor)){
        columnOfFour.forEach(square => currentColorArrangement[square] = "")
      }
    }
  }

  //Check is there match of four squares in row
  const checkForRowOfFour = () => {
    for (let i = 0; i <= 64; i++){
      const rowOfFour = [i, i + 1, i + 2, i + 3] //checks index 0, 1, 2, 3
      const decidedColor = currentColorArrangement[i];
      const notValid = [5, 6, 7, 13, 14, 15, 21, 22, 23,29, 30, 31,37, 38, 39, 45, 46, 47, 53, 54, 55, 62, 63, 64]

      if (notValid.includes(i)) continue

      if (rowOfFour.every(square => currentColorArrangement[square] === decidedColor)){
        rowOfFour.forEach(square => currentColorArrangement[square] = "")
      }
    }
  }

  //Check is there match of three squares in column
  const checkForColumnOfThree = () => {
    for (let i = 0; i <= 47; i++){
      const columnOfThree = [i, i + width, i + width * 2] //checks index 0, 8, 16 (1,9,17)
      const decidedColor = currentColorArrangement[i];

      if (columnOfThree.every(square => currentColorArrangement[square] === decidedColor)){
        columnOfThree.forEach(square => currentColorArrangement[square] = "")
      }
    }
  }

  //Check is there match of three squares in row
  const checkForRowOfThree = () => {
    for (let i = 0; i <= 64; i++){
      const rowOfThree = [i, i + 1, i + 2] //checks index 0, 1, 2
      const decidedColor = currentColorArrangement[i];
      const notValid = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64]

      if (notValid.includes(i)) continue

      if (rowOfThree.every(square => currentColorArrangement[square] === decidedColor)){
        rowOfThree.forEach(square => currentColorArrangement[square] = "")
      }
    }
  }

  //Chech and fill empty squares
  const moveInteSquareBelow = () => { 
    for (let i = 0; i <= 55; i++ ) {

      const firstRow = [0, 1, 2, 3, 4, 5, 6, 7]
      const isFirstRow = firstRow.includes(i)

      if (isFirstRow && currentColorArrangement[i] === ""){ //if there is empty square in first row
        let randomNumber = Math.floor(Math.random() * candyColors.length) // generate random number from 0 to 7
        currentColorArrangement[i] = candyColors[randomNumber] //generate color to empty square
      }

      if ((currentColorArrangement[i + width]) === ''){ //if square below (index +8) looped square(index) is ""
        currentColorArrangement[i + width] = currentColorArrangement[i] //then square below is = looped square
        currentColorArrangement[i] = "" //and looped square is now ""
      }
    }
  }

  //
  const dragStart = (e) => {
    console.log(e.target) //selected element is being console logged
    console.log("drag start") // constant is being console logged
    setSquareBeingDraged(e.target)  //function called on selected element

  }

  const dragDrop = (e) => {
    console.log(e.target) //selected element is being console logged
    console.log("drag drop") // constant is being console logged
    setSquareBeingReplaced(e.target) //function called on selected element
  }

  const dragEnd = (e) => {
    console.log(e.target) //selected element is being console logged
    console.log("drag end") // constant is being console logged

    const squareBeingDraggedId= parseInt(squareBeingDraged.getAttribute('data-id')) //id of square that is being dragged
    const squareBeingReplacedId= parseInt(squareBeingReplaced.getAttribute('data-id')) //here we are getting id of square that is being replaced
  
    currentColorArrangement[squareBeingReplacedId] = squareBeingDraged.style.backgroundColor //changing color to square where we are dropping 
    currentColorArrangement[squareBeingDraggedId] = squareBeingReplaced.style.backgroundColor // changing color of square widh we dragged


    console.log("squareBeingDraggedId", squareBeingDraggedId)
    console.log("squareBeingReplacedId", squareBeingReplacedId)

  }

  const createBoard = () => {
    const randomColorArrangement = [];
    for (let i = 0; i < width * width; i++){
      const randomColor =  candyColors[Math.floor(Math.random() * candyColors.length)]
      randomColorArrangement.push(randomColor)
    }
    setCurrentColorArrangement(randomColorArrangement);
  }

  useEffect(() =>{
    createBoard()
  },  [])

  useEffect(() =>{

    const timer = setInterval(() => {
      checkForColumnOfFour()
      checkForColumnOfThree()
      checkForRowOfThree()
      moveInteSquareBelow()
      setCurrentColorArrangement([...currentColorArrangement])
    }, 100)

    return () => clearInterval(timer)
    
  },  [checkForColumnOfFour, checkForRowOfFour, checkForColumnOfThree, checkForRowOfThree, moveInteSquareBelow, currentColorArrangement])

  console.log(currentColorArrangement);

  return (
    <div className="app">
      <div className="game">
        {currentColorArrangement.map((candyColor, index) => (
          <img 
            key={index}
            style={{backgroundColor : candyColor}}
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
    </div>
  );
}

export default App;
