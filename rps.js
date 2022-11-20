function getComputerChoice () {
    const compChoices = ["rock", "paper", "scissors"];
    let rndvar = Math.floor(Math.random() * 3);
    return compChoices[rndvar];
}

//console.log("Computers choice is: " + getComputerChoice());



function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    // combinations rock > scissors
    // scissors > paper
    // paper > rock
    // TIE
    let winMsg="You Win! " + playerSelection +  " beats "  + computerSelection;
    let loseMsg="You Lose! " + computerSelection +  " beats "  + playerSelection;
    let outputMsg="";

    if (playerSelection === "rock" && computerSelection === "scissors") {
        outputMsg=winMsg;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        outputMsg=loseMsg;
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        outputMsg=winMsg;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        outputMsg=loseMsg;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        outputMsg=winMsg;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        outputMsg=loseMsg;
    } else if (playerSelection === computerSelection) {
        outputMsg="You Tied! " + playerSelection + " matches " + computerSelection;
    } else {
        outputMsg="Your input was invalid";
    }

    return outputMsg;
}


const computerSelection = getComputerChoice();
const playerSelection = "rock";
console.log("Computers choice is: " + computerSelection);
console.log("Your choice is: " + playerSelection);
console.log(playRound(playerSelection, computerSelection));

