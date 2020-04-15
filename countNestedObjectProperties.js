const obj = {
 value: 1,
  child: {
 value: 2,
  child: {
 value: 3,
  child: null,
    }
  }
};
function countNestedObjectProperties(obj) {
  var arr = [];
   for (let i in obj) {
     if (typeof obj[i] === 'object') {
       arr.push(countNestedObjectProperties(obj[i]));
     } else {
       arr.push(obj[i]);
     }
   }
function countSumArrElemet(arr){
    if (Array.isArray(arr)) {
      return arr.reduce((done, current) => {
        return done.concat(countSumArrElemet(current))
      }, []);
      } else {
        return arr;
      }
    }
return countSumArrElemet(arr);
}
var nArr = countNestedObjectProperties(obj);
var result = nArr.reduce((a, b) => {return a + b});
console.log(result);