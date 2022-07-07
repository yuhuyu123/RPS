function singlePlay() {
    
    let asd = ["Filler", "Rock", "Paper", "Scissors"];
    let PlayerChoice = window.prompt("Enter your choice: ");
    PlayerChoice = PlayerChoice.toLowerCase()
    Playerchoice = PlayerChoice.charAt(0).toUpperCase() + PlayerChoice.slice(1);
    computerPlay = computerPlays();
    if (asd.includes(Playerchoice)) {
        if (Playerchoice == computerPlay) {
            return ["Tie", Playerchoice, computerPlay]; }
        else if (Playerchoice == "Rock" && computerPlay == "Paper")  { 
            return ["Loose", Playerchoice, computerPlay] } 
        else if (Playerchoice == "Rock" && computerPlay == "Scissors")  { 
            return ["Won", Playerchoice, computerPlay]; } 
        else if (Playerchoice == "Paper" && computerPlay == "Rock") { 
            return ["Won", Playerchoice, computerPlay]; } 
        else if (Playerchoice == "Paper" && computerPlay == "Scissors") { 
            return ["Loose", Playerchoice, computerPlay]; } 
        else if (Playerchoice == "Scissors" && computerPlay == "Rock")  { 
            return ["Loose", Playerchoice, computerPlay]; } 
        else { 
            return ["Won", Playerchoice, computerPlay]; }
    }
    else { return ["Wrong input", Playerchoice] }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function computerPlays() {
    let choices = ["Rock", "Paper", "Scissors"];
    choice = choices[getRandomInt(3)]
    return choice
}

function Game() {
    player = 0;
    machine = 0;
    for (let i = 1; i < 6; i++) {

        round = singlePlay()
        if (round[0] == "Wrong input") {
            i--, console.log("wrong input");
        }
        else if (round[0] == "Won") {
            console.log("Round " + i), player++, console.log("You won, " + round[1] + " beats " + round[2], console.log("Player: " + player + " Computer: " + machine))
        }
        else if (round[0] == "Loose") {
            console.log("Round " + i), machine++, console.log("You lost, " + round[2] + " beats " + round[1], console.log("Player: " + player + " Computer: " + machine))
        }
        else { console.log("Round " + i), machine++, player++, console.log("Tie"), console.log("Player: " + player + " Computer: " + machine) }
    }

    if (player == machine) { console.log("Game finished it was a Tie. "), console.log("Player: " + player + " Computer: " + machine) }
    else if (player > machine) { console.log("You win. "), console.log("Player: " + player + " Computer: " + machine) }
    else {
         console.log("You loose. "), console.log("Player: " + player + " Computer: " + machine) 

    }
}

