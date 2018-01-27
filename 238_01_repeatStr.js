
function repeatStringNumTimes(str, num) {
  // repeat after me
  if (num > 0) {
    result = str.repeat(num);

    return result;
  }
  return "";
}

repeatStringNumTimes("abc", 3);
