const index = require('./src/index');

test('capitalize first letter', () => {
  expect(index.capFirstLetter('this is a test')).toBe('This is a test');
});

test('reverse string', () => {
    expect(index.reverseString('test')).toBe('tset')
});