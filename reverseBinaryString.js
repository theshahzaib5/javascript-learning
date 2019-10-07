// Write a function that takes an integer n, reverses the binary representation of that integer, and returns the new integer from the reversed binary.

function reversedBinaryInteger(number) {
  const reversedBinaryNumber = number
    .toString(2)
    .split("")
    .reverse()
    .join("");
  return parseInt(reversedBinaryNumber, 2);
}

reversedBinaryInteger(25);
console.log(reversedBinaryInteger(25));
