
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


    switch(result) {
    case "YOU WIN!":
        if (playerScore === 5) {
            window.alert("CONGRATULATIONS! YOU WON THE GAME!");
            resetGame();
        }
    case "YOU LOSE!":
        if (computerScore === 5) {
            window.alert("SORRY! YOU LOST THE GAME!");
            resetGame();
        }
    
     }
    }
            
    function resetGame() {
    playerDisplay.textContent = "PLAYER: ";
    computerDisplay.textContent = "COMPUTER: ";
    resultDisplay.textContent = "RESULT: ";
    playerScore = 0;
    computerScore = 0;
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
    
 }
}
        
     
   