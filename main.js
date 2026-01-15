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

function getHumanChoice() {

    const humanSelection = prompt("Rock, Paper, Scissors?").toLowerCase();

    // You do not need to handle reprompting if the user enters an invalid input, 
    // as that would require things we will teach later.                            --- The Odin Project!
    // For now, just assume the user will always enter a valid choice.

    return humanSelection;

}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

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

function playGame() {

    while (humanScore < 5 && computerScore < 5) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore === computerScore) {
        console.log("Draw! Your and Computer score is 5!");
    } else if (humanScore === 5) {
        console.log("You Win! Your score is - " + humanScore + ", Computer Score is - " + computerScore);
    } else {
        console.log("Computer Win! Your score is - " + humanScore + ", Computer Score is - " + computerScore);
    }
}

playGame();

