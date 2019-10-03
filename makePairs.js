// Write a function that pairs the first number in an array with the last, the second number with the second to last, etc.

function pairs(array) {
  let pairedArray = [];
  for (let index = 0; index < array.length / 2; index++) {
    if (array.length < 1) return pairedArray;
    pairedArray.push([array[index], array[array.length - 1 - index]]);
  }
  return pairedArray;
}
console.log(pairs([1, 2, 3, 4, 5]));
