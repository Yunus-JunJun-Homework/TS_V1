const arr: Array<number> = [1, 2, 3, -1, -2, -3];

const newArrPositiveNum = function positiveNumbers(arr: Array<number>): Array<number> {
  const numbersPlusArr: Array<number> = [];

  if (arr.length === 0) {
    new Error('Invalid array is empty');
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      numbersPlusArr.push(arr[i])

    }
  }
  if (numbersPlusArr.length) {
    return numbersPlusArr;
  }

  return null;
}

console.log(newArrPositiveNum(arr));
