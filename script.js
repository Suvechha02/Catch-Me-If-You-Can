let currenTile;
let currentPlantTile;
let score = 0;
let gameOver = false;

window.onload = function () {
  setGame();
};
function setGame() {
  // set up the grid board in html

  for (i = 0; i < 9; i++) {
    // i goes to 0-8 , after 9 it stop

    // <div id=0-8></div>
    let tile = document.createElement("div");
    tile.id = i.toString();
    tile.addEventListener("click", selectTile);
    document.getElementById("board").appendChild(tile);
  }
  setInterval(setMole, 1000); // 1000 millisecond = 1 sec
  setInterval(setPlantTile, 2000); // 2000 millisecond = 2 sec
}

function getRandomTile() {
  // Math.random - 0-1 *9 => 0-9 => round dowwn to 0-8 integers
  let num = Math.floor(Math.random() * 9);
  return num.toString();
}
function setMole() {
  if (gameOver) {
    return;
  }
  if (currenTile) {
    currenTile.innerHTML = "";
  }

  let mole = document.createElement("img");
  mole.src = "image/mar.png";

  let num = getRandomTile();
  if (currentPlantTile && currentPlantTile.id == num) {
    return;
  }
  currenTile = document.getElementById(num);
  currenTile.appendChild(mole);
}

function setPlantTile() {
  if (gameOver) {
    return;
  }
  if (currentPlantTile) {
    currentPlantTile.innerHTML = "";
  }

  let plant = document.createElement("img");
  plant.src = "image/pt1.png";

  let num = getRandomTile();
  if (currenTile && currenTile.id == num) {
    return;
  }
  currentPlantTile = document.getElementById(num);
  currentPlantTile.appendChild(plant);
}

function selectTile() {
  if (gameOver) {
    return;
  }
  if (this == currenTile) {
    score += 10;
    document.getElementById("score").innerText = score.toString(); //update score
  } else if (this == currentPlantTile) {
    document.getElementById("score").innerText =
      "Game Over: " + score.toString();
    gameOver = true;
  }
}
