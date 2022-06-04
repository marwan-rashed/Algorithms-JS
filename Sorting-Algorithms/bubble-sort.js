console.log('Bubble-Sort Algorithm');

const testArray = [2, 3, 1, 4, 8];

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 1; j < array.length; j++) {
            if(array[j] < array[j - 1]) {
                const temp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = temp;
            }
        }
    }
    return array;
}

// Print Array Before Sorting
console.log('Before Sorting     :', testArray);

// Print Array After Sorting
console.log('After Sorting      :', bubbleSort(testArray));