
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice == 0) return "rock";
    else if (choice == 1) return "paper";
    else return "scissors";
}

function playRound(playerSelection, computerSelection, images) {
    console.log("Player choice : " + playerSelection);
    console.log("Computer choice : " + computerSelection);

    //display image
    images.innerHTML = `<img src="./images/${playerSelection}.png">
                    <img src="./images/${computerSelection}-inverted.png">`

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

function gameHandler(choice) {
    const images = document.querySelector('.images');
    const playerScore = document.querySelector('.score-player');
    const computerScore = document.querySelector('.score-computer');
    const result = document.querySelector('h3');

    let roundResult = playRound(choice, getComputerChoice(), images);
    let winner;

    if (roundResult == PLAYER_WIN) {
        winner = "Player";
        result.textContent = 'Player won the round!';
        playerScore.textContent = `Player: ${++numPlayerWin}`;
        computerScore.textContent = `Computer: ${numCompWin}`;
    } else if (roundResult == COMPUTER_WIN) {
        winner = "Computer";
        result.textContent = 'Computer has won the round :(';
        playerScore.textContent = `Player: ${numPlayerWin}`;
        computerScore.textContent = `Computer: ${++numCompWin}`;
    } else {
        playerScore.textContent = `Player: ${numPlayerWin}`;
        computerScore.textContent = `Computer: ${numCompWin}`;
        result.textContent = 'There is a tie!';
    }

    if (numCompWin == 5 || numPlayerWin == 5) {
        result.textContent = `${winner} has won the game!
                                Press any choices to start a new game.`;
        numCompWin = 0;
        numPlayerWin = 0;
    }
}

const PLAYER_WIN = 0;
const COMPUTER_WIN = 1;
const TIE = 2;

let numPlayerWin = 0;
let numCompWin = 0;

const rockButton = document.querySelector('.rock-button');
const paperButton = document.querySelector('.paper-button');
const scissorsButton = document.querySelector('.scissors-button');

rockButton.addEventListener('click', () => gameHandler('rock'));
paperButton.addEventListener('click', () => gameHandler('paper'));
scissorsButton.addEventListener('click', () => gameHandler('scissors'));


