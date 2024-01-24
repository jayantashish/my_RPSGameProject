let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");




const genCompChoice = ()=>{
    const options = ["rock", "paper", "scissors"];
    const randIdx  = Math.floor(Math.random()*3);
    return options[randIdx];
}


const drawGame = ()=>{
    console.log("Game was drawn");
    msg.innerText = "Game Draw, Play Again!"
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;        console.log("You win");
        // msg.innerText = "You Win!";
        msg.innerText = `You Win!, Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore; 
        console.log("You Lose");
        // msg.innerText = "You Lose";
        msg.innerText = `You Lost, ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice)=>{
    console.log("user choice = ", userChoice);

    //Generate Comp choice
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper
            userWin = compChoice === "paper" ? false: true;
        }else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "scissors" ? false:true;
        }else{
            //rock, paper
            userWin = compChoice === "rock" ? false: true;

        }
        showWinner(userWin, userChoice, compChoice);;

    }

}

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("The choice was clicked", userChoice);
        playGame(userChoice);


    })
})