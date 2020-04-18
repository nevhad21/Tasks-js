const reduce = function (arr, callBack) {
  var temp;
  for (var i = 0; i < arr.length; i++) {
    temp = callBack(temp, arr[i], i, arr);

  }
return temp;
}

var sum = reduce(personalCompany, (acc, current, counter, sorce) => {
  var tmp = acc || 0;
  return  tmp + current.salary;
})
console.log(sum);