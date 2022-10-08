/*

 tsc src/app/utils/bubbleSortExp.ts
 node src/app/utils/bubbleSortExp.js

*/

function bubbleSortExp( arrInput: number []) {
    const arr = arrInput.slice(0);
    while (true) {
        let sorted = false;
        for ( let i = 0; i < arr.length -1; i++) {
            if (arr[i] > arr[i+1]) {
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                sorted = true;
            }
        }
        if (!sorted) {
            break;
        }
    }
    return arr;
}

const arrayExp = [9,12,20,3458,4,3,2,1];
  
console.log('Sort result is', bubbleSortExp(arrayExp));