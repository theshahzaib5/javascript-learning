function printTriangleInverse(number) {
  let addSpace = "";
  for (let i = number; i > 0; i--) {
    let printChar = "";
    if (i < number) addSpace += " ";

    for (let j = 0; j < i; j++) {
      printChar += ".";
    }
    console.log(addSpace, printChar);
  }
}

printTriangleInverse(5);
