/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nfunction getDayOfWeek(dayIndex) {\r\n    const daysOfWeek = [\r\n      'domingo', 'segunda-feira', 'terça-feira',\r\n      'quarta-feira', 'quinta-feira', 'sexta-feira',\r\n      'sábado'\r\n    ];\r\n    return daysOfWeek[dayIndex];\r\n  }\r\n  \r\n\r\n  function formatDateAndTime() {\r\n    const now = new Date();    \r\n    const dayOfWeek = getDayOfWeek(now.getDay());\r\n    const day = now.getDate();\r\n    const month = now.toLocaleString('pt-BR', { month: 'long' });\r\n    const year = now.getFullYear();\r\n    const formattedDate = `${dayOfWeek}, ${day} de ${month} de ${year}`;\r\n    const hours = now.getHours().toString().padStart(2, '0');\r\n    const minutes = now.getMinutes().toString().padStart(2, '0');\r\n    const formattedTime = `${hours}:${minutes}`;\r\n\r\n    document.getElementById('date').textContent = formattedDate;\r\n    document.getElementById('time').textContent = formattedTime;\r\n  }\r\n  \r\n  function getTimeUntilNextMinute() {\r\n    const now = new Date();\r\n    const millisecondsUntilNextMinute = (60 - now.getSeconds()) * 1000;\r\n    return millisecondsUntilNextMinute;\r\n  }\r\n\r\n  function initializeDateTime() {\r\n    formatDateAndTime(); \r\n\r\n    const timeUntilNextMinute = getTimeUntilNextMinute();    \r\n    setTimeout(function() {\r\n      formatDateAndTime();\r\n      setInterval(formatDateAndTime, 60000); \r\n    }, timeUntilNextMinute);\r\n  }\r\n  \r\n  initializeDateTime();\r\n  \n\n//# sourceURL=webpack://tailwind-setup/./src/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;