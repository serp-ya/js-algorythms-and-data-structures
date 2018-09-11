var arr = [3, 2, 5, 1, 4, 6, 9, 7, 8, 9, 16, 10, 12, 11, 14, 13, 15];
var arrLen = arr.length;

for (var i = 0; i < arrLen; i++) {
  for (var n = arrLen - 1; n > 0; n--) {
    var rightEl = arr[n];
    var leftEl = arr[n - 1];

    if (leftEl > rightEl) {
      arr[n] = leftEl;
      arr[n - 1] = rightEl;
    }
  }
}

console.log('Result:', arr);