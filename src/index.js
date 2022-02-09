function capFirstLetter(inputString) {
  const firstLetter = inputString[0].toUpperCase();
  const restOfString = inputString.substring(1);
  return firstLetter + restOfString;
}

function reverseString(inputString) {
  const stringArray = inputString.split('');
  const reverseArray = stringArray.reverse();
  let outputString = '';
  for (let i = 0; i < reverseArray.length; i += 1) {
    outputString += reverseArray[i];
  }
  return outputString;
}

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
};

function caesarCipher(inputString) {
  const cipher = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const cipherKey = ['f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E'];
  let outputString = '';
  const inputToArray = inputString.split('');
  for (let i = 0; i < inputToArray.length; i += 1) {
    if (cipher.includes(inputString[i])) {
      const foundIndex = cipher.findIndex((element) => element === inputString[i]);
      outputString += cipherKey[foundIndex];
    } else {
      outputString += inputString[i];
    }
  }
  return outputString;
}

function analyzeArray(inputArray) {
  const outputObject = {};
  const arraySum = inputArray.reduce((previos, current) => previos + current);
  outputObject.average = arraySum / inputArray.length;
  outputObject.length = inputArray.length;
  inputArray.sort();
  outputObject.min = inputArray[0];
  outputObject.max = inputArray[inputArray.length - 1];
  return outputObject;
}

exports.capFirstLetter = capFirstLetter;
exports.reverseString = reverseString;
exports.calculator = calculator;
exports.caesarCipher = caesarCipher;
exports.analyzeArray = analyzeArray;
