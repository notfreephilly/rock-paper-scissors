// Function to randomly generate a choice selected by the computer


function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"]; // Let computer pick option
    const randomChoice = Math.floor(Math.random() * choices.length + 1)

    if (randomChoice === 1) {
        return "Rock"
    }
    else if (randomChoice === 2) {
        return "Paper"
    }
    else if (randomChoice === 3) {
        return "Scissors"
    }
}

// 

function playSingleRound(playerSelection, computerSelection) {
    
}

