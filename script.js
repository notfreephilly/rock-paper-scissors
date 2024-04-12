const playerSelection = prompt("Rock, paper or scissor?");
const computerSelection = getComputerChoice();


function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissor"]; // Let computer pick option
    const randomChoice = Math.floor(Math.random() * choices.length + 1)

    if (randomChoice === 1) {
        return "Rock"
    }
    else if (randomChoice === 2) {
        return "Paper"
    }
    else if (randomChoice === 3) {
        return "Scissor"
    }
}



function playRound(playerSelection, computerSelection) {
    let player = playerSelection;
    let comp = computerSelection;

    if (player.toLowerCase() === "rock")
        if (comp.toLowerCase() === "rock") {
            return "It is a tie!!"
        } else if (compStr.toLowerCase() === "paper") {
            return "You lose, paper beats rock!"
        } else {
            return "You won!"
        }
    else if (player.toLowerCase() === "scissor")
        if (comp.toLowerCase() === "scissor") {
            return "You tied!"
        } else if (comp.toLowerCase() === "rock") {
            return "You lose, rock beats scissor!"
        } else {
            return "You won!"
        }
    else {
        if (comp.toLowerCase() === "paper") {
            return "You lost! Paper beats rock"
        } else if (comp.toLowerCase() === "scissor") {
            return "You win! Rock beats scissor"
        } else {
            return "Tie game!"
        }
    }
}

playRound();
playRound();
playRound();
playRound();
playRound();
playRound();