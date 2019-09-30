function findIsDigit(word) {
  let hasInt = false;
  for (let index = 0; index < word.length; index++) {
    if (word.charCodeAt(index) <= 57 && word.charCodeAt(index) >= 48) {
      hasInt = true;
      break;
    }
  }
  return hasInt;
}

console.log(findIsDigit("asdf1sdf"));
