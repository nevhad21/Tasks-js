/*"Корень кубический"*/

function cube(v) {
    var triple = (v, x) => (2 * x + v / (x * x)) / 3;

    var x = v / 4;
        y = x;

    do {
        y = triple(v, x = y);
    } while (Math.abs(x - y) > Number.EPSILON)
    return y;
}

console.log(cube(8));

function cube(v) {
   return Math.cbrt(v);
}
console.log(cube(8));