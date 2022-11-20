function getComputerChoice () {
    const compChoices = ["rock", "paper", "scissors"];
    let rndvar = Math.floor(Math.random() * 3);
    return compChoices[rndvar];
}

//console.log("Computers choice is: " + getComputerChoice());
let wins=0;
let losses=0;


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    // combinations rock > scissors
    // scissors > paper
    // paper > rock
    // TIE
    let resOut=[];
    let winMsg="You Win! " + playerSelection +  " beats "  + computerSelection;
    let loseMsg="You Lose! " + computerSelection +  " beats "  + playerSelection;
    //let outputMsg="";

    if (playerSelection === "rock" && computerSelection === "scissors") {
        //outputMsg=winMsg;
        resOut[0]=1;
        resOut[1]=winMsg;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        //outputMsg=loseMsg;
        resOut[0]=-1;
        resOut[1]=loseMsg;
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        resOut[0]=1;
        resOut[1]=winMsg;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        //outputMsg=loseMsg;
        resOut[0]=-1;
        resOut[1]=loseMsg;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        resOut[0]=1;
        resOut[1]=winMsg;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        //outputMsg=loseMsg;
        resOut[0]=-1;
        resOut[1]=loseMsg;
    } else if (playerSelection === computerSelection) {
        resOut[0]=0;
        resOut[1]="You Tied! " + playerSelection + " matches " + computerSelection;
        //outputMsg="You Tied! " + playerSelection + " matches " + computerSelection;
    } else {
        outputMsg="Your input was invalid";
    }
    return resOut;
    //return outputMsg;
}

function getPlayerChoice() {
    choice = prompt('Enter your choice of Rock, Paper, Scissors');
    choice = choice.toLowerCase();
    return choice;

}

function game() {
    console.log("Let's play Rock, Paper, Scissors!")
    let wins=0;
    let loss=0;
    let ties=0;
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice();
        console.log("Computers choice is: " + computerSelection);
        console.log("Your choice is: " + playerSelection);

        res = playRound(playerSelection, computerSelection);
        console.log(res[1])
        if (res[0] == 1) {
            wins+=1;
        } else if (res[0] == -1) {
            loss+=1;
        } else {
            ties+=1;
        }
     }
     console.log("After 5 games you have: " + wins + " win(s), " + loss + " loss(es)," + " and " + ties + " tie(s). Well played!");
}


game()



/*
const computerSelection = getComputerChoice();
const playerSelection = "rock";
console.log("Computers choice is: " + computerSelection);
console.log("Your choice is: " + playerSelection);
console.log(playRound(playerSelection, computerSelection));
*/
