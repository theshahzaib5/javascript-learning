// Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).
function removeDups(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === i) {
      newArray.push(arr[i]);
    }
  }

  return newArray;
}

removeDups(["John", "Taylor", "John"]);
