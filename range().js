function range(a, b, arr = []) {
  a += 1;
  if (a >= b) {
    return arr;
  } else {
    arr.push(a);
  }
  return range(a, b, arr);
}

var result = range(3, 9);
console.log(result);