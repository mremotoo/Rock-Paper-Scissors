function computerPlay (){
    let randomAnswer = ["rock", "paper", "scissors"];
    return randomAnswer[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === "rock"){
        if(computerSelection === "rock"){
            return("Draw!")
        }else if(computerSelection === "paper"){
            return("Lose!")
        }else{
            return("Win!")
        }
    }

    if(playerSelection === "paper"){
        if(computerSelection === "rock"){
            return("Win!")
        }else if(computerSelection === "paper"){
            return("Draw!")
        }else{
            return("Lose!")
        }
    }

    if(playerSelection === "scissors"){
        if(computerSelection === "rock"){
            return("Lose!")
        }else if(computerSelection === "paper"){
            return("Win!")
        }else{
            return("Draw!")
        }
    }
}

function game(){
    
    for(let i = 0; 1 < 5; i++){
        let computerScore = 0;
        let playerScore = 0;
        
    
    }
    //return winner
}

const playerSelection = "paper";
const computerSelection = computerPlay();