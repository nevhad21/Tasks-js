function newKey(arr, num) {
  return arr.reduce((acc, currentValue, i, arr) => {
      currentValue = {test: currentValue.id};
      acc.push(currentValue);
      return acc;// [ { test: 1 }, { test: 2 }, { test: 3 }, { test: 4 } 
  }, []);
}
console.log(newKey([{id: 1}, {id: 2}, {id: 3}, {id: 4}]));