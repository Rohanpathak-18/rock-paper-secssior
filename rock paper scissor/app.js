let userScore = 0;
let computerScore = 0;
const msg = document.querySelector("#msg");
const playerPoints = document.querySelector("#user-score");
const computerPoints = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        
        const options = ["Rock", "Paper", "Scissors"];
        let randIndx = Math.floor(Math.random() * 3);
        let compChoice = options[randIndx];
        playGame(userChoice, compChoice);
    });
});

const playGame = (userChoice, compChoice) => {
    console.log("User Choice = ", userChoice);
    console.log("Computer Choice = ", compChoice);
    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "Rock") {
            userWin = compChoice === "Scissors" ? true : false;
        }
        else if (userChoice === "Paper") {
            userWin = compChoice === "Rock" ? true : false;
        }
        else {
            userWin = compChoice === "Paper" ? true : false;
        }
        showWinner(userChoice, userWin, compChoice);
    }

};

const drawGame = () => {r
    msg.innerText = "Game was draw! Play again";
    console.log("Game was draw");
}

const showWinner = (userChoice, userWin, compChoice) => {
    if (userWin) {
        userScore++;
        playerPoints.innerText = userScore;
        console.log(`Player Win! Your ${userChoice} beats ${compChoice}`);
        msg.innerText = `Player Win! Your ${userChoice} beats ${compChoice}`;
    }
    else {
        computerScore++;
        computerPoints.innerText = computerScore;
        console.log(`Player lose! ${compChoice} beats Your ${userChoice}`);
        msg.innerText =` Player lose! ${compChoice} beats Your ${userChoice}`;
    }
}