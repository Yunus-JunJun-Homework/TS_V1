var arr = [1, 2, 3, -1, -2, -3];
var newArrPositiveNum = function positiveNumbers(arr) {
    var numbersPlusArr = [];
    if (arr.length === 0) {
        new Error('Invalid array is empty');
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            numbersPlusArr.push(arr[i]);
        }
    }
    if (numbersPlusArr.length) {
        return numbersPlusArr;
    }
    return null;
};
console.log(newArrPositiveNum(arr));
