/*

 tsc src/app/utils/bubbleSortExp.ts
 node src/app/utils/bubbleSortExp.js

*/
function bubbleSortExp(arrInput) {
    var _a;
    var arr = arrInput.slice(0);
    while (true) {
        var sorted = false;
        for (var i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                _a = [arr[i + 1], arr[i]], arr[i] = _a[0], arr[i + 1] = _a[1];
                sorted = true;
            }
        }
        if (!sorted) {
            break;
        }
    }
    return arr;
}
var arrayExp = [9, 12, 20, 3458, 4, 3, 2, 1];
console.log('Sort result is', bubbleSortExp(arrayExp));
