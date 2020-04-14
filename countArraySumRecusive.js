/*"Cумма элементов массива"*/

function countArraySumRecusive(arr, sum) {
   sum = sum || 0;
   if (arr.length) {
      return countArraySumRecusive(arr, sum + arr.pop());
   } else {
      return sum;
   }
}
console.log(countArraySumRecusive([1, 2, 3, 4]));
