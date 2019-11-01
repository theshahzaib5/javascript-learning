function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}

console.log(rangeOfNumbers(1, 5));

function countdown(myArray, n) {
  if (n <= 0) {
    return;
  } else {
    myArray.push(n);
    countdown(myArray, n - 1);
  }
  return myArray;
}

console.log(countdown([], 10));
