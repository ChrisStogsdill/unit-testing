const { expect } = require('@jest/globals');


const index = require('./src/index');

test('capitalize first letter', () => {
  expect(index.capFirstLetter('this is a test')).toBe('This is a test');
});

test('reverse string', () => {
    expect(index.reverseString('test')).toBe('tset')
});

test('adding 5 + 4', () => {
  expect(index.calculator.add(5, 4)).toBe(9)
});

test('subtrack 5 - 4', () => {
  expect(index.calculator.subtract(5, 4)).toBe(1);
});

test('divid 6 / 3', () => {
  expect(index.calculator.divide(6, 3)).toBe(2);
});

test('multiply 5 * 3', () => {
  expect(index.calculator.multiply(5, 3)).toBe(15);
});

test('caesar cipher of "attack at dawn"', () => {
  expect(index.caesarCipher('attack at dawn')).toBe('fyyfhp fy ifbs');
});

test('caesar cipher of "this is a test, with punctuation"', () => {
  expect(index.caesarCipher('this is a test, with punctuation')).toBe('ymnx nx f yjxy, bnym uzshyzfynts');
});