/**
   tsc src/app/utils/mergeSortExp.ts
   node src/app/utils/mergeSortExp.js
 * Sorts an array using merge sort
 * it is a requersive algorithm
 */
function mergeSortExp(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var middle = Math.floor(arr.length / 2);
    var leftArr = arr.slice(0, middle);
    var arrRight = arr.slice(middle);
    console.log('Left array is: ', leftArr);
    console.log('Right array is: ', arrRight);
    return mergeExp(mergeSortExp(leftArr), mergeSortExp(arrRight));
}
function mergeExp(leftArray, rightArray) {
    var arr = [];
    var leftIdx = 0;
    var rightIdx = 0;
    while (leftIdx + rightIdx < leftArray.length + rightArray.length) {
        var lItem = leftArray[leftIdx];
        var rItem = rightArray[rightIdx];
        console.log('leftIdx, leftArray', leftIdx, leftArray);
        console.log('rightIdx, rightArray', rightIdx, rightArray);
        if (lItem === undefined) {
            arr.push(rItem);
            rightIdx++;
        }
        else if (rItem === undefined) {
            arr.push(lItem);
            leftIdx++;
        }
        else if (lItem < rItem) {
            console.log('inserting lItem', lItem);
            arr.push(lItem);
            leftIdx++;
        }
        else {
            console.log('inserting rItem', rItem);
            arr.push(rItem);
            rightIdx++;
        }
    }
    return arr;
}
var unsortedArrayExp = [10, 15, 9, 8, 7, 6, 5, 4, 3, 2, 1];
var result = mergeSortExp(unsortedArrayExp);
console.log('Array unsorted is: ', unsortedArrayExp);
console.log('Array sorted is: ', result);
