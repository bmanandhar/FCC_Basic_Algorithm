
function slasher(arr, howMany) {
  // it doesn't always pay to be
  arr.splice(0, howMany); //expected [3]
/*
  arr.splice(howMany); //expected [1, 2]
*/
  return arr;
}

slasher([1, 2, 3], 2);
