const container = document.getElementById('container');
const colours = ['pink', 'wheat', 'green', 'yellow', 'red', 'lightblue'];
const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));

    square.addEventListener('mouseout', () => removeColor(square));

    container.appendChild(square);
}

function setColor(element) {
    const colour = getRandomColor();
    element.style.background = colour;
    element.style.boxShadow = `0 0 2px ${colour}, 0 0 10px ${colour}`;

}

function removeColor(element) {
    element.style.background = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000';
    
}

function getRandomColor() {
    return colours[Math.floor(Math.random() * colours.length)];
}