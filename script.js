const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'pink'];
const wordTypes = ['Adjective', 'Noun', 'Verb'];
const emojis = ['😈', '🔥', '💥'];
let angelPosition = { row: 29, col: 0 }; // Default top start
let switchingCells = [];
let currentColorIndex = 0;
let angelHealth = 100;
let moveCount = 0;
let currentStage = "morning";
const movements = { morning: 250, day: 200, evening: 150 };
const speeds = { morning: 1, day: 2, evening: 3 };
let isTutorialWon = false;

const wordPool = {
  verbs: ["run", "jump", "build", "fight", "dance", "sing", "play", "move", "heal", "guard"],
  nouns: ["tree", "river", "house", "stone", "bridge", "tower", "field", "cave", "path", "hill"],
  adjectives: ["tall", "bright", "strong", "calm", "wild", "deep", "old", "new", "fast", "quiet"],
  prepositions: ["in", "over", "under", "through", "beyond", "beside", "above", "below", "around", "across"]
};

function getRandomWord(type) {
  return wordPool[type + "s"][Math.floor(Math.random() * 10)];
}

function getDifficulty(color) {
  const difficulties = { red: 10, yellow: 30, blue: 60 };
  return difficulties[color] || 0;
}

function createMap() {
  const map = document.getElementById('map');
  const table = document.createElement('table');
  let pinkCount = 0;
  const pinkTarget = 246;

  while (switchingCells.length < 4) {
    const row = Math.floor(Math.random() * 30);
    const col = Math.floor(Math.random() * 30);
    const cellId = `${row}-${col}`;
    if (!switchingCells.includes(cellId)) switchingCells.push(cellId);
  }

  for (let row = 0; row < 30; row++) {
    const tr = document.createElement('tr');
    for (let col = 0; col < 30; col++) {
      const td = document.createElement('td');
      const cellId = `${row}-${col}`;
      let color;

      const isSwitching = switchingCells.includes(cellId);
      if (isSwitching) {
        color = ['red', 'yellow', 'blue'][currentColorIndex % 3];
        td.dataset.difficulty = getDifficulty(color);
      } else {
        const shouldBePink = pinkCount < pinkTarget && Math.random() < 0.3 && (row + col) % 3 === 0;
        if (shouldBePink && pinkCount < pinkTarget) {
          color = 'pink';
          pinkCount++;
        } else {
          color = getRandomColor(true);
        }
      }

      td.className = `cell ${color}`;
      td.dataset.color = color;
      td.dataset.wordType = wordTypes[Math.floor(Math.random() * wordTypes.length)];
      td.dataset.rooms = color === 'pink' ? 0 : Math.floor(Math.random() * 3) + 1;
      td.dataset.health = color === 'pink' ? 0 : Math.floor(Math.random() * 100);
      td.textContent = (row === angelPosition.row && col === angelPosition.col) ? '👼' : (color === 'pink' ? emojis[Math.floor(Math.random() * emojis.length)] : '');
      td.id = `cell-${row}-${col}`;

      if (!isSwitching) {
        td.classList.add('hoverable');
        td.addEventListener('mouseenter', showRadar);
        td.addEventListener('mouseleave', hideRadar);
      }

      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  while (pinkCount < pinkTarget) {
    const row = Math.floor(Math.random() * 30);
    const col = Math.floor(Math.random() * 30);
    const cellId = `${row}-${col}`;
    if (!switchingCells.includes(cellId)) {
      const cell = document.getElementById(`cell-${row}-${col}`);
      cell.className = 'cell pink';
      cell.dataset.color = 'pink';
      cell.dataset.rooms = 0;
      cell.dataset.health = 0;
      cell.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      cell.classList.add('hoverable');
      cell.addEventListener('mouseenter', showRadar);
      cell.addEventListener('mouseleave', hideRadar);
      pinkCount++;
    }
  }

  map.appendChild(table);
  setInterval(toggleSwitchingCells, 5000);
  startTutorial();
  document.addEventListener('keydown', moveAngel);
}

function startTutorial() {
  let adjectiveChoice = prompt("Angels to Demons: Select Nohari or Johari adjectives?");
  let startPosition = prompt("Start from bottom (Johari) or top (Nohari)?");
  if (startPosition.toLowerCase() === "bottom") {
    angelPosition = { row: 0, col: 0 };
  } else {
    angelPosition = { row: 29, col: 0 };
  }
  console.log(`Adjective pool: ${adjectiveChoice}, Start: ${startPosition}`);
  updateAngelPosition();
}

function toggleSwitchingCells() {
  currentColorIndex = (currentColorIndex + 1) % 3;
  switchingCells.forEach(cellId => {
    const cell = document.getElementById(`cell-${cellId}`);
    if (cell) {
      const color = ['red', 'yellow', 'blue'][currentColorIndex];
      cell.className = `cell ${color}`;
      cell.dataset.color = color;
      cell.dataset.difficulty = getDifficulty(color);
    }
  });
}

function moveAngel(event) {
  if (!isTutorialWon) {
    const { row, col } = angelPosition;
    let newRow = row;
    let newCol = col;
    let direction = "";

    switch (event.key) {
      case 'ArrowUp': newRow = Math.max(0, row - 1); direction = "up"; break;
      case 'ArrowDown': newRow = Math.min(29, row + 1); direction = "down"; break;
      case 'ArrowLeft': newCol = Math.max(0, col - 1); direction = "left"; break;
      case 'ArrowRight': newCol = Math.min(29, col + 1); direction = "right"; break;
    }

    const newCell = document.getElementById(`cell-${newRow}-${newCol}`);
    if (newCell && moveCount < movements[currentStage]) {
      moveCount++;
      const currentCell = document.getElementById(`cell-${row}-${col}`);
      currentCell.textContent = currentCell.dataset.color === 'pink' ? emojis[Math.floor(Math.random() * emojis.length)] : '';

      angelPosition = { row: newRow, col: newCol };
      newCell.textContent = '👼';

      if (moveCount % 4 === 0) { // Every 4th move
        placeRandomWord(direction);
      }

      if (newCell.dataset.color === 'pink') {
        demonGuessPreposition();
      }

      if (moveCount === movements[currentStage]) {
        nextStage();
      }

      updateHealth();
    }
  }
}

function placeRandomWord(direction) {
  let wordType = getRandomWordType();
  let word = getRandomWord(wordType);
  let { row, col } = angelPosition;
  switch (wordType) {
    case "verb": col--; break;
    case "noun": col++; break;
    case "adjective": row += (direction === "up" ? -1 : direction === "down" ? 1 : 0); break;
    case "preposition": break; // Handled by Demons
  }
  let cell = document.getElementById(`cell-${row}-${col}`);
  if (cell) cell.textContent = word;
}

function getRandomWordType() {
  let types = ["verb", "noun", "adjective", "preposition"];
  return types[Math.floor(Math.random() * types.length)];
}

function demonGuessPreposition() {
  let preposition = getRandomWord("preposition");
  let guess = prompt(`Demon guess: Is the preposition ${preposition}? (yes/no)`);
  if (guess === "yes") {
    angelHealth -= 10;
    console.log(`Correct preposition! Angel health: ${angelHealth}%`);
  } else {
    console.log("False-go! Uninhabited island (30s spectator mode)");
    setTimeout(() => console.log("Back from island"), 30000);
  }
}

function nextStage() {
  if (currentStage === "morning") {
    currentStage = "day";
    angelHealth += 10;
  } else if (currentStage === "day") {
    currentStage = "evening";
    angelHealth += 10;
  } else {
    endMatch();
  }
  moveCount = 0;
  console.log(`New stage: ${currentStage}, Speed: ${speeds[currentStage]}x, Health: ${angelHealth}%`);
  if (angelHealth > 120) toggleMindmap();
}

function updateHealth() {
  if (moveCount % 250 === 0 && angelHealth < 200) angelHealth += 10; // Cap at 200%
  console.log(`Angel Health: ${angelHealth}%`);
  if (angelHealth <= 0) endMatch();
}

function toggleMindmap() {
  console.log("Offline Festive Mindmap activated! Toggle comments: 'Avoid pink cells'");
  // Simulate comment toggle
}

function endMatch() {
  if (!isTutorialWon) {
    isTutorialWon = checkTutorialWin();
    if (isTutorialWon) {
      console.log("Tutorial won! Angels victorious!");
    } else {
      console.log("Tutorial failed! Game over.");
    }
  }
  let choice = prompt("Match ended! Pink side or Colored side? (Enter 'pink' or 'colored')");
  if (choice) {
    if (choice.toLowerCase() === "pink") {
      console.log("Pink Side chosen: -10% Angel health");
      angelHealth -= 10;
    } else {
      console.log("Colored Side chosen: +10% Angel health");
      angelHealth += 10;
    }
    resetGame();
  }
}

function checkTutorialWin() {
  return switchingCells.every(cellId => {
    const cell = document.getElementById(`cell-${cellId}`);
    return cell && cell.dataset.color === 'violet';
  });
}

function resetGame() {
  angelPosition = { row: 29, col: 0 }; // Reset to top
  moveCount = 0;
  currentStage = "morning";
  angelHealth = 100;
  switchingCells.forEach(cellId => {
    const cell = document.getElementById(`cell-${cellId}`);
    if (cell) {
      cell.dataset.color = 'red';
      cell.className = 'cell red';
      cell.dataset.rooms = 0;
      cell.dataset.health = 100;
    }
  });
  updateAngelPosition();
}

function updateAngelPosition() {
  const cell = document.getElementById(`cell-${angelPosition.row}-${angelPosition.col}`);
  if (cell) cell.textContent = '👼';
}

function showRadar(event) {
  const cell = event.target;
  const color = cell.dataset.color;
  const wordType = cell.dataset.wordType;
  const rooms = cell.dataset.rooms;
  const health = cell.dataset.health;
  const difficulty = cell.dataset.difficulty || 0;
  const cellId = cell.id.replace('cell-', 'R').replace('-', 'C');

  let radarInfo = `${cellId}: ${color.toUpperCase()}<br>Word: ${wordType}`;
  if (color !== 'pink') {
    radarInfo += `<br>Rooms: ${rooms}<br>Health: ${health}%<br>Difficulty: ${difficulty}%`;
  }
  if (color === 'blue') {
    radarInfo += '<br>Radar: Nearby Demon zones';
  } else if (color === 'pink') {
    radarInfo += '<br>Pink River: Demon activity';
  }

  const radarPopup = document.createElement('div');
  radarPopup.className = 'radar-popup';
  radarPopup.innerHTML = radarInfo;
  document.body.appendChild(radarPopup);

  const rect = cell.getBoundingClientRect();
  radarPopup.style.left = `${rect.left + window.scrollX + rect.width / 2}px`;
  radarPopup.style.top = `${rect.top + window.scrollY - 80}px`;
}

function hideRadar() {
  const popup = document.querySelector('.radar-popup');
  if (popup) popup.remove();
}

document.addEventListener('DOMContentLoaded', createMap);
