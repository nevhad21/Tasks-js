/*"Cумма элементов массива"*/

/*Рекрусивная функция:*/
function arrSum(array, sum) {
   sum = sum || 0
   if (array.length) {
      return arrSum(array, sum + array.pop())
   } else {
     return sum
   }
}
console.log(arrSum([4, 5, 4]));

/*Решение с помощью цикла:*/
function arrSum(arr){
var sum = 0;
for(var i = 0; i < arr.length; i++){
    sum += arr[i];
    }
return sum;
}
console.log(arrSum([4, 5, 4]));

/*Решение с помощью метода 'reduce':*/
function arrSum(arr){
var result = arr.reduce((a, b) => {return a+b});
return result;
}
console.log(arrSum([4, 5, 4]));
