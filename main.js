const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");

const consoleGame = document.querySelector("#console-game");
const consolePara = document.querySelector("#console-para");

const humanScoreText = document.querySelector("#human-score");
const computerScoreText = document.querySelector("#computer-score");

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

function playRound(computerChoice) {

    if (humanChoice === computerChoice) {
        consolePara.textContent = "Draw!";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        consolePara.textContent = `You Win! Your ${humanChoice} beats computer's ${computerChoice}!`;
        humanScore++;
        humanScoreText.textContent = humanScore;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        consolePara.textContent = `You Win! Your ${humanChoice} beats computer's ${computerChoice}!`;
        humanScore++;
        humanScoreText.textContent = humanScore;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        consolePara.textContent = `You Win! Your ${humanChoice} beats computer's ${computerChoice}!`;
        humanScore++;
        humanScoreText.textContent = humanScore;       
    } else {
        consolePara.textContent = `Oops, Computer Wins! Computer's ${computerChoice} beats your ${humanChoice}!`;
        computerScore++;
        computerScoreText.textContent = computerScore;
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