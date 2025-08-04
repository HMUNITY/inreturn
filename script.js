const colors = {
    1: 'red', 2: 'orange', 3: 'yellow', 4: 'green', 5: 'blue',
    6: 'violet', 7: 'violet', 8: 'violet', 9: 'violet' // 4 violet regions
};

function createTable(tableId, regionNumber) {
    const tbody = document.getElementById(tableId);
    const isViolet = colors[regionNumber] === 'violet';
    
    for (let row = 1; row <= 21; row++) {
        const tr = document.createElement('tr');
        
        // Row header
        const th = document.createElement('th');
        th.textContent = row;
        th.style.backgroundColor = '#f0f0f0';
        tr.appendChild(th);
        
        // Data cells
        for (let col = 1; col <= 28; col++) {
            const td = document.createElement('td');
            td.textContent = `R${regionNumber}R${row}C${col}`;
            td.classList.add(colors[regionNumber]);
            if (!isViolet) {
                td.classList.add('hoverable');
                td.addEventListener('mouseenter', () => showRadar(td, regionNumber, row, col));
                td.addEventListener('mouseleave', hideRadar);
            }
            if (row % 3 === 0) {
                td.classList.add('highlight');
            }
            tr.appendChild(td);
        }
        
        tbody.appendChild(tr);
    }
}

function showRadar(element, region, row, col) {
    const radar = document.createElement('div');
    radar.classList.add('radar-tooltip');
    radar.textContent = `Region ${region}, Row ${row}, Col ${col}: ${colors[region].toUpperCase()} Zone`;
    document.body.appendChild(radar);
    const rect = element.getBoundingClientRect();
    radar.style.left = `${rect.left + window.scrollX + rect.width / 2}px`;
    radar.style.top = `${rect.top + window.scrollY - 40}px`;
}

function hideRadar() {
    const radar = document.querySelector('.radar-tooltip');
    if (radar) radar.remove();
}

// Initialize 9 regions
for (let i = 1; i <= 9; i++) {
    createTable(`table${i}`, i);
}
