const words = ["HELLO", "WORLD", "HTML", "CSS", "JAVASCRIPT", "GAME"];
const gridSize = 10;
let grid = [];

function initializeGrid() {
    for (let i = 0; i < gridSize; i++) {
        let row = [];
        for (let j = 0; j < gridSize; j++) {
            const randomChar = String.fromCharCode(65 + Math.floor(Math.random() * 26));
            row.push(randomChar);
        }
        grid.push(row);
    }
}

function displayGrid() {
    const wordGrid = document.getElementById("word-grid");
    wordGrid.innerHTML = "";

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const cell = document.createElement("div");
            cell.className = "cell";
            cell.textContent = grid[i][j];
            wordGrid.appendChild(cell);
        }
    }
}

function displayWords() {
    const wordList = document.getElementById("word-list");
    wordList.innerHTML = "";

    for (const word of words) {
        const listItem = document.createElement("div");
        listItem.textContent = word;
        wordList.appendChild(listItem);
    }
}

function startNewGame() {
    grid = [];
    initializeGrid();
    displayGrid();
    displayWords();
}

document.getElementById("new-game-button").addEventListener("click", startNewGame);
startNewGame();
