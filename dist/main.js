/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/checklists.js":
/*!***************************!*\
  !*** ./src/checklists.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _checks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checks */ "./src/checks.js");


class Checklist {
    constructor(title, description, checks, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.checks = checks;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    editTitle(newTitle) {
        this.title = newTitle;
    }

    editDescription(newDesc) {
        this.description = newDesc;
    }

    editDueDate(newDue) {
        this.dueDate = newDue;
    }

    editPriority(newPriority) {
        this.priority = newPriority;
    }

    log() {
        console.log(`Title: ${this.title}`);
        console.log(`Description: ${this.description}`);
        console.log(`Due Date: ${this.dueDate}`);
        console.log(`Priority: ${this.priority}`);
        this.checks.forEach((c) => c.log());
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Checklist);

/***/ }),

/***/ "./src/checks.js":
/*!***********************!*\
  !*** ./src/checks.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Check {
    constructor(description) {
        this.description = description;
        this.state = false;
    }

    editDescription(newDesc) {
        this.description = newDesc;
    }

    editState() {
        this.state = !this.state;
    }

    log() {
        console.log(`Description: ${this.description}`);
        console.log(`State: ${this.state}`);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Check);

/***/ }),

/***/ "./src/notes.js":
/*!**********************!*\
  !*** ./src/notes.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Note {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }

    editTitle(newTitle) {
        this.title = newTitle;
    }

    editDescription(newDesc) {
        this.description = newDesc;
    }

    log() {
        console.log(`Title: ${this.title}`);
        console.log(`Description: ${this.description}`);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Note);

/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = false;
    }

    editTitle(newTitle) {
        this.title = newTitle;
    }

    editDescription(newDesc) {
        this.description = newDesc;
    }

    editDueDate(newDue) {
        this.dueDate = newDue;
    }

    editPriority(newPriority) {
        this.priority = newPriority;
    }

    editStatus() {
        this.status = !this.status;
    }

    log() {
        console.log(`Title: ${this.title}`);
        console.log(`Description: ${this.description}`);
        console.log(`Due Date: ${this.dueDate}`);
        console.log(`Priority: ${this.priority}`);
        console.log(`Status: ${this.status}`);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos */ "./src/todos.js");
/* harmony import */ var _notes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notes */ "./src/notes.js");
/* harmony import */ var _checklists__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checklists */ "./src/checklists.js");
/* harmony import */ var _checks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checks */ "./src/checks.js");





const todoTest = new _todos__WEBPACK_IMPORTED_MODULE_0__["default"]('Todo 1', 'First todo', 'tomorrow', 'high');
todoTest.log();
todoTest.editTitle('New title');
todoTest.editDescription('Edited description');
todoTest.editDueDate('not tomorrow');
todoTest.editPriority('mid');
todoTest.editStatus();
todoTest.log();

const noteTest = new _notes__WEBPACK_IMPORTED_MODULE_1__["default"]('Note 1', 'First note');
noteTest.log();
noteTest.editTitle('New note title');
noteTest.editDescription('nevermind');
noteTest.log();

const check1 = new _checks__WEBPACK_IMPORTED_MODULE_3__["default"]('check 1');
const check2 = new _checks__WEBPACK_IMPORTED_MODULE_3__["default"]('check 2');
check2.editState();
let checkArray = [check1, check2];
const checklistTest = new _checklists__WEBPACK_IMPORTED_MODULE_2__["default"]('Checklist 1', 'First checklist', checkArray, 'next week', 'low');
checklistTest.log();
checklistTest.editTitle('Checklost');
checklistTest.editDescription('A checklist');
checklistTest.editDueDate('now');
checklistTest.editPriority('high');
checklistTest.log();

check1.editDescription('check 1.1');
check1.editState();
check2.editDescription('check 2.1');
check2.editState();
check1.log();
check2.log();

