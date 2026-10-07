
let choices = ["Rock", "Paper", "Scissors"]
let playerDisplay = document.getElementById("playerDisplay");
let computerDisplay = document.getElementById("computerDisplay");
let resultDisplay = document.getElementById("resultDisplay");
let playerScore = 0;
let computerScore = 0;


function startGame(playerChoice) {
    let computerChoice = choices [Math.floor(Math.random() *3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";
}

    else{

    switch(playerChoice) {
        case "Rock":
            result = (computerChoice === "Scissors") ? "YOU WIN!" : "YOU LOSE!";
            break;
        case "Paper":
            result = (computerChoice === "Rock") ? "YOU WIN!" : "YOU LOSE!";
            break;
        case "Scissors":
            result = (computerChoice === "Paper") ? "YOU WIN!" : "YOU LOSE!";   
            break;
    
    }
    if (result === "YOU WIN!") {
        playerScore++;
        document.getElementById("playerScore").textContent = playerScore;
    }   
    else if (result === "YOU LOSE!") {
        computerScore++;
        document.getElementById("computerScore").textContent = computerScore;    

}
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = `RESULT: ${result}`;

}

}
    if (counter == 5) {
    window.alert("GAME OVER! PLAYER WINS!");
    
}

