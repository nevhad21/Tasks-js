/* Варинт №1 */
var arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++){
  setTimeout(()=>{
     console.log(arr[i])
   }, (i + 1) * 1000);
}

/* Варинт №2 */
var arr = [1, 2, 3, 4, 5];
for ( var i = 0; i < arr.length; i++){
setTimeout(function (item) {
    return function () {
    console.log(arr[item])
  }
}(i),(i + 1) * 1000)
}