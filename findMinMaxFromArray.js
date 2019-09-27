const ARRAY = [8, 4, 3, 1];
const ARRAY1 = [4, 2, 3];
function difference(array) {
  let minNumber = array[0];
  let maxNumber = array[0];
  array.forEach(element => {
    if (element < minNumber) minNumber = element;
    else if (element > maxNumber) maxNumber = element;
  });
  return maxNumber;
}

function sorter(array) {
  var count = array.length - 1,
    swap,
    j,
    i;

  for (j = 0; j < count; j++) {
    for (i = 0; i < count; i++) {
      if (array[i] > array[i + 1]) {
        swap = array[i + 1];
        array[i + 1] = array[i];
        array[i] = swap;
      }
    }
  }

  return array;
}

console.log(findSecondMax(ARRAY));
console.log(findSecondMax(ARRAY1));
// console.log(findSecondMax(ARRAY));
