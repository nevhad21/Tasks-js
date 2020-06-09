var arr = [1, 4, 54, 2.6, 909, 2, 3, 54];

function separation (arr, low, hi) {
  var point = arr[Math.floor(Math.random() * arr.length)];
  while (hi >= low) {
    while (arr[hi] > point) {
      hi--;
    }
    while (arr[low] < point) {
      low++;
    }
    if (hi >= low) {
      var tmp = arr[low];
      arr[low] = arr[hi];
      arr[hi] = tmp;
      hi--;
      low++;
    }
  }
  return low ;
}

function quickSort (arr, low = 0, hi = arr.length-1) {
  if (hi > low) {
    var i = separation(arr, low, hi);
    quickSort(arr, low, i - 1);
    quickSort(arr, i, hi);
  }
  return arr;
}
console.log(quickSort(arr));