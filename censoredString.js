// Given a censored string and a string of the censored vowels, return the original uncensored string.
function uncensor(myString, vowels) {
  let vowelIndex = 0;
  let newString = "";
  for (let index = 0; index < myString.length; index++) {
    if (myString[index] === "*") {
      newString = myString.replace(myString[index], vowels[vowelIndex]);
      vowelIndex++;
      myString = newString;
    }
  }
  if (newString === "") return myString;
  return newString;
}

console.log(uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo"));
console.log(uncensor("abcd", ""));
console.log(uncensor("*PP*RC*S*", "UEAE"));
