const gridContainer = document.querySelector('.grid');
const resetButton = document.querySelector('.reset');
const blackButton = document.querySelector('.black');
const eraseButton = document.querySelector('.erase');
const randomButton = document.querySelector('.random');

let currentColor = 'black';
let userGridSize = 50;

// function to create grid
function createGrid(userGridSize) {
    for(let i=0; i<userGridSize; i++) {

        let rows = document.createElement('div');
        rows.classList.add('rows');
        gridContainer.appendChild(rows);

        for(let j=0; j<userGridSize; j++) {
            let columns = document.createElement('div');
            columns.classList.add('columns');
            rows.appendChild(columns);
        }
    }
    addHoverEffect();
}
createGrid(userGridSize);

document.querySelector('.setSize').onclick = function () {
    userGridSize = document.querySelector('.text').value;
    if(userGridSize > 100) {
        alert("Sorry, this tool only grids upto 100 X 100");
        userGridSize = 50;
    }
    clearGrid();
    createGrid(userGridSize);
    displayGridSize();
}

function displayGridSize() {
    document.querySelector('.infoLabel').textContent = `Size of canvas: ${userGridSize} X`
}

function clearGrid() {
    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);    
    }
}
function addHoverEffect() {
    // Each 'column' item is a cube. Selects all.
    const columns = document.querySelectorAll('.columns');
    columns.forEach(square => {
        square.addEventListener('mouseover', () => {
            // Remove existing color classes
            // square.classList.remove('black', 'white');
            if (currentColor === "random") {
                // Apply a random color
                square.style.backgroundColor = getRandomColor();
            } else {
                // square.style.backgroundColor = '';
                // // Add the current color class
                // square.classList.add(currentColor);
                square.style.backgroundColor = currentColor;
            }
        });
    });
}

blackButton.addEventListener('click', () => {
    currentColor = "black";
});
eraseButton.addEventListener('click', () => {
    currentColor = "white";
});
randomButton.addEventListener('click', () => {
    currentColor = "random";
});

resetButton.addEventListener('click', () => {
    clearGrid();
    createGrid(userGridSize);
})
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for(let i=0; i<6; i++) {
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}