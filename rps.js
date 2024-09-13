const choiceBtn = document.querySelectorAll(".choiceBtn");
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
let player;
let computer;
function computer1(){
  const random = Math.floor(Math.random() * 3) + 1;
  switch (random) {
    case 1:
      computer = "🪨"
      break;
    case 2: 
      computer = "🧻"
    break;
    case 3: 
    computer = "✂️"
      break;
  }
};


function players(){
    if (player === computer ) {
        return "draw";
    } else if((player === "🪨" && computer === "✂️") || (player === "🧻" && computer === "🪨" ) || (player === "✂️" && computer === "🧻")) {
        return "YOU WIN"
    } else {
      return "YOU LOOOSSSERRR"
    }

};

console.log(players());

choiceBtn.forEach((button) => {
  button.addEventListener("click", () => {
    player = button.textContent;
    console.log(player);
    computer1();
    playerText.textContent = `${player}`;
    computerText.textContent = `${computer}`;
    resultText.textContent = players();
  })
});
