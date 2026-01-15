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