checklistTest.log();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLFdBQVc7QUFDekMsb0NBQW9DLGlCQUFpQjtBQUNyRCxpQ0FBaUMsYUFBYTtBQUM5QyxpQ0FBaUMsY0FBYztBQUMvQztBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7QUNwQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxpQkFBaUI7QUFDckQsOEJBQThCLFdBQVc7QUFDekM7QUFDQTs7QUFFQSxpRUFBZSxLQUFLOzs7Ozs7Ozs7Ozs7OztBQ3BCcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLFdBQVc7QUFDekMsb0NBQW9DLGlCQUFpQjtBQUNyRDtBQUNBOztBQUVBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7O0FDcEJuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsV0FBVztBQUN6QyxvQ0FBb0MsaUJBQWlCO0FBQ3JELGlDQUFpQyxhQUFhO0FBQzlDLGlDQUFpQyxjQUFjO0FBQy9DLCtCQUErQixZQUFZO0FBQzNDO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSTs7Ozs7O1VDdENuQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTjJCO0FBQ0E7QUFDVTtBQUNSOztBQUU3QixxQkFBcUIsOENBQUk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLDhDQUFJO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQiwrQ0FBSztBQUN4QixtQkFBbUIsK0NBQUs7QUFDeEI7QUFDQTtBQUNBLDBCQUEwQixtREFBUztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2NoZWNrbGlzdHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2NoZWNrcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvbm90ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3RvZG9zLmpzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hlY2sgZnJvbSBcIi4vY2hlY2tzXCI7XG5cbmNsYXNzIENoZWNrbGlzdCB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBjaGVja3MsIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNoZWNrcyA9IGNoZWNrcztcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH1cblxuICAgIGVkaXRUaXRsZShuZXdUaXRsZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gbmV3VGl0bGU7XG4gICAgfVxuXG4gICAgZWRpdERlc2NyaXB0aW9uKG5ld0Rlc2MpIHtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IG5ld0Rlc2M7XG4gICAgfVxuXG4gICAgZWRpdER1ZURhdGUobmV3RHVlKSB7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IG5ld0R1ZTtcbiAgICB9XG5cbiAgICBlZGl0UHJpb3JpdHkobmV3UHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICAgIH1cblxuICAgIGxvZygpIHtcbiAgICAgICAgY29uc29sZS5sb2coYFRpdGxlOiAke3RoaXMudGl0bGV9YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBEZXNjcmlwdGlvbjogJHt0aGlzLmRlc2NyaXB0aW9ufWApO1xuICAgICAgICBjb25zb2xlLmxvZyhgRHVlIERhdGU6ICR7dGhpcy5kdWVEYXRlfWApO1xuICAgICAgICBjb25zb2xlLmxvZyhgUHJpb3JpdHk6ICR7dGhpcy5wcmlvcml0eX1gKTtcbiAgICAgICAgdGhpcy5jaGVja3MuZm9yRWFjaCgoYykgPT4gYy5sb2coKSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGVja2xpc3Q7IiwiY2xhc3MgQ2hlY2sge1xuICAgIGNvbnN0cnVjdG9yKGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGVkaXREZXNjcmlwdGlvbihuZXdEZXNjKSB7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBuZXdEZXNjO1xuICAgIH1cblxuICAgIGVkaXRTdGF0ZSgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICF0aGlzLnN0YXRlO1xuICAgIH1cblxuICAgIGxvZygpIHtcbiAgICAgICAgY29uc29sZS5sb2coYERlc2NyaXB0aW9uOiAke3RoaXMuZGVzY3JpcHRpb259YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBTdGF0ZTogJHt0aGlzLnN0YXRlfWApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2s7IiwiY2xhc3MgTm90ZSB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGVkaXRUaXRsZShuZXdUaXRsZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gbmV3VGl0bGU7XG4gICAgfVxuXG4gICAgZWRpdERlc2NyaXB0aW9uKG5ld0Rlc2MpIHtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IG5ld0Rlc2M7XG4gICAgfVxuXG4gICAgbG9nKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgVGl0bGU6ICR7dGhpcy50aXRsZX1gKTtcbiAgICAgICAgY29uc29sZS5sb2coYERlc2NyaXB0aW9uOiAke3RoaXMuZGVzY3JpcHRpb259YCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOb3RlOyIsImNsYXNzIFRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBlZGl0VGl0bGUobmV3VGl0bGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IG5ld1RpdGxlO1xuICAgIH1cblxuICAgIGVkaXREZXNjcmlwdGlvbihuZXdEZXNjKSB7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBuZXdEZXNjO1xuICAgIH1cblxuICAgIGVkaXREdWVEYXRlKG5ld0R1ZSkge1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBuZXdEdWU7XG4gICAgfVxuXG4gICAgZWRpdFByaW9yaXR5KG5ld1ByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgICB9XG5cbiAgICBlZGl0U3RhdHVzKCkge1xuICAgICAgICB0aGlzLnN0YXR1cyA9ICF0aGlzLnN0YXR1cztcbiAgICB9XG5cbiAgICBsb2coKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBUaXRsZTogJHt0aGlzLnRpdGxlfWApO1xuICAgICAgICBjb25zb2xlLmxvZyhgRGVzY3JpcHRpb246ICR7dGhpcy5kZXNjcmlwdGlvbn1gKTtcbiAgICAgICAgY29uc29sZS5sb2coYER1ZSBEYXRlOiAke3RoaXMuZHVlRGF0ZX1gKTtcbiAgICAgICAgY29uc29sZS5sb2coYFByaW9yaXR5OiAke3RoaXMucHJpb3JpdHl9YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBTdGF0dXM6ICR7dGhpcy5zdGF0dXN9YCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2RvOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFRvZG8gZnJvbSBcIi4vdG9kb3NcIjtcbmltcG9ydCBOb3RlIGZyb20gXCIuL25vdGVzXCI7XG5pbXBvcnQgQ2hlY2tsaXN0IGZyb20gXCIuL2NoZWNrbGlzdHNcIjtcbmltcG9ydCBDaGVjayBmcm9tIFwiLi9jaGVja3NcIjtcblxuY29uc3QgdG9kb1Rlc3QgPSBuZXcgVG9kbygnVG9kbyAxJywgJ0ZpcnN0IHRvZG8nLCAndG9tb3Jyb3cnLCAnaGlnaCcpO1xudG9kb1Rlc3QubG9nKCk7XG50b2RvVGVzdC5lZGl0VGl0bGUoJ05ldyB0aXRsZScpO1xudG9kb1Rlc3QuZWRpdERlc2NyaXB0aW9uKCdFZGl0ZWQgZGVzY3JpcHRpb24nKTtcbnRvZG9UZXN0LmVkaXREdWVEYXRlKCdub3QgdG9tb3Jyb3cnKTtcbnRvZG9UZXN0LmVkaXRQcmlvcml0eSgnbWlkJyk7XG50b2RvVGVzdC5lZGl0U3RhdHVzKCk7XG50b2RvVGVzdC5sb2coKTtcblxuY29uc3Qgbm90ZVRlc3QgPSBuZXcgTm90ZSgnTm90ZSAxJywgJ0ZpcnN0IG5vdGUnKTtcbm5vdGVUZXN0LmxvZygpO1xubm90ZVRlc3QuZWRpdFRpdGxlKCdOZXcgbm90ZSB0aXRsZScpO1xubm90ZVRlc3QuZWRpdERlc2NyaXB0aW9uKCduZXZlcm1pbmQnKTtcbm5vdGVUZXN0LmxvZygpO1xuXG5jb25zdCBjaGVjazEgPSBuZXcgQ2hlY2soJ2NoZWNrIDEnKTtcbmNvbnN0IGNoZWNrMiA9IG5ldyBDaGVjaygnY2hlY2sgMicpO1xuY2hlY2syLmVkaXRTdGF0ZSgpO1xubGV0IGNoZWNrQXJyYXkgPSBbY2hlY2sxLCBjaGVjazJdO1xuY29uc3QgY2hlY2tsaXN0VGVzdCA9IG5ldyBDaGVja2xpc3QoJ0NoZWNrbGlzdCAxJywgJ0ZpcnN0IGNoZWNrbGlzdCcsIGNoZWNrQXJyYXksICduZXh0IHdlZWsnLCAnbG93Jyk7XG5jaGVja2xpc3RUZXN0LmxvZygpO1xuY2hlY2tsaXN0VGVzdC5lZGl0VGl0bGUoJ0NoZWNrbG9zdCcpO1xuY2hlY2tsaXN0VGVzdC5lZGl0RGVzY3JpcHRpb24oJ0EgY2hlY2tsaXN0Jyk7XG5jaGVja2xpc3RUZXN0LmVkaXREdWVEYXRlKCdub3cnKTtcbmNoZWNrbGlzdFRlc3QuZWRpdFByaW9yaXR5KCdoaWdoJyk7XG5jaGVja2xpc3RUZXN0LmxvZygpO1xuXG5jaGVjazEuZWRpdERlc2NyaXB0aW9uKCdjaGVjayAxLjEnKTtcbmNoZWNrMS5lZGl0U3RhdGUoKTtcbmNoZWNrMi5lZGl0RGVzY3JpcHRpb24oJ2NoZWNrIDIuMScpO1xuY2hlY2syLmVkaXRTdGF0ZSgpO1xuY2hlY2sxLmxvZygpO1xuY2hlY2syLmxvZygpO1xuXG5jaGVja2xpc3RUZXN0LmxvZygpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==