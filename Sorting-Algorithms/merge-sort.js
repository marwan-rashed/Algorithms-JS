console.log('Merge-Sort Algorithm');

const testArray = [2, 3, 1, 4, 8];

function mergeSort(array) {
    if(array.length < 2) return;

    const mid = parseInt(array.length / 2);
    const left = [], right = [];
    
    for(let i = 0; i < mid; i++) {
        left[i] = array[i];
    }

    for(let i = mid; i < array.length; i++) {
        right[i - mid] = array[i];
    }

    mergeSort(left);
    mergeSort(right);

    merge(left, right, array);
}

function merge(left, right, result) {
    let i = 0, j = 0, k = 0;
    while(i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result[k++] = left[i++];
        } else {
            result[k++] = right[j++];
        }
    }

    while (i < left.length) {
        result[k++] = left[i++];
    }

    while (i < right.length) {
        result[k++] = right[j++];
    }
}

// Print Array Before Sorting
console.log('Before Sorting     :', testArray);

// Apply Merge-Sort on the test array
mergeSort(testArray);

// Print Array After Sorting
console.log('After Sorting      :', testArray);