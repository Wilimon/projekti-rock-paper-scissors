const hands = ["rock", "paper", "scissors"]; 
let humanChoice; 
let computerChoice; 
let humanPoints = 0;
let computerPoints = 0; 


function getComputerChoice() {
  computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice == 0) {
    computerChoice = hands[0];
  } else if (computerChoice == 1) {
    computerChoice = hands[1];
  } else {
    computerChoice = hands[2];
  }
  return computerChoice;
}

function getHumanChoice() {
  humanChoice = Number(prompt("Pick: 1 = rock, 2 = paper or 3 = scissors"))
  if (humanChoice === 1) {
    humanChoice = hands[0];
  } else if (humanChoice === 2) {
    humanChoice = hands[1];
  } else if (humanChoice === 3) {
    humanChoice = hands[2];
  } else {
    alert("Please pick the correct option to play the game!");
  }
   return humanChoice; 
}

// hands[0] = rock 
// hands[1] = paper
// hands[2] = scissors

function playRound() {
  getComputerChoice();
  getHumanChoice();

  if (humanChoice === computerChoice) {
    console.log(`It's a tie, the score is: you = ${humanPoints}, computer = ${computerPoints}`)
    // case human has chosen paper
  } else if (humanChoice === hands[0] && computerChoice === hands[1]) {
    computerPoints++;
    console.log(`You lost, the computer picked ${computerChoice}.
      The score is: you = ${humanPoints}, computer = ${computerPoints}`)
  } else if (humanChoice === hands[0] && computerChoice === hands[2]) {
    humanPoints++;
    console.log(`You won, the computer picked ${computerChoice}.
      The score is: you = ${humanPoints}, computer = ${computerPoints}`)
    // case human has chosen paper
  } else if (humanChoice === hands[1] && computerChoice === hands[2]) {
    computerPoints++;
    console.log(`You lost, the computer picked ${computerChoice}.
      The score is: you = ${humanPoints}, computer = ${computerPoints}`)
  } else if (humanChoice === hands[1] && computerChoice === hands[0]) {
    humanPoints++;
    console.log(`You won, the computer picked ${computerChoice}.
      The score is: you = ${humanPoints}, computer = ${computerPoints}`)
    // case human has chosen scissors
  } else if (humanChoice === hands[2] && computerChoice === hands[0]) {
    computerPoints++;
    console.log(`You lost, the computer picked ${computerChoice}.
      The score is: you = ${humanPoints}, computer = ${computerPoints}`)
} else if (humanChoice === hands[2] && computerChoice === hands[1]) {
    humanPoints++;
    console.log(`You won, the computer picked ${computerChoice}.
      The score is: you = ${humanPoints}, computer = ${computerPoints}`)
}};

function playGame() {
  playRound();
  if (computerPoints === 5) {
    console.log("You lost! Play again.")
    computerPoints = 0;
    humanPoints = 0;
  } else if (humanPoints === 5) {
    console.log("You won! Congratulations!")
    computerPoints = 0;
    humanPoints = 0;
  }
}; 