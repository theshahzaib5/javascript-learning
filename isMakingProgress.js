// To train for an upcoming marathon, Johnny goes on one long-distance run each Saturday. He wants to track how often the number of miles he runs this Saturday exceeds the number of miles run the previous Saturday. This is called a progress day.
function progressDays(array) {
  let numberDays = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index + 1] > array[index]) {
      numberDays++;
    }
  }
  return numberDays;
}

console.log(progressDays([6, 5, 4, 3, 2, 9]));
