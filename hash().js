
function hash(value) {
  return (value + Math.floor(Math.random() + Date.now())).toString();
}
console.log(hash(12));