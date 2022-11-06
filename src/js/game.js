import createGoblin from './create-goblin';

const cells = document.querySelectorAll('.cell');
let lastCell = null;

function removeEnemy() {
  if (lastCell === null) {
    return;
  }
  lastCell.firstChild.remove();
}

function showEnemy(cell) {
  const enemy = createGoblin();
  cell.appendChild(enemy);
}

export default function randomChangeEnemy() {
  const index = Math.floor(Math.random() * cells.length);
  const cell = cells[index];
  if (cell === lastCell) {
    return;
  }
  removeEnemy();
  lastCell = cell;
  showEnemy(lastCell);
}

setInterval(randomChangeEnemy, 2000);
