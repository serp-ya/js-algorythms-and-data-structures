function euclidianAlgorythm(a, b) {
  var min = Math.min(a, b);
  var max = Math.max(a, b);
  var result = void 0;
  
  while (true) {
    result = max % min;
    
    if (result === 0) {
      break;
    }
    
    max = min;
    min = result;
  }
  
  return min;
}