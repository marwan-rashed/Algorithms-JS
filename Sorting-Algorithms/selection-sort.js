console.log('Selection-Sort Algorithm');

const testArray = [2, 3, 1, 4, 8];

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i; j < array.length; j++) {
            if(array[j] < array[min]) {
                min = j;
            }
        }
        const temp = array[min];
        array[min] = array[i];
        array[i] = temp;
    }
    return array;
}

// Print Array Before Sorting
console.log('Before Sorting     :', testArray);

// Print Array After Sorting
console.log('After Sorting      :', selectionSort(testArray));