/**
   tsc src/app/utils/mergeSortExp.ts
   node src/app/utils/mergeSortExp.js
 * Sorts an array using merge sort
 * it is a requersive algorithm
 */

function mergeSortExp(arr: number[]): number[] {
    if (arr.length <=1 ) {
        return arr;
    }
    const middle = Math.floor(arr.length/2);
    const leftArr = arr.slice(0, middle);
    const arrRight = arr.slice(middle);
    console.log('Left array is: ',leftArr);
    console.log('Right array is: ',arrRight);
    return mergeExp(mergeSortExp(leftArr), mergeSortExp(arrRight));
}


function mergeExp( leftArray: number [], rightArray: number []): number [] {
    const arr: number[] = [];
    let leftIdx = 0;
    let rightIdx = 0;
    while (leftIdx + rightIdx < leftArray.length + rightArray.length) {
        const lItem = leftArray[leftIdx];
        const rItem = rightArray[rightIdx];
        console.log('leftIdx, leftArray', leftIdx, leftArray);
        console.log('rightIdx, rightArray', rightIdx, rightArray);
        if (lItem == undefined) {
            arr.push(rItem); rightIdx++;
        } else if (rItem == undefined) {
            arr.push(lItem); leftIdx++;
        } else if (lItem < rItem) {
            console.log('inserting lItem', lItem);
            arr.push(lItem); leftIdx++;
        } else {
            console.log('inserting rItem', rItem);
            arr.push(rItem); rightIdx++;
        }
    }
    return arr;
}

const unsortedArrayExp = [10, 15, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const result = mergeSortExp(unsortedArrayExp);
console.log('Array unsorted is: ', unsortedArrayExp);
console.log('Array sorted is: ', result );