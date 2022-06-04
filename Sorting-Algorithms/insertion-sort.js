console.log('Insertion-Sort Algorithm');

const testArray = [2, 3, 1, 4, 8];

function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let current = array[i];
        let j = i - 1;

        for(j; j >= 0 && array[j] > current; j--){
            array[j + 1] = array[j];
        }
        
        array[j + 1] = current;
    }
    return array;
}

// Print Array Before Sorting
console.log('Before Sorting     :', testArray);

// Print Array After Sorting
console.log('After Sorting      :', insertionSort(testArray));