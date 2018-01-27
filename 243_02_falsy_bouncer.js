/*
function bouncer(arr) {

  var result = [];
  for (var i = 0; i < arr.length; i++){
    if (arr[i])
      result.push(arr[i]);
  }
  return result;
}
*/
function bouncer(arr) {

  // Don't show a false ID to this bouncer.
  var newArr = arr.filter(function(element){
  if(Boolean(element)){
    return element;
  }
});
  return newArr;
}

bouncer([7, "ate", "", false, 9]);
