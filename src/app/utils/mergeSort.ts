/**
   tsc src/app/utils/mergeSort.ts
   node src/app/utils/mergeSort.js
 * Sorts an array using merge sort
 * it is a requersive algorithm
 */
 function mergeSort(array: number[]): number[] {
    if (array.length <= 1) {
      return array;
    }
    const middle = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middle);
    const rightArray = array.slice(middle);
    console.log('Left array is:',leftArray);
    console.log('Right array is:',rightArray);
    return merge(mergeSort(leftArray), mergeSort(rightArray));
  }
  
  /** Merge (conquer) step of mergeSort 
   * pls note that merge function is merging in fact 2 arrays that are sorted
   * at the time of merge
  */
  function merge(left: number[], right: number[]): number[] {
    const array: number[] = [];
    let lIndex = 0;
    let rIndex = 0;
    while (lIndex + rIndex < left.length + right.length) {
      const lItem = left[lIndex];
      const rItem = right[rIndex];
      console.log('leftIdx, leftArray', lIndex, left );
      console.log('rightIdx, rightArray', rIndex, right);
      if (lItem == null) {
        array.push(rItem); rIndex++;
      }
      else if (rItem == null) {
        array.push(lItem); lIndex++;
      }
      else if (lItem < rItem) {
        console.log('inserting lItem', lItem);
        array.push(lItem); lIndex++;
      } else {
        console.log('inserting rItem', rItem);
        array.push(rItem); rIndex++;
      }
    }
    return array;
  }
  
  const unsortedArray = [10, 15, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  
  console.log(mergeSort(unsortedArray));
  