function testJackpot(jackpotArray) {
  for (let index = 0; index < jackpotArray.length; index++) {
    if (jackpotArray[index] !== jackpotArray[0]) return false;
  }
  return true;
}
console.log("it is jackpot: ", testJackpot(["@", "@", "@", "@"]));
console.log("it is jackpot: ", testJackpot(["SS", "SS", "Ss", "Ss"]));
