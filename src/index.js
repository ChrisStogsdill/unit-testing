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
  add: (a, b) => return a + b,
  subtract: (a, b) => a - b,

};

exports.capFirstLetter = capFirstLetter;
exports.reverseString = reverseString;
