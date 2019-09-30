function mySplit(myString, char) {
  let stringArray = [];
  let word = "";
  for (let index = 0; index < myString.length; index++) {
    if (myString[index] !== char) {
      word += myString[index];
    } else {
      stringArray.push(word);
      word = "";
    }
    if (index === myString.length - 1) {
      stringArray.push(word);
    }
  }
  return stringArray;
}

// console.log(mySplit("abc def", " "));
console.log(mySplit("6.10.9", "."));
