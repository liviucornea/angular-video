/**
 tsc src/app/utils/bubbleSort.ts
 node src/app/utils/bubbleSort.js
 * Explains the bubble sort concept
 */
 function bubbleSortConcept(array: number[]): number[] {
    array = array.slice();
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - 1; j++) {
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }
    return array;
  }
  
  /**
   * Idiomatic bubble sort implementation
   */
  function bubbleSort(array: number[]): number[] {
    array = array.slice();
    while (true) {
      let swapped = false;
      for (let j = 0; j < array.length - 1; j++) {
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
          swapped = true;
        }
      }
      if (!swapped) break;
    }
    return array;
  }
  
  const array = [4,3,2,1];
  
  console.log(bubbleSort(array));
  