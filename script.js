const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'pink'];
const wordTypes = ['Adjective', 'Noun', 'Verb'];

function getRandomColor(excludeViolet = false) {
    const availableColors = excludeViolet ? colors.slice(0, -2) : colors;
    return availableColors[Math.floor(Math.random() * availableColors.length)];
}

function createMap() {
    const map = document.getElementById('map');
    const table = document.createElement('table');
    const violetCells = new Set();

    // Randomly select 4 violet 10x10 regions
    while (violetCells.size < 4) {
        const startRow = Math.floor(Math.random() * (189 - 10));
        const startCol = Math.floor(Math.random() * (63 - 10));
        violetCells.add(`${startRow}-${startCol}`);
    }

    // Create 63x189 grid
    for (let row = 0; row < 189; row++) {
        const tr = document.createElement('tr');
        tr.innerHTML = `<th>${row + 1}</th>`;
        for (let col = 0; col < 63; col++) {
            const td = document.createElement('td');
            let isViolet = false;

            // Check if cell is in a violet region
            for (let [startRow, startCol] of violetCells) {
                startRow = parseInt(startRow);
                startCol = parseInt(startCol);
                if (row >= startRow && row < startRow + 10 && col >= startCol && col < startCol + 10) {
                    isViolet = true;
                    break;
                }
            }

            const color = isViolet ? 'violet' : (Math.random() < 0.1 ? 'pink' : getRandomColor(true));
            td.className = `cell ${color}`;
            td.dataset.color = color;
            td.dataset.wordType = wordTypes[Math.floor(Math.random() * wordTypes.length)];
            td.textContent = `R${row + 1}C${col + 1}`;

            if (!isViolet) {
                td.classList.add('hoverable');
                td.addEventListener('mouseenter', showRadar);
                td.addEventListener('mouseleave', hideRadar);
            }

            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    map.appendChild(table);
}

function showRadar(event) {
    const cell = event.target;
    const color = cell.dataset.color;
    const wordType = cell.dataset.wordType;
    const cellId = cell.textContent;

    let radarInfo = `${cellId}: ${color.toUpperCase()}<br>Word: ${wordType}`;
    if (color === 'blue') {
        radarInfo += '<br>Radar: Full map visibility';
    } else if (color === 'pink') {
        radarInfo += '<br>Pink River: Demon activity zone';
    }

    const radarPopup = document.createElement('div');
    radarPopup.className = 'radar-popup';
    radarPopup.innerHTML = radarInfo;
    document.body.appendChild(radarPopup);

    const rect = cell.getBoundingClientRect();
    radarPopup.style.left = `${rect.left + window.scrollX + rect.width / 2}px`;
    radarPopup.style.top = `${rect.top + window.scrollY - 60}px`;
}

function hideRadar() {
    const popup = document.querySelector('.radar-popup');
    if (popup) popup.remove();
}

document.addEventListener('DOMContentLoaded', createMap);
