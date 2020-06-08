function walkAndReturn(arr) {
    var e = arr.shift();
    if (arr.length) {
       return [e.id].concat(walkAndReturn(arr));
    } else {
       return [].concat(e.id);
    }

}
var arr = [{id: 'foo'},{id: 'bar'},{id: 'baz'},{id: 'test'}];
console.log(walkAndReturn(arr));

---------------------------------------------------------------------------------------------------------

var е = {
    id: 'foo',
    next: {
        id: 'bar',
        next: {
            id: 'baz',
            next: {
                 id: 'test',
                 next: null
            },
        },
    },
};
 
function walkUnaryBranch(obj) {
    let branch = obj;
    const result = [];
    while(branch) {
       result.push({ id:branch.id });
       branch = branch.next;
    }
    return result;
 }

walkUnaryBranch(е)