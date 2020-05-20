"Product of All Other Numbers"

You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.
Create a function that takes an array of integers and returns an array of the products.

function getProducts(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++){
    	result[i] = 1;
    	for (var j = 0; j < arr.length; j++){
				if (i !== j){
          result[i] *= arr[j];
        }
      }
    }
  return result;
}
console.log(getProducts([1, 7, 3, 4]));
console.log(getProducts([1, 2, 3, 0, 5]));;