// Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.
function missingNum(array) {
  const sortedArray = array.sort();

  for (let index = 0; index <= array.length; index++) {
    if (sortedArray[index] !== index + 1) {
      return index + 1;
    }
  }
}

console.log(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]));
