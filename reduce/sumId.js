
function sumId(arr) {
 return arr.reduce((acc, i) => {return acc + i.id},0);
}

console.log(sumId([{id: 1}, {id: 2}, {id: 3}, {id: 4}]));