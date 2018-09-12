var arr = [3, 2, 5, 1, 4, 6, 9, 7, 8, 9, 16, 10, 12, 11, 14, 13, 15];
var arrLen = arr.length;

for (var i = 0; i < arrLen; i++) {
  var minEl = void 0;
  var minElIndex = void 0;

  for (var n = i; n < arrLen; n++) {
    var currentEl = arr[n];

    if (minEl === undefined || currentEl < minEl) {
      minEl = currentEl;
      minElIndex = n;
    }
  }

  if (minElIndex !== i) {
    var elA = arr[i];
    arr[i] = arr[minElIndex];
    arr[minElIndex] = elA;
  }
}

console.log('Result:', arr);