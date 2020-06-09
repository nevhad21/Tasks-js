

var personalCompany = [ "Anton", "Oleh", "Ruslan", "Bob", "Felix" ];
const filter = function (arr, callBack) {
  var i = 0;
  var nArr = [];
  while (arr[i]) {
    if (callBack(arr[i], i, arr)) {
      nArr.push(arr[i]);
    }
    i++
  }
return nArr;
}

var arrUpSalary = filter(personalCompany, (element, i, arr) => {
  return arr[i].length > 4;
});
console.log(arrUpSalary);