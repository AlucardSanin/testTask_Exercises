const stringLength = require('./task1')

test('Length of string longer than 1 and lower or equal to 10', () => {
    expect(stringLength('apple')).toBeTruthy();
})