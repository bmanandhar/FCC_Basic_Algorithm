/*
function repeatStringNumTimes(str, num) {
  // repeat after me
  if (num > 0) {
    result = str.repeat(num);

    return result;
  }
  return "";
}

repeatStringNumTimes("abc", 3);
*/

function repeatStringNumTimes(str, num) {
  // repeat after me
  var result = "";
  if (num > 0) {
    for (var i = 0; i < num; i ++) {
        result += str;
    }
    return result;
  }
  return "";
}

repeatStringNumTimes("abc", 3);
