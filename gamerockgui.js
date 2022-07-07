let player = 0;
let machine = 0;
const user = document.getElementById('user-points');
const pc = document.getElementById('pc-points');

function singlePlay(PlayerChoice) {
    
    let asd = ["Filler", "Rock", "Paper", "Scissors"];
    PlayerChoice = PlayerChoice.toLowerCase()
    Playerchoice = PlayerChoice.charAt(0).toUpperCase() + PlayerChoice.slice(1);
    computerPlay = computerPlays();
    if (asd.includes(Playerchoice)) {
        if (Playerchoice == computerPlay) {
            player +=1;
            machine +=1;
            return ["Tie", Playerchoice, computerPlay]; }
        else if (Playerchoice == "Rock" && computerPlay == "Paper")  { 
            machine +=1;
            return ["Loose", Playerchoice, computerPlay] } 
        else if (Playerchoice == "Rock" && computerPlay == "Scissors")  { 
            player +=1;
            return ["Won", Playerchoice, computerPlay]; } 
        else if (Playerchoice == "Paper" && computerPlay == "Rock") { 
            player +=1;
            return ["Won", Playerchoice, computerPlay]; } 
        else if (Playerchoice == "Paper" && computerPlay == "Scissors") { 
            machine +=1;
            return ["Loose", Playerchoice, computerPlay]; } 
        else if (Playerchoice == "Scissors" && computerPlay == "Rock")  { 
            machine +=1;
            return ["Loose", Playerchoice, computerPlay]; } 
        else { 
            player +=1;
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

const btn = document.querySelectorAll('.choice'); // make a nodelist including all the elements that has choice class
const reset = document.getElementById('reset')
reset.addEventListener('click',function(e) {
    player = 0
    machine = 0
    user.textContent = player;
    pc.textContent = machine;
})
btn.forEach((bt) => {   // for every element in the btn nodelist do the following, in this case add and event listener .
    bt.addEventListener('click', function (e) {
        //e.target.style.background = 'blue';
        bt.classList.add('choiced');
        console.log(singlePlay(bt.id));
        user.textContent = player;
        pc.textContent = machine;
        console.log(player);
       
});
})

function removeTransition(e) {
    if(e.propertyName !== 'transform') return; //skip it if its not a transform
    this.classList.remove('choiced');
    
}

const keys = document.querySelectorAll('.key');
console.log(keys)
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

//TODO fix end transition back to original state
