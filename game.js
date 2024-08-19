let moveIndicator = '';

let gameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null] 
]

document.querySelectorAll('.game-button').forEach((button) => {
  button.addEventListener('click', () => {
    const row = button.dataset.row;
    const column = button.dataset.column;
    const rowIndex = parseInt(row)
    const columnIndex = parseInt(column)

    if(moveIndicator === false){
      button.innerHTML = 'O'
      gameBoard[rowIndex][columnIndex] = 'O'
      console.log(gameBoard)
      
    } else if (moveIndicator === true){
      button.innerHTML= 'X'
      gameBoard[rowIndex][columnIndex] = 'X'
      console.log(gameBoard)
    }

    setTimeout(checkIfWin, 100);
    
  });
});


const oButton = document.querySelector('.side-button-O');
function toggledOButton(){

  oButton.addEventListener('click', () => {
  toggleOffX();
  oButton.classList.add('green-highlight')
  moveIndicator = false;
  console.log(moveIndicator)
  

})
}

const xButton = document.querySelector('.side-button-X');

function toggledXButton(){
  xButton.addEventListener('click', () => {
  toggleOffO();
  xButton.classList.add('red-highlight')
  moveIndicator = true;
  console.log(moveIndicator)
})
}

function toggleOffO(){

  if(oButton.classList.contains('green-highlight')){
    oButton.classList.remove('green-highlight')
  }
}

function toggleOffX(){

  if (xButton.classList.contains('red-highlight')){
    xButton.classList.remove('red-highlight')
  }
}

function checkIfWin(){
   if(gameBoard[0][0] === 'X' && gameBoard[0][1] === 'X' && gameBoard[0][2] === 'X'
    ||
    gameBoard[1][0] === 'X' && gameBoard[1][1] === 'X' && gameBoard[1][2] === 'X'
    ||
    gameBoard[2][0] === 'X' && gameBoard[2][1] === 'X' && gameBoard[2][2] === 'X'
    ||
    gameBoard[0][0] === 'X' && gameBoard[1][0] === 'X' && gameBoard[2][0] === 'X'
    ||
     gameBoard[0][1] === 'X' && gameBoard[1][1] === 'X' && gameBoard[2][1] === 'X'
    ||
     gameBoard[0][2] === 'X' && gameBoard[1][2] === 'X' && gameBoard[2][2] === 'X'
    ||
    gameBoard[0][0] === 'X' && gameBoard[1][1] === 'X' && gameBoard[2][2] === 'X'
    ||
    gameBoard[0][2] === 'X' && gameBoard[1][1] === 'X' && gameBoard[2][0] === 'X'

   ){
    alert("Player using X wins!")

   } else if(gameBoard[0][0] === 'O' && gameBoard[0][1] === 'O' && gameBoard[0][2] === 'O'
    ||
    gameBoard[1][0] === 'O' && gameBoard[1][1] === 'O' && gameBoard[1][2] === 'O'
    ||
    gameBoard[2][0] === 'O' && gameBoard[2][1] === 'O' && gameBoard[2][2] === 'O'
    ||
    gameBoard[0][0] === 'O' && gameBoard[1][0] === 'O' && gameBoard[2][0] === 'O'
    ||
     gameBoard[0][1] === 'O' && gameBoard[1][1] === 'O' && gameBoard[2][1] === 'O'
    ||
     gameBoard[0][2] === 'O' && gameBoard[1][2] === 'O' && gameBoard[2][2] === 'O'
    ||
    gameBoard[0][0] === 'O' && gameBoard[1][1] === 'O' && gameBoard[2][2] === 'O'
    ||
    gameBoard[0][2] === 'O' && gameBoard[1][1] === 'O' && gameBoard[2][0] === 'O'

    ){
      alert('Player using O wins!')
   }

}

function fullReset(){
  document.querySelector('.reset-button').
  addEventListener('click', () => {
    oButton.classList.remove('green-highlight');
    xButton.classList.remove('red-highlight');
    moveIndicator = '';
    document.querySelectorAll('.game-button').forEach((button) => {
      button.innerHTML = ''
    })
    
    for(let i = 0; i < gameBoard.length; i++){
    for(let j = 0; j < gameBoard[i].length; j++){
      gameBoard[i][j] = 'null'
    }
    }
    console.log(gameBoard)
    
    
    
  })
}

fullReset();


toggledOButton();
toggledXButton();


