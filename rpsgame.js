let scores = {wins: 0, Losses: 0, Draws: 0};

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
    document.getElementById("demo").innerHTML = "You choose: " + choice +" "+ "Computer choose : " + computerChoice + " and Result: " + result;
};

function clear() {
    scores = {wins: 0, Losses: 0, Draws: 0};
    
    document.getElementById("scores").innerHTML = "Wins: " + scores.wins + ". Losses: " + scores.Losses + ". Draws: " + scores.Draws;

    document.getElementById("demo").innerHTML = "Result";
};