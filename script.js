const arrayContainer = document.getElementById('array-container');
const startButton = document.getElementById('start-button');

// Generate a random integer array
function generateArray(size) {
    const array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * 100) + 10); // Range from 10 to 109
    }
    return array;
}

