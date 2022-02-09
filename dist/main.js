/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("function capFirstLetter(inputString) {\n  const firstLetter = inputString[0].toUpperCase();\n  const restOfString = inputString.substring(1);\n  return firstLetter + restOfString;\n}\n\nfunction reverseString(inputString) {\n  const stringArray = inputString.split('');\n  const reverseArray = stringArray.reverse();\n  let outputString = '';\n  for (let i = 0; i < reverseArray.length; i += 1) {\n    outputString += reverseArray[i];\n  }\n  return outputString;\n}\n\nconst calculator = {\n  add: (a, b) => a + b,\n  subtract: (a, b) => a - b,\n  divide: (a, b) => a / b,\n  multiply: (a, b) => a * b,\n};\n\nexports.capFirstLetter = capFirstLetter;\nexports.reverseString = reverseString;\nexports.calculator = calculator;\n\n\n//# sourceURL=webpack://unit-testing/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__);
/******/ 	
/******/ })()
;