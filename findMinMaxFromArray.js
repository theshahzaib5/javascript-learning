const ARRAY = [3, 2, 1];
const ARRAY1 = [10, 1, 3];
function difference(array) {
  let minNumber = array[0];
  let maxNumber = array[0];
  array.forEach(element => {
    if (element < minNumber) minNumber = element;
    else if (element > maxNumber) maxNumber = element;
  });
  return maxNumber - minNumber;
}

console.log(difference(ARRAY1));
