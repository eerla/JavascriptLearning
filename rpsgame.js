

function RPSGame(choice) {
    let result = '';
    const randomNumber = Math.random();
    let computerChoice = "";

    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerChoice = "Rock";
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
        }

    // console.log("yourChoice: " + choice + "  computerChoice: " + computerChoice);

    if (choice === computerChoice) {
        result = "Tie!";
    }
    else if (
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

    // console.log(result);

    document.getElementById("demo").innerHTML = "You choose: " + choice +" "+ "Computer choose : " + computerChoice + " and Result: " + result;
}







