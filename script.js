
function playerPlay(){
    let playerAns = prompt("Rock, Paper, or Scissors?").toLowerCase();
    return(playerAns);
}

function computerPlay(){
    let randomAnswer = ['rock', 'paper', 'scissors'];
    return(randomAnswer[Math.floor(Math.random() * 3)]);
};

function playRound(x, y) {
    x = playerPlay(); y = computerPlay();

    return x === "rock" && y === 'scissors' ? "Win!"
        : x === "rock" && y === 'paper' ? "Lose!"
        : x === "rock" && y === 'rock' ? "Draw!"
        
        : x === "paper" && y === 'scissors' ? "Lose!"
        : x === "paper" && y === 'paper' ? "Draw!"
        : x === "paper" && y === 'rock' ? "Win!"

        : x === "scissors" && y === 'scissors' ? "Draw!"
        : x === "scissors" && y === 'paper' ? "Win!"
        : x === "scissors" && y === 'rock' ? "Lose!"
        : undefined;

}

function game() {
    
    for (let i = 0; i < 5; i++) {
        let round = playRound();
        console.log(round);
        
        

    }

    //condition ? exprIfTrue : exprIfFalse

}

game()