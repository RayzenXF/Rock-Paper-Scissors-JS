const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");

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
        console.log("Draw!");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You Win! " + humanChoice + " beats " + computerChoice + "!");
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You Win! " + humanChoice + " beats " + computerChoice + "!");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You Win! " + humanChoice + " beats " + computerChoice + "!");
        humanScore++;       
    } else {
        console.log("Oops! Computer wins! " + computerChoice + " beats " + humanChoice + "!");
        computerScore++;
    }
}

rockBtn.addEventListener("click", () => {
    humanChoice = "rock";
    // console.log(humanChoice);

    computerChoice = getComputerChoice();
    // console.log(computerChoice);

    playRound(computerChoice);
});