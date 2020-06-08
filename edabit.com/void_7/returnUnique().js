"Two Distinct Elements"
In each input array, every number repeats at least once, except for two.
Write a function that returns the two unique numbers.
Keep the same ordering in the output.

function returnUnique(arr) {
  var newArr = arr.filter((el) => {
    return arr.indexOf(el) === arr.lastIndexOf(el);
  });
  return newArr;
}
console.log(returnUnique([1, 9, 8, 8, 7, 6, 1, 6]));
console.log(returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1]));



function returnUnique(arr) {
	var obj = {};
	for (var i in arr) {
		if (!obj[arr[i]]) {
     obj[arr[i]] = 1
    } else {
      obj[arr[i]]++
    }
	}
 var newArr = [];
 for (var key in obj) {
   if (obj[key] === 1) {
       newArr.push(+key);
   }
 }
 return newArr;
}
console.log(returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1]));