
let scores = JSON.parse(localStorage.getItem('js_scores')) || {wins: 0, Losses: 0, Draws: 0};

const pastScore = scores;
const pastResult = localStorage.getItem('js_demo');

// set screen
document.getElementById("scores").innerHTML = "Wins: " + pastScore.wins + ". Losses: " + pastScore.Losses + ". Draws: " + pastScore.Draws;
document.getElementById("demo").innerHTML = pastResult;
document.getElementById("result").innerHTML = localStorage.getItem('res');

function RPSGame(choice) {
    let result = '';
    const randomNumber = Math.random();
    let computerChoice = "";
    const choices = ["Rock", "Paper", "Scissors"];

    // Computer random choice calculation
    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerChoice = "Rock";
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
        }

    // random choice picking
    if (choice === 'RandomChoice') { 
        choice = choices[Math.floor(Math.random() * choices.length)]
     }

    // compare choices
    if (choice === computerChoice) {
        result = "Tie!";
    } else if (
        (choice === "Rock" && computerChoice === "Scissors") 
        || (choice === "Paper" && computerChoice === "Rock") 
        || (choice === "Scissors" && computerChoice === "Paper")
    ){
        result = "You Win!";

    } else if (
        (choice === "Rock" && computerChoice === "Paper") 
        || (choice === "Paper" && computerChoice === "Scissors") 
        || (choice === "Scissors" && computerChoice === "Rock")
    ) {
        result = "You Lose!";
    }

    // update scores
    if (result === "You Win!") {
        scores.wins++;
    } else if (result === "You Lose!") {
        scores.Losses++;
    } else {
        scores.Draws++;
    }

    document.getElementById("scores").innerHTML = "Wins: " + scores.wins + ". Losses: " + scores.Losses + ". Draws: " + scores.Draws

    // update HTML demo attribute
    const finalResult = `You 
        <img src="images/${choice.toLowerCase()}-emoji.png"
            class="move-icon"> 
        <img src="images/${computerChoice.toLowerCase()}-emoji.png" class="move-icon">
        Computer`;

    document.getElementById("result").innerHTML = result;
    document.getElementById("demo").innerHTML = finalResult;
    // `You ${choice}  ${computerChoice} Computer`;

    localStorage.setItem("js_scores", JSON.stringify(scores));
    localStorage.setItem("js_demo", finalResult);
    localStorage.setItem("res", result);
};

function clear() {
    scores = {wins: 0, Losses: 0, Draws: 0};
    localStorage.removeItem("js_demo");
    localStorage.removeItem("js_scores");
    document.getElementById("scores").innerHTML = "Wins: " + scores.wins + ". Losses: " + scores.Losses + ". Draws: " + scores.Draws;

    document.getElementById("demo").innerHTML = "Result";
    document.getElementById("result").innerHTML = "";
};

// shows date
function getDate() {
    document.getElementById("date_button").innerHTML = Date();
}

// get date button
document.getElementById("datebutton").addEventListener("click",getDate)

// button event listners
document.body.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        RPSGame("RandomChoice");
    } else if (event.key === "r") {
        RPSGame("Rock");
    } else if (event.key === "p") {
        RPSGame("Paper");
    } else if (event.key === "s") {
        RPSGame("Scissors");
    } else if (event.key === "c") {
        clear();
    }
});


document.querySelector(".js-random-button").addEventListener("click",() => {
        RPSGame("RandomChoice");
});

document.querySelector(".js-rock-button").addEventListener("click",() => {
        RPSGame("Rock");
});

document.querySelector(".js-paper-button").addEventListener("click",() => {
        RPSGame("Paper");
});

document.querySelector(".js-scissors-button").addEventListener("click",() => {
        RPSGame("Scissors");
});

document.querySelector(".js-reset-score").addEventListener("click",() => {
        clear();
});