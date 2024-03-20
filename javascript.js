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

function playRound(playerChoice) {
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

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id);
    });
});