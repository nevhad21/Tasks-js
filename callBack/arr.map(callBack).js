var personalCompany = [
  {name: 'Aton', profession: 'programmer engineer-architect', salary: 250000},
  {name: 'Oleh', profession: 'programmer engineer', salary: 249000},
  {name: 'Alex', profession: 'manager', salary: 35000}
]
const map = function (arr, callBack) {
  var nArr = [];
  for (var i = 0; i < arr.length; i++) {
  nArr.push(callBack(arr[i], i, arr));

  }
return nArr;
}

var arrUpSalary = map(personalCompany, (element, i, arr) => {
  return arr[i].salary  * 2;
});
console.log(arrUpSalary);