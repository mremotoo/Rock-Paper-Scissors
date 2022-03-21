
function playerPlay(e){
    let playerAns = e.target.innerText.toLowerCase();
    return playerAns
}

function computerPlay(){
    let randomAnswer = ['rock', 'paper', 'scissors'];
    return(randomAnswer[Math.floor(Math.random() * 3)]);
};

function playRound(e, x, y) {
    x = playerPlay(e); y = computerPlay();
    let roundWinner = ""

        x === "rock" && y === 'scissors' ? roundWinner = "Win!"
        : x === "rock" && y === 'paper' ? roundWinner = "Lose!"
        : x === "rock" && y === 'rock' ? roundWinner = "Draw!"
        
        : x === "paper" && y === 'scissors' ? roundWinner = "Lose!"
        : x === "paper" && y === 'paper' ? roundWinner = "Draw!"
        : x === "paper" && y === 'rock' ? roundWinner = "Win!"

        : x === "scissors" && y === 'scissors' ? roundWinner = "Draw!"
        : x === "scissors" && y === 'paper' ? roundWinner = "Win!"
        : x === "scissors" && y === 'rock' ? roundWinner = "Lose!"
        : undefined;

    displayResults(roundWinner)
}

function displayResults(roundWinner) {

    document.querySelector("h1.roundResult").innerHTML = roundWinner;

    if (roundWinner === "Win!") {
        document.querySelector("h2.playerScore").innerHTML++;
    } else if(roundWinner === "Lose!"){
        document.querySelector("h2.cpuScore").innerHTML++;
    }else {
        return;
    }

    announceWinner()
}

function announceWinner() {
    let playerScore = +document.querySelector("h2.playerScore").innerHTML;
    let cpuScore = +document.querySelector("h2.cpuScore").innerHTML;
    let gameWinner = "";


    if (playerScore === 5) {
        gameWinner = "You win!"
        let body = document.querySelector("body")
        let h1Winner = document.createElement("h1")
        h1Winner.textContent = gameWinner
        body.append(h1Winner)
        selects.forEach(btnSelect => {btnSelect.disabled = true})

    } else if(cpuScore === 5){
        gameWinner = "Computer wins!"
        let body = document.querySelector("body")
        let h1Winner = document.createElement("h1")
        h1Winner.textContent = gameWinner
        body.append(h1Winner)
        selects.forEach(btnSelect => {btnSelect.disabled = true})
    }else {
        return
    }

    // resetGame()
}



const selects = document.querySelectorAll('.btnSelect')
selects.forEach(btnSelect => btnSelect.addEventListener('click', playRound))

// function game() {
    
//     for (let i = 0; i < 5; i++) {
//         let round = playRound();
//         console.log(round);
        
        

//     }

//     //condition ? exprIfTrue : exprIfFalse

// }