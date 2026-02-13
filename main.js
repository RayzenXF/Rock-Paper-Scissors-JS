const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");

const resetBtn = document.querySelector("#reset-btn");

const consoleGame = document.querySelector("#console-game");
const consolePara = document.querySelector("#console-para");

const humanScoreText = document.querySelector("#human-score");
const computerScoreText = document.querySelector("#computer-score");

resetBtn.disabled = true;

let humanScore = 0;
let computerScore = 0;

let humanChoice = "";
let computerChoice = "";

function getComputerChoice() {

    let computerSelection;

    const getComputerNum = Math.floor(Math.random() * 3) + 1;

    if (getComputerNum === 1) {
        computerSelection = "rock";
    } else if (getComputerNum === 2) {
        computerSelection = "paper";
    } else if (getComputerNum === 3) {
        computerSelection = "scissors";
    }

    return computerSelection;
}

function disableButtons() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;

    resetBtn.disabled = false;
};

function enableButtons() {
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;

    resetBtn.disabled = true;
};

function checkWin() {

    if (humanScore === 5) {
        consolePara.textContent = `Hooray! You won 5 rounds! Congratulations!`;
        disableButtons();
    } else if (computerScore === 5) {
        consolePara.textContent = `Ohhh... Computer won 5 rounds. Try again!`;
        disableButtons();
    }
};

function playRound(computerChoice) {

    if (humanChoice === computerChoice) {
        consolePara.textContent = "Draw!";
        checkWin();
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        consolePara.textContent = `You Won! Your ${humanChoice} beats computer's ${computerChoice}!`;
        humanScore++;
        humanScoreText.textContent = humanScore;
        checkWin();
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        consolePara.textContent = `You Won! Your ${humanChoice} beats computer's ${computerChoice}!`;
        humanScore++;
        humanScoreText.textContent = humanScore;
        checkWin();
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        consolePara.textContent = `You Won! Your ${humanChoice} beats computer's ${computerChoice}!`;
        humanScore++;
        humanScoreText.textContent = humanScore;
        checkWin();
    } else {
        consolePara.textContent = `Oops, Computer Won! Computer's ${computerChoice} beats your ${humanChoice}!`;
        computerScore++;
        computerScoreText.textContent = computerScore;
        checkWin();
    }
}

rockBtn.addEventListener("click", () => {
    humanChoice = "rock";
    computerChoice = getComputerChoice();
    playRound(computerChoice);
});

paperBtn.addEventListener("click", () => {
    humanChoice = "paper";
    computerChoice = getComputerChoice();
    playRound(computerChoice);
});

scissorsBtn.addEventListener("click", () => {
    humanChoice = "scissors";
    computerChoice = getComputerChoice();
    playRound(computerChoice);
});

resetBtn.addEventListener("click", () => {
    enableButtons();
    humanScore = 0;
    computerScore = 0; 

    humanScoreText.textContent = humanScore;
    computerScoreText.textContent = computerScore;
    consolePara.textContent = `Good luck!`;
});