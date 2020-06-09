function conversionObjArr(obj) {
  var arr = Object.entries(obj);
  return arr.reduce((acc, currentValue, i, arr) => {
         currentValue = {test: +arr[i][1]};
         acc.push(currentValue);
        return acc; //[{ test: 1 }, { test: 2 }, { test: 3 }, { test: 4 }, { test: 5 }]

}, []);

}
var obj = {
    test1: '1',
    test2: '2',
    test3: '3',
    test4: '4',
    test5: '5',
}
console.log(conversionObjArr(obj)); 