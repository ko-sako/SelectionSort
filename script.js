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

// Visualization of Selection Sort
async function selectionSort(array) {
    for (let i=0; i < array.length-1; i++) {
        const bars = document.querySelectorAll('.bar');
        let minIndex = i;

        bars[i].classList.add('highlight');

        // Find the minimum value
        for (let j=i+1; j < array.length; j++) {
            //bars[minIndex].classList.remove('highlight');
            bars[j-1].classList.remove('highlight2');
            bars[j].classList.add('highlight2');

            await new Promise(resolve => setTimeout(resolve, 100)); // Delay

            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the minimum value
        if (minIndex !== i) {
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
            displayArray(array);
        }
    }
}

// Add event listener to start sorting button
startButton.addEventListener('click', () => {
    const array = generateArray(10); // Generate Array which have 10 elements
    displayArray(array);
    selectionSort(array);
})