import createGoblin from './create-goblin';

const cells = [...document.querySelectorAll('.cell')];
// let hitCounter = document.getElementById("hit-counter");
let lastCell = null;
// let timeUp = false;
// let hits = 0;

function removeEnemy() {
  if (lastCell === null) {
    return;
  }
  cells[lastCell].firstChild.remove();
}

function showEnemy(index) {
  const enemy = createGoblin();
  index.appendChild(enemy);
}

function randomChangeEnemy() {
  const index = Math.floor(Math.random() * cells.length);
  const cell = cells[index];
  if (cell === lastCell) {
    return randomChangeEnemy();
  }

  removeEnemy();
  lastCell = cell;
  showEnemy(lastCell);
  return cell;
}

function startGame() {
  // hitCounter.textContent = '0';
  //  timeUp = false;
  //  hits = 0;
  setTimeout(randomChangeEnemy(cells), 2000);
}

startGame();
