let moveIndicator = '';

let gameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null] 
]

gameBoard[0][1] = 'X'

console.log(gameBoard)

document.querySelectorAll('.game-button').forEach((button) => {
  button.addEventListener('click', () => {
    if(moveIndicator === false){
      button.innerHTML = 'O'
    } else if (moveIndicator === true){
      button.innerHTML= 'X'
    }
   
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

function toggleOffO (){

  if(oButton.classList.contains('green-highlight')){
    oButton.classList.remove('green-highlight')
  }
}

function toggleOffX (){

  if (xButton.classList.contains('red-highlight')){
    xButton.classList.remove('red-highlight')
  }
}



toggledOButton();
toggledXButton();


