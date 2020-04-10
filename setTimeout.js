/* Вариант №1 */
var arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++){
  setTimeout(()=>{
     console.log(arr[i])
   }, (i + 1) * 1000);
}

/* Вариант №2 */
var arr = [1, 2, 3, 4, 5];
for ( var i = 0; i < arr.length; i++){
setTimeout(function (item) {
    return function () {
    console.log(arr[item])
  }
}(i),(i + 1) * 1000)
}

/* Рекрусивный setTimeout */
function hello(word) {
    setTimeout(function tick() {
    console.log(word);
    hello = setTimeout(tick, 1000);
  }, 1000);
}
hello("Say Hello");