Suppose that you add all of the page numbers in a book. If the total is 21, the book would have only 6 pages because 1 + 2 + 3 + 4 + 5 + 6 = 21. If I had said the total is 25, that would be impossible because the next number in the series is 28 (21 + 7).

Create a function that has as it's argument the sum of all the page numbers and returns true if it is a valid number and false if it is not.

Can you devise a solution that is more efficient than simply adding consecutive integers as I did above?

function pagesInBook (total) {
  var sum = 0;
  for (var i = 0; ; i++) {
	  sum += i;
    if (sum >= total) {
       break;
   }
 }
  return sum === total;
}

console.log(pagesInBook(5));
console.log(pagesInBook(15));