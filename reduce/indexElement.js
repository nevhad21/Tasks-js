
function indexElement(arr, num) {
  return arr.reduce((acc, currentValue, i, arr) => {
    if (currentValue.id === num){acc = i}
  return acc; // index: 2
  }, 0);
}
console.log(indexElement([{id: 1}, {id: 2}, {id: 3}, {id: 4}], 3))