
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice == 0) return "rock";
    else if (choice == 1) return "paper";
    else return "scissors";
}

function getPlayerChoice() {
    let invalidInput = true;
    let playerChoice;

    do {
        playerChoice = prompt("Type in Rock, Paper, or Scissors!");
        playerChoice = playerChoice.toLowerCase();

        if (playerChoice == "rock" ||
            playerChoice == "paper" ||
            playerChoice == "scissors"
        ) {
            invalidInput = false;
        } else {
            alert("Invalid response. Please try again.");
        }
    } while (invalidInput);

    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
    console.log("Player choice : " + playerSelection);
    console.log("Computer choice : " + computerSelection);
    if (playerSelection == computerSelection) {
        return TIE;
    }

    if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            return COMPUTER_WIN;
        } else {
            return PLAYER_WIN;
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            return COMPUTER_WIN;
        } else {
            return PLAYER_WIN;
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return COMPUTER_WIN;
        } else {
            return PLAYER_WIN;
        }
    }
}

function game() {
    let numPlayerWin = 0;
    let numCompWin = 0;

    for (let i = 0; i < 5; i++) {
        let roundResult = playRound(getPlayerChoice(), getComputerChoice());

        if (roundResult == PLAYER_WIN) {
            console.log("Player won the round!");
            numPlayerWin++;
        }
        else if (roundResult == COMPUTER_WIN) {
            console.log("Computer has won the round :(");
            numCompWin++;
        } else console.log("There is a tie!");

        if (numPlayerWin == 3 || numCompWin == 3) {
            break;
        }
    }

    if (numPlayerWin > numCompWin) {
        console.log("Player has won the game!");
    } else {
        console.log("Player has lost the game :(");
    }
}

const PLAYER_WIN = 0;
const COMPUTER_WIN = 1;
const TIE = 2;

game();