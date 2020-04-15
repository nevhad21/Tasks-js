
const arr = [[1,2,3], [[1], 2, [[[[3]]],[1]]]];
function countNestedArraySumRec(arr) {
 if (Array.isArray(arr)) {
    return arr.reduce((done, current) => {
    return done.concat(countNestedArraySumRec(current));
  }, []);
  } else {
    return arr;
  }
}
const newArr = countNestedArraySumRec(arr);
var result = newArr.reduce((a,b) => {return a + b});
console.log(result);