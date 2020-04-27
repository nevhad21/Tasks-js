
var personalCompany = [2, 7, 4, 8, 78, 1];
function sort(arr, callBack) {
  var n = arr.length;
    for (var i = n-1; i >= 0; i--) {
      for (var j = 1; j <= i; j++) {
        if (callBack(arr[j-1], arr[j])) {
        var t = arr[j-1];
        arr[j-1] = arr[j];
        arr[j] = t;
           }
        }
     }
     return arr;
}

var result = sort(personalCompany, function(a, b) {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return 0;
  }

});
console.log(result