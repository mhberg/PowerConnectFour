var m = require('./script');

test('adds 1 + 2 to equal 3', () => {
    expect(m.sum(1, 2)).toBe(3);
});




test('inserts into arrray', () => {

    m.insert(1);
    m.insert(1);
    m.insert(3);

    expect(m.arrays).toEqual([[1,1,0,0,0,0],[0,0,0,0,0,0],[1,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]])



});