function arrLength(arr, i) {
  i = i || 0;

  if (arr[i+1]) {
    return arrLength(arr, i+1);
  } else if (i === 0) {
    return 0;
  } else {
    return i + 1;
  }
}

var result = arrLength(['a', 'b', 'c', 'd']);
console.log(result);