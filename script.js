
function playerPlay(){
    let playerAns = prompt("Rock, Paper, or Scissors?").toLowerCase();
    return(playerAns);
}

function computerPlay(){
    let randomAnswer = ['rock', 'paper', 'scissors'];
    return(randomAnswer[Math.floor(Math.random() * 3)]);
};

function playRound(x, y){
   
    if(x === "rock"){
        if(y === "rock"){
            return("Draw!");
        }else if(y === "paper"){
            return("Lose!");
        }else{
            return("Win!");
        }
    }

    if(x === "paper"){
        if(y === "rock"){
            return("Win!");
        }else if(y === "paper"){
            return("Draw!");
        }else{
            return("Lose!");
        }
    }

    if(x === "scissors"){
        if(y === "rock"){
            return("Lose!");
        }else if(y === "paper"){
            return("Win!");
        }else{
            return("Draw!");
        }
    }
}

console.log(playRound(playerPlay(), computerPlay()));