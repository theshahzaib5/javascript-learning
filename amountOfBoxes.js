// Create a function that takes a number (step) as an argument and returns the amount of boxes in that step of the sequence.

// Step 0: Start with 0
// Step 1: Add 3
// Step 2: Subtract 1
// Repeat Step 1 & 2 ...

function boxSeq(number) {
  let boxes = 0;
  let arr = [];
  for (let index = 1; index <= number; index++) {
    if (index % 2 === 0) boxes = boxes - 1;
    else if (index % 2 !== 0) boxes = boxes + 3;
    arr.push(boxes);
  }
  return arr;
}

// function boxSeq(number) {
//   if (number % 2 === 0) return number;
//   return number + 2;
// }

console.log(boxSeq(3));
