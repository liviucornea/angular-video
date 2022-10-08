/**
 tsc src/app/utils/quickSort.ts
   node src/app/utils/quickSort.js
 * Sorts an array using quick sort
 */
 function quickSort(array: number[]): number[] {
    array = array.slice();
    partition(array, 0, array.length);
    return array;
  }
  
  /**
   * Partitions the [start, before) index of the array
   */
  function partition(array: number[], start: number, before: number): void {
    const length = before - start;
    /** Terminate the recursion */
    if (length <= 1) return;
    /** Randomly select a pivot and move it to the head of the array */
    const pivotIndex = start + Math.floor(Math.random() * length);
    /// comment next  line ATTENTION
    // const pivotIndex = 9; 
    console.log('Array arr original is: ', array);
    console.log('Pivot index randomly choosed is: ', pivotIndex);
    [array[start], array[pivotIndex]] = [array[pivotIndex], array[start]];
    console.log('Array arr after pivot changed is: ', array);
    /** The first element is our pivot */
    const pivot = array[start];
    let pivotRank = start;
    /** Loop through all the elements, partitioning around the pivot */
    for (let index = start + 1; index < before; index++) {
      if (array[index] < pivot) {
        pivotRank++;
        console.log('pivotRank increased to :', pivotRank);
        console.log('index for switch is:', index);
        [array[index], array[pivotRank]] = [array[pivotRank], array[index]];
      }
    }
    console.log('Array arr after first looping is: ', array);
    /** Finally put the pivot at its rightfull place */
    if (pivotRank !== start) {
        console.log('Pivot position is changed ' );
      [array[pivotRank], array[start]] = [array[start], array[pivotRank]];
    }
    console.log('Array arr after pivot at its rightfull place  is: ', array);
    /** Partition all the elements less than the pivot */
    console.log('start, pivotRank', start, pivotRank);
    partition(array, start, pivotRank);
  
    /** Partition all the elements more than the pivot */
    console.log('pivotRank + 1, before', pivotRank + 1, before);
    partition(array, pivotRank + 1, before);
  }
  
  const unsortedArrayQS = [1, 9, 8, 7, 6, 5, 4, 3, 2, 10];

 //const unsortedArrayQS = [7, 5, 10]
 //quickSort(unsortedArrayQS)
 console.log(quickSort(unsortedArrayQS))
  