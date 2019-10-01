function reverse(myString) {
  let newString = "";
  for (let index = myString.length - 1; index >= 0; index--)
    newString += myString[index];
  return newString;
}

function findPalendrom(myString) {
  let newString = reverse(myString);
  return newString === myString ? true : false;
}

console.log(findPalendrom("abba"));
// console.log(findPalendrom("abca"));
