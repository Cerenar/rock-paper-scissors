function getComputerChoice() {
    let randomNumber = Math.random()
    if (randomNumber <= 0.33) {
        return "scissors";
    }
    else if (randomNumber > 0.33 && randomNumber <= 0.67) {
        return "rock";
    }
    else {
        return "paper";
    }
}

function getPlayerChoice() {
    let playerChoice = prompt("Rock, paper, scissors?");
    return playerChoice.toLowerCase();
}

function playRound() {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();

    if (playerChoice === computerChoice) {
        console.log(`${playerChoice} = ${computerChoice}`);
        console.log("Tie, play again!");
    }
    else if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "scissors" && computerChoice === "paper") || (playerChoice === "paper" && computerChoice === "rock")) {
        console.log(`${playerChoice} > ${computerChoice}`);
        console.log("Congrats, you win!");
    }
    else {
        console.log(`${playerChoice} < ${computerChoice}`);
        console.log("Ah, too bad. Better luck next time!");
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
}

playGame();