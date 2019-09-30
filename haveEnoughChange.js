function changeEnough(change, number) {
  const quarter = 0.25;
  const dime = 0.1;
  const nickel = 0.05;
  const penny = 0.01;

  const totalQuaters = change[0] * quarter;
  const totalDimes = change[1] * dime;
  const totalNickels = change[2] * nickel;
  const totalPenny = change[3] * penny;

  const totalAmount = totalQuaters + totalDimes + totalNickels + totalPenny;
  return totalAmount >= number ? true : false;
}

console.log(changeEnough([2, 100, 0, 0], 14.11));
