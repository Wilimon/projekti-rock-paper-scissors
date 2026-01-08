// Määritellään muuttujat
let computerChoice;
let humanChoice;
let computerPoints = 0;
let humanPoints = 0;

// Tämä funktio asettaa koneen valinnan satunnaisella numerolla
function getComputerChoice() {
  computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice < 3) {
      computerChoice = "rock";
    } else if (computerChoice < 6) {
      computerChoice = "paper";
    } else {
      computerChoice = "scissors";
    };    
  return computerChoice;
};

// Tämä funktio asettaa ihmisen valinnan
function getHumanChoice() {
  humanChoice = prompt("Write here your choice in number form: 1 = rock, 2 = paper, 3 = scissors.");
    if (humanChoice == 1) {
      humanChoice = "rock"; 
    } else if (humanChoice == 2) {
      humanChoice = "paper";
    } else if (humanChoice == 3) {
      humanChoice = "scissors";
    };
    return humanChoice;
};


// Tämä funktio toteuttaa varsinaisen pelin ja sisältää aiemmat funktiot
function playGame() {
  getComputerChoice();
  getHumanChoice();

    if (humanChoice == "rock" && computerChoice == "rock") {  
      console.log("It's a tie, no points awarded. Play again.");
    } else if (humanChoice == "rock" && computerChoice == "paper") {
      computerPoints += 1;
      console.log("Computer picked paper, you lost.");
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
      humanPoints += 1;
      console.log("Computer picked scissors, you won.");
    };

    if (humanChoice == "paper" && computerChoice == "paper") {  
      console.log("It's a tie, no points awarded. Play again.");
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
      computerPoints += 1;
      console.log("Computer picked scissors, you lost.");
    } else if (humanChoice == "paper" && computerChoice == "rock") {
      humanPoints += 1;
      console.log("Computer picked rock, you won.");
    };

    if (humanChoice == "scissors" && computerChoice == "scissors") {  
      console.log("It's a tie, no points awarded. Play again.");
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
      computerPoints += 1;
      console.log("Computer picked rock, you lost.");
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
      humanPoints += 1;
      console.log("Computer picked paper, you won.");
    };
     console.log(`Your points: ${humanPoints}, computers points: ${computerPoints}`);

    if (humanPoints == 5) {
      alert("You got 5 points before the computer, you won the game!!");
      humanPoints = 0;
      computerPoints = 0;
    } else if (computerPoints == 5) {
      alert("Computer got 5 points, unfortunately you lost the game. Better luck next time!");
      humanPoints = 0;
      computerPoints = 0;
    };
};


