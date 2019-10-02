// Create a function that returns true if two arrays contain identical values, and false otherwise.
function checkEquals(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) return false;
  const newFirstArray = firstArray.sort();
  const newSecondArray = secondArray.sort();
  for (let index = 0; index < newFirstArray.length; index++) {
    if (newFirstArray[index] !== newSecondArray[index]) return false;
  }
  return true;
}
console.log(checkEquals([1, 2, 4, 3], [1, 2, 3, 4]));
