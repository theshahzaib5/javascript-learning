// Somehow my strings have all become mixed up; every pair of characters has been swapped. Help me undo this so I can understand my strings again.

function unmix(myString) {
  let finalString = "";
  console.log(myString.length);
  for (let index = 0; index < myString.length; index++) {
    if (index % 2 === 0) {
      if (myString[index + 1] === undefined)
        return (finalString += myString[index]);

      finalString += myString[index + 1] + myString[index];
    }
  }
  return finalString;
}

console.log(unmix("hTsii  s aimex dpus rtnig"));
