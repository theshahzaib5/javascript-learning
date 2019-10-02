function printTriangle(number) {
  let printChar = "";
  for (let index = 0; index < number; index++) {
    printChar += ".";
    console.log(printChar);
  }
}

printTriangle(5);
