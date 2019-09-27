const ARRAY = [3, 2, 1];
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

function findSecondMax(arr) {
  for (let index = 0; index < arr.length; index++) {
    for (let childIndex = 0; childIndex < arr.length; childIndex++) {
      if(arr[childIndex] > arr[childIndex + 1]) {
        let swap = arr[childIndex + 1];
        arr[childIndex + 1] = arr[childIndex];
        arr[childIndex] = swap;
      }
    }
  }
  return arr[arr.length - 2];
}

console.log(findSecondMax(ARRAY));
