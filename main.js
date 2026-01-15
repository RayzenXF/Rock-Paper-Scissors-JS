function getComputerChoice() {

    let computerChoice;

    const getComputerNum = Math.floor(Math.random() * 3) + 1;

    if (getComputerNum === 1) {
        computerChoice = "rock";
    } else if (getComputerNum === 2) {
        computerChoice = "paper";
    } else if (getComputerNum === 3) {
        computerChoice = "scissors";
    } 

    return computerChoice;
}

function getHumanChoice() {

    const humanChoice = prompt("Rock, Paper, Scissors?").toLowerCase();

    // You do not need to handle reprompting if the user enters an invalid input, 
    // as that would require things we will teach later.                            --- The Odin Project!
    // For now, just assume the user will always enter a valid choice.

    return humanChoice;

}

