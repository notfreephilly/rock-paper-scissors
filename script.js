const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
// Function to randomly generate a choice selected by the computer


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

    const playerStr = player.toLowerCase();
    const compStr = comp.toLowerCase();

    if (playerStr === "rock")
        if (compStr === "rock") {
            return "It is a tie!!"
        } else if (compStr === "paper") {
            return "You lose, paper beats rock!"
        } else {
            return "You won!"
        }
    else if (playerStr === "scissor")
        if (compStr === "scissor") {
            return "You tied!"
        } else if (compStr === "rock") {
            return "You lose, rock beats scissor!"
        } else {
            return "You won!"
        }
    else {
        if (compStr === "paper") {
            return "You lost! Paper beats rock"
        } else if (compStr === "scissor") {
            return "You win! Rock beats scissor"
        } else {
            return "Tie game!"
        }
    }
}

