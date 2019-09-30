function findPalendrom(myString) {
  let newString = "";
  for (let index = myString.length - 1; index >= 0; index--)
    newString += myString[index];

  return newString === myString ? true : false;
}

console.log(findPalendrom("Hello"));
// console.log(findPalendrom("abca"));
