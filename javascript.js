const signs = ["✊", "✋", "✌️"];
let chosenSigns = signs[Math.floor(Math.random() * signs.length)];

const ai = document.querySelector(".ai-side");

const playerSide = document.querySelector('.player-side');
const playerChoose = document.querySelectorAll('.rock, .paper, .scissors');

prepareSign = function() {
    ai.innerText = "✊";
    const timer1 = setTimeout(function() {ai.innerText = "✋"}, 150);
    const timer2 = setTimeout(function() {ai.innerText = "✌️"}, 300);

    if(ai.classList.contains("stop")){
        ai.innerText = chosenSigns;
        clearTimeout(timer1);
        clearTimeout(timer2);
    }
};

prepareSign();
setInterval(prepareSign, 450);

const playerRock = document.querySelector(".rock");
const playerPaper = document.querySelector(".paper");
const playerScissors = document.querySelector(".scissors");

const playerHeader = document.querySelector('.player-header');

playerChoose.forEach(item => {    
    item.addEventListener('click', function(event){
        ai.classList.add("stop");
        if (item.classList.contains("rock") && playerSide.classList.contains("remove")) {
            playerSide.classList.add("player-rock");
            playerRock.classList.add("picked-bg");
            playerSide.classList.remove("remove");
        } else if (item.classList.contains("paper") && playerSide.classList.contains("remove")) {
            playerSide.classList.add("player-paper");
            playerPaper.classList.add("picked-bg");
            playerSide.classList.remove("remove");
        } else if (item.classList.contains("scissors") && playerSide.classList.contains("remove")) {
            playerSide.classList.add("player-scissors");
            playerScissors.classList.add("picked-bg");
            playerSide.classList.remove("remove");
        };
     
        if (playerSide.classList.contains("player-rock")) {
            if (chosenSigns === "✊") {
                playerHeader.innerText = "Draw!";
            } else if (chosenSigns === "✋") {
                 playerHeader.innerText = "You lost.";
            } else if (chosenSigns === "✌️") {
                playerHeader.innerText = "You win!";
            }
        } else if (playerSide.classList.contains("player-paper")) {
            if (chosenSigns === "✊") {
                playerHeader.innerText = "You Win!";
            } else if (chosenSigns === "✋") {
                 playerHeader.innerText = "Draw!";
            } else if (chosenSigns === "✌️") {
                playerHeader.innerText = "You lost.";
            }
        } else if (playerSide.classList.contains("player-scissors")) {
            if (chosenSigns === "✊") {
                playerHeader.innerText = "You lost.";
            } else if (chosenSigns === "✋") {
                 playerHeader.innerText = "You Win!";
            } else if (chosenSigns === "✌️") {
                playerHeader.innerText = "Draw!";
            }
        }
    })});
    
const reset = document.querySelector(".reset");

reset.addEventListener('click', function(event){
    location.reload();
})
