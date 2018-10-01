var arr = [3, 2, 5, 1, 4, 6, 9, 7, 8, 9, 16, 10, 12, 11, 14, 13, 15];
var arrLen = arr.length;

for (var i = 1; i < arrLen; i++) {
  for (var n = i; n > 0; n--) {
    var leftVal = arr[n - 1];
    var rightVal = arr[n];
    
    if (leftVal > rightVal) {
      arr[n - 1] = rightVal;
      arr[n] = leftVal;
    } else {
      break;
    }
  }
}

console.log('Result:', arr);