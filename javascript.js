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

    if (playerChoice === computerChoice) {
        if (resultsField.children.length > 0) {
            resultsField.removeChild(resultsField.lastChild);
        }
        resultMessage.textContent = "Tie, play again!";
        resultsField.appendChild(resultMessage);
    }
    else if ((playerChoice === "rock" && computerChoice === "scissors") || 
    (playerChoice === "scissors" && computerChoice === "paper") || 
    (playerChoice === "paper" && computerChoice === "rock")) {
        if (resultsField.children.length > 0) {
            resultsField.removeChild(resultsField.lastChild);
        }
        resultMessage.textContent = "Congrats, you win!";
        resultsField.appendChild(resultMessage);
    }
    else {
        if (resultsField.children.length > 0) {
            resultsField.removeChild(resultsField.lastChild);
        }
        resultMessage.textContent = "Ah, too bad. Better luck next time!";
        resultsField.appendChild(resultMessage);
    }
}

const resultsField = document.querySelector("div");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id);
    });
});