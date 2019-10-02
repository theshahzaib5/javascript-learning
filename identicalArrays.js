// Create a function that returns true if two arrays contain identical values, and false otherwise.
function checkEquals(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) return false;
  for (let index = 0; index < firstArray.length; index++) {
    if (firstArray[index] !== secondArray[index]) return false;
  }
  return true;
}
console.log(checkEquals([1, 2, 3, 4], [1, 2, 3, 4]));
