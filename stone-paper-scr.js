/*
Use javascript to create a game of stone paper & scr.
The game should ask you to enter S , W ,or G.
The computer should be able to generate S,W,G and declare Win or lose
using alert. Use confirm or prompt whenever it required: 
*/

const selectionButtons = document.querySelectorAll('[data-selection]')
const options = ['rock', 'paper', 'scissors']

function computerPlay() {
 const random = options[Math.floor(Math.random() * options.length)]; 
 return random
}

selectionButtons.forEach(selectionButton => {
  selectionButton.addEventListener('click', e => {
  const selected = selectionButton.dataset.selection;
  const computerSelected = computerPlay();
  console.log("Player Selection: " + selected); 
  console.log("Computer Selection: " + computerSelected); 
  playRound(selected, computerSelected);
  })
})

function playRound(playerSelected, computerSelected) {
  if (playerSelected == 'rock' && computerSelected == 'rock' ||
      playerSelected == 'paper' && computerSelected == 'paper' ||
      playerSelected == 'scissors' && computerSelected == 'scissors') {
      console.log('tie')
  }
  else if (playerSelected == 'rock' && computerSelected == 'scissors' ||
           playerSelected == 'paper' && computerSelected == 'rock' ||
           playerSelected == 'scissors' && computerSelected == 'paper') {
           console.log('player won') 
           }
  else {
    console.log('player lose')
  }
}
