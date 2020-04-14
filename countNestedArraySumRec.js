
function countNestedArraySumRec(arr) {
  if (Array.isArray(arr)) {
    var newArr = arr.reduce((done, current)=> {
    return done.concat(countNestedArraySumRec(current));
  });
    return newArr.reduce((a, b) => {return a+b});
  } else {
    return arr;
}
}
const arr = [[1,2,3], [[1], 2, [[3]]]];
console.log(countNestedArraySumRec(arr));