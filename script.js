const colors = ['red', 'yellow', 'blue', 'violet', 'pink'];
const adjectives = {
  johari: ["kind", "brave", "wise", "calm", "happy", "strong", "gentle", "loyal", "creative", "patient"],
  nohari: ["arrogant", "lazy", "rude", "greedy", "shy", "angry", "cold", "clumsy", "jealous", "nervous"]
};
let angelPositions = { left: { row: 0, col: 2 }, right: { row: 0, col: 2 } };
let switchingCells = { left: [], right: [] };
let angelHealth = { left: 100, right: 100 };
let moveCount = { left: 0, right: 0 };
let currentStage = "morning";
const movements = { morning: 250, day: 200, evening: 150 };
let isGameStarted = false;

function createMap(side) {
  const mapId = side === "left" ? "left-map" : "right-map";
  const mapContainerId = side === "left" ? "left-map-container" : "right-map-container";
  const map = document.getElementById(mapId);
  const mapContainer = document.getElementById(mapContainerId);
  const table = document.createElement('table');
  let pinkCount = 0;
  const pinkTarget = 246;

  while (switchingCells[side].length < 4) {
    const row = Math.floor(Math.random() * 250);
    const col = Math.floor(Math.random() * 5);
    const cellId = `${side}-${row}-${col}`;
    if (!switchingCells[side].includes(cellId)) switchingCells[side].push(cellId);
  }

  for (let row = 0; row < 250; row++) {
    const tr = document.createElement('tr');
    for (let col = 0; col < 5; col++) {
      const td = document.createElement('td');
      const cellId = `${side}-${row}-${col}`;
      let color;

      const isSwitching = switchingCells[side].includes(cellId);
      if (isSwitching) {
        color = colors[Math.floor(Math.random() * 3)]; // Red, Yellow, Blue
      } else {
        const shouldBePink = pinkCount < pinkTarget && Math.random() < 0.5;
        if (shouldBePink && pinkCount < pinkTarget) {
          color = 'pink';
          pinkCount++;
        } else {
          color = colors[Math.floor(Math.random() * (colors.length - 1))]; // Exclude pink
        }
      }

      td.className = `cell ${color}`;
      td.dataset.color = color;
      td.textContent = (row === angelPositions[side].row && col === angelPositions[side].col) ? '👼' : (color === 'pink' ? '😈' : '');
      td.id = cellId;

      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  map.appendChild(table);
  mapContainer.style.maxHeight = isGameStarted ? '600px' : '100px';
}

function startGame() {
  if (!isGameStarted) {
    createMap("left");
    createMap("right");
    isGameStarted = true;
  }
}

function moveAngel(event) {
  if (isGameStarted) {
    ['left', 'right'].forEach(side => {
      if (moveCount[side] < movements[currentStage]) {
        const { row, col } = angelPositions[side];
        let newRow = row;
        let newCol = col;

        switch (event.key) {
          case 'a': newCol = Math.max(0, col - 1); break; // Left
          case 'w': newRow = Math.max(0, row - 1); break; // Up (front)
          case 'd': newCol = Math.min(4, col + 1); break; // Right
        }

        const newCell = document.getElementById(`${side}-${newRow}-${newCol}`);
        if (newCell) {
          const currentCell = document.getElementById(`${side}-${row}-${col}`);
          currentCell.textContent = currentCell.dataset.color === 'pink' ? '😈' : '';
          angelPositions[side] = { row: newRow, col: newCol };
          newCell.textContent = '👼';
          moveCount[side] = (moveCount[side] || 0) + 1;

          if (moveCount[side] === movements[currentStage]) {
            nextStage(side);
          }
        }
      }
    });
  }
}

function nextStage(side) {
  if (currentStage === "morning") currentStage = "day";
  else if (currentStage === "day") currentStage = "evening";
  else return;
  moveCount[side] = 0;
  angelHealth[side] += 10;
  console.log(`New stage: ${currentStage}, Health: ${angelHealth[side]}%`);
}

document.getElementById('enlarge-btn').addEventListener('click', () => {
  isGameStarted = true;
  document.getElementById('left-map-container').style.maxHeight = '600px';
  document.getElementById('right-map-container').style.maxHeight = '600px';
  startGame();
});

document.getElementById('minimize-btn').addEventListener('click', () => {
  isGameStarted = false;
  document.getElementById('left-map-container').style.maxHeight = '100px';
  document.getElementById('right-map-container').style.maxHeight = '100px';
  angelPositions = { left: { row: 0, col: 2 }, right: { row: 0, col: 2 } };
  moveCount = { left: 0, right: 0 };
  currentStage = "morning";
  angelHealth = { left: 100, right: 100 };
  // Reset maps (simplified for demo)
  document.getElementById('left-map').innerHTML = '';
  document.getElementById('right-map').innerHTML = '';
});

document.addEventListener('keydown', moveAngel);
