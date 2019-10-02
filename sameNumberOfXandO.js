// Create a function that takes a string, checks if it has the same number of x's and o's and returns either true or false.
function findXandOLength(myString) {
  const newString = myString.toLowerCase();
  let lengthOfO = 0;
  let lengthOfX = 0;
  for (let index = 0; index < newString.length; index++) {
    if (newString[index] === "x") lengthOfX++;
    if (newString[index] === "o") lengthOfO++;
  }
  if (lengthOfX === lengthOfO) return true;
  return false;
}

console.log(findXandOLength("xxoo"));
