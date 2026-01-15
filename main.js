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

console.log(getComputerChoice());
