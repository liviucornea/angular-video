function partionExp (arr: number [], start: number, before: number) {
    if (arr.length<=1) return;
    const length = before - start;
    const pivotIndex =  start + Math.floor(Math.random() * length);
    [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];
    /** The first element is our pivot */
    const pivot = array[start];
    let pivotRank = start;
    // arr = [7, 5, 10]
    for (let index = start+1; index < before; index++ ) {
        if(arr[index] < pivot){
            pivotRank++;
            [arr[index], arr[pivotRank]] = [arr[pivotRank], arr[index]];
        }
    }
    if(pivotRank !== start) {
        [array[pivotRank], array[start]] = [array[start], array[pivotRank]];
    }
    /** Partition all the elements less than the pivot */
    partition(array, start, pivotRank);
  
    /** Partition all the elements more than the pivot */
    partition(array, pivotRank + 1, before);    

}