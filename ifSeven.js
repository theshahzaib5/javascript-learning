// Create a function that takes an array of numbers and return "Boom!" if the number 7 appears in the array. Otherwise, return "there is no 7 in the array".

function sevenBoom(array) {
  let stringElement = "";
  for (let i = 0; i < array.length; i++) {
    stringElement = array[i].toString();
    if (stringElement.length < 2 && array[i] === 7) {
      return "Boom!";
    } else if (stringElement.length > 1) {
      for (let j = 0; j < stringElement.length; j++) {
        if (stringElement[j] == 7) return "Boom!";
      }
    }
  }
  return "there is no 7 in the array";
}

console.log(sevenBoom([52, 61, 333, 98, 37]));
