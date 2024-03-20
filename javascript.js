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

function playRound(playerChoice) {
    let computerChoice = getComputerChoice();
    let resultMessage = document.createElement("p");

    if (resultsField.children.length > 0) {
        resultsField.removeChild(resultsField.lastChild);
    }

    if (playerChoice === computerChoice) {
        resultMessage.textContent = "Tie, play again!";
    }
    else if ((playerChoice === "rock" && computerChoice === "scissors") || 
    (playerChoice === "scissors" && computerChoice === "paper") || 
    (playerChoice === "paper" && computerChoice === "rock")) {
        
        resultMessage.textContent = "Congrats, you win!";
        playerScore++;
    }
    else {
        resultMessage.textContent = "Ah, too bad. Better luck next time!";
        computerScore++;
    }

    resultsField.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    resultsField.appendChild(resultMessage);

    if (playerScore > 4) {
        let victoryMessage = document.createElement("h1");
        victoryMessage.textContent = "You beat the computer! You're a rock, paper, scissors master!"
        resultsField.appendChild(victoryMessage);
    }
    if (computerScore > 4) {
        let lossMessage = document.createElement("h1");
        lossMessage.textContent = "You lost to the computer. Come back after training some more..."
        resultsField.appendChild(lossMessage);
    }
}

const resultsField = document.querySelector("div");
const buttons = document.querySelectorAll("button");
let playerScore = 0;
let computerScore = 0;

resultsField.textContent = "Player: 0 Computer: 0";

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id);
    });
});