function findSecondMax(arr) {
  for (let index = 0; index < arr.length; index++) {
    for (let childIndex = 0; childIndex < arr.length; childIndex++) {
      if (arr[childIndex] > arr[childIndex + 1]) {
        let swap = arr[childIndex + 1];
        arr[childIndex + 1] = arr[childIndex];
        arr[childIndex] = swap;
      }
    }
  }
  return arr[arr.length - 2];
}

console.log(findSecondMax([8, 0, 9, 10, 40, 20]));
