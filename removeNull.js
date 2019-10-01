function removeNull(array) {
  let newArray = [];
  for (let index = 0; index < array.length - 1; index++) {
    if (array[index] !== null) {
      newArray.push(array[index]);
    }
  }
  return newArray;
}

console.log("after removing null", removeNull(["a", null, "b", null]));
console.log("after removing null", removeNull([null, null, null, null, null]));
console.log("after removing null", removeNull([7, 8, null, 9]));
