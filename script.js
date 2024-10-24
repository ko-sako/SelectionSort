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

// Display the array
function displayArray(array) {
    arrayContainer.innerHTML = '';
    array.forEach(value => {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = `${value}px`;
        arrayContainer.appendChild(bar);
    });
}



// Add event listener to start sorting button
startButton.addEventListener('click', () => {
    const array = generateArray(10); // Generate Array which have 10 elements
    displayArray(array);
    selectionSort(array);
})

// Visualization of Selection Sort
// Visualization of selection sort
async function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;
        const bars = document.querySelectorAll('.bar');

        // Find the minimum value
        for (let j = i + 1; j < array.length; j++) {
            bars[minIndex].classList.remove('highlight');
            bars[j].classList.add('highlight');

            await new Promise(resolve => setTimeout(resolve, 500)); // Delay

            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
    }
}