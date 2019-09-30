function findIndexOf(myString, char) {
  for (let index = 0; index < myString.length; index++) {
    if (char === myString[index]) return index;
  }
}
console.log(findIndexOf("abcd", "b"));
