function mySplit(myString, char) {
  let stringArray = [];
  let word = "";
  for (let index = 0; index <= myString.length; index++) {
    if (myString[index] === char || index === myString.length) {
      stringArray.push(word);
      word = "";
    } else {
      word += myString[index];
    }
  }
  return stringArray;
}

console.log(mySplit("abc def", " "));
console.log(mySplit("6.10.9", "."));
