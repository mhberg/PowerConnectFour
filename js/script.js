var sum =function sum(a, b) {
    return a + b;
}

var arrays = [0,0,0,0,0,0,0];

for (var i = 0; i < arrays.length; i++) {
    arrays[i] = [0, 0, 0, 0, 0, 0];
}

var insert = function insert(a) {

    for (var i = 0; i < arrays[i].length; i++) {
        if (arrays[a][i] == 0) {
            arrays[a][i] = 1;
            break;
        }
    }
}
exports.insert = insert;
exports.sum = sum;
exports.arrays = arrays;

