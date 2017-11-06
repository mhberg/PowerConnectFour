var sum =function sum(a, b) {
    return a + b;
}
var arrays = [0,0,0,0,0,0,0];

var insert = function insert(a) {
    for (var i = 0; i < arrays.length; i++) {
        if (arrays[i] == 0) {
            arrays[i] = 1;
            break;
        }
    }
}
exports.insert = insert;
exports.sum = sum;
exports.arrays = arrays;

