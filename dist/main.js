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
/* harmony export */   Check: () => (/* binding */ Check),
/* harmony export */   Checklist: () => (/* binding */ Checklist)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/parse.mjs");


class Checklist {
    constructor(title, description, checks, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.checks = checks;
        this.dueDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.parse)(dueDate, 'dd/MM/yyyy', new Date());
        this.priority = priority;
        this.id = 'checklist';
    }

    editTitle(newTitle) {
        this.title = newTitle;
    }

    editDescription(newDesc) {
        this.description = newDesc;
    }

    editDueDate(newDue) {
        this.dueDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.parse)(newDue, 'dd/MM/yyyy', new Date());
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
        this.id = 'note';
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

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   ProjectWrapper: () => (/* binding */ ProjectWrapper)
/* harmony export */ });
class Project {
    constructor(name) {
        this.name = name;
        this.items = [];
        this.itemsDateSort = [];
    }

    addItem(item) {
        this.items.push(item);
        this.itemsDateSort = this.items;
    }

    deleteItem(item) {
        const index = this.items.indexOf(item);
        this.items.splice(index, 1);
        this.itemsDateSort = this.items;
    }

    editName(newName) {
        this.name = newName;
    }

    log() {
        console.log(`Name: ${this.name}`);
        this.items.forEach((i) => i.log());
        console.log('------------------------------');
    }
}

class ProjectWrapper {
    constructor() {
        this.projects = [];
    }

    addProject(project) {
        this.projects.push(project);
    }

    deleteProject(project) {
        const index = this.items.indexOf(project);
        this.items.splice(index, 1);
    }

    log() {
        this.projects.forEach((p) => console.log(p.name));
    }
}



/***/ }),

/***/ "./src/tests.js":
/*!**********************!*\
  !*** ./src/tests.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   runTestDelete: () => (/* binding */ runTestDelete),
/* harmony export */   runTestStorage: () => (/* binding */ runTestStorage),
/* harmony export */   runTestsProjects: () => (/* binding */ runTestsProjects),
/* harmony export */   runTestsTodos: () => (/* binding */ runTestsTodos)
/* harmony export */ });
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos */ "./src/todos.js");
/* harmony import */ var _notes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notes */ "./src/notes.js");
/* harmony import */ var _checklists__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checklists */ "./src/checklists.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects */ "./src/projects.js");





function runTestsTodos() {
    const todoTest = new _todos__WEBPACK_IMPORTED_MODULE_0__["default"]('Todo 1', 'First todo', '11/03/2024', 'high');
    todoTest.log();
    todoTest.editTitle('New title');
    todoTest.editDescription('Edited description');
    todoTest.editDueDate('12/03/2024');
    todoTest.editPriority('mid');
    todoTest.editStatus();
    todoTest.log();
    
    const noteTest = new _notes__WEBPACK_IMPORTED_MODULE_1__["default"]('Note 1', 'First note');
    noteTest.log();
    noteTest.editTitle('New note title');
    noteTest.editDescription('nevermind');
    noteTest.log();
    
    const check1 = new _checklists__WEBPACK_IMPORTED_MODULE_2__.Check('check 1');
    const check2 = new _checklists__WEBPACK_IMPORTED_MODULE_2__.Check('check 2');
    check2.editState();
    let checkArray = [check1, check2];
    const checklistTest = new _checklists__WEBPACK_IMPORTED_MODULE_2__.Checklist('Checklist 1', 'First checklist', checkArray, '18/03/2024', 'low');
    checklistTest.log();
    checklistTest.editTitle('Checklost');
    checklistTest.editDescription('A checklist');
    checklistTest.editDueDate('25/03/2024');
    checklistTest.editPriority('high');
    checklistTest.log();
    
    check1.editDescription('check 1.1');
    check1.editState();
    check2.editDescription('check 2.1');
    check2.editState();
    check1.log();
    check2.log();
    
    checklistTest.log();
}

function runTestsProjects() {
    const projectTest = new _projects__WEBPACK_IMPORTED_MODULE_3__.Project('Study');
    const todo1 = new _todos__WEBPACK_IMPORTED_MODULE_0__["default"]('todo test', 'testing project', '17/03/2024', 'low');
    const check1 = new _checklists__WEBPACK_IMPORTED_MODULE_2__.Check('check 1');
    let checkArray = [check1];
    const checklist1 = new _checklists__WEBPACK_IMPORTED_MODULE_2__.Checklist('checklist test', 'testing project', checkArray, '13/03/2024', 'mid');

    projectTest.addItem(todo1);
    projectTest.addItem(checklist1);

    projectTest.log();
}

function runTestDelete() {
    const projectHome = new _projects__WEBPACK_IMPORTED_MODULE_3__.Project('Home');
    const projectTodos = new _projects__WEBPACK_IMPORTED_MODULE_3__.Project('Todo');
    const projectNotes = new _projects__WEBPACK_IMPORTED_MODULE_3__.Project('Notes');
    const projectChecklists = new _projects__WEBPACK_IMPORTED_MODULE_3__.Project('Checklists');
    const projectTest = new _projects__WEBPACK_IMPORTED_MODULE_3__.Project('Test');

    const todo1 = new _todos__WEBPACK_IMPORTED_MODULE_0__["default"]('Todo 1', 'First todo', '12/04/2024', 'high');
    const todo2 = new _todos__WEBPACK_IMPORTED_MODULE_0__["default"]('Todo 2', 'Second todo', '12/04/2024', 'high');
    const note1 = new _notes__WEBPACK_IMPORTED_MODULE_1__["default"]('Note 1', 'First note');
    const check1 = new _checklists__WEBPACK_IMPORTED_MODULE_2__.Check('check 1');
    let checkArray = [check1];
    const checklist1 = new _checklists__WEBPACK_IMPORTED_MODULE_2__.Checklist('Checklist 1', 'First checklist', checkArray, '12/04/2024', 'high');

    projectHome.addItem(todo1);
    projectHome.addItem(todo2);
    projectHome.addItem(checklist1);

    projectTodos.addItem(todo1);
    projectTodos.addItem(todo2);

    projectNotes.addItem(note1);

    projectChecklists.addItem(checklist1);

    projectTest.addItem(todo1);
    projectTest.addItem(checklist1);

    projectHome.log();
    projectTodos.log();
    projectNotes.log();
    projectChecklists.log();
    projectTest.log();

    projectHome.deleteItem(todo1);
    projectHome.log();

    projectTodos.deleteItem(todo2);
    projectTodos.log();

    projectNotes.deleteItem(note1);
    projectNotes.log();

    projectChecklists.deleteItem(checklist1);
    projectChecklists.log();
}

function runTestStorage() {
    const projectHome = new _projects__WEBPACK_IMPORTED_MODULE_3__.Project('Home');
    const projectTodos = new _projects__WEBPACK_IMPORTED_MODULE_3__.Project('Todo');
    const projectNotes = new _projects__WEBPACK_IMPORTED_MODULE_3__.Project('Notes');
    const projectChecklists = new _projects__WEBPACK_IMPORTED_MODULE_3__.Project('Checklists');
    const projectTest = new _projects__WEBPACK_IMPORTED_MODULE_3__.Project('Test');

    const todo1 = new _todos__WEBPACK_IMPORTED_MODULE_0__["default"]('Todo 1', 'First todo', '12/04/2024', 'high');
    const todo2 = new _todos__WEBPACK_IMPORTED_MODULE_0__["default"]('Todo 2', 'Second todo', '12/04/2024', 'high');
    const note1 = new _notes__WEBPACK_IMPORTED_MODULE_1__["default"]('Note 1', 'First note');
    const check1 = new _checklists__WEBPACK_IMPORTED_MODULE_2__.Check('check 1');
    let checkArray = [check1];
    const checklist1 = new _checklists__WEBPACK_IMPORTED_MODULE_2__.Checklist('Checklist 1', 'First checklist', checkArray, '12/04/2024', 'high');

    projectHome.addItem(todo1);
    projectHome.addItem(todo2);
    projectHome.addItem(checklist1);

    projectTodos.addItem(todo1);
    projectTodos.addItem(todo2);

    projectNotes.addItem(note1);

    projectChecklists.addItem(checklist1);

    projectTest.addItem(todo1);
    projectTest.addItem(checklist1);

    let projects = new _projects__WEBPACK_IMPORTED_MODULE_3__.ProjectWrapper();
    projects.addProject(projectHome);
    projects.addProject(projectTodos);
    projects.addProject(projectNotes);
    projects.addProject(projectChecklists);
    projects.addProject(projectTest);

    projects.log();
    localStorage.clear();

    localStorage.setItem('projects', JSON.stringify(projects));
    let savedProjects = JSON.parse(localStorage.getItem('projects'));
    console.log(savedProjects);
    projects = new _projects__WEBPACK_IMPORTED_MODULE_3__.ProjectWrapper();
    savedProjects['projects'].forEach(element => {
        projects.addProject(element);
    });
    projects.log();
}



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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/parse.mjs");


class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.parse)(dueDate, 'dd/MM/yyyy', new Date());
        this.priority = priority;
        this.status = false;
        this.id = 'todo';
    }

    editTitle(newTitle) {
        this.title = newTitle;
    }

    editDescription(newDesc) {
        this.description = newDesc;
    }

    editDueDate(newDue) {
        this.dueDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.parse)(newDue, 'dd/MM/yyyy', new Date());
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

/***/ }),

/***/ "./node_modules/date-fns/_lib/defaultOptions.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/_lib/defaultOptions.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
let defaultOptions = {};

function getDefaultOptions() {
  return defaultOptions;
}

function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/longFormatters.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/longFormatters.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   longFormatters: () => (/* binding */ longFormatters)
/* harmony export */ });
const dateLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "P":
      return formatLong.date({ width: "short" });
    case "PP":
      return formatLong.date({ width: "medium" });
    case "PPP":
      return formatLong.date({ width: "long" });
    case "PPPP":
    default:
      return formatLong.date({ width: "full" });
  }
};

const timeLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "p":
      return formatLong.time({ width: "short" });
    case "pp":
      return formatLong.time({ width: "medium" });
    case "ppp":
      return formatLong.time({ width: "long" });
    case "pppp":
    default:
      return formatLong.time({ width: "full" });
  }
};

const dateTimeLongFormatter = (pattern, formatLong) => {
  const matchResult = pattern.match(/(P+)(p+)?/) || [];
  const datePattern = matchResult[1];
  const timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  let dateTimeFormat;

  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong.dateTime({ width: "short" });
      break;
    case "PP":
      dateTimeFormat = formatLong.dateTime({ width: "medium" });
      break;
    case "PPP":
      dateTimeFormat = formatLong.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong.dateTime({ width: "full" });
      break;
  }

  return dateTimeFormat
    .replace("{{date}}", dateLongFormatter(datePattern, formatLong))
    .replace("{{time}}", timeLongFormatter(timePattern, formatLong));
};

const longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter,
};


/***/ }),

/***/ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTimezoneOffsetInMilliseconds: () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const utcDate = new Date(
    Date.UTC(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds(),
    ),
  );
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/protectedTokens.mjs":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/_lib/protectedTokens.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isProtectedDayOfYearToken: () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   isProtectedWeekYearToken: () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   warnOrThrowProtectedError: () => (/* binding */ warnOrThrowProtectedError)
/* harmony export */ });
const dayOfYearTokenRE = /^D+$/;
const weekYearTokenRE = /^Y+$/;

const throwTokens = ["D", "DD", "YY", "YYYY"];

function isProtectedDayOfYearToken(token) {
  return dayOfYearTokenRE.test(token);
}

function isProtectedWeekYearToken(token) {
  return weekYearTokenRE.test(token);
}

function warnOrThrowProtectedError(token, format, input) {
  const _message = message(token, format, input);
  console.warn(_message);
  if (throwTokens.includes(token)) throw new RangeError(_message);
}

function message(token, format, input) {
  const subject = token[0] === "Y" ? "years" : "days of the month";
  return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}


/***/ }),

/***/ "./node_modules/date-fns/addDays.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/addDays.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addDays: () => (/* binding */ addDays),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be added.
 *
 * @returns The new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays(date, amount) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  if (isNaN(amount)) return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, NaN);
  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return _date;
  }
  _date.setDate(_date.getDate() + amount);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addDays);


/***/ }),

/***/ "./node_modules/date-fns/constants.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/constants.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),
/* harmony export */   daysInYear: () => (/* binding */ daysInYear),
/* harmony export */   maxTime: () => (/* binding */ maxTime),
/* harmony export */   millisecondsInDay: () => (/* binding */ millisecondsInDay),
/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),
/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),
/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),
/* harmony export */   millisecondsInWeek: () => (/* binding */ millisecondsInWeek),
/* harmony export */   minTime: () => (/* binding */ minTime),
/* harmony export */   minutesInDay: () => (/* binding */ minutesInDay),
/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),
/* harmony export */   minutesInMonth: () => (/* binding */ minutesInMonth),
/* harmony export */   minutesInYear: () => (/* binding */ minutesInYear),
/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),
/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),
/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),
/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),
/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),
/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),
/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),
/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),
/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),
/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */

/**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */
const daysInWeek = 7;

/**
 * @constant
 * @name daysInYear
 * @summary Days in 1 year.
 *
 * @description
 * How many days in a year.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 */
const daysInYear = 365.2425;

/**
 * @constant
 * @name maxTime
 * @summary Maximum allowed time.
 *
 * @example
 * import { maxTime } from "./constants/date-fns/constants";
 *
 * const isValid = 8640000000000001 <= maxTime;
 * //=> false
 *
 * new Date(8640000000000001);
 * //=> Invalid Date
 */
const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * @constant
 * @name minTime
 * @summary Minimum allowed time.
 *
 * @example
 * import { minTime } from "./constants/date-fns/constants";
 *
 * const isValid = -8640000000000001 >= minTime;
 * //=> false
 *
 * new Date(-8640000000000001)
 * //=> Invalid Date
 */
const minTime = -maxTime;

/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */
const millisecondsInWeek = 604800000;

/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */
const millisecondsInDay = 86400000;

/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */
const millisecondsInMinute = 60000;

/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */
const millisecondsInHour = 3600000;

/**
 * @constant
 * @name millisecondsInSecond
 * @summary Milliseconds in 1 second
 */
const millisecondsInSecond = 1000;

/**
 * @constant
 * @name minutesInYear
 * @summary Minutes in 1 year.
 */
const minutesInYear = 525600;

/**
 * @constant
 * @name minutesInMonth
 * @summary Minutes in 1 month.
 */
const minutesInMonth = 43200;

/**
 * @constant
 * @name minutesInDay
 * @summary Minutes in 1 day.
 */
const minutesInDay = 1440;

/**
 * @constant
 * @name minutesInHour
 * @summary Minutes in 1 hour.
 */
const minutesInHour = 60;

/**
 * @constant
 * @name monthsInQuarter
 * @summary Months in 1 quarter.
 */
const monthsInQuarter = 3;

/**
 * @constant
 * @name monthsInYear
 * @summary Months in 1 year.
 */
const monthsInYear = 12;

/**
 * @constant
 * @name quartersInYear
 * @summary Quarters in 1 year
 */
const quartersInYear = 4;

/**
 * @constant
 * @name secondsInHour
 * @summary Seconds in 1 hour.
 */
const secondsInHour = 3600;

/**
 * @constant
 * @name secondsInMinute
 * @summary Seconds in 1 minute.
 */
const secondsInMinute = 60;

/**
 * @constant
 * @name secondsInDay
 * @summary Seconds in 1 day.
 */
const secondsInDay = secondsInHour * 24;

/**
 * @constant
 * @name secondsInWeek
 * @summary Seconds in 1 week.
 */
const secondsInWeek = secondsInDay * 7;

/**
 * @constant
 * @name secondsInYear
 * @summary Seconds in 1 year.
 */
const secondsInYear = secondsInDay * daysInYear;

/**
 * @constant
 * @name secondsInMonth
 * @summary Seconds in 1 month
 */
const secondsInMonth = secondsInYear / 12;

/**
 * @constant
 * @name secondsInQuarter
 * @summary Seconds in 1 quarter.
 */
const secondsInQuarter = secondsInMonth * 3;


/***/ }),

/***/ "./node_modules/date-fns/constructFrom.mjs":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/constructFrom.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructFrom: () => (/* binding */ constructFrom),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from 'date-fns'
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use contrustor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   )
 * }
 */
function constructFrom(date, value) {
  if (date instanceof Date) {
    return new date.constructor(value);
  } else {
    return new Date(value);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructFrom);


/***/ }),

/***/ "./node_modules/date-fns/getDefaultOptions.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/getDefaultOptions.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions)
/* harmony export */ });
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");


/**
 * @name getDefaultOptions
 * @category Common Helpers
 * @summary Get default options.
 * @pure false
 *
 * @description
 * Returns an object that contains defaults for
 * `options.locale`, `options.weekStartsOn` and `options.firstWeekContainsDate`
 * arguments for all functions.
 *
 * You can change these with [setDefaultOptions](https://date-fns.org/docs/setDefaultOptions).
 *
 * @returns The default options
 *
 * @example
 * const result = getDefaultOptions()
 * //=> {}
 *
 * @example
 * setDefaultOptions({ weekStarsOn: 1, firstWeekContainsDate: 4 })
 * const result = getDefaultOptions()
 * //=> { weekStarsOn: 1, firstWeekContainsDate: 4 }
 */
function getDefaultOptions() {
  return Object.assign({}, (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)());
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDefaultOptions);


/***/ }),

/***/ "./node_modules/date-fns/getISODay.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/getISODay.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISODay: () => (/* binding */ getISODay)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name getISODay
 * @category Weekday Helpers
 * @summary Get the day of the ISO week of the given date.
 *
 * @description
 * Get the day of the ISO week of the given date,
 * which is 7 for Sunday, 1 for Monday etc.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The day of ISO week
 *
 * @example
 * // Which day of the ISO week is 26 February 2012?
 * const result = getISODay(new Date(2012, 1, 26))
 * //=> 7
 */
function getISODay(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  let day = _date.getDay();

  if (day === 0) {
    day = 7;
  }

  return day;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISODay);


/***/ }),

/***/ "./node_modules/date-fns/getISOWeek.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/getISOWeek.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISOWeek: () => (/* binding */ getISOWeek)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _startOfISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeekYear.mjs */ "./node_modules/date-fns/startOfISOWeekYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");





/**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
function getISOWeek(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = +(0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_1__.startOfISOWeek)(_date) - +(0,_startOfISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeekYear)(_date);

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(diff / _constants_mjs__WEBPACK_IMPORTED_MODULE_3__.millisecondsInWeek) + 1;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISOWeek);


/***/ }),

/***/ "./node_modules/date-fns/getISOWeekYear.mjs":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/getISOWeekYear.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISOWeekYear: () => (/* binding */ getISOWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");




/**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * const result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */
function getISOWeekYear(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const year = _date.getFullYear();

  const fourthOfJanuaryOfNextYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuaryOfNextYear);

  const fourthOfJanuaryOfThisYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuaryOfThisYear);

  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISOWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/getWeek.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/getWeek.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getWeek: () => (/* binding */ getWeek)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _startOfWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfWeekYear.mjs */ "./node_modules/date-fns/startOfWeekYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");





/**
 * The {@link getWeek} function options.
 */

/**
 * @name getWeek
 * @category Week Helpers
 * @summary Get the local week index of the given date.
 *
 * @description
 * Get the local week index of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The week
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005 with default options?
 * const result = getWeek(new Date(2005, 0, 2))
 * //=> 2
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January?
 * const result = getWeek(new Date(2005, 0, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> 53
 */

function getWeek(date, options) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = +(0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_1__.startOfWeek)(_date, options) - +(0,_startOfWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfWeekYear)(_date, options);

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(diff / _constants_mjs__WEBPACK_IMPORTED_MODULE_3__.millisecondsInWeek) + 1;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeek);


/***/ }),

/***/ "./node_modules/date-fns/getWeekYear.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/getWeekYear.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getWeekYear: () => (/* binding */ getWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");





/**
 * The {@link getWeekYear} function options.
 */

/**
 * @name getWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Get the local week-numbering year of the given date.
 *
 * @description
 * Get the local week-numbering year of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The local week-numbering year
 *
 * @example
 * // Which week numbering year is 26 December 2004 with the default settings?
 * const result = getWeekYear(new Date(2004, 11, 26))
 * //=> 2005
 *
 * @example
 * // Which week numbering year is 26 December 2004 if week starts on Saturday?
 * const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
 * //=> 2004
 *
 * @example
 * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
 * const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
 * //=> 2004
 */
function getWeekYear(date, options) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const year = _date.getFullYear();

  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const firstWeekOfNextYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeekOfNextYear, options);

  const firstWeekOfThisYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeekOfThisYear, options);

  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildFormatLongFn: () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return (options = {}) => {
    // TODO: Remove String()
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildLocalizeFn: () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
/* eslint-disable no-unused-vars */

/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 */

/**
 * The map of localized values for each width.
 */

/**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 */

/**
 * Converts the unit value to the tuple of values.
 */

/**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 */

/**
 * The tuple of localized quarter values. The first element represents Q1.
 */

/**
 * The tuple of localized day values. The first element represents Sunday.
 */

/**
 * The tuple of localized month values. The first element represents January.
 */

function buildLocalizeFn(args) {
  return (value, options) => {
    const context = options?.context ? String(options.context) : "standalone";

    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = options?.width ? String(options.width) : defaultWidth;

      valuesArray =
        args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = options?.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;

    // @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchFn.mjs":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchFn.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMatchFn: () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return (string, options = {}) => {
    const width = options.width;

    const matchPattern =
      (width && args.matchPatterns[width]) ||
      args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];

    const parsePatterns =
      (width && args.parsePatterns[width]) ||
      args.parsePatterns[args.defaultParseWidth];

    const key = Array.isArray(parsePatterns)
      ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString))
      : // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        findKey(parsePatterns, (pattern) => pattern.test(matchedString));

    let value;

    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback
      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        options.valueCallback(value)
      : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}

function findKey(object, predicate) {
  for (const key in object) {
    if (
      Object.prototype.hasOwnProperty.call(object, key) &&
      predicate(object[key])
    ) {
      return key;
    }
  }
  return undefined;
}

function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMatchPatternFn: () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    const matchedString = matchResult[0];

    const parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    let value = args.valueCallback
      ? args.valueCallback(parseResult[0])
      : parseResult[0];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
    value = options.valueCallback ? options.valueCallback(value) : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US.mjs":
/*!************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   enUS: () => (/* binding */ enUS)
/* harmony export */ });
/* harmony import */ var _en_US_lib_formatDistance_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./en-US/_lib/formatDistance.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs");
/* harmony import */ var _en_US_lib_formatLong_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./en-US/_lib/formatLong.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs");
/* harmony import */ var _en_US_lib_formatRelative_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./en-US/_lib/formatRelative.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs");
/* harmony import */ var _en_US_lib_localize_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./en-US/_lib/localize.mjs */ "./node_modules/date-fns/locale/en-US/_lib/localize.mjs");
/* harmony import */ var _en_US_lib_match_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./en-US/_lib/match.mjs */ "./node_modules/date-fns/locale/en-US/_lib/match.mjs");






/**
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)
 * @author Lesha Koss [@leshakoss](https://github.com/leshakoss)
 */
const enUS = {
  code: "en-US",
  formatDistance: _en_US_lib_formatDistance_mjs__WEBPACK_IMPORTED_MODULE_0__.formatDistance,
  formatLong: _en_US_lib_formatLong_mjs__WEBPACK_IMPORTED_MODULE_1__.formatLong,
  formatRelative: _en_US_lib_formatRelative_mjs__WEBPACK_IMPORTED_MODULE_2__.formatRelative,
  localize: _en_US_lib_localize_mjs__WEBPACK_IMPORTED_MODULE_3__.localize,
  match: _en_US_lib_match_mjs__WEBPACK_IMPORTED_MODULE_4__.match,
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1,
  },
};

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (enUS);


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatDistance: () => (/* binding */ formatDistance)
/* harmony export */ });
const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds",
  },

  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds",
  },

  halfAMinute: "half a minute",

  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes",
  },

  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes",
  },

  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours",
  },

  xHours: {
    one: "1 hour",
    other: "{{count}} hours",
  },

  xDays: {
    one: "1 day",
    other: "{{count}} days",
  },

  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks",
  },

  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks",
  },

  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months",
  },

  xMonths: {
    one: "1 month",
    other: "{{count}} months",
  },

  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years",
  },

  xYears: {
    one: "1 year",
    other: "{{count}} years",
  },

  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years",
  },

  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years",
  },
};

const formatDistance = (token, count, options) => {
  let result;

  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }

  return result;
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatLong: () => (/* binding */ formatLong)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildFormatLongFn.mjs */ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs");


const dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy",
};

const timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a",
};

const dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}",
};

const formatLong = {
  date: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: dateFormats,
    defaultWidth: "full",
  }),

  time: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: timeFormats,
    defaultWidth: "full",
  }),

  dateTime: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: dateTimeFormats,
    defaultWidth: "full",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatRelative: () => (/* binding */ formatRelative)
/* harmony export */ });
const formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P",
};

const formatRelative = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token];


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/localize.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/localize.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   localize: () => (/* binding */ localize)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildLocalizeFn.mjs */ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs");


const eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],

  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
};

const dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
};

const dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
};

const ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};

const localize = {
  ordinalNumber,

  era: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: eraValues,
    defaultWidth: "wide",
  }),

  quarter: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1,
  }),

  month: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: monthValues,
    defaultWidth: "wide",
  }),

  day: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: dayValues,
    defaultWidth: "wide",
  }),

  dayPeriod: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/match.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/match.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   match: () => (/* binding */ match)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_lib/buildMatchFn.mjs */ "./node_modules/date-fns/locale/_lib/buildMatchFn.mjs");
/* harmony import */ var _lib_buildMatchPatternFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildMatchPatternFn.mjs */ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs");



const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i,
};
const parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i],
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i,
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i],
};

const matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
};
const parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],

  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],
};

const matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
};
const parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
};

const matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i,
  },
};

const match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildMatchPatternFn)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10),
  }),

  era: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any",
  }),

  quarter: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1,
  }),

  month: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any",
  }),

  day: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any",
  }),

  dayPeriod: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/parse.mjs":
/*!*****************************************!*\
  !*** ./node_modules/date-fns/parse.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   longFormatters: () => (/* reexport safe */ _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.longFormatters),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   parsers: () => (/* reexport safe */ _parse_lib_parsers_mjs__WEBPACK_IMPORTED_MODULE_1__.parsers)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _getDefaultOptions_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDefaultOptions.mjs */ "./node_modules/date-fns/getDefaultOptions.mjs");
/* harmony import */ var _locale_en_US_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locale/en-US.mjs */ "./node_modules/date-fns/locale/en-US.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/format/longFormatters.mjs */ "./node_modules/date-fns/_lib/format/longFormatters.mjs");
/* harmony import */ var _lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_lib/protectedTokens.mjs */ "./node_modules/date-fns/_lib/protectedTokens.mjs");
/* harmony import */ var _parse_lib_parsers_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse/_lib/parsers.mjs */ "./node_modules/date-fns/parse/_lib/parsers.mjs");
/* harmony import */ var _parse_lib_Setter_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parse/_lib/Setter.mjs */ "./node_modules/date-fns/parse/_lib/Setter.mjs");









// Rexports of internal for libraries to use.
// See: https://github.com/date-fns/date-fns/issues/3638#issuecomment-1877082874


/**
 * The {@link parse} function options.
 */

// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const formattingTokensRegExp =
  /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;

const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;

const notWhitespaceRegExp = /\S/;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;

/**
 * @name parse
 * @category Common Helpers
 * @summary Parse the date.
 *
 * @description
 * Return the date parsed from string using the given format string.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters in the format string wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 *
 * Format of the format string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 5 below the table).
 *
 * Not all tokens are compatible. Combinations that don't make sense or could lead to bugs are prohibited
 * and will throw `RangeError`. For example usage of 24-hour format token with AM/PM token will throw an exception:
 *
 * ```javascript
 * parse('23 AM', 'HH a', new Date())
 * //=> RangeError: The format string mustn't contain `HH` and `a` at the same time
 * ```
 *
 * See the compatibility table: https://docs.google.com/spreadsheets/d/e/2PACX-1vQOPU3xUhplll6dyoMmVUXHKl_8CRDs6_ueLmex3SoqwhuolkuN3O05l4rqx5h1dKX8eb46Ul-CCSrq/pubhtml?gid=0&single=true
 *
 * Accepted format string patterns:
 * | Unit                            |Prior| Pattern | Result examples                   | Notes |
 * |---------------------------------|-----|---------|-----------------------------------|-------|
 * | Era                             | 140 | G..GGG  | AD, BC                            |       |
 * |                                 |     | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 |     | GGGGG   | A, B                              |       |
 * | Calendar year                   | 130 | y       | 44, 1, 1900, 2017, 9999           | 4     |
 * |                                 |     | yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | yy      | 44, 01, 00, 17                    | 4     |
 * |                                 |     | yyy     | 044, 001, 123, 999                | 4     |
 * |                                 |     | yyyy    | 0044, 0001, 1900, 2017            | 4     |
 * |                                 |     | yyyyy   | ...                               | 2,4   |
 * | Local week-numbering year       | 130 | Y       | 44, 1, 1900, 2017, 9000           | 4     |
 * |                                 |     | Yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | YY      | 44, 01, 00, 17                    | 4,6   |
 * |                                 |     | YYY     | 044, 001, 123, 999                | 4     |
 * |                                 |     | YYYY    | 0044, 0001, 1900, 2017            | 4,6   |
 * |                                 |     | YYYYY   | ...                               | 2,4   |
 * | ISO week-numbering year         | 130 | R       | -43, 1, 1900, 2017, 9999, -9999   | 4,5   |
 * |                                 |     | RR      | -43, 01, 00, 17                   | 4,5   |
 * |                                 |     | RRR     | -043, 001, 123, 999, -999         | 4,5   |
 * |                                 |     | RRRR    | -0043, 0001, 2017, 9999, -9999    | 4,5   |
 * |                                 |     | RRRRR   | ...                               | 2,4,5 |
 * | Extended year                   | 130 | u       | -43, 1, 1900, 2017, 9999, -999    | 4     |
 * |                                 |     | uu      | -43, 01, 99, -99                  | 4     |
 * |                                 |     | uuu     | -043, 001, 123, 999, -999         | 4     |
 * |                                 |     | uuuu    | -0043, 0001, 2017, 9999, -9999    | 4     |
 * |                                 |     | uuuuu   | ...                               | 2,4   |
 * | Quarter (formatting)            | 120 | Q       | 1, 2, 3, 4                        |       |
 * |                                 |     | Qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | QQ      | 01, 02, 03, 04                    |       |
 * |                                 |     | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | 120 | q       | 1, 2, 3, 4                        |       |
 * |                                 |     | qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | qq      | 01, 02, 03, 04                    |       |
 * |                                 |     | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | qqqqq   | 1, 2, 3, 4                        | 3     |
 * | Month (formatting)              | 110 | M       | 1, 2, ..., 12                     |       |
 * |                                 |     | Mo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | MM      | 01, 02, ..., 12                   |       |
 * |                                 |     | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | MMMM    | January, February, ..., December  | 2     |
 * |                                 |     | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | 110 | L       | 1, 2, ..., 12                     |       |
 * |                                 |     | Lo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | LL      | 01, 02, ..., 12                   |       |
 * |                                 |     | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | LLLL    | January, February, ..., December  | 2     |
 * |                                 |     | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | 100 | w       | 1, 2, ..., 53                     |       |
 * |                                 |     | wo      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | 100 | I       | 1, 2, ..., 53                     | 5     |
 * |                                 |     | Io      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | II      | 01, 02, ..., 53                   | 5     |
 * | Day of month                    |  90 | d       | 1, 2, ..., 31                     |       |
 * |                                 |     | do      | 1st, 2nd, ..., 31st               | 5     |
 * |                                 |     | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     |  90 | D       | 1, 2, ..., 365, 366               | 7     |
 * |                                 |     | Do      | 1st, 2nd, ..., 365th, 366th       | 5     |
 * |                                 |     | DD      | 01, 02, ..., 365, 366             | 7     |
 * |                                 |     | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 |     | DDDD    | ...                               | 2     |
 * | Day of week (formatting)        |  90 | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 |     | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    |  90 | i       | 1, 2, 3, ..., 7                   | 5     |
 * |                                 |     | io      | 1st, 2nd, ..., 7th                | 5     |
 * |                                 |     | ii      | 01, 02, ..., 07                   | 5     |
 * |                                 |     | iii     | Mon, Tue, Wed, ..., Sun           | 5     |
 * |                                 |     | iiii    | Monday, Tuesday, ..., Sunday      | 2,5   |
 * |                                 |     | iiiii   | M, T, W, T, F, S, S               | 5     |
 * |                                 |     | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 5     |
 * | Local day of week (formatting)  |  90 | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | eo      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | ee      | 02, 03, ..., 01                   |       |
 * |                                 |     | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 |     | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) |  90 | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | co      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | cc      | 02, 03, ..., 01                   |       |
 * |                                 |     | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 |     | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          |  80 | a..aaa  | AM, PM                            |       |
 * |                                 |     | aaaa    | a.m., p.m.                        | 2     |
 * |                                 |     | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          |  80 | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 |     | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 |     | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             |  80 | B..BBB  | at night, in the morning, ...     |       |
 * |                                 |     | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 |     | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     |  70 | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 |     | ho      | 1st, 2nd, ..., 11th, 12th         | 5     |
 * |                                 |     | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     |  70 | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 |     | Ho      | 0th, 1st, 2nd, ..., 23rd          | 5     |
 * |                                 |     | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     |  70 | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 |     | Ko      | 1st, 2nd, ..., 11th, 0th          | 5     |
 * |                                 |     | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     |  70 | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 |     | ko      | 24th, 1st, 2nd, ..., 23rd         | 5     |
 * |                                 |     | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          |  60 | m       | 0, 1, ..., 59                     |       |
 * |                                 |     | mo      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | mm      | 00, 01, ..., 59                   |       |
 * | Second                          |  50 | s       | 0, 1, ..., 59                     |       |
 * |                                 |     | so      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | ss      | 00, 01, ..., 59                   |       |
 * | Seconds timestamp               |  40 | t       | 512969520                         |       |
 * |                                 |     | tt      | ...                               | 2     |
 * | Fraction of second              |  30 | S       | 0, 1, ..., 9                      |       |
 * |                                 |     | SS      | 00, 01, ..., 99                   |       |
 * |                                 |     | SSS     | 000, 001, ..., 999                |       |
 * |                                 |     | SSSS    | ...                               | 2     |
 * | Milliseconds timestamp          |  20 | T       | 512969520900                      |       |
 * |                                 |     | TT      | ...                               | 2     |
 * | Timezone (ISO-8601 w/ Z)        |  10 | X       | -08, +0530, Z                     |       |
 * |                                 |     | XX      | -0800, +0530, Z                   |       |
 * |                                 |     | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 |     | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 |     | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       |  10 | x       | -08, +0530, +00                   |       |
 * |                                 |     | xx      | -0800, +0530, +0000               |       |
 * |                                 |     | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 |     | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 |     | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Long localized date             |  NA | P       | 05/29/1453                        | 5,8   |
 * |                                 |     | PP      | May 29, 1453                      |       |
 * |                                 |     | PPP     | May 29th, 1453                    |       |
 * |                                 |     | PPPP    | Sunday, May 29th, 1453            | 2,5,8 |
 * | Long localized time             |  NA | p       | 12:00 AM                          | 5,8   |
 * |                                 |     | pp      | 12:00:00 AM                       |       |
 * | Combination of date and time    |  NA | Pp      | 05/29/1453, 12:00 AM              |       |
 * |                                 |     | PPpp    | May 29, 1453, 12:00:00 AM         |       |
 * |                                 |     | PPPpp   | May 29th, 1453 at ...             |       |
 * |                                 |     | PPPPpp  | Sunday, May 29th, 1453 at ...     | 2,5,8 |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular.
 *    In `format` function, they will produce different result:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 *    `parse` will try to match both formatting and stand-alone units interchangably.
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table:
 *    - for numerical units (`yyyyyyyy`) `parse` will try to match a number
 *      as wide as the sequence
 *    - for text units (`MMMMMMMM`) `parse` will try to match the widest variation of the unit.
 *      These variations are marked with "2" in the last column of the table.
 *
 * 3. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 4. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` will try to guess the century of two digit year by proximity with `referenceDate`:
 *
 *    `parse('50', 'yy', new Date(2018, 0, 1)) //=> Sat Jan 01 2050 00:00:00`
 *
 *    `parse('75', 'yy', new Date(2018, 0, 1)) //=> Wed Jan 01 1975 00:00:00`
 *
 *    while `uu` will just assign the year as is:
 *
 *    `parse('50', 'uu', new Date(2018, 0, 1)) //=> Sat Jan 01 0050 00:00:00`
 *
 *    `parse('75', 'uu', new Date(2018, 0, 1)) //=> Tue Jan 01 0075 00:00:00`
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [setISOWeekYear](https://date-fns.org/docs/setISOWeekYear)
 *    and [setWeekYear](https://date-fns.org/docs/setWeekYear)).
 *
 * 5. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 6. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 7. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 8. `P+` tokens do not have a defined priority since they are merely aliases to other tokens based
 *    on the given locale.
 *
 *    using `en-US` locale: `P` => `MM/dd/yyyy`
 *    using `en-US` locale: `p` => `hh:mm a`
 *    using `pt-BR` locale: `P` => `dd/MM/yyyy`
 *    using `pt-BR` locale: `p` => `HH:mm`
 *
 * Values will be assigned to the date in the descending order of its unit's priority.
 * Units of an equal priority overwrite each other in the order of appearance.
 *
 * If no values of higher priority are parsed (e.g. when parsing string 'January 1st' without a year),
 * the values will be taken from 3rd argument `referenceDate` which works as a context of parsing.
 *
 * `referenceDate` must be passed for correct work of the function.
 * If you're not sure which `referenceDate` to supply, create a new instance of Date:
 * `parse('02/11/2014', 'MM/dd/yyyy', new Date())`
 * In this case parsing will be done in the context of the current date.
 * If `referenceDate` is `Invalid Date` or a value not convertible to valid `Date`,
 * then `Invalid Date` will be returned.
 *
 * The result may vary by locale.
 *
 * If `formatString` matches with `dateString` but does not provides tokens, `referenceDate` will be returned.
 *
 * If parsing failed, `Invalid Date` will be returned.
 * Invalid Date is a Date, whose time value is NaN.
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateStr - The string to parse
 * @param formatStr - The string of tokens
 * @param referenceDate - defines values missing from the parsed dateString
 * @param options - An object with options.
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @returns The parsed date
 *
 * @throws `options.locale` must contain `match` property
 * @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * // Parse 11 February 2014 from middle-endian format:
 * var result = parse('02/11/2014', 'MM/dd/yyyy', new Date())
 * //=> Tue Feb 11 2014 00:00:00
 *
 * @example
 * // Parse 28th of February in Esperanto locale in the context of 2010 year:
 * import eo from 'date-fns/locale/eo'
 * var result = parse('28-a de februaro', "do 'de' MMMM", new Date(2010, 0, 1), {
 *   locale: eo
 * })
 * //=> Sun Feb 28 2010 00:00:00
 */
function parse(dateStr, formatStr, referenceDate, options) {
  const defaultOptions = (0,_getDefaultOptions_mjs__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  const locale = options?.locale ?? defaultOptions.locale ?? _locale_en_US_mjs__WEBPACK_IMPORTED_MODULE_3__.enUS;

  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  if (formatStr === "") {
    if (dateStr === "") {
      return (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_4__.toDate)(referenceDate);
    } else {
      return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_5__.constructFrom)(referenceDate, NaN);
    }
  }

  const subFnOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale,
  };

  // If timezone isn't specified, it will be set to the system timezone
  const setters = [new _parse_lib_Setter_mjs__WEBPACK_IMPORTED_MODULE_6__.DateToSystemTimezoneSetter()];

  const tokens = formatStr
    .match(longFormattingTokensRegExp)
    .map((substring) => {
      const firstCharacter = substring[0];
      if (firstCharacter in _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.longFormatters) {
        const longFormatter = _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.longFormatters[firstCharacter];
        return longFormatter(substring, locale.formatLong);
      }
      return substring;
    })
    .join("")
    .match(formattingTokensRegExp);

  const usedTokens = [];

  for (let token of tokens) {
    if (
      !options?.useAdditionalWeekYearTokens &&
      (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_7__.isProtectedWeekYearToken)(token)
    ) {
      (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_7__.warnOrThrowProtectedError)(token, formatStr, dateStr);
    }
    if (
      !options?.useAdditionalDayOfYearTokens &&
      (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_7__.isProtectedDayOfYearToken)(token)
    ) {
      (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_7__.warnOrThrowProtectedError)(token, formatStr, dateStr);
    }

    const firstCharacter = token[0];
    const parser = _parse_lib_parsers_mjs__WEBPACK_IMPORTED_MODULE_1__.parsers[firstCharacter];
    if (parser) {
      const { incompatibleTokens } = parser;
      if (Array.isArray(incompatibleTokens)) {
        const incompatibleToken = usedTokens.find(
          (usedToken) =>
            incompatibleTokens.includes(usedToken.token) ||
            usedToken.token === firstCharacter,
        );
        if (incompatibleToken) {
          throw new RangeError(
            `The format string mustn't contain \`${incompatibleToken.fullToken}\` and \`${token}\` at the same time`,
          );
        }
      } else if (parser.incompatibleTokens === "*" && usedTokens.length > 0) {
        throw new RangeError(
          `The format string mustn't contain \`${token}\` and any other token at the same time`,
        );
      }

      usedTokens.push({ token: firstCharacter, fullToken: token });

      const parseResult = parser.run(
        dateStr,
        token,
        locale.match,
        subFnOptions,
      );

      if (!parseResult) {
        return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_5__.constructFrom)(referenceDate, NaN);
      }

      setters.push(parseResult.setter);

      dateStr = parseResult.rest;
    } else {
      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            firstCharacter +
            "`",
        );
      }

      // Replace two single quote characters with one single quote character
      if (token === "''") {
        token = "'";
      } else if (firstCharacter === "'") {
        token = cleanEscapedString(token);
      }

      // Cut token from string, or, if string doesn't match the token, return Invalid Date
      if (dateStr.indexOf(token) === 0) {
        dateStr = dateStr.slice(token.length);
      } else {
        return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_5__.constructFrom)(referenceDate, NaN);
      }
    }
  }

  // Check if the remaining input contains something other than whitespace
  if (dateStr.length > 0 && notWhitespaceRegExp.test(dateStr)) {
    return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_5__.constructFrom)(referenceDate, NaN);
  }

  const uniquePrioritySetters = setters
    .map((setter) => setter.priority)
    .sort((a, b) => b - a)
    .filter((priority, index, array) => array.indexOf(priority) === index)
    .map((priority) =>
      setters
        .filter((setter) => setter.priority === priority)
        .sort((a, b) => b.subPriority - a.subPriority),
    )
    .map((setterArray) => setterArray[0]);

  let date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_4__.toDate)(referenceDate);

  if (isNaN(date.getTime())) {
    return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_5__.constructFrom)(referenceDate, NaN);
  }

  const flags = {};
  for (const setter of uniquePrioritySetters) {
    if (!setter.validate(date, subFnOptions)) {
      return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_5__.constructFrom)(referenceDate, NaN);
    }

    const result = setter.set(date, flags, subFnOptions);
    // Result is tuple (date, flags)
    if (Array.isArray(result)) {
      date = result[0];
      Object.assign(flags, result[1]);
      // Result is date
    } else {
      date = result;
    }
  }

  return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_5__.constructFrom)(referenceDate, date);
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parse);


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/Parser.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/Parser.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Parser: () => (/* binding */ Parser)
/* harmony export */ });
/* harmony import */ var _Setter_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Setter.mjs */ "./node_modules/date-fns/parse/_lib/Setter.mjs");


class Parser {
  run(dateString, token, match, options) {
    const result = this.parse(dateString, token, match, options);
    if (!result) {
      return null;
    }

    return {
      setter: new _Setter_mjs__WEBPACK_IMPORTED_MODULE_0__.ValueSetter(
        result.value,
        this.validate,
        this.set,
        this.priority,
        this.subPriority,
      ),
      rest: result.rest,
    };
  }

  validate(_utcDate, _value, _options) {
    return true;
  }
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/Setter.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/Setter.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateToSystemTimezoneSetter: () => (/* binding */ DateToSystemTimezoneSetter),
/* harmony export */   Setter: () => (/* binding */ Setter),
/* harmony export */   ValueSetter: () => (/* binding */ ValueSetter)
/* harmony export */ });
/* harmony import */ var _transpose_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../transpose.mjs */ "./node_modules/date-fns/transpose.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");



const TIMEZONE_UNIT_PRIORITY = 10;

class Setter {
  subPriority = 0;

  validate(_utcDate, _options) {
    return true;
  }
}

class ValueSetter extends Setter {
  constructor(
    value,

    validateValue,

    setValue,

    priority,
    subPriority,
  ) {
    super();
    this.value = value;
    this.validateValue = validateValue;
    this.setValue = setValue;
    this.priority = priority;
    if (subPriority) {
      this.subPriority = subPriority;
    }
  }

  validate(date, options) {
    return this.validateValue(date, this.value, options);
  }

  set(date, flags, options) {
    return this.setValue(date, flags, this.value, options);
  }
}

class DateToSystemTimezoneSetter extends Setter {
  priority = TIMEZONE_UNIT_PRIORITY;
  subPriority = -1;
  set(date, flags) {
    if (flags.timestampIsSet) return date;
    return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_0__.constructFrom)(date, (0,_transpose_mjs__WEBPACK_IMPORTED_MODULE_1__.transpose)(date, Date));
  }
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/constants.mjs":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/constants.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   numericPatterns: () => (/* binding */ numericPatterns),
/* harmony export */   timezonePatterns: () => (/* binding */ timezonePatterns)
/* harmony export */ });
const numericPatterns = {
  month: /^(1[0-2]|0?\d)/, // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/, // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/, // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/, // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/, // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/, // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/, // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/, // 0 to 12
  minute: /^[0-5]?\d/, // 0 to 59
  second: /^[0-5]?\d/, // 0 to 59

  singleDigit: /^\d/, // 0 to 9
  twoDigits: /^\d{1,2}/, // 0 to 99
  threeDigits: /^\d{1,3}/, // 0 to 999
  fourDigits: /^\d{1,4}/, // 0 to 9999

  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/, // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/, // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/, // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/, // 0 to 9999, -0 to -9999
};

const timezonePatterns = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/,
};


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers.mjs":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parsers: () => (/* binding */ parsers)
/* harmony export */ });
/* harmony import */ var _parsers_EraParser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parsers/EraParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/EraParser.mjs");
/* harmony import */ var _parsers_YearParser_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parsers/YearParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/YearParser.mjs");
/* harmony import */ var _parsers_LocalWeekYearParser_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parsers/LocalWeekYearParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/LocalWeekYearParser.mjs");
/* harmony import */ var _parsers_ISOWeekYearParser_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parsers/ISOWeekYearParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/ISOWeekYearParser.mjs");
/* harmony import */ var _parsers_ExtendedYearParser_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parsers/ExtendedYearParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/ExtendedYearParser.mjs");
/* harmony import */ var _parsers_QuarterParser_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parsers/QuarterParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/QuarterParser.mjs");
/* harmony import */ var _parsers_StandAloneQuarterParser_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parsers/StandAloneQuarterParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/StandAloneQuarterParser.mjs");
/* harmony import */ var _parsers_MonthParser_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parsers/MonthParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/MonthParser.mjs");
/* harmony import */ var _parsers_StandAloneMonthParser_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parsers/StandAloneMonthParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/StandAloneMonthParser.mjs");
/* harmony import */ var _parsers_LocalWeekParser_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parsers/LocalWeekParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/LocalWeekParser.mjs");
/* harmony import */ var _parsers_ISOWeekParser_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./parsers/ISOWeekParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/ISOWeekParser.mjs");
/* harmony import */ var _parsers_DateParser_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./parsers/DateParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/DateParser.mjs");
/* harmony import */ var _parsers_DayOfYearParser_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./parsers/DayOfYearParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/DayOfYearParser.mjs");
/* harmony import */ var _parsers_DayParser_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./parsers/DayParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/DayParser.mjs");
/* harmony import */ var _parsers_LocalDayParser_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./parsers/LocalDayParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/LocalDayParser.mjs");
/* harmony import */ var _parsers_StandAloneLocalDayParser_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./parsers/StandAloneLocalDayParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/StandAloneLocalDayParser.mjs");
/* harmony import */ var _parsers_ISODayParser_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./parsers/ISODayParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/ISODayParser.mjs");
/* harmony import */ var _parsers_AMPMParser_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./parsers/AMPMParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/AMPMParser.mjs");
/* harmony import */ var _parsers_AMPMMidnightParser_mjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./parsers/AMPMMidnightParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/AMPMMidnightParser.mjs");
/* harmony import */ var _parsers_DayPeriodParser_mjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./parsers/DayPeriodParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/DayPeriodParser.mjs");
/* harmony import */ var _parsers_Hour1to12Parser_mjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./parsers/Hour1to12Parser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/Hour1to12Parser.mjs");
/* harmony import */ var _parsers_Hour0to23Parser_mjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./parsers/Hour0to23Parser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/Hour0to23Parser.mjs");
/* harmony import */ var _parsers_Hour0To11Parser_mjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./parsers/Hour0To11Parser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/Hour0To11Parser.mjs");
/* harmony import */ var _parsers_Hour1To24Parser_mjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./parsers/Hour1To24Parser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/Hour1To24Parser.mjs");
/* harmony import */ var _parsers_MinuteParser_mjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./parsers/MinuteParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/MinuteParser.mjs");
/* harmony import */ var _parsers_SecondParser_mjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./parsers/SecondParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/SecondParser.mjs");
/* harmony import */ var _parsers_FractionOfSecondParser_mjs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./parsers/FractionOfSecondParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/FractionOfSecondParser.mjs");
/* harmony import */ var _parsers_ISOTimezoneWithZParser_mjs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./parsers/ISOTimezoneWithZParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/ISOTimezoneWithZParser.mjs");
/* harmony import */ var _parsers_ISOTimezoneParser_mjs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./parsers/ISOTimezoneParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/ISOTimezoneParser.mjs");
/* harmony import */ var _parsers_TimestampSecondsParser_mjs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./parsers/TimestampSecondsParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/TimestampSecondsParser.mjs");
/* harmony import */ var _parsers_TimestampMillisecondsParser_mjs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./parsers/TimestampMillisecondsParser.mjs */ "./node_modules/date-fns/parse/_lib/parsers/TimestampMillisecondsParser.mjs");
































/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O* | Timezone (GMT)                 |
 * |  p  |                                |  P  |                                |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z* | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `parse` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any -- It's ok, we want any here
const parsers = {
  G: new _parsers_EraParser_mjs__WEBPACK_IMPORTED_MODULE_0__.EraParser(),
  y: new _parsers_YearParser_mjs__WEBPACK_IMPORTED_MODULE_1__.YearParser(),
  Y: new _parsers_LocalWeekYearParser_mjs__WEBPACK_IMPORTED_MODULE_2__.LocalWeekYearParser(),
  R: new _parsers_ISOWeekYearParser_mjs__WEBPACK_IMPORTED_MODULE_3__.ISOWeekYearParser(),
  u: new _parsers_ExtendedYearParser_mjs__WEBPACK_IMPORTED_MODULE_4__.ExtendedYearParser(),
  Q: new _parsers_QuarterParser_mjs__WEBPACK_IMPORTED_MODULE_5__.QuarterParser(),
  q: new _parsers_StandAloneQuarterParser_mjs__WEBPACK_IMPORTED_MODULE_6__.StandAloneQuarterParser(),
  M: new _parsers_MonthParser_mjs__WEBPACK_IMPORTED_MODULE_7__.MonthParser(),
  L: new _parsers_StandAloneMonthParser_mjs__WEBPACK_IMPORTED_MODULE_8__.StandAloneMonthParser(),
  w: new _parsers_LocalWeekParser_mjs__WEBPACK_IMPORTED_MODULE_9__.LocalWeekParser(),
  I: new _parsers_ISOWeekParser_mjs__WEBPACK_IMPORTED_MODULE_10__.ISOWeekParser(),
  d: new _parsers_DateParser_mjs__WEBPACK_IMPORTED_MODULE_11__.DateParser(),
  D: new _parsers_DayOfYearParser_mjs__WEBPACK_IMPORTED_MODULE_12__.DayOfYearParser(),
  E: new _parsers_DayParser_mjs__WEBPACK_IMPORTED_MODULE_13__.DayParser(),
  e: new _parsers_LocalDayParser_mjs__WEBPACK_IMPORTED_MODULE_14__.LocalDayParser(),
  c: new _parsers_StandAloneLocalDayParser_mjs__WEBPACK_IMPORTED_MODULE_15__.StandAloneLocalDayParser(),
  i: new _parsers_ISODayParser_mjs__WEBPACK_IMPORTED_MODULE_16__.ISODayParser(),
  a: new _parsers_AMPMParser_mjs__WEBPACK_IMPORTED_MODULE_17__.AMPMParser(),
  b: new _parsers_AMPMMidnightParser_mjs__WEBPACK_IMPORTED_MODULE_18__.AMPMMidnightParser(),
  B: new _parsers_DayPeriodParser_mjs__WEBPACK_IMPORTED_MODULE_19__.DayPeriodParser(),
  h: new _parsers_Hour1to12Parser_mjs__WEBPACK_IMPORTED_MODULE_20__.Hour1to12Parser(),
  H: new _parsers_Hour0to23Parser_mjs__WEBPACK_IMPORTED_MODULE_21__.Hour0to23Parser(),
  K: new _parsers_Hour0To11Parser_mjs__WEBPACK_IMPORTED_MODULE_22__.Hour0To11Parser(),
  k: new _parsers_Hour1To24Parser_mjs__WEBPACK_IMPORTED_MODULE_23__.Hour1To24Parser(),
  m: new _parsers_MinuteParser_mjs__WEBPACK_IMPORTED_MODULE_24__.MinuteParser(),
  s: new _parsers_SecondParser_mjs__WEBPACK_IMPORTED_MODULE_25__.SecondParser(),
  S: new _parsers_FractionOfSecondParser_mjs__WEBPACK_IMPORTED_MODULE_26__.FractionOfSecondParser(),
  X: new _parsers_ISOTimezoneWithZParser_mjs__WEBPACK_IMPORTED_MODULE_27__.ISOTimezoneWithZParser(),
  x: new _parsers_ISOTimezoneParser_mjs__WEBPACK_IMPORTED_MODULE_28__.ISOTimezoneParser(),
  t: new _parsers_TimestampSecondsParser_mjs__WEBPACK_IMPORTED_MODULE_29__.TimestampSecondsParser(),
  T: new _parsers_TimestampMillisecondsParser_mjs__WEBPACK_IMPORTED_MODULE_30__.TimestampMillisecondsParser(),
};


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/AMPMMidnightParser.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/AMPMMidnightParser.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AMPMMidnightParser: () => (/* binding */ AMPMMidnightParser)
/* harmony export */ });
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");



class AMPMMidnightParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 80;

  parse(dateString, token, match) {
    switch (token) {
      case "b":
      case "bb":
      case "bbb":
        return (
          match.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting",
          })
        );

      case "bbbbb":
        return match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting",
        });
      case "bbbb":
      default:
        return (
          match.dayPeriod(dateString, {
            width: "wide",
            context: "formatting",
          }) ||
          match.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting",
          })
        );
    }
  }

  set(date, _flags, value) {
    date.setHours((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.dayPeriodEnumToHours)(value), 0, 0, 0);
    return date;
  }

  incompatibleTokens = ["a", "B", "H", "k", "t", "T"];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/AMPMParser.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/AMPMParser.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AMPMParser: () => (/* binding */ AMPMParser)
/* harmony export */ });
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");



class AMPMParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 80;

  parse(dateString, token, match) {
    switch (token) {
      case "a":
      case "aa":
      case "aaa":
        return (
          match.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting",
          })
        );

      case "aaaaa":
        return match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting",
        });
      case "aaaa":
      default:
        return (
          match.dayPeriod(dateString, {
            width: "wide",
            context: "formatting",
          }) ||
          match.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting",
          })
        );
    }
  }

  set(date, _flags, value) {
    date.setHours((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.dayPeriodEnumToHours)(value), 0, 0, 0);
    return date;
  }

  incompatibleTokens = ["b", "B", "H", "k", "t", "T"];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/DateParser.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/DateParser.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateParser: () => (/* binding */ DateParser)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");




const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAYS_IN_MONTH_LEAP_YEAR = [
  31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
];

// Day of the month
class DateParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 90;
  subPriority = 1;

  parse(dateString, token, match) {
    switch (token) {
      case "d":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNumericPattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.numericPatterns.date, dateString);
      case "do":
        return match.ordinalNumber(dateString, { unit: "date" });
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
    }
  }

  validate(date, value) {
    const year = date.getFullYear();
    const isLeapYear = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.isLeapYearIndex)(year);
    const month = date.getMonth();
    if (isLeapYear) {
      return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
    } else {
      return value >= 1 && value <= DAYS_IN_MONTH[month];
    }
  }

  set(date, _flags, value) {
    date.setDate(value);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "w",
    "I",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T",
  ];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/DayOfYearParser.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/DayOfYearParser.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DayOfYearParser: () => (/* binding */ DayOfYearParser)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");




class DayOfYearParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 90;

  subpriority = 1;

  parse(dateString, token, match) {
    switch (token) {
      case "D":
      case "DD":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNumericPattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.numericPatterns.dayOfYear, dateString);
      case "Do":
        return match.ordinalNumber(dateString, { unit: "date" });
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
    }
  }

  validate(date, value) {
    const year = date.getFullYear();
    const isLeapYear = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.isLeapYearIndex)(year);
    if (isLeapYear) {
      return value >= 1 && value <= 366;
    } else {
      return value >= 1 && value <= 365;
    }
  }

  set(date, _flags, value) {
    date.setMonth(0, value);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "M",
    "L",
    "w",
    "I",
    "d",
    "E",
    "i",
    "e",
    "c",
    "t",
    "T",
  ];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/DayParser.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/DayParser.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DayParser: () => (/* binding */ DayParser)
/* harmony export */ });
/* harmony import */ var _setDay_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../setDay.mjs */ "./node_modules/date-fns/setDay.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");



// Day of week
class DayParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 90;

  parse(dateString, token, match) {
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return (
          match.day(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.day(dateString, { width: "short", context: "formatting" }) ||
          match.day(dateString, { width: "narrow", context: "formatting" })
        );

      // T
      case "EEEEE":
        return match.day(dateString, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "EEEEEE":
        return (
          match.day(dateString, { width: "short", context: "formatting" }) ||
          match.day(dateString, { width: "narrow", context: "formatting" })
        );

      // Tuesday
      case "EEEE":
      default:
        return (
          match.day(dateString, { width: "wide", context: "formatting" }) ||
          match.day(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.day(dateString, { width: "short", context: "formatting" }) ||
          match.day(dateString, { width: "narrow", context: "formatting" })
        );
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 6;
  }

  set(date, _flags, value, options) {
    date = (0,_setDay_mjs__WEBPACK_IMPORTED_MODULE_1__.setDay)(date, value, options);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = ["D", "i", "e", "c", "t", "T"];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/DayPeriodParser.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/DayPeriodParser.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DayPeriodParser: () => (/* binding */ DayPeriodParser)
/* harmony export */ });
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");



// in the morning, in the afternoon, in the evening, at night
class DayPeriodParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 80;

  parse(dateString, token, match) {
    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return (
          match.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting",
          })
        );

      case "BBBBB":
        return match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting",
        });
      case "BBBB":
      default:
        return (
          match.dayPeriod(dateString, {
            width: "wide",
            context: "formatting",
          }) ||
          match.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting",
          })
        );
    }
  }

  set(date, _flags, value) {
    date.setHours((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.dayPeriodEnumToHours)(value), 0, 0, 0);
    return date;
  }

  incompatibleTokens = ["a", "b", "t", "T"];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/EraParser.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/EraParser.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EraParser: () => (/* binding */ EraParser)
/* harmony export */ });
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");


class EraParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 140;

  parse(dateString, token, match) {
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return (
          match.era(dateString, { width: "abbreviated" }) ||
          match.era(dateString, { width: "narrow" })
        );

      // A, B
      case "GGGGG":
        return match.era(dateString, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return (
          match.era(dateString, { width: "wide" }) ||
          match.era(dateString, { width: "abbreviated" }) ||
          match.era(dateString, { width: "narrow" })
        );
    }
  }

  set(date, flags, value) {
    flags.era = value;
    date.setFullYear(value, 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = ["R", "u", "t", "T"];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/ExtendedYearParser.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/ExtendedYearParser.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExtendedYearParser: () => (/* binding */ ExtendedYearParser)
/* harmony export */ });
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");



class ExtendedYearParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 130;

  parse(dateString, token) {
    if (token === "u") {
      return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigitsSigned)(4, dateString);
    }

    return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigitsSigned)(token.length, dateString);
  }

  set(date, _flags, value) {
    date.setFullYear(value, 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/FractionOfSecondParser.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/FractionOfSecondParser.mjs ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FractionOfSecondParser: () => (/* binding */ FractionOfSecondParser)
/* harmony export */ });
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");



class FractionOfSecondParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 30;

  parse(dateString, token) {
    const valueCallback = (value) =>
      Math.trunc(value * Math.pow(10, -token.length + 3));
    return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString), valueCallback);
  }

  set(date, _flags, value) {
    date.setMilliseconds(value);
    return date;
  }

  incompatibleTokens = ["t", "T"];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/Hour0To11Parser.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/Hour0To11Parser.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hour0To11Parser: () => (/* binding */ Hour0To11Parser)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");




class Hour0To11Parser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 70;

  parse(dateString, token, match) {
    switch (token) {
      case "K":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNumericPattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.numericPatterns.hour11h, dateString);
      case "Ko":
        return match.ordinalNumber(dateString, { unit: "hour" });
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 11;
  }

  set(date, _flags, value) {
    const isPM = date.getHours() >= 12;
    if (isPM && value < 12) {
      date.setHours(value + 12, 0, 0, 0);
    } else {
      date.setHours(value, 0, 0, 0);
    }
    return date;
  }

  incompatibleTokens = ["h", "H", "k", "t", "T"];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/Hour0to23Parser.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/Hour0to23Parser.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hour0to23Parser: () => (/* binding */ Hour0to23Parser)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");




class Hour0to23Parser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 70;

  parse(dateString, token, match) {
    switch (token) {
      case "H":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNumericPattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.numericPatterns.hour23h, dateString);
      case "Ho":
        return match.ordinalNumber(dateString, { unit: "hour" });
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 23;
  }

  set(date, _flags, value) {
    date.setHours(value, 0, 0, 0);
    return date;
  }

  incompatibleTokens = ["a", "b", "h", "K", "k", "t", "T"];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/Hour1To24Parser.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/Hour1To24Parser.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hour1To24Parser: () => (/* binding */ Hour1To24Parser)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");




class Hour1To24Parser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 70;

  parse(dateString, token, match) {
    switch (token) {
      case "k":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNumericPattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.numericPatterns.hour24h, dateString);
      case "ko":
        return match.ordinalNumber(dateString, { unit: "hour" });
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 1 && value <= 24;
  }

  set(date, _flags, value) {
    const hours = value <= 24 ? value % 24 : value;
    date.setHours(hours, 0, 0, 0);
    return date;
  }

  incompatibleTokens = ["a", "b", "h", "H", "K", "t", "T"];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/Hour1to12Parser.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/Hour1to12Parser.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hour1to12Parser: () => (/* binding */ Hour1to12Parser)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");




class Hour1to12Parser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 70;

  parse(dateString, token, match) {
    switch (token) {
      case "h":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNumericPattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.numericPatterns.hour12h, dateString);
      case "ho":
        return match.ordinalNumber(dateString, { unit: "hour" });
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 1 && value <= 12;
  }

  set(date, _flags, value) {
    const isPM = date.getHours() >= 12;
    if (isPM && value < 12) {
      date.setHours(value + 12, 0, 0, 0);
    } else if (!isPM && value === 12) {
      date.setHours(0, 0, 0, 0);
    } else {
      date.setHours(value, 0, 0, 0);
    }
    return date;
  }

  incompatibleTokens = ["H", "K", "k", "t", "T"];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/ISODayParser.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/ISODayParser.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ISODayParser: () => (/* binding */ ISODayParser)
/* harmony export */ });
/* harmony import */ var _setISODay_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../setISODay.mjs */ "./node_modules/date-fns/setISODay.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");




// ISO day of week
class ISODayParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 90;

  parse(dateString, token, match) {
    const valueCallback = (value) => {
      if (value === 0) {
        return 7;
      }
      return value;
    };

    switch (token) {
      // 2
      case "i":
      case "ii": // 02
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
      // 2nd
      case "io":
        return match.ordinalNumber(dateString, { unit: "day" });
      // Tue
      case "iii":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)(
          match.day(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
            match.day(dateString, {
              width: "short",
              context: "formatting",
            }) ||
            match.day(dateString, {
              width: "narrow",
              context: "formatting",
            }),
          valueCallback,
        );
      // T
      case "iiiii":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)(
          match.day(dateString, {
            width: "narrow",
            context: "formatting",
          }),
          valueCallback,
        );
      // Tu
      case "iiiiii":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)(
          match.day(dateString, {
            width: "short",
            context: "formatting",
          }) ||
            match.day(dateString, {
              width: "narrow",
              context: "formatting",
            }),
          valueCallback,
        );
      // Tuesday
      case "iiii":
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)(
          match.day(dateString, {
            width: "wide",
            context: "formatting",
          }) ||
            match.day(dateString, {
              width: "abbreviated",
              context: "formatting",
            }) ||
            match.day(dateString, {
              width: "short",
              context: "formatting",
            }) ||
            match.day(dateString, {
              width: "narrow",
              context: "formatting",
            }),
          valueCallback,
        );
    }
  }

  validate(_date, value) {
    return value >= 1 && value <= 7;
  }

  set(date, _flags, value) {
    date = (0,_setISODay_mjs__WEBPACK_IMPORTED_MODULE_2__.setISODay)(date, value);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = [
    "y",
    "Y",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "w",
    "d",
    "D",
    "E",
    "e",
    "c",
    "t",
    "T",
  ];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/ISOTimezoneParser.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/ISOTimezoneParser.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ISOTimezoneParser: () => (/* binding */ ISOTimezoneParser)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getTimezoneOffsetInMilliseconds.mjs */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs");
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");






// Timezone (ISO-8601)
class ISOTimezoneParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 10;

  parse(dateString, token) {
    switch (token) {
      case "x":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseTimezonePattern)(
          _constants_mjs__WEBPACK_IMPORTED_MODULE_2__.timezonePatterns.basicOptionalMinutes,
          dateString,
        );
      case "xx":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseTimezonePattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.timezonePatterns.basic, dateString);
      case "xxxx":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseTimezonePattern)(
          _constants_mjs__WEBPACK_IMPORTED_MODULE_2__.timezonePatterns.basicOptionalSeconds,
          dateString,
        );
      case "xxxxx":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseTimezonePattern)(
          _constants_mjs__WEBPACK_IMPORTED_MODULE_2__.timezonePatterns.extendedOptionalSeconds,
          dateString,
        );
      case "xxx":
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseTimezonePattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.timezonePatterns.extended, dateString);
    }
  }

  set(date, flags, value) {
    if (flags.timestampIsSet) return date;
    return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_3__.constructFrom)(
      date,
      date.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_4__.getTimezoneOffsetInMilliseconds)(date) - value,
    );
  }

  incompatibleTokens = ["t", "T", "X"];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/ISOTimezoneWithZParser.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/ISOTimezoneWithZParser.mjs ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ISOTimezoneWithZParser: () => (/* binding */ ISOTimezoneWithZParser)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getTimezoneOffsetInMilliseconds.mjs */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs");
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");






// Timezone (ISO-8601. +00:00 is `'Z'`)
class ISOTimezoneWithZParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 10;

  parse(dateString, token) {
    switch (token) {
      case "X":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseTimezonePattern)(
          _constants_mjs__WEBPACK_IMPORTED_MODULE_2__.timezonePatterns.basicOptionalMinutes,
          dateString,
        );
      case "XX":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseTimezonePattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.timezonePatterns.basic, dateString);
      case "XXXX":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseTimezonePattern)(
          _constants_mjs__WEBPACK_IMPORTED_MODULE_2__.timezonePatterns.basicOptionalSeconds,
          dateString,
        );
      case "XXXXX":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseTimezonePattern)(
          _constants_mjs__WEBPACK_IMPORTED_MODULE_2__.timezonePatterns.extendedOptionalSeconds,
          dateString,
        );
      case "XXX":
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseTimezonePattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.timezonePatterns.extended, dateString);
    }
  }

  set(date, flags, value) {
    if (flags.timestampIsSet) return date;
    return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_3__.constructFrom)(
      date,
      date.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_4__.getTimezoneOffsetInMilliseconds)(date) - value,
    );
  }

  incompatibleTokens = ["t", "T", "x"];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/ISOWeekParser.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/ISOWeekParser.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ISOWeekParser: () => (/* binding */ ISOWeekParser)
/* harmony export */ });
/* harmony import */ var _setISOWeek_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../setISOWeek.mjs */ "./node_modules/date-fns/setISOWeek.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");






// ISO week of year
class ISOWeekParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 100;

  parse(dateString, token, match) {
    switch (token) {
      case "I":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNumericPattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.numericPatterns.week, dateString);
      case "Io":
        return match.ordinalNumber(dateString, { unit: "week" });
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 1 && value <= 53;
  }

  set(date, _flags, value) {
    return (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfISOWeek)((0,_setISOWeek_mjs__WEBPACK_IMPORTED_MODULE_4__.setISOWeek)(date, value));
  }

  incompatibleTokens = [
    "y",
    "Y",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "w",
    "d",
    "D",
    "e",
    "c",
    "t",
    "T",
  ];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/ISOWeekYearParser.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/ISOWeekYearParser.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ISOWeekYearParser: () => (/* binding */ ISOWeekYearParser)
/* harmony export */ });
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");





// ISO week-numbering year
class ISOWeekYearParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 130;

  parse(dateString, token) {
    if (token === "R") {
      return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigitsSigned)(4, dateString);
    }

    return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigitsSigned)(token.length, dateString);
  }

  set(date, _flags, value) {
    const firstWeekOfYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
    firstWeekOfYear.setFullYear(value, 0, 4);
    firstWeekOfYear.setHours(0, 0, 0, 0);
    return (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfISOWeek)(firstWeekOfYear);
  }

  incompatibleTokens = [
    "G",
    "y",
    "Y",
    "u",
    "Q",
    "q",
    "M",
    "L",
    "w",
    "d",
    "D",
    "e",
    "c",
    "t",
    "T",
  ];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/LocalDayParser.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/LocalDayParser.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalDayParser: () => (/* binding */ LocalDayParser)
/* harmony export */ });
/* harmony import */ var _setDay_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../setDay.mjs */ "./node_modules/date-fns/setDay.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");




// Local day of week
class LocalDayParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 90;
  parse(dateString, token, match, options) {
    const valueCallback = (value) => {
      // We want here floor instead of trunc, so we get -7 for value 0 instead of 0
      const wholeWeekDays = Math.floor((value - 1) / 7) * 7;
      return ((value + options.weekStartsOn + 6) % 7) + wholeWeekDays;
    };

    switch (token) {
      // 3
      case "e":
      case "ee": // 03
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString), valueCallback);
      // 3rd
      case "eo":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)(
          match.ordinalNumber(dateString, {
            unit: "day",
          }),
          valueCallback,
        );
      // Tue
      case "eee":
        return (
          match.day(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.day(dateString, { width: "short", context: "formatting" }) ||
          match.day(dateString, { width: "narrow", context: "formatting" })
        );

      // T
      case "eeeee":
        return match.day(dateString, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "eeeeee":
        return (
          match.day(dateString, { width: "short", context: "formatting" }) ||
          match.day(dateString, { width: "narrow", context: "formatting" })
        );

      // Tuesday
      case "eeee":
      default:
        return (
          match.day(dateString, { width: "wide", context: "formatting" }) ||
          match.day(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.day(dateString, { width: "short", context: "formatting" }) ||
          match.day(dateString, { width: "narrow", context: "formatting" })
        );
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 6;
  }

  set(date, _flags, value, options) {
    date = (0,_setDay_mjs__WEBPACK_IMPORTED_MODULE_2__.setDay)(date, value, options);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = [
    "y",
    "R",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "E",
    "i",
    "c",
    "t",
    "T",
  ];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/LocalWeekParser.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/LocalWeekParser.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalWeekParser: () => (/* binding */ LocalWeekParser)
/* harmony export */ });
/* harmony import */ var _setWeek_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../setWeek.mjs */ "./node_modules/date-fns/setWeek.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");






// Local week of year
class LocalWeekParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 100;

  parse(dateString, token, match) {
    switch (token) {
      case "w":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNumericPattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.numericPatterns.week, dateString);
      case "wo":
        return match.ordinalNumber(dateString, { unit: "week" });
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 1 && value <= 53;
  }

  set(date, _flags, value, options) {
    return (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)((0,_setWeek_mjs__WEBPACK_IMPORTED_MODULE_4__.setWeek)(date, value, options), options);
  }

  incompatibleTokens = [
    "y",
    "R",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "i",
    "t",
    "T",
  ];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/LocalWeekYearParser.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/LocalWeekYearParser.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalWeekYearParser: () => (/* binding */ LocalWeekYearParser)
/* harmony export */ });
/* harmony import */ var _getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../getWeekYear.mjs */ "./node_modules/date-fns/getWeekYear.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");





// Local week-numbering year
class LocalWeekYearParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 130;

  parse(dateString, token, match) {
    const valueCallback = (year) => ({
      year,
      isTwoDigitYear: token === "YY",
    });

    switch (token) {
      case "Y":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(4, dateString), valueCallback);
      case "Yo":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)(
          match.ordinalNumber(dateString, {
            unit: "year",
          }),
          valueCallback,
        );
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString), valueCallback);
    }
  }

  validate(_date, value) {
    return value.isTwoDigitYear || value.year > 0;
  }

  set(date, flags, value, options) {
    const currentYear = (0,_getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__.getWeekYear)(date, options);

    if (value.isTwoDigitYear) {
      const normalizedTwoDigitYear = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.normalizeTwoDigitYear)(
        value.year,
        currentYear,
      );
      date.setFullYear(
        normalizedTwoDigitYear,
        0,
        options.firstWeekContainsDate,
      );
      date.setHours(0, 0, 0, 0);
      return (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(date, options);
    }

    const year =
      !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
    date.setFullYear(year, 0, options.firstWeekContainsDate);
    date.setHours(0, 0, 0, 0);
    return (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(date, options);
  }

  incompatibleTokens = [
    "y",
    "R",
    "u",
    "Q",
    "q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "i",
    "t",
    "T",
  ];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/MinuteParser.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/MinuteParser.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MinuteParser: () => (/* binding */ MinuteParser)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");




class MinuteParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 60;

  parse(dateString, token, match) {
    switch (token) {
      case "m":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNumericPattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.numericPatterns.minute, dateString);
      case "mo":
        return match.ordinalNumber(dateString, { unit: "minute" });
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 59;
  }

  set(date, _flags, value) {
    date.setMinutes(value, 0, 0);
    return date;
  }

  incompatibleTokens = ["t", "T"];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/MonthParser.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/MonthParser.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MonthParser: () => (/* binding */ MonthParser)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");




class MonthParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "L",
    "w",
    "I",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T",
  ];

  priority = 110;

  parse(dateString, token, match) {
    const valueCallback = (value) => value - 1;

    switch (token) {
      // 1, 2, ..., 12
      case "M":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)(
          (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNumericPattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.numericPatterns.month, dateString),
          valueCallback,
        );
      // 01, 02, ..., 12
      case "MM":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(2, dateString), valueCallback);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)(
          match.ordinalNumber(dateString, {
            unit: "month",
          }),
          valueCallback,
        );
      // Jan, Feb, ..., Dec
      case "MMM":
        return (
          match.month(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.month(dateString, { width: "narrow", context: "formatting" })
        );

      // J, F, ..., D
      case "MMMMM":
        return match.month(dateString, {
          width: "narrow",
          context: "formatting",
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return (
          match.month(dateString, { width: "wide", context: "formatting" }) ||
          match.month(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.month(dateString, { width: "narrow", context: "formatting" })
        );
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 11;
  }

  set(date, _flags, value) {
    date.setMonth(value, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/QuarterParser.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/QuarterParser.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuarterParser: () => (/* binding */ QuarterParser)
/* harmony export */ });
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");



class QuarterParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 120;

  parse(dateString, token, match) {
    switch (token) {
      // 1, 2, 3, 4
      case "Q":
      case "QQ": // 01, 02, 03, 04
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return match.ordinalNumber(dateString, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return (
          match.quarter(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.quarter(dateString, {
            width: "narrow",
            context: "formatting",
          })
        );

      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return match.quarter(dateString, {
          width: "narrow",
          context: "formatting",
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return (
          match.quarter(dateString, {
            width: "wide",
            context: "formatting",
          }) ||
          match.quarter(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.quarter(dateString, {
            width: "narrow",
            context: "formatting",
          })
        );
    }
  }

  validate(_date, value) {
    return value >= 1 && value <= 4;
  }

  set(date, _flags, value) {
    date.setMonth((value - 1) * 3, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "M",
    "L",
    "w",
    "I",
    "d",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T",
  ];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/SecondParser.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/SecondParser.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SecondParser: () => (/* binding */ SecondParser)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");




class SecondParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 50;

  parse(dateString, token, match) {
    switch (token) {
      case "s":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNumericPattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.numericPatterns.second, dateString);
      case "so":
        return match.ordinalNumber(dateString, { unit: "second" });
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 59;
  }

  set(date, _flags, value) {
    date.setSeconds(value, 0);
    return date;
  }

  incompatibleTokens = ["t", "T"];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/StandAloneLocalDayParser.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/StandAloneLocalDayParser.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StandAloneLocalDayParser: () => (/* binding */ StandAloneLocalDayParser)
/* harmony export */ });
/* harmony import */ var _setDay_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../setDay.mjs */ "./node_modules/date-fns/setDay.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");




// Stand-alone local day of week
class StandAloneLocalDayParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 90;

  parse(dateString, token, match, options) {
    const valueCallback = (value) => {
      // We want here floor instead of trunc, so we get -7 for value 0 instead of 0
      const wholeWeekDays = Math.floor((value - 1) / 7) * 7;
      return ((value + options.weekStartsOn + 6) % 7) + wholeWeekDays;
    };

    switch (token) {
      // 3
      case "c":
      case "cc": // 03
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString), valueCallback);
      // 3rd
      case "co":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)(
          match.ordinalNumber(dateString, {
            unit: "day",
          }),
          valueCallback,
        );
      // Tue
      case "ccc":
        return (
          match.day(dateString, {
            width: "abbreviated",
            context: "standalone",
          }) ||
          match.day(dateString, { width: "short", context: "standalone" }) ||
          match.day(dateString, { width: "narrow", context: "standalone" })
        );

      // T
      case "ccccc":
        return match.day(dateString, {
          width: "narrow",
          context: "standalone",
        });
      // Tu
      case "cccccc":
        return (
          match.day(dateString, { width: "short", context: "standalone" }) ||
          match.day(dateString, { width: "narrow", context: "standalone" })
        );

      // Tuesday
      case "cccc":
      default:
        return (
          match.day(dateString, { width: "wide", context: "standalone" }) ||
          match.day(dateString, {
            width: "abbreviated",
            context: "standalone",
          }) ||
          match.day(dateString, { width: "short", context: "standalone" }) ||
          match.day(dateString, { width: "narrow", context: "standalone" })
        );
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 6;
  }

  set(date, _flags, value, options) {
    date = (0,_setDay_mjs__WEBPACK_IMPORTED_MODULE_2__.setDay)(date, value, options);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = [
    "y",
    "R",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "E",
    "i",
    "e",
    "t",
    "T",
  ];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/StandAloneMonthParser.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/StandAloneMonthParser.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StandAloneMonthParser: () => (/* binding */ StandAloneMonthParser)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");




class StandAloneMonthParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 110;

  parse(dateString, token, match) {
    const valueCallback = (value) => value - 1;

    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)(
          (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNumericPattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.numericPatterns.month, dateString),
          valueCallback,
        );
      // 01, 02, ..., 12
      case "LL":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(2, dateString), valueCallback);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)(
          match.ordinalNumber(dateString, {
            unit: "month",
          }),
          valueCallback,
        );
      // Jan, Feb, ..., Dec
      case "LLL":
        return (
          match.month(dateString, {
            width: "abbreviated",
            context: "standalone",
          }) ||
          match.month(dateString, { width: "narrow", context: "standalone" })
        );

      // J, F, ..., D
      case "LLLLL":
        return match.month(dateString, {
          width: "narrow",
          context: "standalone",
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return (
          match.month(dateString, { width: "wide", context: "standalone" }) ||
          match.month(dateString, {
            width: "abbreviated",
            context: "standalone",
          }) ||
          match.month(dateString, { width: "narrow", context: "standalone" })
        );
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 11;
  }

  set(date, _flags, value) {
    date.setMonth(value, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "M",
    "w",
    "I",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T",
  ];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/StandAloneQuarterParser.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/StandAloneQuarterParser.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StandAloneQuarterParser: () => (/* binding */ StandAloneQuarterParser)
/* harmony export */ });
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");



class StandAloneQuarterParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 120;

  parse(dateString, token, match) {
    switch (token) {
      // 1, 2, 3, 4
      case "q":
      case "qq": // 01, 02, 03, 04
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return match.ordinalNumber(dateString, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return (
          match.quarter(dateString, {
            width: "abbreviated",
            context: "standalone",
          }) ||
          match.quarter(dateString, {
            width: "narrow",
            context: "standalone",
          })
        );

      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return match.quarter(dateString, {
          width: "narrow",
          context: "standalone",
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return (
          match.quarter(dateString, {
            width: "wide",
            context: "standalone",
          }) ||
          match.quarter(dateString, {
            width: "abbreviated",
            context: "standalone",
          }) ||
          match.quarter(dateString, {
            width: "narrow",
            context: "standalone",
          })
        );
    }
  }

  validate(_date, value) {
    return value >= 1 && value <= 4;
  }

  set(date, _flags, value) {
    date.setMonth((value - 1) * 3, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = [
    "Y",
    "R",
    "Q",
    "M",
    "L",
    "w",
    "I",
    "d",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T",
  ];
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/TimestampMillisecondsParser.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/TimestampMillisecondsParser.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimestampMillisecondsParser: () => (/* binding */ TimestampMillisecondsParser)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");




class TimestampMillisecondsParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 20;

  parse(dateString) {
    return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseAnyDigitsSigned)(dateString);
  }

  set(date, _flags, value) {
    return [(0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, value), { timestampIsSet: true }];
  }

  incompatibleTokens = "*";
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/TimestampSecondsParser.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/TimestampSecondsParser.mjs ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimestampSecondsParser: () => (/* binding */ TimestampSecondsParser)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");




class TimestampSecondsParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 40;

  parse(dateString) {
    return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseAnyDigitsSigned)(dateString);
  }

  set(date, _flags, value) {
    return [(0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, value * 1000), { timestampIsSet: true }];
  }

  incompatibleTokens = "*";
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/parsers/YearParser.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/YearParser.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   YearParser: () => (/* binding */ YearParser)
/* harmony export */ });
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/date-fns/parse/_lib/utils.mjs");



// From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns
// | Year     |     y | yy |   yyy |  yyyy | yyyyy |
// |----------|-------|----|-------|-------|-------|
// | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
// | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
// | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
// | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
// | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
class YearParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 130;
  incompatibleTokens = ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"];

  parse(dateString, token, match) {
    const valueCallback = (year) => ({
      year,
      isTwoDigitYear: token === "yy",
    });

    switch (token) {
      case "y":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(4, dateString), valueCallback);
      case "yo":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)(
          match.ordinalNumber(dateString, {
            unit: "year",
          }),
          valueCallback,
        );
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString), valueCallback);
    }
  }

  validate(_date, value) {
    return value.isTwoDigitYear || value.year > 0;
  }

  set(date, flags, value) {
    const currentYear = date.getFullYear();

    if (value.isTwoDigitYear) {
      const normalizedTwoDigitYear = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.normalizeTwoDigitYear)(
        value.year,
        currentYear,
      );
      date.setFullYear(normalizedTwoDigitYear, 0, 1);
      date.setHours(0, 0, 0, 0);
      return date;
    }

    const year =
      !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
    date.setFullYear(year, 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
}


/***/ }),

/***/ "./node_modules/date-fns/parse/_lib/utils.mjs":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/utils.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dayPeriodEnumToHours: () => (/* binding */ dayPeriodEnumToHours),
/* harmony export */   isLeapYearIndex: () => (/* binding */ isLeapYearIndex),
/* harmony export */   mapValue: () => (/* binding */ mapValue),
/* harmony export */   normalizeTwoDigitYear: () => (/* binding */ normalizeTwoDigitYear),
/* harmony export */   parseAnyDigitsSigned: () => (/* binding */ parseAnyDigitsSigned),
/* harmony export */   parseNDigits: () => (/* binding */ parseNDigits),
/* harmony export */   parseNDigitsSigned: () => (/* binding */ parseNDigitsSigned),
/* harmony export */   parseNumericPattern: () => (/* binding */ parseNumericPattern),
/* harmony export */   parseTimezonePattern: () => (/* binding */ parseTimezonePattern)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/parse/_lib/constants.mjs");



function mapValue(parseFnResult, mapFn) {
  if (!parseFnResult) {
    return parseFnResult;
  }

  return {
    value: mapFn(parseFnResult.value),
    rest: parseFnResult.rest,
  };
}

function parseNumericPattern(pattern, dateString) {
  const matchResult = dateString.match(pattern);

  if (!matchResult) {
    return null;
  }

  return {
    value: parseInt(matchResult[0], 10),
    rest: dateString.slice(matchResult[0].length),
  };
}

function parseTimezonePattern(pattern, dateString) {
  const matchResult = dateString.match(pattern);

  if (!matchResult) {
    return null;
  }

  // Input is 'Z'
  if (matchResult[0] === "Z") {
    return {
      value: 0,
      rest: dateString.slice(1),
    };
  }

  const sign = matchResult[1] === "+" ? 1 : -1;
  const hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
  const minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
  const seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;

  return {
    value:
      sign *
      (hours * _constants_mjs__WEBPACK_IMPORTED_MODULE_0__.millisecondsInHour +
        minutes * _constants_mjs__WEBPACK_IMPORTED_MODULE_0__.millisecondsInMinute +
        seconds * _constants_mjs__WEBPACK_IMPORTED_MODULE_0__.millisecondsInSecond),
    rest: dateString.slice(matchResult[0].length),
  };
}

function parseAnyDigitsSigned(dateString) {
  return parseNumericPattern(_constants_mjs__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.anyDigitsSigned, dateString);
}

function parseNDigits(n, dateString) {
  switch (n) {
    case 1:
      return parseNumericPattern(_constants_mjs__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.singleDigit, dateString);
    case 2:
      return parseNumericPattern(_constants_mjs__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.twoDigits, dateString);
    case 3:
      return parseNumericPattern(_constants_mjs__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.threeDigits, dateString);
    case 4:
      return parseNumericPattern(_constants_mjs__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.fourDigits, dateString);
    default:
      return parseNumericPattern(new RegExp("^\\d{1," + n + "}"), dateString);
  }
}

function parseNDigitsSigned(n, dateString) {
  switch (n) {
    case 1:
      return parseNumericPattern(_constants_mjs__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.singleDigitSigned, dateString);
    case 2:
      return parseNumericPattern(_constants_mjs__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.twoDigitsSigned, dateString);
    case 3:
      return parseNumericPattern(_constants_mjs__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.threeDigitsSigned, dateString);
    case 4:
      return parseNumericPattern(_constants_mjs__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.fourDigitsSigned, dateString);
    default:
      return parseNumericPattern(new RegExp("^-?\\d{1," + n + "}"), dateString);
  }
}

function dayPeriodEnumToHours(dayPeriod) {
  switch (dayPeriod) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}

function normalizeTwoDigitYear(twoDigitYear, currentYear) {
  const isCommonEra = currentYear > 0;
  // Absolute number of the current year:
  // 1 -> 1 AC
  // 0 -> 1 BC
  // -1 -> 2 BC
  const absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;

  let result;
  if (absCurrentYear <= 50) {
    result = twoDigitYear || 100;
  } else {
    const rangeEnd = absCurrentYear + 50;
    const rangeEndCentury = Math.trunc(rangeEnd / 100) * 100;
    const isPreviousCentury = twoDigitYear >= rangeEnd % 100;
    result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
  }

  return isCommonEra ? result : 1 - result;
}

function isLeapYearIndex(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}


/***/ }),

/***/ "./node_modules/date-fns/setDay.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/setDay.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   setDay: () => (/* binding */ setDay)
/* harmony export */ });
/* harmony import */ var _addDays_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addDays.mjs */ "./node_modules/date-fns/addDays.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");




/**
 * The {@link setDay} function options.
 */

/**
 * @name setDay
 * @category Weekday Helpers
 * @summary Set the day of the week to the given date.
 *
 * @description
 * Set the day of the week to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param day - The day of the week of the new date
 * @param options - An object with options.
 *
 * @returns The new date with the day of the week set
 *
 * @example
 * // Set week day to Sunday, with the default weekStartsOn of Sunday:
 * const result = setDay(new Date(2014, 8, 1), 0)
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // Set week day to Sunday, with a weekStartsOn of Monday:
 * const result = setDay(new Date(2014, 8, 1), 0, { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 00:00:00
 */
function setDay(date, day, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);
  const currentDay = _date.getDay();

  const remainder = day % 7;
  const dayIndex = (remainder + 7) % 7;

  const delta = 7 - weekStartsOn;
  const diff =
    day < 0 || day > 6
      ? day - ((currentDay + delta) % 7)
      : ((dayIndex + delta) % 7) - ((currentDay + delta) % 7);
  return (0,_addDays_mjs__WEBPACK_IMPORTED_MODULE_2__.addDays)(_date, diff);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setDay);


/***/ }),

/***/ "./node_modules/date-fns/setISODay.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/setISODay.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   setISODay: () => (/* binding */ setISODay)
/* harmony export */ });
/* harmony import */ var _addDays_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addDays.mjs */ "./node_modules/date-fns/addDays.mjs");
/* harmony import */ var _getISODay_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getISODay.mjs */ "./node_modules/date-fns/getISODay.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");




/**
 * @name setISODay
 * @category Weekday Helpers
 * @summary Set the day of the ISO week to the given date.
 *
 * @description
 * Set the day of the ISO week to the given date.
 * ISO week starts with Monday.
 * 7 is the index of Sunday, 1 is the index of Monday etc.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param day - The day of the ISO week of the new date
 *
 * @returns The new date with the day of the ISO week set
 *
 * @example
 * // Set Sunday to 1 September 2014:
 * const result = setISODay(new Date(2014, 8, 1), 7)
 * //=> Sun Sep 07 2014 00:00:00
 */
function setISODay(date, day) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const currentDay = (0,_getISODay_mjs__WEBPACK_IMPORTED_MODULE_1__.getISODay)(_date);
  const diff = day - currentDay;
  return (0,_addDays_mjs__WEBPACK_IMPORTED_MODULE_2__.addDays)(_date, diff);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setISODay);


/***/ }),

/***/ "./node_modules/date-fns/setISOWeek.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/setISOWeek.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   setISOWeek: () => (/* binding */ setISOWeek)
/* harmony export */ });
/* harmony import */ var _getISOWeek_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getISOWeek.mjs */ "./node_modules/date-fns/getISOWeek.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");



/**
 * @name setISOWeek
 * @category ISO Week Helpers
 * @summary Set the ISO week to the given date.
 *
 * @description
 * Set the ISO week to the given date, saving the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param week - The ISO week of the new date
 *
 * @returns The new date with the ISO week set
 *
 * @example
 * // Set the 53rd ISO week to 7 August 2004:
 * const result = setISOWeek(new Date(2004, 7, 7), 53)
 * //=> Sat Jan 01 2005 00:00:00
 */
function setISOWeek(date, week) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = (0,_getISOWeek_mjs__WEBPACK_IMPORTED_MODULE_1__.getISOWeek)(_date) - week;
  _date.setDate(_date.getDate() - diff * 7);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setISOWeek);


/***/ }),

/***/ "./node_modules/date-fns/setWeek.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/setWeek.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   setWeek: () => (/* binding */ setWeek)
/* harmony export */ });
/* harmony import */ var _getWeek_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWeek.mjs */ "./node_modules/date-fns/getWeek.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");



/**
 * The {@link setWeek} function options.
 */

/**
 * @name setWeek
 * @category Week Helpers
 * @summary Set the local week to the given date.
 *
 * @description
 * Set the local week to the given date, saving the weekday number.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param week - The week of the new date
 * @param options - An object with options
 *
 * @returns The new date with the local week set
 *
 * @example
 * // Set the 1st week to 2 January 2005 with default options:
 * const result = setWeek(new Date(2005, 0, 2), 1)
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // Set the 1st week to 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January:
 * const result = setWeek(new Date(2005, 0, 2), 1, {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Sun Jan 4 2004 00:00:00
 */
function setWeek(date, week, options) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = (0,_getWeek_mjs__WEBPACK_IMPORTED_MODULE_1__.getWeek)(_date, options) - week;
  _date.setDate(_date.getDate() - diff * 7);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setWeek);


/***/ }),

/***/ "./node_modules/date-fns/startOfISOWeek.mjs":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeek.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfISOWeek: () => (/* binding */ startOfISOWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");


/**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfISOWeek(date) {
  return (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfWeek)(date, { weekStartsOn: 1 });
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfISOWeek);


/***/ }),

/***/ "./node_modules/date-fns/startOfISOWeekYear.mjs":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeekYear.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfISOWeekYear: () => (/* binding */ startOfISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getISOWeekYear.mjs */ "./node_modules/date-fns/getISOWeekYear.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");




/**
 * @name startOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of an ISO week-numbering year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * const result = startOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfISOWeekYear(date) {
  const year = (0,_getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_0__.getISOWeekYear)(date);
  const fourthOfJanuary = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuary);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfISOWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/startOfWeek.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/startOfWeek.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfWeek: () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");



/**
 * The {@link startOfWeek} function options.
 */

/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;

  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeek);


/***/ }),

/***/ "./node_modules/date-fns/startOfWeekYear.mjs":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/startOfWeekYear.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfWeekYear: () => (/* binding */ startOfWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWeekYear.mjs */ "./node_modules/date-fns/getWeekYear.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");





/**
 * The {@link startOfWeekYear} function options.
 */

/**
 * @name startOfWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Return the start of a local week-numbering year for the given date.
 *
 * @description
 * Return the start of a local week-numbering year.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week-numbering year
 *
 * @example
 * // The start of an a week-numbering year for 2 July 2005 with default settings:
 * const result = startOfWeekYear(new Date(2005, 6, 2))
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // The start of a week-numbering year for 2 July 2005
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * const result = startOfWeekYear(new Date(2005, 6, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfWeekYear(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const year = (0,_getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__.getWeekYear)(date, options);
  const firstWeek = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const _date = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeek, options);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/toDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/toDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new argument.constructor(+argument);
  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argument === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument);
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);


/***/ }),

/***/ "./node_modules/date-fns/transpose.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/transpose.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   transpose: () => (/* binding */ transpose)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");


/**
 * @name transpose
 * @category Generic Helpers
 * @summary Transpose the date to the given constructor.
 *
 * @description
 * The function transposes the date to the given constructor. It helps you
 * to transpose the date in the system time zone to say `UTCDate` or any other
 * date extension.
 *
 * @typeParam DateInputType - The input `Date` type derived from the passed argument.
 * @typeParam DateOutputType - The output `Date` type derived from the passed constructor.
 *
 * @param fromDate - The date to use values from
 * @param constructor - The date constructor to use
 *
 * @returns Date transposed to the given constructor
 *
 * @example
 * // Create July 10, 2022 00:00 in locale time zone
 * const date = new Date(2022, 6, 10)
 * //=> 'Sun Jul 10 2022 00:00:00 GMT+0800 (Singapore Standard Time)'
 *
 * @example
 * // Transpose the date to July 10, 2022 00:00 in UTC
 * transpose(date, UTCDate)
 * //=> 'Sun Jul 10 2022 00:00:00 GMT+0000 (Coordinated Universal Time)'
 */
function transpose(fromDate, constructor) {
  const date =
    constructor instanceof Date
      ? (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_0__.constructFrom)(constructor, 0)
      : new constructor(0);
  date.setFullYear(
    fromDate.getFullYear(),
    fromDate.getMonth(),
    fromDate.getDate(),
  );
  date.setHours(
    fromDate.getHours(),
    fromDate.getMinutes(),
    fromDate.getSeconds(),
    fromDate.getMilliseconds(),
  );
  return date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (transpose);


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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos */ "./src/todos.js");
/* harmony import */ var _notes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notes */ "./src/notes.js");
/* harmony import */ var _checklists__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checklists */ "./src/checklists.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _tests__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tests */ "./src/tests.js");






// runTestsTodos();
// runTestsProjects();
// runTestDelete();
// runTestStorage();

const projectHome = new _projects__WEBPACK_IMPORTED_MODULE_3__.Project('Home');
const projectTodos = new _projects__WEBPACK_IMPORTED_MODULE_3__.Project('To-dos');
const projectNotes = new _projects__WEBPACK_IMPORTED_MODULE_3__.Project('Notes');
const projectChecklists = new _projects__WEBPACK_IMPORTED_MODULE_3__.Project('Checklists');
const projectToday = new _projects__WEBPACK_IMPORTED_MODULE_3__.Project('Today');
let wrapper = new _projects__WEBPACK_IMPORTED_MODULE_3__.ProjectWrapper();

wrapper.addProject(projectHome);
wrapper.addProject(projectTodos);
wrapper.addProject(projectNotes);
wrapper.addProject(projectChecklists);
wrapper.addProject(projectToday);

const todoDefault1 = new _todos__WEBPACK_IMPORTED_MODULE_0__["default"]('This is a To-do', 'You can click the checkbox to mark it as finished', '12/04/2024', 'mid');
const noteDefault1 = new _notes__WEBPACK_IMPORTED_MODULE_1__["default"]('This is a note', 'You can write anything you want, no due date and no priority');
const checkDefault1 = new _checklists__WEBPACK_IMPORTED_MODULE_2__.Check('This is a checklist item, click the checkbox to mark it as finished');
let checkDefaultArray = [checkDefault1];
const checklistDefault1 = new _checklists__WEBPACK_IMPORTED_MODULE_2__.Checklist('This is a checklist', 'It can contain many tasks', checkDefaultArray, '12/04/2024', 'mid');

projectHome.addItem(todoDefault1);
projectHome.addItem(checklistDefault1);

projectTodos.addItem(todoDefault1);

projectNotes.addItem(noteDefault1);

projectChecklists.addItem(checklistDefault1);

const divProjectButtons = document.querySelector(".div-project-buttons");
const itemsDiv = document.querySelector(".items");

let currentProject = projectHome;

function ScreenController() {
    function renderProjectButtons() {
        divProjectButtons.replaceChildren();
        let i = 0;
        wrapper.projects.forEach(element => {
            const projectButton = document.createElement('button');
            projectButton.textContent = element.name;
            projectButton.setAttribute("id", i);
            projectButton.addEventListener('click', () => {
                renderProjectItems(element);
                let id = projectButton.getAttribute("id");
                currentProject = wrapper.projects[id];
            });
            divProjectButtons.appendChild(projectButton);
            i++;
        });
    }

    function renderProjectItems(project) {
        itemsDiv.replaceChildren();
        project.items.forEach(element => {
            const objectDiv = document.createElement('div');
            objectDiv.textContent = element.title;
            itemsDiv.appendChild(objectDiv);
        });
    }

    function populateStorage() {
        localStorage.setItem('wrapper', JSON.stringify(wrapper));
    }

    function retrieveStorage() {
        let savedWrapper = JSON.parse(localStorage.getItem('wrapper'));
        Object.setPrototypeOf(savedWrapper, _projects__WEBPACK_IMPORTED_MODULE_3__.ProjectWrapper.prototype);
        console.log(savedWrapper);
        wrapper = savedWrapper;
        savedWrapper['projects'].forEach(p => {
            Object.setPrototypeOf(p, _projects__WEBPACK_IMPORTED_MODULE_3__.Project.prototype);
            rebuildItems(p['items']);
        });
    }

    function rebuildItems(items) {
        if (items.length !== 0) {
            items.forEach((item) => {
                if (item.id === 'todo') {
                    Object.setPrototypeOf(item, _todos__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
                } else if (item.id === 'note') {
                    Object.setPrototypeOf(item, _notes__WEBPACK_IMPORTED_MODULE_1__["default"].prototype);
                } else {
                    Object.setPrototypeOf(item, _checklists__WEBPACK_IMPORTED_MODULE_2__.Checklist.prototype);
                    item.checks.forEach((check) => {
                        Object.setPrototypeOf(check, _checklists__WEBPACK_IMPORTED_MODULE_2__.Check.prototype);
                    });
                }
            });
        }
    }

    const buttonNew = document.querySelector(".button-new");
    const dialog = document.querySelector(".form-new-object");
    buttonNew.addEventListener('click', () => {
        dialog.showModal();
    });

    const buttonClose = document.querySelector(".button-close");
    buttonClose.addEventListener('click', () => {
        dialog.close();
    });

    const formContent = document.querySelector(".form-content");
    const formTodo = document.createElement("form");
    const formNote = document.createElement("form");
    const formChecklist = document.createElement("form");
    const formProject = document.createElement("form");
    const buttonNewTodo = document.querySelector(".button-new-todo");
    buttonNewTodo.addEventListener('click', () => {
        formContent.replaceChildren();
        formTodo.replaceChildren();

        const labelTitle = document.createElement("label");
        labelTitle.textContent = "To-do title";
        labelTitle.setAttribute("for", "todo-title");
        const inputTitle = document.createElement("input");
        inputTitle.setAttribute("type", "text");
        inputTitle.setAttribute("id", "todo-title");
        inputTitle.setAttribute("name", "todo-title");
        inputTitle.setAttribute("placeholder", "Title");

        const labelDesc = document.createElement("label");
        labelDesc.textContent = "To-do description";
        labelDesc.setAttribute("for", "todo-description");
        const inputDesc = document.createElement("input");
        inputDesc.setAttribute("type", "text");
        inputDesc.setAttribute("id", "todo-description");
        inputDesc.setAttribute("name", "todo-description");
        inputDesc.setAttribute("placeholder", "Description");

        const labelDate = document.createElement("label");
        labelDate.textContent = "Due date";
        labelDate.setAttribute("for", "todo-date");
        const inputDate = document.createElement("input");
        inputDate.setAttribute("type", "text");
        inputDate.setAttribute("id", "todo-date");
        inputDate.setAttribute("name", "todo-date");
        inputDate.setAttribute("placeholder", "dd/mm/yyyy");

        let priority = "low";
        const buttonPriorityLow = document.createElement("button");
        buttonPriorityLow.textContent = "Low";
        buttonPriorityLow.addEventListener("click", (e) => {
            e.preventDefault();
            priority = "low";
        });

        const buttonPriorityMid = document.createElement("button");
        buttonPriorityMid.textContent = "Mid";
        buttonPriorityMid.addEventListener("click", (e) => {
            e.preventDefault();
            priority = "mid";
        });

        const buttonPriorityHigh = document.createElement("button");
        buttonPriorityHigh.textContent = "High";
        buttonPriorityHigh.addEventListener("click", (e) => {
            e.preventDefault();
            priority = "high";
        });

        const buttonSubmitTodo = document.createElement("button");
        buttonSubmitTodo.textContent = "Add new to-do";

        formTodo.appendChild(labelTitle);
        formTodo.appendChild(inputTitle);
        formTodo.appendChild(labelDesc);
        formTodo.appendChild(inputDesc);
        formTodo.appendChild(labelDate);
        formTodo.appendChild(inputDate);
        formTodo.appendChild(buttonPriorityLow);
        formTodo.appendChild(buttonPriorityMid);
        formTodo.appendChild(buttonPriorityHigh);
        formTodo.appendChild(buttonSubmitTodo);
        formContent.appendChild(formTodo);

        formTodo.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);

            const formDataObj = Object.fromEntries(formData.entries());
            dialog.close();

            const newTodo = new _todos__WEBPACK_IMPORTED_MODULE_0__["default"](
                formDataObj["todo-title"], 
                formDataObj["todo-description"],
                formDataObj["todo-date"],
                priority
            );

            currentProject.addItem(newTodo);
            renderProjectButtons();
            renderProjectItems(currentProject);
            localStorage.clear();
            populateStorage();
        });
    });

    const buttonNewNote = document.querySelector(".button-new-note");
    buttonNewNote.addEventListener('click', () => {
        formContent.replaceChildren();
        formNote.replaceChildren();

        const labelTitle = document.createElement("label");
        labelTitle.textContent = "Note title";
        labelTitle.setAttribute("for", "note-title");
        const inputTitle = document.createElement("input");
        inputTitle.setAttribute("type", "text");
        inputTitle.setAttribute("id", "note-title");
        inputTitle.setAttribute("name", "note-title");
        inputTitle.setAttribute("placeholder", "Title");

        const labelDesc = document.createElement("label");
        labelDesc.textContent = "Note description";
        labelDesc.setAttribute("for", "note-description");
        const inputDesc = document.createElement("input");
        inputDesc.setAttribute("type", "text");
        inputDesc.setAttribute("id", "note-description");
        inputDesc.setAttribute("name", "note-description");
        inputDesc.setAttribute("placeholder", "Description");

        const buttonSubmitNote = document.createElement("button");
        buttonSubmitNote.textContent = "Add new note";

        formNote.appendChild(labelTitle);
        formNote.appendChild(inputTitle);
        formNote.appendChild(labelDesc);
        formNote.appendChild(inputDesc);
        formNote.appendChild(buttonSubmitNote);
        formContent.appendChild(formNote);

        formNote.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);

            const formDataObj = Object.fromEntries(formData.entries());
            dialog.close();

            const newNote = new _notes__WEBPACK_IMPORTED_MODULE_1__["default"](
                formDataObj["note-title"], 
                formDataObj["note-description"]
            );

            currentProject.addItem(newNote);
            renderProjectButtons();
            renderProjectItems(currentProject);
            localStorage.clear();
            populateStorage();
        });
    });

    const buttonNewChecklist = document.querySelector(".button-new-checklist");
    buttonNewChecklist.addEventListener('click', () => {
        formContent.replaceChildren();
        formChecklist.replaceChildren();

        const inputTitle = document.createElement("input");
        inputTitle.setAttribute("type", "text");
        inputTitle.setAttribute("id", "checklist-title");
        inputTitle.setAttribute("placeholder", "Title");

        const inputDesc = document.createElement("input");
        inputDesc.setAttribute("type", "text");
        inputDesc.setAttribute("id", "checklist-description");
        inputDesc.setAttribute("placeholder", "Description");

        const inputDate = document.createElement("input");
        inputDate.setAttribute("type", "text");
        inputDate.setAttribute("id", "checklist-date");
        inputDate.setAttribute("placeholder", "dd/mm/yyyy");

        const buttonPriorityLow = document.createElement("button");
        buttonPriorityLow.textContent = "Low";

        const buttonPriorityMid = document.createElement("button");
        buttonPriorityMid.textContent = "Mid";

        const buttonPriorityHigh = document.createElement("button");
        buttonPriorityHigh.textContent = "High";

        const divCheckItems = document.createElement("div");
        divCheckItems.className = "div-check-items";

        const inputCheckDesc = document.createElement("input");
        inputCheckDesc.setAttribute("type", "text");
        inputCheckDesc.setAttribute("id", "check-description");
        inputCheckDesc.setAttribute("placeholder", "Description");
        divCheckItems.appendChild(inputCheckDesc);

        const buttonAddCheck = document.createElement("button");
        buttonAddCheck.textContent = "Add item";
        buttonAddCheck.addEventListener('click', () => {
            const inputCheckDesc = document.createElement("input");
            inputCheckDesc.setAttribute("type", "text");
            inputCheckDesc.setAttribute("id", "check-description");
            inputCheckDesc.setAttribute("placeholder", "Description");
            divCheckItems.appendChild(inputCheckDesc);
        });

        const buttonSubmitChecklist = document.createElement("button");
        buttonSubmitChecklist.textContent = "Add new checklist";

        formChecklist.appendChild(inputTitle);
        formChecklist.appendChild(inputDesc);
        formChecklist.appendChild(inputDate);
        formChecklist.appendChild(buttonPriorityLow);
        formChecklist.appendChild(buttonPriorityMid);
        formChecklist.appendChild(buttonPriorityHigh);
        formChecklist.appendChild(divCheckItems);
        formChecklist.appendChild(buttonAddCheck);
        formChecklist.appendChild(buttonSubmitChecklist);
        formContent.appendChild(formChecklist);
    });

    const buttonNewProject = document.querySelector(".button-new-project");
    buttonNewProject.addEventListener('click', () => {
        formContent.replaceChildren();
        formProject.replaceChildren();

        const labelTitle = document.createElement("label");
        labelTitle.textContent = "Project title";
        labelTitle.setAttribute("for", "project-title");
        const inputTitle = document.createElement("input");
        inputTitle.setAttribute("type", "text");
        inputTitle.setAttribute("id", "project-title");
        inputTitle.setAttribute("name", "project-title");
        inputTitle.setAttribute("placeholder", "Title");

        const buttonSubmitProject = document.createElement("button");
        buttonSubmitProject.textContent = "Add new project";
        buttonSubmitProject.setAttribute("type", "submit");

        formProject.appendChild(labelTitle);
        formProject.appendChild(inputTitle);
        formProject.appendChild(buttonSubmitProject);
        formContent.appendChild(formProject);

        formProject.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);

            const formDataObj = Object.fromEntries(formData.entries());
            dialog.close();

            const newProject = new _projects__WEBPACK_IMPORTED_MODULE_3__.Project(formDataObj["project-title"]);

            wrapper.addProject(newProject);
            renderProjectButtons();
            localStorage.clear();
            populateStorage();
        });
    });
    
    if (!localStorage.getItem('wrapper')) {
        populateStorage();
    } else {
        retrieveStorage();
    }

    renderProjectButtons();
    renderProjectItems(wrapper.projects[0]);
}

ScreenController();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQSxZQUFZLFVBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFVBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087Ozs7Ozs7Ozs7Ozs7Ozs7QUMxTVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxnQkFBZ0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQOztBQUVBLE9BQU8seUVBQWU7QUFDdEI7QUFDQTtBQUNBLEdBQUc7O0FBRUgsV0FBVyx5RUFBZTtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVILFNBQVMseUVBQWU7QUFDeEI7QUFDQTtBQUNBLEdBQUc7O0FBRUgsT0FBTyx5RUFBZTtBQUN0QjtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxhQUFhLHlFQUFlO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFMMkQ7QUFDYzs7QUFFekU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQLGlCQUFpQixpRkFBbUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxPQUFPLG1FQUFZO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxXQUFXLG1FQUFZO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVILFNBQVMsbUVBQVk7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVILE9BQU8sbUVBQVk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVILGFBQWEsbUVBQVk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbklvRDtBQUNRO0FBQ0Q7QUFDckI7QUFDNEI7QUFLOUI7QUFDZTtBQUNrQjs7QUFFckU7QUFDQTtBQUNtQzs7QUFFbkM7QUFDQSxRQUFRLGFBQWE7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxXQUFXO0FBQzVEO0FBQ0EsaURBQWlELFdBQVc7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxnQ0FBZ0MsOENBQUk7QUFDcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUNBQW1DLDhDQUFPOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2NoZWNrbGlzdHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL25vdGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvdGVzdHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3RvZG9zLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2RlZmF1bHRPcHRpb25zLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMubWpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMubWpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL3Byb3RlY3RlZFRva2Vucy5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2FkZERheXMubWpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9jb25zdGFudHMubWpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9jb25zdHJ1Y3RGcm9tLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0RGVmYXVsdE9wdGlvbnMubWpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRJU09EYXkubWpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRJU09XZWVrLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0SVNPV2Vla1llYXIubWpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRXZWVrLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0V2Vla1llYXIubWpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkTG9jYWxpemVGbi5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4ubWpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMubWpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcubWpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL2xvY2FsaXplLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gubWpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9wYXJzZS5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvUGFyc2VyLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2UvX2xpYi9TZXR0ZXIubWpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9wYXJzZS9fbGliL2NvbnN0YW50cy5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy9BTVBNTWlkbmlnaHRQYXJzZXIubWpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9wYXJzZS9fbGliL3BhcnNlcnMvQU1QTVBhcnNlci5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy9EYXRlUGFyc2VyLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2UvX2xpYi9wYXJzZXJzL0RheU9mWWVhclBhcnNlci5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy9EYXlQYXJzZXIubWpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9wYXJzZS9fbGliL3BhcnNlcnMvRGF5UGVyaW9kUGFyc2VyLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2UvX2xpYi9wYXJzZXJzL0VyYVBhcnNlci5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy9FeHRlbmRlZFllYXJQYXJzZXIubWpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9wYXJzZS9fbGliL3BhcnNlcnMvRnJhY3Rpb25PZlNlY29uZFBhcnNlci5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy9Ib3VyMFRvMTFQYXJzZXIubWpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9wYXJzZS9fbGliL3BhcnNlcnMvSG91cjB0bzIzUGFyc2VyLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2UvX2xpYi9wYXJzZXJzL0hvdXIxVG8yNFBhcnNlci5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy9Ib3VyMXRvMTJQYXJzZXIubWpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9wYXJzZS9fbGliL3BhcnNlcnMvSVNPRGF5UGFyc2VyLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2UvX2xpYi9wYXJzZXJzL0lTT1RpbWV6b25lUGFyc2VyLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2UvX2xpYi9wYXJzZXJzL0lTT1RpbWV6b25lV2l0aFpQYXJzZXIubWpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9wYXJzZS9fbGliL3BhcnNlcnMvSVNPV2Vla1BhcnNlci5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy9JU09XZWVrWWVhclBhcnNlci5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy9Mb2NhbERheVBhcnNlci5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy9Mb2NhbFdlZWtQYXJzZXIubWpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9wYXJzZS9fbGliL3BhcnNlcnMvTG9jYWxXZWVrWWVhclBhcnNlci5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy9NaW51dGVQYXJzZXIubWpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9wYXJzZS9fbGliL3BhcnNlcnMvTW9udGhQYXJzZXIubWpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9wYXJzZS9fbGliL3BhcnNlcnMvUXVhcnRlclBhcnNlci5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy9TZWNvbmRQYXJzZXIubWpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9wYXJzZS9fbGliL3BhcnNlcnMvU3RhbmRBbG9uZUxvY2FsRGF5UGFyc2VyLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2UvX2xpYi9wYXJzZXJzL1N0YW5kQWxvbmVNb250aFBhcnNlci5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy9TdGFuZEFsb25lUXVhcnRlclBhcnNlci5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy9UaW1lc3RhbXBNaWxsaXNlY29uZHNQYXJzZXIubWpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9wYXJzZS9fbGliL3BhcnNlcnMvVGltZXN0YW1wU2Vjb25kc1BhcnNlci5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy9ZZWFyUGFyc2VyLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2UvX2xpYi91dGlscy5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3NldERheS5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3NldElTT0RheS5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3NldElTT1dlZWsubWpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zZXRXZWVrLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZklTT1dlZWsubWpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mSVNPV2Vla1llYXIubWpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mV2Vlay5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZXZWVrWWVhci5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3RvRGF0ZS5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3RyYW5zcG9zZS5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBhcnNlIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmNsYXNzIENoZWNrbGlzdCB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBjaGVja3MsIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNoZWNrcyA9IGNoZWNrcztcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gcGFyc2UoZHVlRGF0ZSwgJ2RkL01NL3l5eXknLCBuZXcgRGF0ZSgpKTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmlkID0gJ2NoZWNrbGlzdCc7XG4gICAgfVxuXG4gICAgZWRpdFRpdGxlKG5ld1RpdGxlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSBuZXdUaXRsZTtcbiAgICB9XG5cbiAgICBlZGl0RGVzY3JpcHRpb24obmV3RGVzYykge1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gbmV3RGVzYztcbiAgICB9XG5cbiAgICBlZGl0RHVlRGF0ZShuZXdEdWUpIHtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gcGFyc2UobmV3RHVlLCAnZGQvTU0veXl5eScsIG5ldyBEYXRlKCkpO1xuICAgIH1cblxuICAgIGVkaXRQcmlvcml0eShuZXdQcmlvcml0eSkge1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gICAgfVxuXG4gICAgbG9nKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgVGl0bGU6ICR7dGhpcy50aXRsZX1gKTtcbiAgICAgICAgY29uc29sZS5sb2coYERlc2NyaXB0aW9uOiAke3RoaXMuZGVzY3JpcHRpb259YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBEdWUgRGF0ZTogJHt0aGlzLmR1ZURhdGV9YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBQcmlvcml0eTogJHt0aGlzLnByaW9yaXR5fWApO1xuICAgICAgICB0aGlzLmNoZWNrcy5mb3JFYWNoKChjKSA9PiBjLmxvZygpKTtcbiAgICB9XG59XG5cbmNsYXNzIENoZWNrIHtcbiAgICBjb25zdHJ1Y3RvcihkZXNjcmlwdGlvbikge1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuc3RhdGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBlZGl0RGVzY3JpcHRpb24obmV3RGVzYykge1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gbmV3RGVzYztcbiAgICB9XG5cbiAgICBlZGl0U3RhdGUoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAhdGhpcy5zdGF0ZTtcbiAgICB9XG5cbiAgICBsb2coKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBEZXNjcmlwdGlvbjogJHt0aGlzLmRlc2NyaXB0aW9ufWApO1xuICAgICAgICBjb25zb2xlLmxvZyhgU3RhdGU6ICR7dGhpcy5zdGF0ZX1gKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IENoZWNrbGlzdCwgQ2hlY2sgfTsiLCJjbGFzcyBOb3RlIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuaWQgPSAnbm90ZSc7XG4gICAgfVxuXG4gICAgZWRpdFRpdGxlKG5ld1RpdGxlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSBuZXdUaXRsZTtcbiAgICB9XG5cbiAgICBlZGl0RGVzY3JpcHRpb24obmV3RGVzYykge1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gbmV3RGVzYztcbiAgICB9XG5cbiAgICBsb2coKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBUaXRsZTogJHt0aGlzLnRpdGxlfWApO1xuICAgICAgICBjb25zb2xlLmxvZyhgRGVzY3JpcHRpb246ICR7dGhpcy5kZXNjcmlwdGlvbn1gKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vdGU7IiwiY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgICAgIHRoaXMuaXRlbXNEYXRlU29ydCA9IFtdO1xuICAgIH1cblxuICAgIGFkZEl0ZW0oaXRlbSkge1xuICAgICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgIHRoaXMuaXRlbXNEYXRlU29ydCA9IHRoaXMuaXRlbXM7XG4gICAgfVxuXG4gICAgZGVsZXRlSXRlbShpdGVtKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pO1xuICAgICAgICB0aGlzLml0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHRoaXMuaXRlbXNEYXRlU29ydCA9IHRoaXMuaXRlbXM7XG4gICAgfVxuXG4gICAgZWRpdE5hbWUobmV3TmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuZXdOYW1lO1xuICAgIH1cblxuICAgIGxvZygpIHtcbiAgICAgICAgY29uc29sZS5sb2coYE5hbWU6ICR7dGhpcy5uYW1lfWApO1xuICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goKGkpID0+IGkubG9nKCkpO1xuICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgfVxufVxuXG5jbGFzcyBQcm9qZWN0V3JhcHBlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBbXTtcbiAgICB9XG5cbiAgICBhZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIH1cblxuICAgIGRlbGV0ZVByb2plY3QocHJvamVjdCkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuaXRlbXMuaW5kZXhPZihwcm9qZWN0KTtcbiAgICAgICAgdGhpcy5pdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxuICAgIGxvZygpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5mb3JFYWNoKChwKSA9PiBjb25zb2xlLmxvZyhwLm5hbWUpKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IFByb2plY3QsIFByb2plY3RXcmFwcGVyIH07IiwiaW1wb3J0IFRvZG8gZnJvbSBcIi4vdG9kb3NcIjtcbmltcG9ydCBOb3RlIGZyb20gXCIuL25vdGVzXCI7XG5pbXBvcnQgeyBDaGVja2xpc3QsIENoZWNrIH0gZnJvbSBcIi4vY2hlY2tsaXN0c1wiO1xuaW1wb3J0IHsgUHJvamVjdCwgUHJvamVjdFdyYXBwZXIgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuXG5mdW5jdGlvbiBydW5UZXN0c1RvZG9zKCkge1xuICAgIGNvbnN0IHRvZG9UZXN0ID0gbmV3IFRvZG8oJ1RvZG8gMScsICdGaXJzdCB0b2RvJywgJzExLzAzLzIwMjQnLCAnaGlnaCcpO1xuICAgIHRvZG9UZXN0LmxvZygpO1xuICAgIHRvZG9UZXN0LmVkaXRUaXRsZSgnTmV3IHRpdGxlJyk7XG4gICAgdG9kb1Rlc3QuZWRpdERlc2NyaXB0aW9uKCdFZGl0ZWQgZGVzY3JpcHRpb24nKTtcbiAgICB0b2RvVGVzdC5lZGl0RHVlRGF0ZSgnMTIvMDMvMjAyNCcpO1xuICAgIHRvZG9UZXN0LmVkaXRQcmlvcml0eSgnbWlkJyk7XG4gICAgdG9kb1Rlc3QuZWRpdFN0YXR1cygpO1xuICAgIHRvZG9UZXN0LmxvZygpO1xuICAgIFxuICAgIGNvbnN0IG5vdGVUZXN0ID0gbmV3IE5vdGUoJ05vdGUgMScsICdGaXJzdCBub3RlJyk7XG4gICAgbm90ZVRlc3QubG9nKCk7XG4gICAgbm90ZVRlc3QuZWRpdFRpdGxlKCdOZXcgbm90ZSB0aXRsZScpO1xuICAgIG5vdGVUZXN0LmVkaXREZXNjcmlwdGlvbignbmV2ZXJtaW5kJyk7XG4gICAgbm90ZVRlc3QubG9nKCk7XG4gICAgXG4gICAgY29uc3QgY2hlY2sxID0gbmV3IENoZWNrKCdjaGVjayAxJyk7XG4gICAgY29uc3QgY2hlY2syID0gbmV3IENoZWNrKCdjaGVjayAyJyk7XG4gICAgY2hlY2syLmVkaXRTdGF0ZSgpO1xuICAgIGxldCBjaGVja0FycmF5ID0gW2NoZWNrMSwgY2hlY2syXTtcbiAgICBjb25zdCBjaGVja2xpc3RUZXN0ID0gbmV3IENoZWNrbGlzdCgnQ2hlY2tsaXN0IDEnLCAnRmlyc3QgY2hlY2tsaXN0JywgY2hlY2tBcnJheSwgJzE4LzAzLzIwMjQnLCAnbG93Jyk7XG4gICAgY2hlY2tsaXN0VGVzdC5sb2coKTtcbiAgICBjaGVja2xpc3RUZXN0LmVkaXRUaXRsZSgnQ2hlY2tsb3N0Jyk7XG4gICAgY2hlY2tsaXN0VGVzdC5lZGl0RGVzY3JpcHRpb24oJ0EgY2hlY2tsaXN0Jyk7XG4gICAgY2hlY2tsaXN0VGVzdC5lZGl0RHVlRGF0ZSgnMjUvMDMvMjAyNCcpO1xuICAgIGNoZWNrbGlzdFRlc3QuZWRpdFByaW9yaXR5KCdoaWdoJyk7XG4gICAgY2hlY2tsaXN0VGVzdC5sb2coKTtcbiAgICBcbiAgICBjaGVjazEuZWRpdERlc2NyaXB0aW9uKCdjaGVjayAxLjEnKTtcbiAgICBjaGVjazEuZWRpdFN0YXRlKCk7XG4gICAgY2hlY2syLmVkaXREZXNjcmlwdGlvbignY2hlY2sgMi4xJyk7XG4gICAgY2hlY2syLmVkaXRTdGF0ZSgpO1xuICAgIGNoZWNrMS5sb2coKTtcbiAgICBjaGVjazIubG9nKCk7XG4gICAgXG4gICAgY2hlY2tsaXN0VGVzdC5sb2coKTtcbn1cblxuZnVuY3Rpb24gcnVuVGVzdHNQcm9qZWN0cygpIHtcbiAgICBjb25zdCBwcm9qZWN0VGVzdCA9IG5ldyBQcm9qZWN0KCdTdHVkeScpO1xuICAgIGNvbnN0IHRvZG8xID0gbmV3IFRvZG8oJ3RvZG8gdGVzdCcsICd0ZXN0aW5nIHByb2plY3QnLCAnMTcvMDMvMjAyNCcsICdsb3cnKTtcbiAgICBjb25zdCBjaGVjazEgPSBuZXcgQ2hlY2soJ2NoZWNrIDEnKTtcbiAgICBsZXQgY2hlY2tBcnJheSA9IFtjaGVjazFdO1xuICAgIGNvbnN0IGNoZWNrbGlzdDEgPSBuZXcgQ2hlY2tsaXN0KCdjaGVja2xpc3QgdGVzdCcsICd0ZXN0aW5nIHByb2plY3QnLCBjaGVja0FycmF5LCAnMTMvMDMvMjAyNCcsICdtaWQnKTtcblxuICAgIHByb2plY3RUZXN0LmFkZEl0ZW0odG9kbzEpO1xuICAgIHByb2plY3RUZXN0LmFkZEl0ZW0oY2hlY2tsaXN0MSk7XG5cbiAgICBwcm9qZWN0VGVzdC5sb2coKTtcbn1cblxuZnVuY3Rpb24gcnVuVGVzdERlbGV0ZSgpIHtcbiAgICBjb25zdCBwcm9qZWN0SG9tZSA9IG5ldyBQcm9qZWN0KCdIb21lJyk7XG4gICAgY29uc3QgcHJvamVjdFRvZG9zID0gbmV3IFByb2plY3QoJ1RvZG8nKTtcbiAgICBjb25zdCBwcm9qZWN0Tm90ZXMgPSBuZXcgUHJvamVjdCgnTm90ZXMnKTtcbiAgICBjb25zdCBwcm9qZWN0Q2hlY2tsaXN0cyA9IG5ldyBQcm9qZWN0KCdDaGVja2xpc3RzJyk7XG4gICAgY29uc3QgcHJvamVjdFRlc3QgPSBuZXcgUHJvamVjdCgnVGVzdCcpO1xuXG4gICAgY29uc3QgdG9kbzEgPSBuZXcgVG9kbygnVG9kbyAxJywgJ0ZpcnN0IHRvZG8nLCAnMTIvMDQvMjAyNCcsICdoaWdoJyk7XG4gICAgY29uc3QgdG9kbzIgPSBuZXcgVG9kbygnVG9kbyAyJywgJ1NlY29uZCB0b2RvJywgJzEyLzA0LzIwMjQnLCAnaGlnaCcpO1xuICAgIGNvbnN0IG5vdGUxID0gbmV3IE5vdGUoJ05vdGUgMScsICdGaXJzdCBub3RlJyk7XG4gICAgY29uc3QgY2hlY2sxID0gbmV3IENoZWNrKCdjaGVjayAxJyk7XG4gICAgbGV0IGNoZWNrQXJyYXkgPSBbY2hlY2sxXTtcbiAgICBjb25zdCBjaGVja2xpc3QxID0gbmV3IENoZWNrbGlzdCgnQ2hlY2tsaXN0IDEnLCAnRmlyc3QgY2hlY2tsaXN0JywgY2hlY2tBcnJheSwgJzEyLzA0LzIwMjQnLCAnaGlnaCcpO1xuXG4gICAgcHJvamVjdEhvbWUuYWRkSXRlbSh0b2RvMSk7XG4gICAgcHJvamVjdEhvbWUuYWRkSXRlbSh0b2RvMik7XG4gICAgcHJvamVjdEhvbWUuYWRkSXRlbShjaGVja2xpc3QxKTtcblxuICAgIHByb2plY3RUb2Rvcy5hZGRJdGVtKHRvZG8xKTtcbiAgICBwcm9qZWN0VG9kb3MuYWRkSXRlbSh0b2RvMik7XG5cbiAgICBwcm9qZWN0Tm90ZXMuYWRkSXRlbShub3RlMSk7XG5cbiAgICBwcm9qZWN0Q2hlY2tsaXN0cy5hZGRJdGVtKGNoZWNrbGlzdDEpO1xuXG4gICAgcHJvamVjdFRlc3QuYWRkSXRlbSh0b2RvMSk7XG4gICAgcHJvamVjdFRlc3QuYWRkSXRlbShjaGVja2xpc3QxKTtcblxuICAgIHByb2plY3RIb21lLmxvZygpO1xuICAgIHByb2plY3RUb2Rvcy5sb2coKTtcbiAgICBwcm9qZWN0Tm90ZXMubG9nKCk7XG4gICAgcHJvamVjdENoZWNrbGlzdHMubG9nKCk7XG4gICAgcHJvamVjdFRlc3QubG9nKCk7XG5cbiAgICBwcm9qZWN0SG9tZS5kZWxldGVJdGVtKHRvZG8xKTtcbiAgICBwcm9qZWN0SG9tZS5sb2coKTtcblxuICAgIHByb2plY3RUb2Rvcy5kZWxldGVJdGVtKHRvZG8yKTtcbiAgICBwcm9qZWN0VG9kb3MubG9nKCk7XG5cbiAgICBwcm9qZWN0Tm90ZXMuZGVsZXRlSXRlbShub3RlMSk7XG4gICAgcHJvamVjdE5vdGVzLmxvZygpO1xuXG4gICAgcHJvamVjdENoZWNrbGlzdHMuZGVsZXRlSXRlbShjaGVja2xpc3QxKTtcbiAgICBwcm9qZWN0Q2hlY2tsaXN0cy5sb2coKTtcbn1cblxuZnVuY3Rpb24gcnVuVGVzdFN0b3JhZ2UoKSB7XG4gICAgY29uc3QgcHJvamVjdEhvbWUgPSBuZXcgUHJvamVjdCgnSG9tZScpO1xuICAgIGNvbnN0IHByb2plY3RUb2RvcyA9IG5ldyBQcm9qZWN0KCdUb2RvJyk7XG4gICAgY29uc3QgcHJvamVjdE5vdGVzID0gbmV3IFByb2plY3QoJ05vdGVzJyk7XG4gICAgY29uc3QgcHJvamVjdENoZWNrbGlzdHMgPSBuZXcgUHJvamVjdCgnQ2hlY2tsaXN0cycpO1xuICAgIGNvbnN0IHByb2plY3RUZXN0ID0gbmV3IFByb2plY3QoJ1Rlc3QnKTtcblxuICAgIGNvbnN0IHRvZG8xID0gbmV3IFRvZG8oJ1RvZG8gMScsICdGaXJzdCB0b2RvJywgJzEyLzA0LzIwMjQnLCAnaGlnaCcpO1xuICAgIGNvbnN0IHRvZG8yID0gbmV3IFRvZG8oJ1RvZG8gMicsICdTZWNvbmQgdG9kbycsICcxMi8wNC8yMDI0JywgJ2hpZ2gnKTtcbiAgICBjb25zdCBub3RlMSA9IG5ldyBOb3RlKCdOb3RlIDEnLCAnRmlyc3Qgbm90ZScpO1xuICAgIGNvbnN0IGNoZWNrMSA9IG5ldyBDaGVjaygnY2hlY2sgMScpO1xuICAgIGxldCBjaGVja0FycmF5ID0gW2NoZWNrMV07XG4gICAgY29uc3QgY2hlY2tsaXN0MSA9IG5ldyBDaGVja2xpc3QoJ0NoZWNrbGlzdCAxJywgJ0ZpcnN0IGNoZWNrbGlzdCcsIGNoZWNrQXJyYXksICcxMi8wNC8yMDI0JywgJ2hpZ2gnKTtcblxuICAgIHByb2plY3RIb21lLmFkZEl0ZW0odG9kbzEpO1xuICAgIHByb2plY3RIb21lLmFkZEl0ZW0odG9kbzIpO1xuICAgIHByb2plY3RIb21lLmFkZEl0ZW0oY2hlY2tsaXN0MSk7XG5cbiAgICBwcm9qZWN0VG9kb3MuYWRkSXRlbSh0b2RvMSk7XG4gICAgcHJvamVjdFRvZG9zLmFkZEl0ZW0odG9kbzIpO1xuXG4gICAgcHJvamVjdE5vdGVzLmFkZEl0ZW0obm90ZTEpO1xuXG4gICAgcHJvamVjdENoZWNrbGlzdHMuYWRkSXRlbShjaGVja2xpc3QxKTtcblxuICAgIHByb2plY3RUZXN0LmFkZEl0ZW0odG9kbzEpO1xuICAgIHByb2plY3RUZXN0LmFkZEl0ZW0oY2hlY2tsaXN0MSk7XG5cbiAgICBsZXQgcHJvamVjdHMgPSBuZXcgUHJvamVjdFdyYXBwZXIoKTtcbiAgICBwcm9qZWN0cy5hZGRQcm9qZWN0KHByb2plY3RIb21lKTtcbiAgICBwcm9qZWN0cy5hZGRQcm9qZWN0KHByb2plY3RUb2Rvcyk7XG4gICAgcHJvamVjdHMuYWRkUHJvamVjdChwcm9qZWN0Tm90ZXMpO1xuICAgIHByb2plY3RzLmFkZFByb2plY3QocHJvamVjdENoZWNrbGlzdHMpO1xuICAgIHByb2plY3RzLmFkZFByb2plY3QocHJvamVjdFRlc3QpO1xuXG4gICAgcHJvamVjdHMubG9nKCk7XG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICAgIGxldCBzYXZlZFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSk7XG4gICAgY29uc29sZS5sb2coc2F2ZWRQcm9qZWN0cyk7XG4gICAgcHJvamVjdHMgPSBuZXcgUHJvamVjdFdyYXBwZXIoKTtcbiAgICBzYXZlZFByb2plY3RzWydwcm9qZWN0cyddLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIHByb2plY3RzLmFkZFByb2plY3QoZWxlbWVudCk7XG4gICAgfSk7XG4gICAgcHJvamVjdHMubG9nKCk7XG59XG5cbmV4cG9ydCB7IHJ1blRlc3RzVG9kb3MsIHJ1blRlc3RzUHJvamVjdHMsIHJ1blRlc3REZWxldGUsIHJ1blRlc3RTdG9yYWdlIH07IiwiaW1wb3J0IHsgcGFyc2UgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuY2xhc3MgVG9kbyB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gcGFyc2UoZHVlRGF0ZSwgJ2RkL01NL3l5eXknLCBuZXcgRGF0ZSgpKTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLnN0YXR1cyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlkID0gJ3RvZG8nO1xuICAgIH1cblxuICAgIGVkaXRUaXRsZShuZXdUaXRsZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gbmV3VGl0bGU7XG4gICAgfVxuXG4gICAgZWRpdERlc2NyaXB0aW9uKG5ld0Rlc2MpIHtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IG5ld0Rlc2M7XG4gICAgfVxuXG4gICAgZWRpdER1ZURhdGUobmV3RHVlKSB7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IHBhcnNlKG5ld0R1ZSwgJ2RkL01NL3l5eXknLCBuZXcgRGF0ZSgpKTtcbiAgICB9XG5cbiAgICBlZGl0UHJpb3JpdHkobmV3UHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICAgIH1cblxuICAgIGVkaXRTdGF0dXMoKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gIXRoaXMuc3RhdHVzO1xuICAgIH1cblxuICAgIGxvZygpIHtcbiAgICAgICAgY29uc29sZS5sb2coYFRpdGxlOiAke3RoaXMudGl0bGV9YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBEZXNjcmlwdGlvbjogJHt0aGlzLmRlc2NyaXB0aW9ufWApO1xuICAgICAgICBjb25zb2xlLmxvZyhgRHVlIERhdGU6ICR7dGhpcy5kdWVEYXRlfWApO1xuICAgICAgICBjb25zb2xlLmxvZyhgUHJpb3JpdHk6ICR7dGhpcy5wcmlvcml0eX1gKTtcbiAgICAgICAgY29uc29sZS5sb2coYFN0YXR1czogJHt0aGlzLnN0YXR1c31gKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG87IiwibGV0IGRlZmF1bHRPcHRpb25zID0ge307XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59XG4iLCJjb25zdCBkYXRlTG9uZ0Zvcm1hdHRlciA9IChwYXR0ZXJuLCBmb3JtYXRMb25nKSA9PiB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgXCJQXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHsgd2lkdGg6IFwic2hvcnRcIiB9KTtcbiAgICBjYXNlIFwiUFBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoeyB3aWR0aDogXCJtZWRpdW1cIiB9KTtcbiAgICBjYXNlIFwiUFBQXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHsgd2lkdGg6IFwibG9uZ1wiIH0pO1xuICAgIGNhc2UgXCJQUFBQXCI6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoeyB3aWR0aDogXCJmdWxsXCIgfSk7XG4gIH1cbn07XG5cbmNvbnN0IHRpbWVMb25nRm9ybWF0dGVyID0gKHBhdHRlcm4sIGZvcm1hdExvbmcpID0+IHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSBcInBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoeyB3aWR0aDogXCJzaG9ydFwiIH0pO1xuICAgIGNhc2UgXCJwcFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7IHdpZHRoOiBcIm1lZGl1bVwiIH0pO1xuICAgIGNhc2UgXCJwcHBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoeyB3aWR0aDogXCJsb25nXCIgfSk7XG4gICAgY2FzZSBcInBwcHBcIjpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7IHdpZHRoOiBcImZ1bGxcIiB9KTtcbiAgfVxufTtcblxuY29uc3QgZGF0ZVRpbWVMb25nRm9ybWF0dGVyID0gKHBhdHRlcm4sIGZvcm1hdExvbmcpID0+IHtcbiAgY29uc3QgbWF0Y2hSZXN1bHQgPSBwYXR0ZXJuLm1hdGNoKC8oUCspKHArKT8vKSB8fCBbXTtcbiAgY29uc3QgZGF0ZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsxXTtcbiAgY29uc3QgdGltZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsyXTtcblxuICBpZiAoIXRpbWVQYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpO1xuICB9XG5cbiAgbGV0IGRhdGVUaW1lRm9ybWF0O1xuXG4gIHN3aXRjaCAoZGF0ZVBhdHRlcm4pIHtcbiAgICBjYXNlIFwiUFwiOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHsgd2lkdGg6IFwic2hvcnRcIiB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJQUFwiOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHsgd2lkdGg6IFwibWVkaXVtXCIgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiUFBQXCI6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoeyB3aWR0aDogXCJsb25nXCIgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiUFBQUFwiOlxuICAgIGRlZmF1bHQ6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoeyB3aWR0aDogXCJmdWxsXCIgfSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBkYXRlVGltZUZvcm1hdFxuICAgIC5yZXBsYWNlKFwie3tkYXRlfX1cIiwgZGF0ZUxvbmdGb3JtYXR0ZXIoZGF0ZVBhdHRlcm4sIGZvcm1hdExvbmcpKVxuICAgIC5yZXBsYWNlKFwie3t0aW1lfX1cIiwgdGltZUxvbmdGb3JtYXR0ZXIodGltZVBhdHRlcm4sIGZvcm1hdExvbmcpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb25nRm9ybWF0dGVycyA9IHtcbiAgcDogdGltZUxvbmdGb3JtYXR0ZXIsXG4gIFA6IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlcixcbn07XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IHV0Y0RhdGUgPSBuZXcgRGF0ZShcbiAgICBEYXRlLlVUQyhcbiAgICAgIF9kYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICBfZGF0ZS5nZXRNb250aCgpLFxuICAgICAgX2RhdGUuZ2V0RGF0ZSgpLFxuICAgICAgX2RhdGUuZ2V0SG91cnMoKSxcbiAgICAgIF9kYXRlLmdldE1pbnV0ZXMoKSxcbiAgICAgIF9kYXRlLmdldFNlY29uZHMoKSxcbiAgICAgIF9kYXRlLmdldE1pbGxpc2Vjb25kcygpLFxuICAgICksXG4gICk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoX2RhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiArZGF0ZSAtICt1dGNEYXRlO1xufVxuIiwiY29uc3QgZGF5T2ZZZWFyVG9rZW5SRSA9IC9eRCskLztcbmNvbnN0IHdlZWtZZWFyVG9rZW5SRSA9IC9eWSskLztcblxuY29uc3QgdGhyb3dUb2tlbnMgPSBbXCJEXCIsIFwiRERcIiwgXCJZWVwiLCBcIllZWVlcIl07XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBkYXlPZlllYXJUb2tlblJFLnRlc3QodG9rZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiB3ZWVrWWVhclRva2VuUkUudGVzdCh0b2tlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3YXJuT3JUaHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGNvbnN0IF9tZXNzYWdlID0gbWVzc2FnZSh0b2tlbiwgZm9ybWF0LCBpbnB1dCk7XG4gIGNvbnNvbGUud2FybihfbWVzc2FnZSk7XG4gIGlmICh0aHJvd1Rva2Vucy5pbmNsdWRlcyh0b2tlbikpIHRocm93IG5ldyBSYW5nZUVycm9yKF9tZXNzYWdlKTtcbn1cblxuZnVuY3Rpb24gbWVzc2FnZSh0b2tlbiwgZm9ybWF0LCBpbnB1dCkge1xuICBjb25zdCBzdWJqZWN0ID0gdG9rZW5bMF0gPT09IFwiWVwiID8gXCJ5ZWFyc1wiIDogXCJkYXlzIG9mIHRoZSBtb250aFwiO1xuICByZXR1cm4gYFVzZSBcXGAke3Rva2VuLnRvTG93ZXJDYXNlKCl9XFxgIGluc3RlYWQgb2YgXFxgJHt0b2tlbn1cXGAgKGluIFxcYCR7Zm9ybWF0fVxcYCkgZm9yIGZvcm1hdHRpbmcgJHtzdWJqZWN0fSB0byB0aGUgaW5wdXQgXFxgJHtpbnB1dH1cXGA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZGA7XG59XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5pbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBhZGREYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0gYW1vdW50IC0gVGhlIGFtb3VudCBvZiBkYXlzIHRvIGJlIGFkZGVkLlxuICpcbiAqIEByZXR1cm5zIFRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBkYXlzIGFkZGVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCAxMCBkYXlzIHRvIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBhZGREYXlzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCAxMClcbiAqIC8vPT4gVGh1IFNlcCAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGREYXlzKGRhdGUsIGFtb3VudCkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgaWYgKGlzTmFOKGFtb3VudCkpIHJldHVybiBjb25zdHJ1Y3RGcm9tKGRhdGUsIE5hTik7XG4gIGlmICghYW1vdW50KSB7XG4gICAgLy8gSWYgMCBkYXlzLCBuby1vcCB0byBhdm9pZCBjaGFuZ2luZyB0aW1lcyBpbiB0aGUgaG91ciBiZWZvcmUgZW5kIG9mIERTVFxuICAgIHJldHVybiBfZGF0ZTtcbiAgfVxuICBfZGF0ZS5zZXREYXRlKF9kYXRlLmdldERhdGUoKSArIGFtb3VudCk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBhZGREYXlzO1xuIiwiLyoqXG4gKiBAbW9kdWxlIGNvbnN0YW50c1xuICogQHN1bW1hcnkgVXNlZnVsIGNvbnN0YW50c1xuICogQGRlc2NyaXB0aW9uXG4gKiBDb2xsZWN0aW9uIG9mIHVzZWZ1bCBkYXRlIGNvbnN0YW50cy5cbiAqXG4gKiBUaGUgY29uc3RhbnRzIGNvdWxkIGJlIGltcG9ydGVkIGZyb20gYGRhdGUtZm5zL2NvbnN0YW50c2A6XG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IG1heFRpbWUsIG1pblRpbWUgfSBmcm9tIFwiLi9jb25zdGFudHMvZGF0ZS1mbnMvY29uc3RhbnRzXCI7XG4gKlxuICogZnVuY3Rpb24gaXNBbGxvd2VkVGltZSh0aW1lKSB7XG4gKiAgIHJldHVybiB0aW1lIDw9IG1heFRpbWUgJiYgdGltZSA+PSBtaW5UaW1lO1xuICogfVxuICogYGBgXG4gKi9cblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBzdW1tYXJ5IERheXMgaW4gMSB3ZWVrLlxuICovXG5leHBvcnQgY29uc3QgZGF5c0luV2VlayA9IDc7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBkYXlzSW5ZZWFyXG4gKiBAc3VtbWFyeSBEYXlzIGluIDEgeWVhci5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEhvdyBtYW55IGRheXMgaW4gYSB5ZWFyLlxuICpcbiAqIE9uZSB5ZWFycyBlcXVhbHMgMzY1LjI0MjUgZGF5cyBhY2NvcmRpbmcgdG8gdGhlIGZvcm11bGE6XG4gKlxuICogPiBMZWFwIHllYXIgb2NjdXJlcyBldmVyeSA0IHllYXJzLCBleGNlcHQgZm9yIHllYXJzIHRoYXQgYXJlIGRpdmlzYWJsZSBieSAxMDAgYW5kIG5vdCBkaXZpc2FibGUgYnkgNDAwLlxuICogPiAxIG1lYW4geWVhciA9ICgzNjUrMS80LTEvMTAwKzEvNDAwKSBkYXlzID0gMzY1LjI0MjUgZGF5c1xuICovXG5leHBvcnQgY29uc3QgZGF5c0luWWVhciA9IDM2NS4yNDI1O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWF4VGltZVxuICogQHN1bW1hcnkgTWF4aW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IG1heFRpbWUgfSBmcm9tIFwiLi9jb25zdGFudHMvZGF0ZS1mbnMvY29uc3RhbnRzXCI7XG4gKlxuICogY29uc3QgaXNWYWxpZCA9IDg2NDAwMDAwMDAwMDAwMDEgPD0gbWF4VGltZTtcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBuZXcgRGF0ZSg4NjQwMDAwMDAwMDAwMDAxKTtcbiAqIC8vPT4gSW52YWxpZCBEYXRlXG4gKi9cbmV4cG9ydCBjb25zdCBtYXhUaW1lID0gTWF0aC5wb3coMTAsIDgpICogMjQgKiA2MCAqIDYwICogMTAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pblRpbWVcbiAqIEBzdW1tYXJ5IE1pbmltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBtaW5UaW1lIH0gZnJvbSBcIi4vY29uc3RhbnRzL2RhdGUtZm5zL2NvbnN0YW50c1wiO1xuICpcbiAqIGNvbnN0IGlzVmFsaWQgPSAtODY0MDAwMDAwMDAwMDAwMSA+PSBtaW5UaW1lO1xuICogLy89PiBmYWxzZVxuICpcbiAqIG5ldyBEYXRlKC04NjQwMDAwMDAwMDAwMDAxKVxuICogLy89PiBJbnZhbGlkIERhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IG1pblRpbWUgPSAtbWF4VGltZTtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luV2Vla1xuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgd2Vlay5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luV2VlayA9IDYwNDgwMDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luRGF5XG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBkYXkuXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbkRheSA9IDg2NDAwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5NaW51dGVcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIG1pbnV0ZVxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5NaW51dGUgPSA2MDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luSG91clxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgaG91clxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5Ib3VyID0gMzYwMDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luU2Vjb25kXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBzZWNvbmRcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luU2Vjb25kID0gMTAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJblllYXJcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSB5ZWFyLlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luWWVhciA9IDUyNTYwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJbk1vbnRoXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgbW9udGguXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5Nb250aCA9IDQzMjAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luRGF5XG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgZGF5LlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luRGF5ID0gMTQ0MDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJbkhvdXJcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSBob3VyLlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luSG91ciA9IDYwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbW9udGhzSW5RdWFydGVyXG4gKiBAc3VtbWFyeSBNb250aHMgaW4gMSBxdWFydGVyLlxuICovXG5leHBvcnQgY29uc3QgbW9udGhzSW5RdWFydGVyID0gMztcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1vbnRoc0luWWVhclxuICogQHN1bW1hcnkgTW9udGhzIGluIDEgeWVhci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1vbnRoc0luWWVhciA9IDEyO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgcXVhcnRlcnNJblllYXJcbiAqIEBzdW1tYXJ5IFF1YXJ0ZXJzIGluIDEgeWVhclxuICovXG5leHBvcnQgY29uc3QgcXVhcnRlcnNJblllYXIgPSA0O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luSG91clxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIGhvdXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5Ib3VyID0gMzYwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbk1pbnV0ZVxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIG1pbnV0ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbk1pbnV0ZSA9IDYwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luRGF5XG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgZGF5LlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luRGF5ID0gc2Vjb25kc0luSG91ciAqIDI0O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luV2Vla1xuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIHdlZWsuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5XZWVrID0gc2Vjb25kc0luRGF5ICogNztcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJblllYXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSB5ZWFyLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luWWVhciA9IHNlY29uZHNJbkRheSAqIGRheXNJblllYXI7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5Nb250aFxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIG1vbnRoXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5Nb250aCA9IHNlY29uZHNJblllYXIgLyAxMjtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJblF1YXJ0ZXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBxdWFydGVyLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luUXVhcnRlciA9IHNlY29uZHNJbk1vbnRoICogMztcbiIsIi8qKlxuICogQG5hbWUgY29uc3RydWN0RnJvbVxuICogQGNhdGVnb3J5IEdlbmVyaWMgSGVscGVyc1xuICogQHN1bW1hcnkgQ29uc3RydWN0cyBhIGRhdGUgdXNpbmcgdGhlIHJlZmVyZW5jZSBkYXRlIGFuZCB0aGUgdmFsdWVcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBmdW5jdGlvbiBjb25zdHJ1Y3RzIGEgbmV3IGRhdGUgdXNpbmcgdGhlIGNvbnN0cnVjdG9yIGZyb20gdGhlIHJlZmVyZW5jZVxuICogZGF0ZSBhbmQgdGhlIGdpdmVuIHZhbHVlLiBJdCBoZWxwcyB0byBidWlsZCBnZW5lcmljIGZ1bmN0aW9ucyB0aGF0IGFjY2VwdFxuICogZGF0ZSBleHRlbnNpb25zLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIHJlZmVyZW5jZSBkYXRlIHRvIHRha2UgY29uc3RydWN0b3IgZnJvbVxuICogQHBhcmFtIHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNyZWF0ZSB0aGUgZGF0ZVxuICpcbiAqIEByZXR1cm5zIERhdGUgaW5pdGlhbGl6ZWQgdXNpbmcgdGhlIGdpdmVuIGRhdGUgYW5kIHZhbHVlXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tICdkYXRlLWZucydcbiAqXG4gKiAvLyBBIGZ1bmN0aW9uIHRoYXQgY2xvbmVzIGEgZGF0ZSBwcmVzZXJ2aW5nIHRoZSBvcmlnaW5hbCB0eXBlXG4gKiBmdW5jdGlvbiBjbG9uZURhdGU8RGF0ZVR5cGUgZXh0ZW5kcyBEYXRlKGRhdGU6IERhdGVUeXBlKTogRGF0ZVR5cGUge1xuICogICByZXR1cm4gY29uc3RydWN0RnJvbShcbiAqICAgICBkYXRlLCAvLyBVc2UgY29udHJ1c3RvciBmcm9tIHRoZSBnaXZlbiBkYXRlXG4gKiAgICAgZGF0ZS5nZXRUaW1lKCkgLy8gVXNlIHRoZSBkYXRlIHZhbHVlIHRvIGNyZWF0ZSBhIG5ldyBkYXRlXG4gKiAgIClcbiAqIH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdEZyb20oZGF0ZSwgdmFsdWUpIHtcbiAgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgcmV0dXJuIG5ldyBkYXRlLmNvbnN0cnVjdG9yKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IERhdGUodmFsdWUpO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgY29uc3RydWN0RnJvbTtcbiIsImltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIGFzIGdldEludGVybmFsRGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGdldERlZmF1bHRPcHRpb25zXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCBkZWZhdWx0IG9wdGlvbnMuXG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBkZWZhdWx0cyBmb3JcbiAqIGBvcHRpb25zLmxvY2FsZWAsIGBvcHRpb25zLndlZWtTdGFydHNPbmAgYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWBcbiAqIGFyZ3VtZW50cyBmb3IgYWxsIGZ1bmN0aW9ucy5cbiAqXG4gKiBZb3UgY2FuIGNoYW5nZSB0aGVzZSB3aXRoIFtzZXREZWZhdWx0T3B0aW9uc10oaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9zZXREZWZhdWx0T3B0aW9ucykuXG4gKlxuICogQHJldHVybnMgVGhlIGRlZmF1bHQgb3B0aW9uc1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCByZXN1bHQgPSBnZXREZWZhdWx0T3B0aW9ucygpXG4gKiAvLz0+IHt9XG4gKlxuICogQGV4YW1wbGVcbiAqIHNldERlZmF1bHRPcHRpb25zKHsgd2Vla1N0YXJzT246IDEsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogNCB9KVxuICogY29uc3QgcmVzdWx0ID0gZ2V0RGVmYXVsdE9wdGlvbnMoKVxuICogLy89PiB7IHdlZWtTdGFyc09uOiAxLCBmaXJzdFdlZWtDb250YWluc0RhdGU6IDQgfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBnZXRJbnRlcm5hbERlZmF1bHRPcHRpb25zKCkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGdldERlZmF1bHRPcHRpb25zO1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGdldElTT0RheVxuICogQGNhdGVnb3J5IFdlZWtkYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBkYXkgb2YgdGhlIElTTyB3ZWVrIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBkYXkgb2YgdGhlIElTTyB3ZWVrIG9mIHRoZSBnaXZlbiBkYXRlLFxuICogd2hpY2ggaXMgNyBmb3IgU3VuZGF5LCAxIGZvciBNb25kYXkgZXRjLlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIGRheSBvZiBJU08gd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCBkYXkgb2YgdGhlIElTTyB3ZWVrIGlzIDI2IEZlYnJ1YXJ5IDIwMTI/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRJU09EYXkobmV3IERhdGUoMjAxMiwgMSwgMjYpKVxuICogLy89PiA3XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRJU09EYXkoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgbGV0IGRheSA9IF9kYXRlLmdldERheSgpO1xuXG4gIGlmIChkYXkgPT09IDApIHtcbiAgICBkYXkgPSA3O1xuICB9XG5cbiAgcmV0dXJuIGRheTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXRJU09EYXk7XG4iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbldlZWsgfSBmcm9tIFwiLi9jb25zdGFudHMubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mSVNPV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZJU09XZWVrLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZklTT1dlZWtZZWFyIH0gZnJvbSBcIi4vc3RhcnRPZklTT1dlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGdldElTT1dlZWtcbiAqIEBjYXRlZ29yeSBJU08gV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIElTTyB3ZWVrIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBJU08gd2VlayBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBJU08gd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG9mIHRoZSBJU08td2VlayBudW1iZXJpbmcgeWVhciBpcyAyIEphbnVhcnkgMjAwNT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldElTT1dlZWsobmV3IERhdGUoMjAwNSwgMCwgMikpXG4gKiAvLz0+IDUzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRJU09XZWVrKGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IGRpZmYgPSArc3RhcnRPZklTT1dlZWsoX2RhdGUpIC0gK3N0YXJ0T2ZJU09XZWVrWWVhcihfZGF0ZSk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiB3ZWVrcyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyIGJlY2F1c2UgdGhlIG51bWJlciBvZlxuICAvLyBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudCAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZlxuICAvLyB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpLlxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gbWlsbGlzZWNvbmRzSW5XZWVrKSArIDE7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZ2V0SVNPV2VlaztcbiIsImltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZklTT1dlZWsgfSBmcm9tIFwiLi9zdGFydE9mSVNPV2Vlay5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBnZXRJU09XZWVrWWVhclxuICogQGNhdGVnb3J5IElTTyBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLFxuICogd2hpY2ggYWx3YXlzIHN0YXJ0cyAzIGRheXMgYmVmb3JlIHRoZSB5ZWFyJ3MgZmlyc3QgVGh1cnNkYXkuXG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGdpdmVuIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggSVNPLXdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMiBKYW51YXJ5IDIwMDU/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRJU09XZWVrWWVhcihuZXcgRGF0ZSgyMDA1LCAwLCAyKSlcbiAqIC8vPT4gMjAwNFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SVNPV2Vla1llYXIoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgeWVhciA9IF9kYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgY29uc3QgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0RnVsbFllYXIoeWVhciArIDEsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyKTtcblxuICBjb25zdCBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgY29uc3Qgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZklTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XG5cbiAgaWYgKF9kYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKF9kYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZ2V0SVNPV2Vla1llYXI7XG4iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbldlZWsgfSBmcm9tIFwiLi9jb25zdGFudHMubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZldlZWtZZWFyIH0gZnJvbSBcIi4vc3RhcnRPZldlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgZ2V0V2Vla30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGdldFdlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbG9jYWwgd2VlayBpbmRleCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbG9jYWwgd2VlayBpbmRleCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSBleGFjdCBjYWxjdWxhdGlvbiBkZXBlbmRzIG9uIHRoZSB2YWx1ZXMgb2ZcbiAqIGBvcHRpb25zLndlZWtTdGFydHNPbmAgKHdoaWNoIGlzIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrKVxuICogYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKHdoaWNoIGlzIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXMgYWx3YXlzIGluXG4gKiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhcilcbiAqXG4gKiBXZWVrIG51bWJlcmluZzogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvV2VlayNUaGVfSVNPX3dlZWtfZGF0ZV9zeXN0ZW1cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG9mIHRoZSBsb2NhbCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1IHdpdGggZGVmYXVsdCBvcHRpb25zP1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2VlayhuZXcgRGF0ZSgyMDA1LCAwLCAyKSlcbiAqIC8vPT4gMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG9mIHRoZSBsb2NhbCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1LFxuICogLy8gaWYgTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWssXG4gKiAvLyBhbmQgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIgYWx3YXlzIGNvbnRhaW5zIDQgSmFudWFyeT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWsobmV3IERhdGUoMjAwNSwgMCwgMiksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxLFxuICogICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDRcbiAqIH0pXG4gKiAvLz0+IDUzXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlZWsoZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgZGlmZiA9ICtzdGFydE9mV2VlayhfZGF0ZSwgb3B0aW9ucykgLSArc3RhcnRPZldlZWtZZWFyKF9kYXRlLCBvcHRpb25zKTtcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIHdlZWtzIHRvIHRoZSBuZWFyZXN0IGludGVnZXIgYmVjYXVzZSB0aGUgbnVtYmVyIG9mXG4gIC8vIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50IChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mXG4gIC8vIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdCkuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBtaWxsaXNlY29uZHNJbldlZWspICsgMTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXRXZWVrO1xuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgZ2V0V2Vla1llYXJ9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBnZXRXZWVrWWVhclxuICogQGNhdGVnb3J5IFdlZWstTnVtYmVyaW5nIFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIGV4YWN0IGNhbGN1bGF0aW9uIGRlcGVuZHMgb24gdGhlIHZhbHVlcyBvZlxuICogYG9wdGlvbnMud2Vla1N0YXJ0c09uYCAod2hpY2ggaXMgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWspXG4gKiBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAod2hpY2ggaXMgdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpcyBhbHdheXMgaW5cbiAqIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyKVxuICpcbiAqIFdlZWsgbnVtYmVyaW5nOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9XZWVrI1RoZV9JU09fd2Vla19kYXRlX3N5c3RlbVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGdpdmVuIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqXG4gKiBAcmV0dXJucyBUaGUgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDI2IERlY2VtYmVyIDIwMDQgd2l0aCB0aGUgZGVmYXVsdCBzZXR0aW5ncz9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWtZZWFyKG5ldyBEYXRlKDIwMDQsIDExLCAyNikpXG4gKiAvLz0+IDIwMDVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBudW1iZXJpbmcgeWVhciBpcyAyNiBEZWNlbWJlciAyMDA0IGlmIHdlZWsgc3RhcnRzIG9uIFNhdHVyZGF5P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2Vla1llYXIobmV3IERhdGUoMjAwNCwgMTEsIDI2KSwgeyB3ZWVrU3RhcnRzT246IDYgfSlcbiAqIC8vPT4gMjAwNFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDI2IERlY2VtYmVyIDIwMDQgaWYgdGhlIGZpcnN0IHdlZWsgY29udGFpbnMgNCBKYW51YXJ5P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2Vla1llYXIobmV3IERhdGUoMjAwNCwgMTEsIDI2KSwgeyBmaXJzdFdlZWtDb250YWluc0RhdGU6IDQgfSlcbiAqIC8vPT4gMjAwNFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2Vla1llYXIoZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgeWVhciA9IF9kYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCBmaXJzdFdlZWtDb250YWluc0RhdGUgPVxuICAgIG9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICAxO1xuXG4gIGNvbnN0IGZpcnN0V2Vla09mTmV4dFllYXIgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldEZ1bGxZZWFyKHllYXIgKyAxLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mV2VlayhmaXJzdFdlZWtPZk5leHRZZWFyLCBvcHRpb25zKTtcblxuICBjb25zdCBmaXJzdFdlZWtPZlRoaXNZZWFyID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mV2VlayhmaXJzdFdlZWtPZlRoaXNZZWFyLCBvcHRpb25zKTtcblxuICBpZiAoX2RhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoX2RhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXRXZWVrWWVhcjtcbiIsImV4cG9ydCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XG4gIHJldHVybiAob3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgY29uc3Qgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgY29uc3QgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG4vKipcbiAqIFRoZSBsb2NhbGl6ZSBmdW5jdGlvbiBhcmd1bWVudCBjYWxsYmFjayB3aGljaCBhbGxvd3MgdG8gY29udmVydCByYXcgdmFsdWUgdG9cbiAqIHRoZSBhY3R1YWwgdHlwZS5cbiAqXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY29udmVydFxuICpcbiAqIEByZXR1cm5zIFRoZSBjb252ZXJ0ZWQgdmFsdWVcbiAqL1xuXG4vKipcbiAqIFRoZSBtYXAgb2YgbG9jYWxpemVkIHZhbHVlcyBmb3IgZWFjaCB3aWR0aC5cbiAqL1xuXG4vKipcbiAqIFRoZSBpbmRleCB0eXBlIG9mIHRoZSBsb2NhbGUgdW5pdCB2YWx1ZS4gSXQgdHlwZXMgY29udmVyc2lvbiBvZiB1bml0cyBvZlxuICogdmFsdWVzIHRoYXQgZG9uJ3Qgc3RhcnQgYXQgMCAoaS5lLiBxdWFydGVycykuXG4gKi9cblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgdW5pdCB2YWx1ZSB0byB0aGUgdHVwbGUgb2YgdmFsdWVzLlxuICovXG5cbi8qKlxuICogVGhlIHR1cGxlIG9mIGxvY2FsaXplZCBlcmEgdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIEJDLFxuICogdGhlIHNlY29uZCBlbGVtZW50IHJlcHJlc2VudHMgQUQuXG4gKi9cblxuLyoqXG4gKiBUaGUgdHVwbGUgb2YgbG9jYWxpemVkIHF1YXJ0ZXIgdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIFExLlxuICovXG5cbi8qKlxuICogVGhlIHR1cGxlIG9mIGxvY2FsaXplZCBkYXkgdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIFN1bmRheS5cbiAqL1xuXG4vKipcbiAqIFRoZSB0dXBsZSBvZiBsb2NhbGl6ZWQgbW9udGggdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIEphbnVhcnkuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiAodmFsdWUsIG9wdGlvbnMpID0+IHtcbiAgICBjb25zdCBjb250ZXh0ID0gb3B0aW9ucz8uY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogXCJzdGFuZGFsb25lXCI7XG5cbiAgICBsZXQgdmFsdWVzQXJyYXk7XG4gICAgaWYgKGNvbnRleHQgPT09IFwiZm9ybWF0dGluZ1wiICYmIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlcykge1xuICAgICAgY29uc3QgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgY29uc3Qgd2lkdGggPSBvcHRpb25zPy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPVxuICAgICAgICBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIGNvbnN0IHdpZHRoID0gb3B0aW9ucz8ud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1t3aWR0aF0gfHwgYXJncy52YWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9XG4gICAgY29uc3QgaW5kZXggPSBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sgPyBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG5cbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsZW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiAoc3RyaW5nLCBvcHRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG5cbiAgICBjb25zdCBtYXRjaFBhdHRlcm4gPVxuICAgICAgKHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0pIHx8XG4gICAgICBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgY29uc3QgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcblxuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG5cbiAgICBjb25zdCBwYXJzZVBhdHRlcm5zID1cbiAgICAgICh3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdKSB8fFxuICAgICAgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuXG4gICAgY29uc3Qga2V5ID0gQXJyYXkuaXNBcnJheShwYXJzZVBhdHRlcm5zKVxuICAgICAgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgKHBhdHRlcm4pID0+IHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKSlcbiAgICAgIDogLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgLS0gSSBjaGFsbGFuZ2UgeW91IHRvIGZpeCB0aGUgdHlwZVxuICAgICAgICBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIChwYXR0ZXJuKSA9PiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZykpO1xuXG4gICAgbGV0IHZhbHVlO1xuXG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFja1xuICAgICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAtLSBJIGNoYWxsYW5nZSB5b3UgdG8gZml4IHRoZSB0eXBlXG4gICAgICAgIG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSlcbiAgICAgIDogdmFsdWU7XG5cbiAgICBjb25zdCByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcblxuICAgIHJldHVybiB7IHZhbHVlLCByZXN0IH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKFxuICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJlxuICAgICAgcHJlZGljYXRlKG9iamVjdFtrZXldKVxuICAgICkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgZm9yIChsZXQga2V5ID0gMDsga2V5IDwgYXJyYXkubGVuZ3RoOyBrZXkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiAoc3RyaW5nLCBvcHRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuXG4gICAgY29uc3QgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuICAgIGlmICghcGFyc2VSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIGxldCB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFja1xuICAgICAgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pXG4gICAgICA6IHBhcnNlUmVzdWx0WzBdO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgLS0gSSBjaGFsbGFuZ2UgeW91IHRvIGZpeCB0aGUgdHlwZVxuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuXG4gICAgY29uc3QgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG5cbiAgICByZXR1cm4geyB2YWx1ZSwgcmVzdCB9O1xuICB9O1xufVxuIiwiaW1wb3J0IHsgZm9ybWF0RGlzdGFuY2UgfSBmcm9tIFwiLi9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlLm1qc1wiO1xuaW1wb3J0IHsgZm9ybWF0TG9uZyB9IGZyb20gXCIuL2VuLVVTL19saWIvZm9ybWF0TG9uZy5tanNcIjtcbmltcG9ydCB7IGZvcm1hdFJlbGF0aXZlIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS5tanNcIjtcbmltcG9ydCB7IGxvY2FsaXplIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9sb2NhbGl6ZS5tanNcIjtcbmltcG9ydCB7IG1hdGNoIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9tYXRjaC5tanNcIjtcblxuLyoqXG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXShodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycClcbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc10oaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zcylcbiAqL1xuZXhwb3J0IGNvbnN0IGVuVVMgPSB7XG4gIGNvZGU6IFwiZW4tVVNcIixcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwIC8qIFN1bmRheSAqLyxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDEsXG4gIH0sXG59O1xuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGVuVVM7XG4iLCJjb25zdCBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogXCJsZXNzIHRoYW4gYSBzZWNvbmRcIixcbiAgICBvdGhlcjogXCJsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHNcIixcbiAgfSxcblxuICB4U2Vjb25kczoge1xuICAgIG9uZTogXCIxIHNlY29uZFwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBzZWNvbmRzXCIsXG4gIH0sXG5cbiAgaGFsZkFNaW51dGU6IFwiaGFsZiBhIG1pbnV0ZVwiLFxuXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6IFwibGVzcyB0aGFuIGEgbWludXRlXCIsXG4gICAgb3RoZXI6IFwibGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzXCIsXG4gIH0sXG5cbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6IFwiMSBtaW51dGVcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gbWludXRlc1wiLFxuICB9LFxuXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiBcImFib3V0IDEgaG91clwiLFxuICAgIG90aGVyOiBcImFib3V0IHt7Y291bnR9fSBob3Vyc1wiLFxuICB9LFxuXG4gIHhIb3Vyczoge1xuICAgIG9uZTogXCIxIGhvdXJcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gaG91cnNcIixcbiAgfSxcblxuICB4RGF5czoge1xuICAgIG9uZTogXCIxIGRheVwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBkYXlzXCIsXG4gIH0sXG5cbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6IFwiYWJvdXQgMSB3ZWVrXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IHdlZWtzXCIsXG4gIH0sXG5cbiAgeFdlZWtzOiB7XG4gICAgb25lOiBcIjEgd2Vla1wiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSB3ZWVrc1wiLFxuICB9LFxuXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogXCJhYm91dCAxIG1vbnRoXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IG1vbnRoc1wiLFxuICB9LFxuXG4gIHhNb250aHM6IHtcbiAgICBvbmU6IFwiMSBtb250aFwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBtb250aHNcIixcbiAgfSxcblxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogXCJhYm91dCAxIHllYXJcIixcbiAgICBvdGhlcjogXCJhYm91dCB7e2NvdW50fX0geWVhcnNcIixcbiAgfSxcblxuICB4WWVhcnM6IHtcbiAgICBvbmU6IFwiMSB5ZWFyXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG5cbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogXCJvdmVyIDEgeWVhclwiLFxuICAgIG90aGVyOiBcIm92ZXIge3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG5cbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiBcImFsbW9zdCAxIHllYXJcIixcbiAgICBvdGhlcjogXCJhbG1vc3Qge3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0RGlzdGFuY2UgPSAodG9rZW4sIGNvdW50LCBvcHRpb25zKSA9PiB7XG4gIGxldCByZXN1bHQ7XG5cbiAgY29uc3QgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZShcInt7Y291bnR9fVwiLCBjb3VudC50b1N0cmluZygpKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zPy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiBcImluIFwiICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgXCIgYWdvXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJpbXBvcnQgeyBidWlsZEZvcm1hdExvbmdGbiB9IGZyb20gXCIuLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuLm1qc1wiO1xuXG5jb25zdCBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJFRUVFLCBNTU1NIGRvLCB5XCIsXG4gIGxvbmc6IFwiTU1NTSBkbywgeVwiLFxuICBtZWRpdW06IFwiTU1NIGQsIHlcIixcbiAgc2hvcnQ6IFwiTU0vZGQveXl5eVwiLFxufTtcblxuY29uc3QgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwiaDptbTpzcyBhIHp6enpcIixcbiAgbG9uZzogXCJoOm1tOnNzIGEgelwiLFxuICBtZWRpdW06IFwiaDptbTpzcyBhXCIsXG4gIHNob3J0OiBcImg6bW0gYVwiLFxufTtcblxuY29uc3QgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogXCJ7e2RhdGV9fSwge3t0aW1lfX1cIixcbiAgc2hvcnQ6IFwie3tkYXRlfX0sIHt7dGltZX19XCIsXG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJmdWxsXCIsXG4gIH0pLFxuXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6IFwiZnVsbFwiLFxuICB9KSxcblxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6IFwiZnVsbFwiLFxuICB9KSxcbn07XG4iLCJjb25zdCBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6IFwiUFwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdFJlbGF0aXZlID0gKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykgPT5cbiAgZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xuIiwiaW1wb3J0IHsgYnVpbGRMb2NhbGl6ZUZuIH0gZnJvbSBcIi4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuLm1qc1wiO1xuXG5jb25zdCBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogW1wiQlwiLCBcIkFcIl0sXG4gIGFiYnJldmlhdGVkOiBbXCJCQ1wiLCBcIkFEXCJdLFxuICB3aWRlOiBbXCJCZWZvcmUgQ2hyaXN0XCIsIFwiQW5ubyBEb21pbmlcIl0sXG59O1xuXG5jb25zdCBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIl0sXG4gIGFiYnJldmlhdGVkOiBbXCJRMVwiLCBcIlEyXCIsIFwiUTNcIiwgXCJRNFwiXSxcbiAgd2lkZTogW1wiMXN0IHF1YXJ0ZXJcIiwgXCIybmQgcXVhcnRlclwiLCBcIjNyZCBxdWFydGVyXCIsIFwiNHRoIHF1YXJ0ZXJcIl0sXG59O1xuXG4vLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbi8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXG4vLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG5jb25zdCBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbXCJKXCIsIFwiRlwiLCBcIk1cIiwgXCJBXCIsIFwiTVwiLCBcIkpcIiwgXCJKXCIsIFwiQVwiLCBcIlNcIiwgXCJPXCIsIFwiTlwiLCBcIkRcIl0sXG4gIGFiYnJldmlhdGVkOiBbXG4gICAgXCJKYW5cIixcbiAgICBcIkZlYlwiLFxuICAgIFwiTWFyXCIsXG4gICAgXCJBcHJcIixcbiAgICBcIk1heVwiLFxuICAgIFwiSnVuXCIsXG4gICAgXCJKdWxcIixcbiAgICBcIkF1Z1wiLFxuICAgIFwiU2VwXCIsXG4gICAgXCJPY3RcIixcbiAgICBcIk5vdlwiLFxuICAgIFwiRGVjXCIsXG4gIF0sXG5cbiAgd2lkZTogW1xuICAgIFwiSmFudWFyeVwiLFxuICAgIFwiRmVicnVhcnlcIixcbiAgICBcIk1hcmNoXCIsXG4gICAgXCJBcHJpbFwiLFxuICAgIFwiTWF5XCIsXG4gICAgXCJKdW5lXCIsXG4gICAgXCJKdWx5XCIsXG4gICAgXCJBdWd1c3RcIixcbiAgICBcIlNlcHRlbWJlclwiLFxuICAgIFwiT2N0b2JlclwiLFxuICAgIFwiTm92ZW1iZXJcIixcbiAgICBcIkRlY2VtYmVyXCIsXG4gIF0sXG59O1xuXG5jb25zdCBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogW1wiU1wiLCBcIk1cIiwgXCJUXCIsIFwiV1wiLCBcIlRcIiwgXCJGXCIsIFwiU1wiXSxcbiAgc2hvcnQ6IFtcIlN1XCIsIFwiTW9cIiwgXCJUdVwiLCBcIldlXCIsIFwiVGhcIiwgXCJGclwiLCBcIlNhXCJdLFxuICBhYmJyZXZpYXRlZDogW1wiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCJdLFxuICB3aWRlOiBbXG4gICAgXCJTdW5kYXlcIixcbiAgICBcIk1vbmRheVwiLFxuICAgIFwiVHVlc2RheVwiLFxuICAgIFwiV2VkbmVzZGF5XCIsXG4gICAgXCJUaHVyc2RheVwiLFxuICAgIFwiRnJpZGF5XCIsXG4gICAgXCJTYXR1cmRheVwiLFxuICBdLFxufTtcblxuY29uc3QgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogXCJhXCIsXG4gICAgcG06IFwicFwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pXCIsXG4gICAgbm9vbjogXCJuXCIsXG4gICAgbW9ybmluZzogXCJtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcIm5pZ2h0XCIsXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06IFwiQU1cIixcbiAgICBwbTogXCJQTVwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgbm9vbjogXCJub29uXCIsXG4gICAgbW9ybmluZzogXCJtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcIm5pZ2h0XCIsXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogXCJhLm0uXCIsXG4gICAgcG06IFwicC5tLlwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgbm9vbjogXCJub29uXCIsXG4gICAgbW9ybmluZzogXCJtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcIm5pZ2h0XCIsXG4gIH0sXG59O1xuXG5jb25zdCBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogXCJhXCIsXG4gICAgcG06IFwicFwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pXCIsXG4gICAgbm9vbjogXCJuXCIsXG4gICAgbW9ybmluZzogXCJpbiB0aGUgbW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJpbiB0aGUgYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJpbiB0aGUgZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcImF0IG5pZ2h0XCIsXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06IFwiQU1cIixcbiAgICBwbTogXCJQTVwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgbm9vbjogXCJub29uXCIsXG4gICAgbW9ybmluZzogXCJpbiB0aGUgbW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJpbiB0aGUgYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJpbiB0aGUgZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcImF0IG5pZ2h0XCIsXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogXCJhLm0uXCIsXG4gICAgcG06IFwicC5tLlwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgbm9vbjogXCJub29uXCIsXG4gICAgbW9ybmluZzogXCJpbiB0aGUgbW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJpbiB0aGUgYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJpbiB0aGUgZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcImF0IG5pZ2h0XCIsXG4gIH0sXG59O1xuXG5jb25zdCBvcmRpbmFsTnVtYmVyID0gKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykgPT4ge1xuICBjb25zdCBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIC8vIElmIG9yZGluYWwgbnVtYmVycyBkZXBlbmQgb24gY29udGV4dCwgZm9yIGV4YW1wbGUsXG4gIC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBmb3IgZGlmZmVyZW50IGdyYW1tYXRpY2FsIGdlbmRlcnMsXG4gIC8vIHVzZSBgb3B0aW9ucy51bml0YC5cbiAgLy9cbiAgLy8gYHVuaXRgIGNhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF0ZScsICdkYXlPZlllYXInLFxuICAvLyAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcuXG5cbiAgY29uc3QgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcInN0XCI7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcIm5kXCI7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcInJkXCI7XG4gICAgfVxuICB9XG4gIHJldHVybiBudW1iZXIgKyBcInRoXCI7XG59O1xuXG5leHBvcnQgY29uc3QgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXIsXG5cbiAgZXJhOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gIH0pLFxuXG4gIHF1YXJ0ZXI6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gICAgYXJndW1lbnRDYWxsYmFjazogKHF1YXJ0ZXIpID0+IHF1YXJ0ZXIgLSAxLFxuICB9KSxcblxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gIH0pLFxuXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICB9KSxcblxuICBkYXlQZXJpb2Q6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiBcIndpZGVcIixcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6IFwid2lkZVwiLFxuICB9KSxcbn07XG4iLCJpbXBvcnQgeyBidWlsZE1hdGNoRm4gfSBmcm9tIFwiLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4ubWpzXCI7XG5pbXBvcnQgeyBidWlsZE1hdGNoUGF0dGVybkZuIH0gZnJvbSBcIi4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi5tanNcIjtcblxuY29uc3QgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcbmNvbnN0IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xuXG5jb25zdCBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGJ8YSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGJcXC4/XFxzP2NcXC4/fGJcXC4/XFxzP2NcXC4/XFxzP2VcXC4/fGFcXC4/XFxzP2RcXC4/fGNcXC4/XFxzP2VcXC4/KS9pLFxuICB3aWRlOiAvXihiZWZvcmUgY2hyaXN0fGJlZm9yZSBjb21tb24gZXJhfGFubm8gZG9taW5pfGNvbW1vbiBlcmEpL2ksXG59O1xuY29uc3QgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV0sXG59O1xuXG5jb25zdCBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pLFxufTtcbmNvbnN0IHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXSxcbn07XG5cbmNvbnN0IG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pLFxufTtcbmNvbnN0IHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbXG4gICAgL15qL2ksXG4gICAgL15mL2ksXG4gICAgL15tL2ksXG4gICAgL15hL2ksXG4gICAgL15tL2ksXG4gICAgL15qL2ksXG4gICAgL15qL2ksXG4gICAgL15hL2ksXG4gICAgL15zL2ksXG4gICAgL15vL2ksXG4gICAgL15uL2ksXG4gICAgL15kL2ksXG4gIF0sXG5cbiAgYW55OiBbXG4gICAgL15qYS9pLFxuICAgIC9eZi9pLFxuICAgIC9ebWFyL2ksXG4gICAgL15hcC9pLFxuICAgIC9ebWF5L2ksXG4gICAgL15qdW4vaSxcbiAgICAvXmp1bC9pLFxuICAgIC9eYXUvaSxcbiAgICAvXnMvaSxcbiAgICAvXm8vaSxcbiAgICAvXm4vaSxcbiAgICAvXmQvaSxcbiAgXSxcbn07XG5cbmNvbnN0IG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2ksXG59O1xuY29uc3QgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldLFxufTtcblxuY29uc3QgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG59O1xuY29uc3QgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6ICh2YWx1ZSkgPT4gcGFyc2VJbnQodmFsdWUsIDEwKSxcbiAgfSksXG5cbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxuXG4gIHF1YXJ0ZXI6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICAgIHZhbHVlQ2FsbGJhY2s6IChpbmRleCkgPT4gaW5kZXggKyAxLFxuICB9KSxcblxuICBtb250aDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgfSksXG5cbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxuXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcImFueVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxufTtcbiIsImltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9nZXREZWZhdWx0T3B0aW9ucy5tanNcIjtcbmltcG9ydCB7IGVuVVMgYXMgZGVmYXVsdExvY2FsZSB9IGZyb20gXCIuL2xvY2FsZS9lbi1VUy5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcbmltcG9ydCB7IGxvbmdGb3JtYXR0ZXJzIH0gZnJvbSBcIi4vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMubWpzXCI7XG5pbXBvcnQge1xuICBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuLFxuICBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4sXG4gIHdhcm5PclRocm93UHJvdGVjdGVkRXJyb3IsXG59IGZyb20gXCIuL19saWIvcHJvdGVjdGVkVG9rZW5zLm1qc1wiO1xuaW1wb3J0IHsgcGFyc2VycyB9IGZyb20gXCIuL3BhcnNlL19saWIvcGFyc2Vycy5tanNcIjtcbmltcG9ydCB7IERhdGVUb1N5c3RlbVRpbWV6b25lU2V0dGVyIH0gZnJvbSBcIi4vcGFyc2UvX2xpYi9TZXR0ZXIubWpzXCI7XG5cbi8vIFJleHBvcnRzIG9mIGludGVybmFsIGZvciBsaWJyYXJpZXMgdG8gdXNlLlxuLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM2MzgjaXNzdWVjb21tZW50LTE4NzcwODI4NzRcbmV4cG9ydCB7IGxvbmdGb3JtYXR0ZXJzLCBwYXJzZXJzIH07XG5cbi8qKlxuICogVGhlIHtAbGluayBwYXJzZX0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vLyBUaGlzIFJlZ0V4cCBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyBzZXBhcmF0ZWQgYnkgYHxgOlxuLy8gLSBbeVlRcU1Md0lkRGVjaWhIS2ttc11vIG1hdGNoZXMgYW55IGF2YWlsYWJsZSBvcmRpbmFsIG51bWJlciB0b2tlblxuLy8gICAob25lIG9mIHRoZSBjZXJ0YWluIGxldHRlcnMgZm9sbG93ZWQgYnkgYG9gKVxuLy8gLSAoXFx3KVxcMSogbWF0Y2hlcyBhbnkgc2VxdWVuY2VzIG9mIHRoZSBzYW1lIGxldHRlclxuLy8gLSAnJyBtYXRjaGVzIHR3byBxdW90ZSBjaGFyYWN0ZXJzIGluIGEgcm93XG4vLyAtICcoJyd8W14nXSkrKCd8JCkgbWF0Y2hlcyBhbnl0aGluZyBzdXJyb3VuZGVkIGJ5IHR3byBxdW90ZSBjaGFyYWN0ZXJzICgnKSxcbi8vICAgZXhjZXB0IGEgc2luZ2xlIHF1b3RlIHN5bWJvbCwgd2hpY2ggZW5kcyB0aGUgc2VxdWVuY2UuXG4vLyAgIFR3byBxdW90ZSBjaGFyYWN0ZXJzIGRvIG5vdCBlbmQgdGhlIHNlcXVlbmNlLlxuLy8gICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBzaW5nbGUgcXVvdGVcbi8vICAgdGhlbiB0aGUgc2VxdWVuY2Ugd2lsbCBjb250aW51ZSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4vLyAtIC4gbWF0Y2hlcyBhbnkgc2luZ2xlIGNoYXJhY3RlciB1bm1hdGNoZWQgYnkgcHJldmlvdXMgcGFydHMgb2YgdGhlIFJlZ0V4cHNcbmNvbnN0IGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPVxuICAvW3lZUXFNTHdJZERlY2loSEtrbXNdb3woXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG5cbi8vIFRoaXMgUmVnRXhwIGNhdGNoZXMgc3ltYm9scyBlc2NhcGVkIGJ5IHF1b3RlcywgYW5kIGFsc29cbi8vIHNlcXVlbmNlcyBvZiBzeW1ib2xzIFAsIHAsIGFuZCB0aGUgY29tYmluYXRpb25zIGxpa2UgYFBQUFBQUFBwcHBwcGBcbmNvbnN0IGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1ArcCt8UCt8cCt8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG5cbmNvbnN0IGVzY2FwZWRTdHJpbmdSZWdFeHAgPSAvXicoW15dKj8pJz8kLztcbmNvbnN0IGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XG5cbmNvbnN0IG5vdFdoaXRlc3BhY2VSZWdFeHAgPSAvXFxTLztcbmNvbnN0IHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwID0gL1thLXpBLVpdLztcblxuLyoqXG4gKiBAbmFtZSBwYXJzZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBQYXJzZSB0aGUgZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZGF0ZSBwYXJzZWQgZnJvbSBzdHJpbmcgdXNpbmcgdGhlIGdpdmVuIGZvcm1hdCBzdHJpbmcuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGUgYGZvcm1hdGAgdG9rZW5zIGRpZmZlciBmcm9tIE1vbWVudC5qcyBhbmQgb3RoZXIgbGlicmFyaWVzLlxuICogPiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBUaGUgY2hhcmFjdGVycyBpbiB0aGUgZm9ybWF0IHN0cmluZyB3cmFwcGVkIGJldHdlZW4gdHdvIHNpbmdsZSBxdW90ZXMgY2hhcmFjdGVycyAoJykgYXJlIGVzY2FwZWQuXG4gKiBUd28gc2luZ2xlIHF1b3RlcyBpbiBhIHJvdywgd2hldGhlciBpbnNpZGUgb3Igb3V0c2lkZSBhIHF1b3RlZCBzZXF1ZW5jZSwgcmVwcmVzZW50IGEgJ3JlYWwnIHNpbmdsZSBxdW90ZS5cbiAqXG4gKiBGb3JtYXQgb2YgdGhlIGZvcm1hdCBzdHJpbmcgaXMgYmFzZWQgb24gVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZVxuICogd2l0aCBhIGZldyBhZGRpdGlvbnMgKHNlZSBub3RlIDUgYmVsb3cgdGhlIHRhYmxlKS5cbiAqXG4gKiBOb3QgYWxsIHRva2VucyBhcmUgY29tcGF0aWJsZS4gQ29tYmluYXRpb25zIHRoYXQgZG9uJ3QgbWFrZSBzZW5zZSBvciBjb3VsZCBsZWFkIHRvIGJ1Z3MgYXJlIHByb2hpYml0ZWRcbiAqIGFuZCB3aWxsIHRocm93IGBSYW5nZUVycm9yYC4gRm9yIGV4YW1wbGUgdXNhZ2Ugb2YgMjQtaG91ciBmb3JtYXQgdG9rZW4gd2l0aCBBTS9QTSB0b2tlbiB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbjpcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBwYXJzZSgnMjMgQU0nLCAnSEggYScsIG5ldyBEYXRlKCkpXG4gKiAvLz0+IFJhbmdlRXJyb3I6IFRoZSBmb3JtYXQgc3RyaW5nIG11c3RuJ3QgY29udGFpbiBgSEhgIGFuZCBgYWAgYXQgdGhlIHNhbWUgdGltZVxuICogYGBgXG4gKlxuICogU2VlIHRoZSBjb21wYXRpYmlsaXR5IHRhYmxlOiBodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9zcHJlYWRzaGVldHMvZC9lLzJQQUNYLTF2UU9QVTN4VWhwbGxsNmR5b01tVlVYSEtsXzhDUkRzNl91ZUxtZXgzU29xd2h1b2xrdU4zTzA1bDRycXg1aDFkS1g4ZWI0NlVsLUNDU3JxL3B1Ymh0bWw/Z2lkPTAmc2luZ2xlPXRydWVcbiAqXG4gKiBBY2NlcHRlZCBmb3JtYXQgc3RyaW5nIHBhdHRlcm5zOlxuICogfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxQcmlvcnwgUGF0dGVybiB8IFJlc3VsdCBleGFtcGxlcyAgICAgICAgICAgICAgICAgICB8IE5vdGVzIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS18XG4gKiB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAxNDAgfCBHLi5HR0cgIHwgQUQsIEJDICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgR0dHRyAgICB8IEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IEdHR0dHICAgfCBBLCBCICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IENhbGVuZGFyIHllYXIgICAgICAgICAgICAgICAgICAgfCAxMzAgfCB5ICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcsIDk5OTkgICAgICAgICAgIHwgNCAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgeW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCA5OTk5OTk5dGggICAgICB8IDQsNSAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHl5ICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCB5eXkgICAgIHwgMDQ0LCAwMDEsIDEyMywgOTk5ICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgeXl5eSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHl5eXl5ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAyLDQgICB8XG4gKiB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgfCAxMzAgfCBZICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcsIDkwMDAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgWW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCA5OTk5OTk5dGggICAgICB8IDQsNSAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFlZICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA0LDYgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBZWVkgICAgIHwgMDQ0LCAwMDEsIDEyMywgOTk5ICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgWVlZWSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDQsNiAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFlZWVlZICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAyLDQgICB8XG4gKiB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICAgfCAxMzAgfCBSICAgICAgIHwgLTQzLCAxLCAxOTAwLCAyMDE3LCA5OTk5LCAtOTk5OSAgIHwgNCw1ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgUlIgICAgICB8IC00MywgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICB8IDQsNSAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFJSUiAgICAgfCAtMDQzLCAwMDEsIDEyMywgOTk5LCAtOTk5ICAgICAgICAgfCA0LDUgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBSUlJSICAgIHwgLTAwNDMsIDAwMDEsIDIwMTcsIDk5OTksIC05OTk5ICAgIHwgNCw1ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgUlJSUlIgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDIsNCw1IHxcbiAqIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgICB8IDEzMCB8IHUgICAgICAgfCAtNDMsIDEsIDE5MDAsIDIwMTcsIDk5OTksIC05OTkgICAgfCA0ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCB1dSAgICAgIHwgLTQzLCAwMSwgOTksIC05OSAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgdXV1ICAgICB8IC0wNDMsIDAwMSwgMTIzLCA5OTksIC05OTkgICAgICAgICB8IDQgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHV1dXUgICAgfCAtMDA0MywgMDAwMSwgMjAxNywgOTk5OSwgLTk5OTkgICAgfCA0ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCB1dXV1dSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMiw0ICAgfFxuICogfCBRdWFydGVyIChmb3JtYXR0aW5nKSAgICAgICAgICAgIHwgMTIwIHwgUSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBRUSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgUVFRICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFFRUVEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBRUVFRUSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBRdWFydGVyIChzdGFuZC1hbG9uZSkgICAgICAgICAgIHwgMTIwIHwgcSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBxcSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgcXFxICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHFxcXEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBxcXFxcSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBNb250aCAoZm9ybWF0dGluZykgICAgICAgICAgICAgIHwgMTEwIHwgTSAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IE1vICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBNTSAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgTU1NICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IE1NTU0gICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBNTU1NTSAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNb250aCAoc3RhbmQtYWxvbmUpICAgICAgICAgICAgIHwgMTEwIHwgTCAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IExvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBMTCAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgTExMICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IExMTEwgICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBMTExMTCAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgIHwgMTAwIHwgdyAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHdvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCB3dyAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgIHwgMTAwIHwgSSAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IElvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBJSSAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgIHwgIDkwIHwgZCAgICAgICB8IDEsIDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGRvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzMXN0ICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBkZCAgICAgIHwgMDEsIDAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgIHwgIDkwIHwgRCAgICAgICB8IDEsIDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IERvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzNjV0aCwgMzY2dGggICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBERCAgICAgIHwgMDEsIDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgREREICAgICB8IDAwMSwgMDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IEREREQgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8IERheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICAgICAgfCAgOTAgfCBFLi5FRUUgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgRUVFRSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IEVFRUVFICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBFRUVFRUUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgIHwgIDkwIHwgaSAgICAgICB8IDEsIDIsIDMsIC4uLiwgNyAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGlvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA3dGggICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBpaSAgICAgIHwgMDEsIDAyLCAuLi4sIDA3ICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgaWlpICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGlpaWkgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyLDUgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBpaWlpaSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgaWlpaWlpICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8IDUgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICB8ICA5MCB8IGUgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBlbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgZWUgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGVlZSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBlZWVlICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgZWVlZWUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGVlZWVlZSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChzdGFuZC1hbG9uZSkgfCAgOTAgfCBjICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgY28gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGNjICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBjY2MgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgY2NjYyAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGNjY2NjICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBjY2NjY2MgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgIDgwIHwgYS4uYWFhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGFhYWEgICAgfCBhLm0uLCBwLm0uICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBhYWFhYSAgIHwgYSwgcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgIHwgIDgwIHwgYi4uYmJiICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGJiYmIgICAgfCBhLm0uLCBwLm0uLCBub29uLCBtaWRuaWdodCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBiYmJiYiAgIHwgYSwgcCwgbiwgbWkgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgIHwgIDgwIHwgQi4uQkJCICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IEJCQkIgICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBCQkJCQiAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgIHwgIDcwIHwgaCAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGhvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAxMnRoICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBoaCAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgIHwgIDcwIHwgSCAgICAgICB8IDAsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IEhvICAgICAgfCAwdGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBISCAgICAgIHwgMDAsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgIHwgIDcwIHwgSyAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IEtvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAwdGggICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBLSyAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgIHwgIDcwIHwgayAgICAgICB8IDI0LCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGtvICAgICAgfCAyNHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBrayAgICAgIHwgMjQsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIDYwIHwgbSAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IG1vICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBtbSAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIDUwIHwgcyAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHNvICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBzcyAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgIHwgIDQwIHwgdCAgICAgICB8IDUxMjk2OTUyMCAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHR0ICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICAgfCAgMzAgfCBTICAgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgU1MgICAgICB8IDAwLCAwMSwgLi4uLCA5OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFNTUyAgICAgfCAwMDAsIDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBTU1NTICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgIHwgIDIwIHwgVCAgICAgICB8IDUxMjk2OTUyMDkwMCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFRUICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3LyBaKSAgICAgICAgfCAgMTAgfCBYICAgICAgIHwgLTA4LCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgWFggICAgICB8IC0wODAwLCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFhYWCAgICAgfCAtMDg6MDAsICswNTozMCwgWiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBYWFhYICAgIHwgLTA4MDAsICswNTMwLCBaLCArMTIzNDU2ICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgWFhYWFggICB8IC0wODowMCwgKzA1OjMwLCBaLCArMTI6MzQ6NTYgICAgICB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgICB8ICAxMCB8IHggICAgICAgfCAtMDgsICswNTMwLCArMDAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCB4eCAgICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgeHh4ICAgICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHh4eHggICAgfCAtMDgwMCwgKzA1MzAsICswMDAwLCArMTIzNDU2ICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCB4eHh4eCAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCwgKzEyOjM0OjU2IHwgICAgICAgfFxuICogfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgIHwgIE5BIHwgUCAgICAgICB8IDA1LzI5LzE0NTMgICAgICAgICAgICAgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFBQICAgICAgfCBNYXkgMjksIDE0NTMgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBQUFAgICAgIHwgTWF5IDI5dGgsIDE0NTMgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgUFBQUCAgICB8IFN1bmRheSwgTWF5IDI5dGgsIDE0NTMgICAgICAgICAgICB8IDIsNSw4IHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgICB8ICBOQSB8IHAgICAgICAgfCAxMjowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBwcCAgICAgIHwgMTI6MDA6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBDb21iaW5hdGlvbiBvZiBkYXRlIGFuZCB0aW1lICAgIHwgIE5BIHwgUHAgICAgICB8IDA1LzI5LzE0NTMsIDEyOjAwIEFNICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFBQcHAgICAgfCBNYXkgMjksIDE0NTMsIDEyOjAwOjAwIEFNICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBQUFBwcCAgIHwgTWF5IDI5dGgsIDE0NTMgYXQgLi4uICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgUFBQUHBwICB8IFN1bmRheSwgTWF5IDI5dGgsIDE0NTMgYXQgLi4uICAgICB8IDIsNSw4IHxcbiAqIE5vdGVzOlxuICogMS4gXCJGb3JtYXR0aW5nXCIgdW5pdHMgKGUuZy4gZm9ybWF0dGluZyBxdWFydGVyKSBpbiB0aGUgZGVmYXVsdCBlbi1VUyBsb2NhbGVcbiAqICAgIGFyZSB0aGUgc2FtZSBhcyBcInN0YW5kLWFsb25lXCIgdW5pdHMsIGJ1dCBhcmUgZGlmZmVyZW50IGluIHNvbWUgbGFuZ3VhZ2VzLlxuICogICAgXCJGb3JtYXR0aW5nXCIgdW5pdHMgYXJlIGRlY2xpbmVkIGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgdGhlIGxhbmd1YWdlXG4gKiAgICBpbiB0aGUgY29udGV4dCBvZiBhIGRhdGUuIFwiU3RhbmQtYWxvbmVcIiB1bml0cyBhcmUgYWx3YXlzIG5vbWluYXRpdmUgc2luZ3VsYXIuXG4gKiAgICBJbiBgZm9ybWF0YCBmdW5jdGlvbiwgdGhleSB3aWxsIHByb2R1Y2UgZGlmZmVyZW50IHJlc3VsdDpcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIExMTEwnLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIE1NTU0nLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkdSdgXG4gKlxuICogICAgYHBhcnNlYCB3aWxsIHRyeSB0byBtYXRjaCBib3RoIGZvcm1hdHRpbmcgYW5kIHN0YW5kLWFsb25lIHVuaXRzIGludGVyY2hhbmdhYmx5LlxuICpcbiAqIDIuIEFueSBzZXF1ZW5jZSBvZiB0aGUgaWRlbnRpY2FsIGxldHRlcnMgaXMgYSBwYXR0ZXJuLCB1bmxlc3MgaXQgaXMgZXNjYXBlZCBieVxuICogICAgdGhlIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIChzZWUgYmVsb3cpLlxuICogICAgSWYgdGhlIHNlcXVlbmNlIGlzIGxvbmdlciB0aGFuIGxpc3RlZCBpbiB0YWJsZTpcbiAqICAgIC0gZm9yIG51bWVyaWNhbCB1bml0cyAoYHl5eXl5eXl5YCkgYHBhcnNlYCB3aWxsIHRyeSB0byBtYXRjaCBhIG51bWJlclxuICogICAgICBhcyB3aWRlIGFzIHRoZSBzZXF1ZW5jZVxuICogICAgLSBmb3IgdGV4dCB1bml0cyAoYE1NTU1NTU1NYCkgYHBhcnNlYCB3aWxsIHRyeSB0byBtYXRjaCB0aGUgd2lkZXN0IHZhcmlhdGlvbiBvZiB0aGUgdW5pdC5cbiAqICAgICAgVGhlc2UgdmFyaWF0aW9ucyBhcmUgbWFya2VkIHdpdGggXCIyXCIgaW4gdGhlIGxhc3QgY29sdW1uIG9mIHRoZSB0YWJsZS5cbiAqXG4gKiAzLiBgUVFRUVFgIGFuZCBgcXFxcXFgIGNvdWxkIGJlIG5vdCBzdHJpY3RseSBudW1lcmljYWwgaW4gc29tZSBsb2NhbGVzLlxuICogICAgVGhlc2UgdG9rZW5zIHJlcHJlc2VudCB0aGUgc2hvcnRlc3QgZm9ybSBvZiB0aGUgcXVhcnRlci5cbiAqXG4gKiA0LiBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgcGF0dGVybnMgYXJlIEIuQy4geWVhcnM6XG4gKlxuICogICAgfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS18LS0tLS18XG4gKiAgICB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICogICAgfCBCQyAxIHwgICAxIHwgICAwIHxcbiAqICAgIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gKlxuICogICAgQWxzbyBgeXlgIHdpbGwgdHJ5IHRvIGd1ZXNzIHRoZSBjZW50dXJ5IG9mIHR3byBkaWdpdCB5ZWFyIGJ5IHByb3hpbWl0eSB3aXRoIGByZWZlcmVuY2VEYXRlYDpcbiAqXG4gKiAgICBgcGFyc2UoJzUwJywgJ3l5JywgbmV3IERhdGUoMjAxOCwgMCwgMSkpIC8vPT4gU2F0IEphbiAwMSAyMDUwIDAwOjAwOjAwYFxuICpcbiAqICAgIGBwYXJzZSgnNzUnLCAneXknLCBuZXcgRGF0ZSgyMDE4LCAwLCAxKSkgLy89PiBXZWQgSmFuIDAxIDE5NzUgMDA6MDA6MDBgXG4gKlxuICogICAgd2hpbGUgYHV1YCB3aWxsIGp1c3QgYXNzaWduIHRoZSB5ZWFyIGFzIGlzOlxuICpcbiAqICAgIGBwYXJzZSgnNTAnLCAndXUnLCBuZXcgRGF0ZSgyMDE4LCAwLCAxKSkgLy89PiBTYXQgSmFuIDAxIDAwNTAgMDA6MDA6MDBgXG4gKlxuICogICAgYHBhcnNlKCc3NScsICd1dScsIG5ldyBEYXRlKDIwMTgsIDAsIDEpKSAvLz0+IFR1ZSBKYW4gMDEgMDA3NSAwMDowMDowMGBcbiAqXG4gKiAgICBUaGUgc2FtZSBkaWZmZXJlbmNlIGlzIHRydWUgZm9yIGxvY2FsIGFuZCBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgKGBZYCBhbmQgYFJgKSxcbiAqICAgIGV4Y2VwdCBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFycyBhcmUgZGVwZW5kZW50IG9uIGBvcHRpb25zLndlZWtTdGFydHNPbmBcbiAqICAgIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIChjb21wYXJlIFtzZXRJU09XZWVrWWVhcl0oaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9zZXRJU09XZWVrWWVhcilcbiAqICAgIGFuZCBbc2V0V2Vla1llYXJdKGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3Mvc2V0V2Vla1llYXIpKS5cbiAqXG4gKiA1LiBUaGVzZSBwYXR0ZXJucyBhcmUgbm90IGluIHRoZSBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiAgICAtIGBpYDogSVNPIGRheSBvZiB3ZWVrXG4gKiAgICAtIGBJYDogSVNPIHdlZWsgb2YgeWVhclxuICogICAgLSBgUmA6IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKiAgICAtIGBvYDogb3JkaW5hbCBudW1iZXIgbW9kaWZpZXJcbiAqICAgIC0gYFBgOiBsb25nIGxvY2FsaXplZCBkYXRlXG4gKiAgICAtIGBwYDogbG9uZyBsb2NhbGl6ZWQgdGltZVxuICpcbiAqIDYuIGBZWWAgYW5kIGBZWVlZYCB0b2tlbnMgcmVwcmVzZW50IHdlZWstbnVtYmVyaW5nIHllYXJzIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIHllYXJzLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogNy4gYERgIGFuZCBgRERgIHRva2VucyByZXByZXNlbnQgZGF5cyBvZiB0aGUgeWVhciBidXQgdGhleSBhcmUgb2Z0aGVuIGNvbmZ1c2VkIHdpdGggZGF5cyBvZiB0aGUgbW9udGguXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogOC4gYFArYCB0b2tlbnMgZG8gbm90IGhhdmUgYSBkZWZpbmVkIHByaW9yaXR5IHNpbmNlIHRoZXkgYXJlIG1lcmVseSBhbGlhc2VzIHRvIG90aGVyIHRva2VucyBiYXNlZFxuICogICAgb24gdGhlIGdpdmVuIGxvY2FsZS5cbiAqXG4gKiAgICB1c2luZyBgZW4tVVNgIGxvY2FsZTogYFBgID0+IGBNTS9kZC95eXl5YFxuICogICAgdXNpbmcgYGVuLVVTYCBsb2NhbGU6IGBwYCA9PiBgaGg6bW0gYWBcbiAqICAgIHVzaW5nIGBwdC1CUmAgbG9jYWxlOiBgUGAgPT4gYGRkL01NL3l5eXlgXG4gKiAgICB1c2luZyBgcHQtQlJgIGxvY2FsZTogYHBgID0+IGBISDptbWBcbiAqXG4gKiBWYWx1ZXMgd2lsbCBiZSBhc3NpZ25lZCB0byB0aGUgZGF0ZSBpbiB0aGUgZGVzY2VuZGluZyBvcmRlciBvZiBpdHMgdW5pdCdzIHByaW9yaXR5LlxuICogVW5pdHMgb2YgYW4gZXF1YWwgcHJpb3JpdHkgb3ZlcndyaXRlIGVhY2ggb3RoZXIgaW4gdGhlIG9yZGVyIG9mIGFwcGVhcmFuY2UuXG4gKlxuICogSWYgbm8gdmFsdWVzIG9mIGhpZ2hlciBwcmlvcml0eSBhcmUgcGFyc2VkIChlLmcuIHdoZW4gcGFyc2luZyBzdHJpbmcgJ0phbnVhcnkgMXN0JyB3aXRob3V0IGEgeWVhciksXG4gKiB0aGUgdmFsdWVzIHdpbGwgYmUgdGFrZW4gZnJvbSAzcmQgYXJndW1lbnQgYHJlZmVyZW5jZURhdGVgIHdoaWNoIHdvcmtzIGFzIGEgY29udGV4dCBvZiBwYXJzaW5nLlxuICpcbiAqIGByZWZlcmVuY2VEYXRlYCBtdXN0IGJlIHBhc3NlZCBmb3IgY29ycmVjdCB3b3JrIG9mIHRoZSBmdW5jdGlvbi5cbiAqIElmIHlvdSdyZSBub3Qgc3VyZSB3aGljaCBgcmVmZXJlbmNlRGF0ZWAgdG8gc3VwcGx5LCBjcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgRGF0ZTpcbiAqIGBwYXJzZSgnMDIvMTEvMjAxNCcsICdNTS9kZC95eXl5JywgbmV3IERhdGUoKSlgXG4gKiBJbiB0aGlzIGNhc2UgcGFyc2luZyB3aWxsIGJlIGRvbmUgaW4gdGhlIGNvbnRleHQgb2YgdGhlIGN1cnJlbnQgZGF0ZS5cbiAqIElmIGByZWZlcmVuY2VEYXRlYCBpcyBgSW52YWxpZCBEYXRlYCBvciBhIHZhbHVlIG5vdCBjb252ZXJ0aWJsZSB0byB2YWxpZCBgRGF0ZWAsXG4gKiB0aGVuIGBJbnZhbGlkIERhdGVgIHdpbGwgYmUgcmV0dXJuZWQuXG4gKlxuICogVGhlIHJlc3VsdCBtYXkgdmFyeSBieSBsb2NhbGUuXG4gKlxuICogSWYgYGZvcm1hdFN0cmluZ2AgbWF0Y2hlcyB3aXRoIGBkYXRlU3RyaW5nYCBidXQgZG9lcyBub3QgcHJvdmlkZXMgdG9rZW5zLCBgcmVmZXJlbmNlRGF0ZWAgd2lsbCBiZSByZXR1cm5lZC5cbiAqXG4gKiBJZiBwYXJzaW5nIGZhaWxlZCwgYEludmFsaWQgRGF0ZWAgd2lsbCBiZSByZXR1cm5lZC5cbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVTdHIgLSBUaGUgc3RyaW5nIHRvIHBhcnNlXG4gKiBAcGFyYW0gZm9ybWF0U3RyIC0gVGhlIHN0cmluZyBvZiB0b2tlbnNcbiAqIEBwYXJhbSByZWZlcmVuY2VEYXRlIC0gZGVmaW5lcyB2YWx1ZXMgbWlzc2luZyBmcm9tIHRoZSBwYXJzZWQgZGF0ZVN0cmluZ1xuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogICBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqICAgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogQHJldHVybnMgVGhlIHBhcnNlZCBkYXRlXG4gKlxuICogQHRocm93cyBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgbWF0Y2hgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB1c2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB1c2UgYGRgIGluc3RlYWQgb2YgYERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3MgdXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3MgZm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFBhcnNlIDExIEZlYnJ1YXJ5IDIwMTQgZnJvbSBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIHZhciByZXN1bHQgPSBwYXJzZSgnMDIvMTEvMjAxNCcsICdNTS9kZC95eXl5JywgbmV3IERhdGUoKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFBhcnNlIDI4dGggb2YgRmVicnVhcnkgaW4gRXNwZXJhbnRvIGxvY2FsZSBpbiB0aGUgY29udGV4dCBvZiAyMDEwIHllYXI6XG4gKiBpbXBvcnQgZW8gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogdmFyIHJlc3VsdCA9IHBhcnNlKCcyOC1hIGRlIGZlYnJ1YXJvJywgXCJkbyAnZGUnIE1NTU1cIiwgbmV3IERhdGUoMjAxMCwgMCwgMSksIHtcbiAqICAgbG9jYWxlOiBlb1xuICogfSlcbiAqIC8vPT4gU3VuIEZlYiAyOCAyMDEwIDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZShkYXRlU3RyLCBmb3JtYXRTdHIsIHJlZmVyZW5jZURhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCBsb2NhbGUgPSBvcHRpb25zPy5sb2NhbGUgPz8gZGVmYXVsdE9wdGlvbnMubG9jYWxlID8/IGRlZmF1bHRMb2NhbGU7XG5cbiAgY29uc3QgZmlyc3RXZWVrQ29udGFpbnNEYXRlID1cbiAgICBvcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgMTtcblxuICBjb25zdCB3ZWVrU3RhcnRzT24gPVxuICAgIG9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICAwO1xuXG4gIGlmIChmb3JtYXRTdHIgPT09IFwiXCIpIHtcbiAgICBpZiAoZGF0ZVN0ciA9PT0gXCJcIikge1xuICAgICAgcmV0dXJuIHRvRGF0ZShyZWZlcmVuY2VEYXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNvbnN0cnVjdEZyb20ocmVmZXJlbmNlRGF0ZSwgTmFOKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBzdWJGbk9wdGlvbnMgPSB7XG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlLFxuICAgIHdlZWtTdGFydHNPbixcbiAgICBsb2NhbGUsXG4gIH07XG5cbiAgLy8gSWYgdGltZXpvbmUgaXNuJ3Qgc3BlY2lmaWVkLCBpdCB3aWxsIGJlIHNldCB0byB0aGUgc3lzdGVtIHRpbWV6b25lXG4gIGNvbnN0IHNldHRlcnMgPSBbbmV3IERhdGVUb1N5c3RlbVRpbWV6b25lU2V0dGVyKCldO1xuXG4gIGNvbnN0IHRva2VucyA9IGZvcm1hdFN0clxuICAgIC5tYXRjaChsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cClcbiAgICAubWFwKChzdWJzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuICAgICAgaWYgKGZpcnN0Q2hhcmFjdGVyIGluIGxvbmdGb3JtYXR0ZXJzKSB7XG4gICAgICAgIGNvbnN0IGxvbmdGb3JtYXR0ZXIgPSBsb25nRm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG4gICAgICAgIHJldHVybiBsb25nRm9ybWF0dGVyKHN1YnN0cmluZywgbG9jYWxlLmZvcm1hdExvbmcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN1YnN0cmluZztcbiAgICB9KVxuICAgIC5qb2luKFwiXCIpXG4gICAgLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnNSZWdFeHApO1xuXG4gIGNvbnN0IHVzZWRUb2tlbnMgPSBbXTtcblxuICBmb3IgKGxldCB0b2tlbiBvZiB0b2tlbnMpIHtcbiAgICBpZiAoXG4gICAgICAhb3B0aW9ucz8udXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zICYmXG4gICAgICBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4odG9rZW4pXG4gICAgKSB7XG4gICAgICB3YXJuT3JUaHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXRTdHIsIGRhdGVTdHIpO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICAhb3B0aW9ucz8udXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucyAmJlxuICAgICAgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbilcbiAgICApIHtcbiAgICAgIHdhcm5PclRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdFN0ciwgZGF0ZVN0cik7XG4gICAgfVxuXG4gICAgY29uc3QgZmlyc3RDaGFyYWN0ZXIgPSB0b2tlblswXTtcbiAgICBjb25zdCBwYXJzZXIgPSBwYXJzZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICBpZiAocGFyc2VyKSB7XG4gICAgICBjb25zdCB7IGluY29tcGF0aWJsZVRva2VucyB9ID0gcGFyc2VyO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaW5jb21wYXRpYmxlVG9rZW5zKSkge1xuICAgICAgICBjb25zdCBpbmNvbXBhdGlibGVUb2tlbiA9IHVzZWRUb2tlbnMuZmluZChcbiAgICAgICAgICAodXNlZFRva2VuKSA9PlxuICAgICAgICAgICAgaW5jb21wYXRpYmxlVG9rZW5zLmluY2x1ZGVzKHVzZWRUb2tlbi50b2tlbikgfHxcbiAgICAgICAgICAgIHVzZWRUb2tlbi50b2tlbiA9PT0gZmlyc3RDaGFyYWN0ZXIsXG4gICAgICAgICk7XG4gICAgICAgIGlmIChpbmNvbXBhdGlibGVUb2tlbikge1xuICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFxuICAgICAgICAgICAgYFRoZSBmb3JtYXQgc3RyaW5nIG11c3RuJ3QgY29udGFpbiBcXGAke2luY29tcGF0aWJsZVRva2VuLmZ1bGxUb2tlbn1cXGAgYW5kIFxcYCR7dG9rZW59XFxgIGF0IHRoZSBzYW1lIHRpbWVgLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocGFyc2VyLmluY29tcGF0aWJsZVRva2VucyA9PT0gXCIqXCIgJiYgdXNlZFRva2Vucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFxuICAgICAgICAgIGBUaGUgZm9ybWF0IHN0cmluZyBtdXN0bid0IGNvbnRhaW4gXFxgJHt0b2tlbn1cXGAgYW5kIGFueSBvdGhlciB0b2tlbiBhdCB0aGUgc2FtZSB0aW1lYCxcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgdXNlZFRva2Vucy5wdXNoKHsgdG9rZW46IGZpcnN0Q2hhcmFjdGVyLCBmdWxsVG9rZW46IHRva2VuIH0pO1xuXG4gICAgICBjb25zdCBwYXJzZVJlc3VsdCA9IHBhcnNlci5ydW4oXG4gICAgICAgIGRhdGVTdHIsXG4gICAgICAgIHRva2VuLFxuICAgICAgICBsb2NhbGUubWF0Y2gsXG4gICAgICAgIHN1YkZuT3B0aW9ucyxcbiAgICAgICk7XG5cbiAgICAgIGlmICghcGFyc2VSZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdEZyb20ocmVmZXJlbmNlRGF0ZSwgTmFOKTtcbiAgICAgIH1cblxuICAgICAgc2V0dGVycy5wdXNoKHBhcnNlUmVzdWx0LnNldHRlcik7XG5cbiAgICAgIGRhdGVTdHIgPSBwYXJzZVJlc3VsdC5yZXN0O1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZmlyc3RDaGFyYWN0ZXIubWF0Y2godW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHApKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFxuICAgICAgICAgIFwiRm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyIGBcIiArXG4gICAgICAgICAgICBmaXJzdENoYXJhY3RlciArXG4gICAgICAgICAgICBcImBcIixcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLy8gUmVwbGFjZSB0d28gc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgd2l0aCBvbmUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlclxuICAgICAgaWYgKHRva2VuID09PSBcIicnXCIpIHtcbiAgICAgICAgdG9rZW4gPSBcIidcIjtcbiAgICAgIH0gZWxzZSBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwiJ1wiKSB7XG4gICAgICAgIHRva2VuID0gY2xlYW5Fc2NhcGVkU3RyaW5nKHRva2VuKTtcbiAgICAgIH1cblxuICAgICAgLy8gQ3V0IHRva2VuIGZyb20gc3RyaW5nLCBvciwgaWYgc3RyaW5nIGRvZXNuJ3QgbWF0Y2ggdGhlIHRva2VuLCByZXR1cm4gSW52YWxpZCBEYXRlXG4gICAgICBpZiAoZGF0ZVN0ci5pbmRleE9mKHRva2VuKSA9PT0gMCkge1xuICAgICAgICBkYXRlU3RyID0gZGF0ZVN0ci5zbGljZSh0b2tlbi5sZW5ndGgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdEZyb20ocmVmZXJlbmNlRGF0ZSwgTmFOKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBDaGVjayBpZiB0aGUgcmVtYWluaW5nIGlucHV0IGNvbnRhaW5zIHNvbWV0aGluZyBvdGhlciB0aGFuIHdoaXRlc3BhY2VcbiAgaWYgKGRhdGVTdHIubGVuZ3RoID4gMCAmJiBub3RXaGl0ZXNwYWNlUmVnRXhwLnRlc3QoZGF0ZVN0cikpIHtcbiAgICByZXR1cm4gY29uc3RydWN0RnJvbShyZWZlcmVuY2VEYXRlLCBOYU4pO1xuICB9XG5cbiAgY29uc3QgdW5pcXVlUHJpb3JpdHlTZXR0ZXJzID0gc2V0dGVyc1xuICAgIC5tYXAoKHNldHRlcikgPT4gc2V0dGVyLnByaW9yaXR5KVxuICAgIC5zb3J0KChhLCBiKSA9PiBiIC0gYSlcbiAgICAuZmlsdGVyKChwcmlvcml0eSwgaW5kZXgsIGFycmF5KSA9PiBhcnJheS5pbmRleE9mKHByaW9yaXR5KSA9PT0gaW5kZXgpXG4gICAgLm1hcCgocHJpb3JpdHkpID0+XG4gICAgICBzZXR0ZXJzXG4gICAgICAgIC5maWx0ZXIoKHNldHRlcikgPT4gc2V0dGVyLnByaW9yaXR5ID09PSBwcmlvcml0eSlcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIuc3ViUHJpb3JpdHkgLSBhLnN1YlByaW9yaXR5KSxcbiAgICApXG4gICAgLm1hcCgoc2V0dGVyQXJyYXkpID0+IHNldHRlckFycmF5WzBdKTtcblxuICBsZXQgZGF0ZSA9IHRvRGF0ZShyZWZlcmVuY2VEYXRlKTtcblxuICBpZiAoaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgcmV0dXJuIGNvbnN0cnVjdEZyb20ocmVmZXJlbmNlRGF0ZSwgTmFOKTtcbiAgfVxuXG4gIGNvbnN0IGZsYWdzID0ge307XG4gIGZvciAoY29uc3Qgc2V0dGVyIG9mIHVuaXF1ZVByaW9yaXR5U2V0dGVycykge1xuICAgIGlmICghc2V0dGVyLnZhbGlkYXRlKGRhdGUsIHN1YkZuT3B0aW9ucykpIHtcbiAgICAgIHJldHVybiBjb25zdHJ1Y3RGcm9tKHJlZmVyZW5jZURhdGUsIE5hTik7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gc2V0dGVyLnNldChkYXRlLCBmbGFncywgc3ViRm5PcHRpb25zKTtcbiAgICAvLyBSZXN1bHQgaXMgdHVwbGUgKGRhdGUsIGZsYWdzKVxuICAgIGlmIChBcnJheS5pc0FycmF5KHJlc3VsdCkpIHtcbiAgICAgIGRhdGUgPSByZXN1bHRbMF07XG4gICAgICBPYmplY3QuYXNzaWduKGZsYWdzLCByZXN1bHRbMV0pO1xuICAgICAgLy8gUmVzdWx0IGlzIGRhdGVcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZSA9IHJlc3VsdDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uc3RydWN0RnJvbShyZWZlcmVuY2VEYXRlLCBkYXRlKTtcbn1cblxuZnVuY3Rpb24gY2xlYW5Fc2NhcGVkU3RyaW5nKGlucHV0KSB7XG4gIHJldHVybiBpbnB1dC5tYXRjaChlc2NhcGVkU3RyaW5nUmVnRXhwKVsxXS5yZXBsYWNlKGRvdWJsZVF1b3RlUmVnRXhwLCBcIidcIik7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgcGFyc2U7XG4iLCJpbXBvcnQgeyBWYWx1ZVNldHRlciB9IGZyb20gXCIuL1NldHRlci5tanNcIjtcblxuZXhwb3J0IGNsYXNzIFBhcnNlciB7XG4gIHJ1bihkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gsIG9wdGlvbnMpIHtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLnBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCwgb3B0aW9ucyk7XG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzZXR0ZXI6IG5ldyBWYWx1ZVNldHRlcihcbiAgICAgICAgcmVzdWx0LnZhbHVlLFxuICAgICAgICB0aGlzLnZhbGlkYXRlLFxuICAgICAgICB0aGlzLnNldCxcbiAgICAgICAgdGhpcy5wcmlvcml0eSxcbiAgICAgICAgdGhpcy5zdWJQcmlvcml0eSxcbiAgICAgICksXG4gICAgICByZXN0OiByZXN1bHQucmVzdCxcbiAgICB9O1xuICB9XG5cbiAgdmFsaWRhdGUoX3V0Y0RhdGUsIF92YWx1ZSwgX29wdGlvbnMpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgdHJhbnNwb3NlIH0gZnJvbSBcIi4uLy4uL3RyYW5zcG9zZS5tanNcIjtcbmltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi4vLi4vY29uc3RydWN0RnJvbS5tanNcIjtcblxuY29uc3QgVElNRVpPTkVfVU5JVF9QUklPUklUWSA9IDEwO1xuXG5leHBvcnQgY2xhc3MgU2V0dGVyIHtcbiAgc3ViUHJpb3JpdHkgPSAwO1xuXG4gIHZhbGlkYXRlKF91dGNEYXRlLCBfb3B0aW9ucykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWYWx1ZVNldHRlciBleHRlbmRzIFNldHRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHZhbHVlLFxuXG4gICAgdmFsaWRhdGVWYWx1ZSxcblxuICAgIHNldFZhbHVlLFxuXG4gICAgcHJpb3JpdHksXG4gICAgc3ViUHJpb3JpdHksXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMudmFsaWRhdGVWYWx1ZSA9IHZhbGlkYXRlVmFsdWU7XG4gICAgdGhpcy5zZXRWYWx1ZSA9IHNldFZhbHVlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICBpZiAoc3ViUHJpb3JpdHkpIHtcbiAgICAgIHRoaXMuc3ViUHJpb3JpdHkgPSBzdWJQcmlvcml0eTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZShkYXRlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdGVWYWx1ZShkYXRlLCB0aGlzLnZhbHVlLCBvcHRpb25zKTtcbiAgfVxuXG4gIHNldChkYXRlLCBmbGFncywgb3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLnNldFZhbHVlKGRhdGUsIGZsYWdzLCB0aGlzLnZhbHVlLCBvcHRpb25zKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0ZVRvU3lzdGVtVGltZXpvbmVTZXR0ZXIgZXh0ZW5kcyBTZXR0ZXIge1xuICBwcmlvcml0eSA9IFRJTUVaT05FX1VOSVRfUFJJT1JJVFk7XG4gIHN1YlByaW9yaXR5ID0gLTE7XG4gIHNldChkYXRlLCBmbGFncykge1xuICAgIGlmIChmbGFncy50aW1lc3RhbXBJc1NldCkgcmV0dXJuIGRhdGU7XG4gICAgcmV0dXJuIGNvbnN0cnVjdEZyb20oZGF0ZSwgdHJhbnNwb3NlKGRhdGUsIERhdGUpKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IG51bWVyaWNQYXR0ZXJucyA9IHtcbiAgbW9udGg6IC9eKDFbMC0yXXwwP1xcZCkvLCAvLyAwIHRvIDEyXG4gIGRhdGU6IC9eKDNbMC0xXXxbMC0yXT9cXGQpLywgLy8gMCB0byAzMVxuICBkYXlPZlllYXI6IC9eKDM2WzAtNl18M1swLTVdXFxkfFswLTJdP1xcZD9cXGQpLywgLy8gMCB0byAzNjZcbiAgd2VlazogL14oNVswLTNdfFswLTRdP1xcZCkvLCAvLyAwIHRvIDUzXG4gIGhvdXIyM2g6IC9eKDJbMC0zXXxbMC0xXT9cXGQpLywgLy8gMCB0byAyM1xuICBob3VyMjRoOiAvXigyWzAtNF18WzAtMV0/XFxkKS8sIC8vIDAgdG8gMjRcbiAgaG91cjExaDogL14oMVswLTFdfDA/XFxkKS8sIC8vIDAgdG8gMTFcbiAgaG91cjEyaDogL14oMVswLTJdfDA/XFxkKS8sIC8vIDAgdG8gMTJcbiAgbWludXRlOiAvXlswLTVdP1xcZC8sIC8vIDAgdG8gNTlcbiAgc2Vjb25kOiAvXlswLTVdP1xcZC8sIC8vIDAgdG8gNTlcblxuICBzaW5nbGVEaWdpdDogL15cXGQvLCAvLyAwIHRvIDlcbiAgdHdvRGlnaXRzOiAvXlxcZHsxLDJ9LywgLy8gMCB0byA5OVxuICB0aHJlZURpZ2l0czogL15cXGR7MSwzfS8sIC8vIDAgdG8gOTk5XG4gIGZvdXJEaWdpdHM6IC9eXFxkezEsNH0vLCAvLyAwIHRvIDk5OTlcblxuICBhbnlEaWdpdHNTaWduZWQ6IC9eLT9cXGQrLyxcbiAgc2luZ2xlRGlnaXRTaWduZWQ6IC9eLT9cXGQvLCAvLyAwIHRvIDksIC0wIHRvIC05XG4gIHR3b0RpZ2l0c1NpZ25lZDogL14tP1xcZHsxLDJ9LywgLy8gMCB0byA5OSwgLTAgdG8gLTk5XG4gIHRocmVlRGlnaXRzU2lnbmVkOiAvXi0/XFxkezEsM30vLCAvLyAwIHRvIDk5OSwgLTAgdG8gLTk5OVxuICBmb3VyRGlnaXRzU2lnbmVkOiAvXi0/XFxkezEsNH0vLCAvLyAwIHRvIDk5OTksIC0wIHRvIC05OTk5XG59O1xuXG5leHBvcnQgY29uc3QgdGltZXpvbmVQYXR0ZXJucyA9IHtcbiAgYmFzaWNPcHRpb25hbE1pbnV0ZXM6IC9eKFsrLV0pKFxcZHsyfSkoXFxkezJ9KT98Wi8sXG4gIGJhc2ljOiAvXihbKy1dKShcXGR7Mn0pKFxcZHsyfSl8Wi8sXG4gIGJhc2ljT3B0aW9uYWxTZWNvbmRzOiAvXihbKy1dKShcXGR7Mn0pKFxcZHsyfSkoKFxcZHsyfSkpP3xaLyxcbiAgZXh0ZW5kZWQ6IC9eKFsrLV0pKFxcZHsyfSk6KFxcZHsyfSl8Wi8sXG4gIGV4dGVuZGVkT3B0aW9uYWxTZWNvbmRzOiAvXihbKy1dKShcXGR7Mn0pOihcXGR7Mn0pKDooXFxkezJ9KSk/fFovLFxufTtcbiIsImltcG9ydCB7IEVyYVBhcnNlciB9IGZyb20gXCIuL3BhcnNlcnMvRXJhUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgWWVhclBhcnNlciB9IGZyb20gXCIuL3BhcnNlcnMvWWVhclBhcnNlci5tanNcIjtcbmltcG9ydCB7IExvY2FsV2Vla1llYXJQYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL0xvY2FsV2Vla1llYXJQYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBJU09XZWVrWWVhclBhcnNlciB9IGZyb20gXCIuL3BhcnNlcnMvSVNPV2Vla1llYXJQYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBFeHRlbmRlZFllYXJQYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL0V4dGVuZGVkWWVhclBhcnNlci5tanNcIjtcbmltcG9ydCB7IFF1YXJ0ZXJQYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL1F1YXJ0ZXJQYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBTdGFuZEFsb25lUXVhcnRlclBhcnNlciB9IGZyb20gXCIuL3BhcnNlcnMvU3RhbmRBbG9uZVF1YXJ0ZXJQYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBNb250aFBhcnNlciB9IGZyb20gXCIuL3BhcnNlcnMvTW9udGhQYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBTdGFuZEFsb25lTW9udGhQYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL1N0YW5kQWxvbmVNb250aFBhcnNlci5tanNcIjtcbmltcG9ydCB7IExvY2FsV2Vla1BhcnNlciB9IGZyb20gXCIuL3BhcnNlcnMvTG9jYWxXZWVrUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgSVNPV2Vla1BhcnNlciB9IGZyb20gXCIuL3BhcnNlcnMvSVNPV2Vla1BhcnNlci5tanNcIjtcbmltcG9ydCB7IERhdGVQYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL0RhdGVQYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBEYXlPZlllYXJQYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL0RheU9mWWVhclBhcnNlci5tanNcIjtcbmltcG9ydCB7IERheVBhcnNlciB9IGZyb20gXCIuL3BhcnNlcnMvRGF5UGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgTG9jYWxEYXlQYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL0xvY2FsRGF5UGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgU3RhbmRBbG9uZUxvY2FsRGF5UGFyc2VyIH0gZnJvbSBcIi4vcGFyc2Vycy9TdGFuZEFsb25lTG9jYWxEYXlQYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBJU09EYXlQYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL0lTT0RheVBhcnNlci5tanNcIjtcbmltcG9ydCB7IEFNUE1QYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL0FNUE1QYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBBTVBNTWlkbmlnaHRQYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL0FNUE1NaWRuaWdodFBhcnNlci5tanNcIjtcbmltcG9ydCB7IERheVBlcmlvZFBhcnNlciB9IGZyb20gXCIuL3BhcnNlcnMvRGF5UGVyaW9kUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgSG91cjF0bzEyUGFyc2VyIH0gZnJvbSBcIi4vcGFyc2Vycy9Ib3VyMXRvMTJQYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBIb3VyMHRvMjNQYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL0hvdXIwdG8yM1BhcnNlci5tanNcIjtcbmltcG9ydCB7IEhvdXIwVG8xMVBhcnNlciB9IGZyb20gXCIuL3BhcnNlcnMvSG91cjBUbzExUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgSG91cjFUbzI0UGFyc2VyIH0gZnJvbSBcIi4vcGFyc2Vycy9Ib3VyMVRvMjRQYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBNaW51dGVQYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL01pbnV0ZVBhcnNlci5tanNcIjtcbmltcG9ydCB7IFNlY29uZFBhcnNlciB9IGZyb20gXCIuL3BhcnNlcnMvU2Vjb25kUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgRnJhY3Rpb25PZlNlY29uZFBhcnNlciB9IGZyb20gXCIuL3BhcnNlcnMvRnJhY3Rpb25PZlNlY29uZFBhcnNlci5tanNcIjtcbmltcG9ydCB7IElTT1RpbWV6b25lV2l0aFpQYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL0lTT1RpbWV6b25lV2l0aFpQYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBJU09UaW1lem9uZVBhcnNlciB9IGZyb20gXCIuL3BhcnNlcnMvSVNPVGltZXpvbmVQYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBUaW1lc3RhbXBTZWNvbmRzUGFyc2VyIH0gZnJvbSBcIi4vcGFyc2Vycy9UaW1lc3RhbXBTZWNvbmRzUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgVGltZXN0YW1wTWlsbGlzZWNvbmRzUGFyc2VyIH0gZnJvbSBcIi4vcGFyc2Vycy9UaW1lc3RhbXBNaWxsaXNlY29uZHNQYXJzZXIubWpzXCI7XG5cbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8IE1pbGxpc2Vjb25kcyBpbiBkYXkgICAgICAgICAgICB8XG4gKiB8ICBiICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICB8ICBCICB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICB8XG4gKiB8ICBjICB8IFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrICB8ICBDKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBlICB8IExvY2FsIGRheSBvZiB3ZWVrICAgICAgICAgICAgICB8ICBFICB8IERheSBvZiB3ZWVrICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBmICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBGKiB8IERheSBvZiB3ZWVrIGluIG1vbnRoICAgICAgICAgICB8XG4gKiB8ICBnKiB8IE1vZGlmaWVkIEp1bGlhbiBkYXkgICAgICAgICAgICB8ICBHICB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBpISB8IElTTyBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgICB8ICBJISB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICB8XG4gKiB8ICBqKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8ICBKKiB8IExvY2FsaXplZCBob3VyIHcvbyBkYXkgcGVyaW9kICB8XG4gKiB8ICBrICB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICB8ICBLICB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBsKiB8IChkZXByZWNhdGVkKSAgICAgICAgICAgICAgICAgICB8ICBMICB8IFN0YW5kLWFsb25lIG1vbnRoICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBuICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBOICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBvISB8IE9yZGluYWwgbnVtYmVyIG1vZGlmaWVyICAgICAgICB8ICBPKiB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICB8XG4gKiB8ICBwICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBQICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBxICB8IFN0YW5kLWFsb25lIHF1YXJ0ZXIgICAgICAgICAgICB8ICBRICB8IFF1YXJ0ZXIgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICByKiB8IFJlbGF0ZWQgR3JlZ29yaWFuIHllYXIgICAgICAgICB8ICBSISB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB0ISB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICB8ICBUISB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICB8XG4gKiB8ICB1ICB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICB8ICBVKiB8IEN5Y2xpYyB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICB2KiB8IFRpbWV6b25lIChnZW5lcmljIG5vbi1sb2NhdC4pICB8ICBWKiB8IFRpbWV6b25lIChsb2NhdGlvbikgICAgICAgICAgICB8XG4gKiB8ICB3ICB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICB8ICBXKiB8IFdlZWsgb2YgbW9udGggICAgICAgICAgICAgICAgICB8XG4gKiB8ICB4ICB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICB8ICBYICB8IFRpbWV6b25lIChJU08tODYwMSkgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICB8XG4gKiB8ICB6KiB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSB8ICBaKiB8IFRpbWV6b25lIChhbGlhc2VzKSAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICEgYXJlIG5vbi1zdGFuZGFyZCwgYnV0IGltcGxlbWVudGVkIGJ5IGRhdGUtZm5zOlxuICogLSBgb2AgbW9kaWZpZXMgdGhlIHByZXZpb3VzIHRva2VuIHRvIHR1cm4gaXQgaW50byBhbiBvcmRpbmFsIChzZWUgYHBhcnNlYCBkb2NzKVxuICogLSBgaWAgaXMgSVNPIGRheSBvZiB3ZWVrLiBGb3IgYGlgIGFuZCBgaWlgIGlzIHJldHVybnMgbnVtZXJpYyBJU08gd2VlayBkYXlzLFxuICogICBpLmUuIDcgZm9yIFN1bmRheSwgMSBmb3IgTW9uZGF5LCBldGMuXG4gKiAtIGBJYCBpcyBJU08gd2VlayBvZiB5ZWFyLCBhcyBvcHBvc2VkIHRvIGB3YCB3aGljaCBpcyBsb2NhbCB3ZWVrIG9mIHllYXIuXG4gKiAtIGBSYCBpcyBJU08gd2Vlay1udW1iZXJpbmcgeWVhciwgYXMgb3Bwb3NlZCB0byBgWWAgd2hpY2ggaXMgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqICAgYFJgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgSWAgYW5kIGBpYFxuICogICBmb3IgdW5pdmVyc2FsIElTTyB3ZWVrLW51bWJlcmluZyBkYXRlLCB3aGVyZWFzXG4gKiAgIGBZYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHdgIGFuZCBgZWBcbiAqICAgZm9yIHdlZWstbnVtYmVyaW5nIGRhdGUgc3BlY2lmaWMgdG8gdGhlIGxvY2FsZS5cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgLS0gSXQncyBvaywgd2Ugd2FudCBhbnkgaGVyZVxuZXhwb3J0IGNvbnN0IHBhcnNlcnMgPSB7XG4gIEc6IG5ldyBFcmFQYXJzZXIoKSxcbiAgeTogbmV3IFllYXJQYXJzZXIoKSxcbiAgWTogbmV3IExvY2FsV2Vla1llYXJQYXJzZXIoKSxcbiAgUjogbmV3IElTT1dlZWtZZWFyUGFyc2VyKCksXG4gIHU6IG5ldyBFeHRlbmRlZFllYXJQYXJzZXIoKSxcbiAgUTogbmV3IFF1YXJ0ZXJQYXJzZXIoKSxcbiAgcTogbmV3IFN0YW5kQWxvbmVRdWFydGVyUGFyc2VyKCksXG4gIE06IG5ldyBNb250aFBhcnNlcigpLFxuICBMOiBuZXcgU3RhbmRBbG9uZU1vbnRoUGFyc2VyKCksXG4gIHc6IG5ldyBMb2NhbFdlZWtQYXJzZXIoKSxcbiAgSTogbmV3IElTT1dlZWtQYXJzZXIoKSxcbiAgZDogbmV3IERhdGVQYXJzZXIoKSxcbiAgRDogbmV3IERheU9mWWVhclBhcnNlcigpLFxuICBFOiBuZXcgRGF5UGFyc2VyKCksXG4gIGU6IG5ldyBMb2NhbERheVBhcnNlcigpLFxuICBjOiBuZXcgU3RhbmRBbG9uZUxvY2FsRGF5UGFyc2VyKCksXG4gIGk6IG5ldyBJU09EYXlQYXJzZXIoKSxcbiAgYTogbmV3IEFNUE1QYXJzZXIoKSxcbiAgYjogbmV3IEFNUE1NaWRuaWdodFBhcnNlcigpLFxuICBCOiBuZXcgRGF5UGVyaW9kUGFyc2VyKCksXG4gIGg6IG5ldyBIb3VyMXRvMTJQYXJzZXIoKSxcbiAgSDogbmV3IEhvdXIwdG8yM1BhcnNlcigpLFxuICBLOiBuZXcgSG91cjBUbzExUGFyc2VyKCksXG4gIGs6IG5ldyBIb3VyMVRvMjRQYXJzZXIoKSxcbiAgbTogbmV3IE1pbnV0ZVBhcnNlcigpLFxuICBzOiBuZXcgU2Vjb25kUGFyc2VyKCksXG4gIFM6IG5ldyBGcmFjdGlvbk9mU2Vjb25kUGFyc2VyKCksXG4gIFg6IG5ldyBJU09UaW1lem9uZVdpdGhaUGFyc2VyKCksXG4gIHg6IG5ldyBJU09UaW1lem9uZVBhcnNlcigpLFxuICB0OiBuZXcgVGltZXN0YW1wU2Vjb25kc1BhcnNlcigpLFxuICBUOiBuZXcgVGltZXN0YW1wTWlsbGlzZWNvbmRzUGFyc2VyKCksXG59O1xuIiwiaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5tanNcIjtcbmltcG9ydCB7IGRheVBlcmlvZEVudW1Ub0hvdXJzIH0gZnJvbSBcIi4uL3V0aWxzLm1qc1wiO1xuXG5leHBvcnQgY2xhc3MgQU1QTU1pZG5pZ2h0UGFyc2VyIGV4dGVuZHMgUGFyc2VyIHtcbiAgcHJpb3JpdHkgPSA4MDtcblxuICBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiYlwiOlxuICAgICAgY2FzZSBcImJiXCI6XG4gICAgICBjYXNlIFwiYmJiXCI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgbWF0Y2guZGF5UGVyaW9kKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KSB8fFxuICAgICAgICAgIG1hdGNoLmRheVBlcmlvZChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG5cbiAgICAgIGNhc2UgXCJiYmJiYlwiOlxuICAgICAgICByZXR1cm4gbWF0Y2guZGF5UGVyaW9kKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiYmJiYlwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSkgfHxcbiAgICAgICAgICBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pIHx8XG4gICAgICAgICAgbWF0Y2guZGF5UGVyaW9kKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgIGRhdGUuc2V0SG91cnMoZGF5UGVyaW9kRW51bVRvSG91cnModmFsdWUpLCAwLCAwLCAwKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGluY29tcGF0aWJsZVRva2VucyA9IFtcImFcIiwgXCJCXCIsIFwiSFwiLCBcImtcIiwgXCJ0XCIsIFwiVFwiXTtcbn1cbiIsImltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBkYXlQZXJpb2RFbnVtVG9Ib3VycyB9IGZyb20gXCIuLi91dGlscy5tanNcIjtcblxuZXhwb3J0IGNsYXNzIEFNUE1QYXJzZXIgZXh0ZW5kcyBQYXJzZXIge1xuICBwcmlvcml0eSA9IDgwO1xuXG4gIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJhXCI6XG4gICAgICBjYXNlIFwiYWFcIjpcbiAgICAgIGNhc2UgXCJhYWFcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pIHx8XG4gICAgICAgICAgbWF0Y2guZGF5UGVyaW9kKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgICAgY2FzZSBcImFhYWFhXCI6XG4gICAgICAgIHJldHVybiBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJhYWFhXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIG1hdGNoLmRheVBlcmlvZChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KSB8fFxuICAgICAgICAgIG1hdGNoLmRheVBlcmlvZChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSkgfHxcbiAgICAgICAgICBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgZGF0ZS5zZXRIb3VycyhkYXlQZXJpb2RFbnVtVG9Ib3Vycyh2YWx1ZSksIDAsIDAsIDApO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgaW5jb21wYXRpYmxlVG9rZW5zID0gW1wiYlwiLCBcIkJcIiwgXCJIXCIsIFwia1wiLCBcInRcIiwgXCJUXCJdO1xufVxuIiwiaW1wb3J0IHsgbnVtZXJpY1BhdHRlcm5zIH0gZnJvbSBcIi4uL2NvbnN0YW50cy5tanNcIjtcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIubWpzXCI7XG5pbXBvcnQge1xuICBpc0xlYXBZZWFySW5kZXgsXG4gIHBhcnNlTkRpZ2l0cyxcbiAgcGFyc2VOdW1lcmljUGF0dGVybixcbn0gZnJvbSBcIi4uL3V0aWxzLm1qc1wiO1xuXG5jb25zdCBEQVlTX0lOX01PTlRIID0gWzMxLCAyOCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdO1xuY29uc3QgREFZU19JTl9NT05USF9MRUFQX1lFQVIgPSBbXG4gIDMxLCAyOSwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzEsXG5dO1xuXG4vLyBEYXkgb2YgdGhlIG1vbnRoXG5leHBvcnQgY2xhc3MgRGF0ZVBhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIHByaW9yaXR5ID0gOTA7XG4gIHN1YlByaW9yaXR5ID0gMTtcblxuICBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiZFwiOlxuICAgICAgICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMuZGF0ZSwgZGF0ZVN0cmluZyk7XG4gICAgICBjYXNlIFwiZG9cIjpcbiAgICAgICAgcmV0dXJuIG1hdGNoLm9yZGluYWxOdW1iZXIoZGF0ZVN0cmluZywgeyB1bml0OiBcImRhdGVcIiB9KTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZShkYXRlLCB2YWx1ZSkge1xuICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgaXNMZWFwWWVhciA9IGlzTGVhcFllYXJJbmRleCh5ZWFyKTtcbiAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICBpZiAoaXNMZWFwWWVhcikge1xuICAgICAgcmV0dXJuIHZhbHVlID49IDEgJiYgdmFsdWUgPD0gREFZU19JTl9NT05USF9MRUFQX1lFQVJbbW9udGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmFsdWUgPj0gMSAmJiB2YWx1ZSA8PSBEQVlTX0lOX01PTlRIW21vbnRoXTtcbiAgICB9XG4gIH1cblxuICBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgIGRhdGUuc2V0RGF0ZSh2YWx1ZSk7XG4gICAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGluY29tcGF0aWJsZVRva2VucyA9IFtcbiAgICBcIllcIixcbiAgICBcIlJcIixcbiAgICBcInFcIixcbiAgICBcIlFcIixcbiAgICBcIndcIixcbiAgICBcIklcIixcbiAgICBcIkRcIixcbiAgICBcImlcIixcbiAgICBcImVcIixcbiAgICBcImNcIixcbiAgICBcInRcIixcbiAgICBcIlRcIixcbiAgXTtcbn1cbiIsImltcG9ydCB7IG51bWVyaWNQYXR0ZXJucyB9IGZyb20gXCIuLi9jb25zdGFudHMubWpzXCI7XG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHtcbiAgaXNMZWFwWWVhckluZGV4LFxuICBwYXJzZU5EaWdpdHMsXG4gIHBhcnNlTnVtZXJpY1BhdHRlcm4sXG59IGZyb20gXCIuLi91dGlscy5tanNcIjtcblxuZXhwb3J0IGNsYXNzIERheU9mWWVhclBhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIHByaW9yaXR5ID0gOTA7XG5cbiAgc3VicHJpb3JpdHkgPSAxO1xuXG4gIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJEXCI6XG4gICAgICBjYXNlIFwiRERcIjpcbiAgICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLmRheU9mWWVhciwgZGF0ZVN0cmluZyk7XG4gICAgICBjYXNlIFwiRG9cIjpcbiAgICAgICAgcmV0dXJuIG1hdGNoLm9yZGluYWxOdW1iZXIoZGF0ZVN0cmluZywgeyB1bml0OiBcImRhdGVcIiB9KTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZShkYXRlLCB2YWx1ZSkge1xuICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgaXNMZWFwWWVhciA9IGlzTGVhcFllYXJJbmRleCh5ZWFyKTtcbiAgICBpZiAoaXNMZWFwWWVhcikge1xuICAgICAgcmV0dXJuIHZhbHVlID49IDEgJiYgdmFsdWUgPD0gMzY2O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmFsdWUgPj0gMSAmJiB2YWx1ZSA8PSAzNjU7XG4gICAgfVxuICB9XG5cbiAgc2V0KGRhdGUsIF9mbGFncywgdmFsdWUpIHtcbiAgICBkYXRlLnNldE1vbnRoKDAsIHZhbHVlKTtcbiAgICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgaW5jb21wYXRpYmxlVG9rZW5zID0gW1xuICAgIFwiWVwiLFxuICAgIFwiUlwiLFxuICAgIFwicVwiLFxuICAgIFwiUVwiLFxuICAgIFwiTVwiLFxuICAgIFwiTFwiLFxuICAgIFwid1wiLFxuICAgIFwiSVwiLFxuICAgIFwiZFwiLFxuICAgIFwiRVwiLFxuICAgIFwiaVwiLFxuICAgIFwiZVwiLFxuICAgIFwiY1wiLFxuICAgIFwidFwiLFxuICAgIFwiVFwiLFxuICBdO1xufVxuIiwiaW1wb3J0IHsgc2V0RGF5IH0gZnJvbSBcIi4uLy4uLy4uL3NldERheS5tanNcIjtcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIubWpzXCI7XG5cbi8vIERheSBvZiB3ZWVrXG5leHBvcnQgY2xhc3MgRGF5UGFyc2VyIGV4dGVuZHMgUGFyc2VyIHtcbiAgcHJpb3JpdHkgPSA5MDtcblxuICBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgXCJFXCI6XG4gICAgICBjYXNlIFwiRUVcIjpcbiAgICAgIGNhc2UgXCJFRUVcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pIHx8XG4gICAgICAgICAgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHsgd2lkdGg6IFwic2hvcnRcIiwgY29udGV4dDogXCJmb3JtYXR0aW5nXCIgfSkgfHxcbiAgICAgICAgICBtYXRjaC5kYXkoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJuYXJyb3dcIiwgY29udGV4dDogXCJmb3JtYXR0aW5nXCIgfSlcbiAgICAgICAgKTtcblxuICAgICAgLy8gVFxuICAgICAgY2FzZSBcIkVFRUVFXCI6XG4gICAgICAgIHJldHVybiBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlIFwiRUVFRUVFXCI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHsgd2lkdGg6IFwic2hvcnRcIiwgY29udGV4dDogXCJmb3JtYXR0aW5nXCIgfSkgfHxcbiAgICAgICAgICBtYXRjaC5kYXkoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJuYXJyb3dcIiwgY29udGV4dDogXCJmb3JtYXR0aW5nXCIgfSlcbiAgICAgICAgKTtcblxuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcIkVFRUVcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHsgd2lkdGg6IFwid2lkZVwiLCBjb250ZXh0OiBcImZvcm1hdHRpbmdcIiB9KSB8fFxuICAgICAgICAgIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSkgfHxcbiAgICAgICAgICBtYXRjaC5kYXkoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJzaG9ydFwiLCBjb250ZXh0OiBcImZvcm1hdHRpbmdcIiB9KSB8fFxuICAgICAgICAgIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7IHdpZHRoOiBcIm5hcnJvd1wiLCBjb250ZXh0OiBcImZvcm1hdHRpbmdcIiB9KVxuICAgICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlKF9kYXRlLCB2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA+PSAwICYmIHZhbHVlIDw9IDY7XG4gIH1cblxuICBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgIGRhdGUgPSBzZXREYXkoZGF0ZSwgdmFsdWUsIG9wdGlvbnMpO1xuICAgIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuICBpbmNvbXBhdGlibGVUb2tlbnMgPSBbXCJEXCIsIFwiaVwiLCBcImVcIiwgXCJjXCIsIFwidFwiLCBcIlRcIl07XG59XG4iLCJpbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgZGF5UGVyaW9kRW51bVRvSG91cnMgfSBmcm9tIFwiLi4vdXRpbHMubWpzXCI7XG5cbi8vIGluIHRoZSBtb3JuaW5nLCBpbiB0aGUgYWZ0ZXJub29uLCBpbiB0aGUgZXZlbmluZywgYXQgbmlnaHRcbmV4cG9ydCBjbGFzcyBEYXlQZXJpb2RQYXJzZXIgZXh0ZW5kcyBQYXJzZXIge1xuICBwcmlvcml0eSA9IDgwO1xuXG4gIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJCXCI6XG4gICAgICBjYXNlIFwiQkJcIjpcbiAgICAgIGNhc2UgXCJCQkJcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pIHx8XG4gICAgICAgICAgbWF0Y2guZGF5UGVyaW9kKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgICAgY2FzZSBcIkJCQkJCXCI6XG4gICAgICAgIHJldHVybiBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJCQkJCXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIG1hdGNoLmRheVBlcmlvZChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KSB8fFxuICAgICAgICAgIG1hdGNoLmRheVBlcmlvZChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSkgfHxcbiAgICAgICAgICBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgZGF0ZS5zZXRIb3VycyhkYXlQZXJpb2RFbnVtVG9Ib3Vycyh2YWx1ZSksIDAsIDAsIDApO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgaW5jb21wYXRpYmxlVG9rZW5zID0gW1wiYVwiLCBcImJcIiwgXCJ0XCIsIFwiVFwiXTtcbn1cbiIsImltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIubWpzXCI7XG5cbmV4cG9ydCBjbGFzcyBFcmFQYXJzZXIgZXh0ZW5kcyBQYXJzZXIge1xuICBwcmlvcml0eSA9IDE0MDtcblxuICBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBBRCwgQkNcbiAgICAgIGNhc2UgXCJHXCI6XG4gICAgICBjYXNlIFwiR0dcIjpcbiAgICAgIGNhc2UgXCJHR0dcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBtYXRjaC5lcmEoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJhYmJyZXZpYXRlZFwiIH0pIHx8XG4gICAgICAgICAgbWF0Y2guZXJhKGRhdGVTdHJpbmcsIHsgd2lkdGg6IFwibmFycm93XCIgfSlcbiAgICAgICAgKTtcblxuICAgICAgLy8gQSwgQlxuICAgICAgY2FzZSBcIkdHR0dHXCI6XG4gICAgICAgIHJldHVybiBtYXRjaC5lcmEoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJuYXJyb3dcIiB9KTtcbiAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG4gICAgICBjYXNlIFwiR0dHR1wiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBtYXRjaC5lcmEoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJ3aWRlXCIgfSkgfHxcbiAgICAgICAgICBtYXRjaC5lcmEoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJhYmJyZXZpYXRlZFwiIH0pIHx8XG4gICAgICAgICAgbWF0Y2guZXJhKGRhdGVTdHJpbmcsIHsgd2lkdGg6IFwibmFycm93XCIgfSlcbiAgICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBzZXQoZGF0ZSwgZmxhZ3MsIHZhbHVlKSB7XG4gICAgZmxhZ3MuZXJhID0gdmFsdWU7XG4gICAgZGF0ZS5zZXRGdWxsWWVhcih2YWx1ZSwgMCwgMSk7XG4gICAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGluY29tcGF0aWJsZVRva2VucyA9IFtcIlJcIiwgXCJ1XCIsIFwidFwiLCBcIlRcIl07XG59XG4iLCJpbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgcGFyc2VORGlnaXRzU2lnbmVkIH0gZnJvbSBcIi4uL3V0aWxzLm1qc1wiO1xuXG5leHBvcnQgY2xhc3MgRXh0ZW5kZWRZZWFyUGFyc2VyIGV4dGVuZHMgUGFyc2VyIHtcbiAgcHJpb3JpdHkgPSAxMzA7XG5cbiAgcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4pIHtcbiAgICBpZiAodG9rZW4gPT09IFwidVwiKSB7XG4gICAgICByZXR1cm4gcGFyc2VORGlnaXRzU2lnbmVkKDQsIGRhdGVTdHJpbmcpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZU5EaWdpdHNTaWduZWQodG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgfVxuXG4gIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgZGF0ZS5zZXRGdWxsWWVhcih2YWx1ZSwgMCwgMSk7XG4gICAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGluY29tcGF0aWJsZVRva2VucyA9IFtcIkdcIiwgXCJ5XCIsIFwiWVwiLCBcIlJcIiwgXCJ3XCIsIFwiSVwiLCBcImlcIiwgXCJlXCIsIFwiY1wiLCBcInRcIiwgXCJUXCJdO1xufVxuIiwiaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5tanNcIjtcbmltcG9ydCB7IG1hcFZhbHVlLCBwYXJzZU5EaWdpdHMgfSBmcm9tIFwiLi4vdXRpbHMubWpzXCI7XG5cbmV4cG9ydCBjbGFzcyBGcmFjdGlvbk9mU2Vjb25kUGFyc2VyIGV4dGVuZHMgUGFyc2VyIHtcbiAgcHJpb3JpdHkgPSAzMDtcblxuICBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbikge1xuICAgIGNvbnN0IHZhbHVlQ2FsbGJhY2sgPSAodmFsdWUpID0+XG4gICAgICBNYXRoLnRydW5jKHZhbHVlICogTWF0aC5wb3coMTAsIC10b2tlbi5sZW5ndGggKyAzKSk7XG4gICAgcmV0dXJuIG1hcFZhbHVlKHBhcnNlTkRpZ2l0cyh0b2tlbi5sZW5ndGgsIGRhdGVTdHJpbmcpLCB2YWx1ZUNhbGxiYWNrKTtcbiAgfVxuXG4gIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgZGF0ZS5zZXRNaWxsaXNlY29uZHModmFsdWUpO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgaW5jb21wYXRpYmxlVG9rZW5zID0gW1widFwiLCBcIlRcIl07XG59XG4iLCJpbXBvcnQgeyBudW1lcmljUGF0dGVybnMgfSBmcm9tIFwiLi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5tanNcIjtcbmltcG9ydCB7IHBhcnNlTkRpZ2l0cywgcGFyc2VOdW1lcmljUGF0dGVybiB9IGZyb20gXCIuLi91dGlscy5tanNcIjtcblxuZXhwb3J0IGNsYXNzIEhvdXIwVG8xMVBhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIHByaW9yaXR5ID0gNzA7XG5cbiAgcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoKSB7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcIktcIjpcbiAgICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLmhvdXIxMWgsIGRhdGVTdHJpbmcpO1xuICAgICAgY2FzZSBcIktvXCI6XG4gICAgICAgIHJldHVybiBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHsgdW5pdDogXCJob3VyXCIgfSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gcGFyc2VORGlnaXRzKHRva2VuLmxlbmd0aCwgZGF0ZVN0cmluZyk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID49IDAgJiYgdmFsdWUgPD0gMTE7XG4gIH1cblxuICBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgIGNvbnN0IGlzUE0gPSBkYXRlLmdldEhvdXJzKCkgPj0gMTI7XG4gICAgaWYgKGlzUE0gJiYgdmFsdWUgPCAxMikge1xuICAgICAgZGF0ZS5zZXRIb3Vycyh2YWx1ZSArIDEyLCAwLCAwLCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZS5zZXRIb3Vycyh2YWx1ZSwgMCwgMCwgMCk7XG4gICAgfVxuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgaW5jb21wYXRpYmxlVG9rZW5zID0gW1wiaFwiLCBcIkhcIiwgXCJrXCIsIFwidFwiLCBcIlRcIl07XG59XG4iLCJpbXBvcnQgeyBudW1lcmljUGF0dGVybnMgfSBmcm9tIFwiLi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5tanNcIjtcbmltcG9ydCB7IHBhcnNlTkRpZ2l0cywgcGFyc2VOdW1lcmljUGF0dGVybiB9IGZyb20gXCIuLi91dGlscy5tanNcIjtcblxuZXhwb3J0IGNsYXNzIEhvdXIwdG8yM1BhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIHByaW9yaXR5ID0gNzA7XG5cbiAgcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoKSB7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcIkhcIjpcbiAgICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLmhvdXIyM2gsIGRhdGVTdHJpbmcpO1xuICAgICAgY2FzZSBcIkhvXCI6XG4gICAgICAgIHJldHVybiBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHsgdW5pdDogXCJob3VyXCIgfSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gcGFyc2VORGlnaXRzKHRva2VuLmxlbmd0aCwgZGF0ZVN0cmluZyk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID49IDAgJiYgdmFsdWUgPD0gMjM7XG4gIH1cblxuICBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgIGRhdGUuc2V0SG91cnModmFsdWUsIDAsIDAsIDApO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgaW5jb21wYXRpYmxlVG9rZW5zID0gW1wiYVwiLCBcImJcIiwgXCJoXCIsIFwiS1wiLCBcImtcIiwgXCJ0XCIsIFwiVFwiXTtcbn1cbiIsImltcG9ydCB7IG51bWVyaWNQYXR0ZXJucyB9IGZyb20gXCIuLi9jb25zdGFudHMubWpzXCI7XG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgcGFyc2VORGlnaXRzLCBwYXJzZU51bWVyaWNQYXR0ZXJuIH0gZnJvbSBcIi4uL3V0aWxzLm1qc1wiO1xuXG5leHBvcnQgY2xhc3MgSG91cjFUbzI0UGFyc2VyIGV4dGVuZHMgUGFyc2VyIHtcbiAgcHJpb3JpdHkgPSA3MDtcblxuICBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwia1wiOlxuICAgICAgICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMuaG91cjI0aCwgZGF0ZVN0cmluZyk7XG4gICAgICBjYXNlIFwia29cIjpcbiAgICAgICAgcmV0dXJuIG1hdGNoLm9yZGluYWxOdW1iZXIoZGF0ZVN0cmluZywgeyB1bml0OiBcImhvdXJcIiB9KTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZShfZGF0ZSwgdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPj0gMSAmJiB2YWx1ZSA8PSAyNDtcbiAgfVxuXG4gIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgY29uc3QgaG91cnMgPSB2YWx1ZSA8PSAyNCA/IHZhbHVlICUgMjQgOiB2YWx1ZTtcbiAgICBkYXRlLnNldEhvdXJzKGhvdXJzLCAwLCAwLCAwKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGluY29tcGF0aWJsZVRva2VucyA9IFtcImFcIiwgXCJiXCIsIFwiaFwiLCBcIkhcIiwgXCJLXCIsIFwidFwiLCBcIlRcIl07XG59XG4iLCJpbXBvcnQgeyBudW1lcmljUGF0dGVybnMgfSBmcm9tIFwiLi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5tanNcIjtcbmltcG9ydCB7IHBhcnNlTkRpZ2l0cywgcGFyc2VOdW1lcmljUGF0dGVybiB9IGZyb20gXCIuLi91dGlscy5tanNcIjtcblxuZXhwb3J0IGNsYXNzIEhvdXIxdG8xMlBhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIHByaW9yaXR5ID0gNzA7XG5cbiAgcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoKSB7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcImhcIjpcbiAgICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLmhvdXIxMmgsIGRhdGVTdHJpbmcpO1xuICAgICAgY2FzZSBcImhvXCI6XG4gICAgICAgIHJldHVybiBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHsgdW5pdDogXCJob3VyXCIgfSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gcGFyc2VORGlnaXRzKHRva2VuLmxlbmd0aCwgZGF0ZVN0cmluZyk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID49IDEgJiYgdmFsdWUgPD0gMTI7XG4gIH1cblxuICBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgIGNvbnN0IGlzUE0gPSBkYXRlLmdldEhvdXJzKCkgPj0gMTI7XG4gICAgaWYgKGlzUE0gJiYgdmFsdWUgPCAxMikge1xuICAgICAgZGF0ZS5zZXRIb3Vycyh2YWx1ZSArIDEyLCAwLCAwLCAwKTtcbiAgICB9IGVsc2UgaWYgKCFpc1BNICYmIHZhbHVlID09PSAxMikge1xuICAgICAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZS5zZXRIb3Vycyh2YWx1ZSwgMCwgMCwgMCk7XG4gICAgfVxuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgaW5jb21wYXRpYmxlVG9rZW5zID0gW1wiSFwiLCBcIktcIiwgXCJrXCIsIFwidFwiLCBcIlRcIl07XG59XG4iLCJpbXBvcnQgeyBzZXRJU09EYXkgfSBmcm9tIFwiLi4vLi4vLi4vc2V0SVNPRGF5Lm1qc1wiO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5tanNcIjtcbmltcG9ydCB7IG1hcFZhbHVlLCBwYXJzZU5EaWdpdHMgfSBmcm9tIFwiLi4vdXRpbHMubWpzXCI7XG5cbi8vIElTTyBkYXkgb2Ygd2Vla1xuZXhwb3J0IGNsYXNzIElTT0RheVBhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIHByaW9yaXR5ID0gOTA7XG5cbiAgcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoKSB7XG4gICAgY29uc3QgdmFsdWVDYWxsYmFjayA9ICh2YWx1ZSkgPT4ge1xuICAgICAgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgICAgIHJldHVybiA3O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAyXG4gICAgICBjYXNlIFwiaVwiOlxuICAgICAgY2FzZSBcImlpXCI6IC8vIDAyXG4gICAgICAgIHJldHVybiBwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgICAgIC8vIDJuZFxuICAgICAgY2FzZSBcImlvXCI6XG4gICAgICAgIHJldHVybiBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHsgdW5pdDogXCJkYXlcIiB9KTtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSBcImlpaVwiOlxuICAgICAgICByZXR1cm4gbWFwVmFsdWUoXG4gICAgICAgICAgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KSB8fFxuICAgICAgICAgICAgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgICAgd2lkdGg6IFwic2hvcnRcIixcbiAgICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgICB9KSB8fFxuICAgICAgICAgICAgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgdmFsdWVDYWxsYmFjayxcbiAgICAgICAgKTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgXCJpaWlpaVwiOlxuICAgICAgICByZXR1cm4gbWFwVmFsdWUoXG4gICAgICAgICAgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgdmFsdWVDYWxsYmFjayxcbiAgICAgICAgKTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlIFwiaWlpaWlpXCI6XG4gICAgICAgIHJldHVybiBtYXBWYWx1ZShcbiAgICAgICAgICBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwic2hvcnRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pIHx8XG4gICAgICAgICAgICBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICB2YWx1ZUNhbGxiYWNrLFxuICAgICAgICApO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcImlpaWlcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBtYXBWYWx1ZShcbiAgICAgICAgICBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSkgfHxcbiAgICAgICAgICAgIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgICAgfSkgfHxcbiAgICAgICAgICAgIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICAgIHdpZHRoOiBcInNob3J0XCIsXG4gICAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgICAgfSkgfHxcbiAgICAgICAgICAgIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIHZhbHVlQ2FsbGJhY2ssXG4gICAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID49IDEgJiYgdmFsdWUgPD0gNztcbiAgfVxuXG4gIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgZGF0ZSA9IHNldElTT0RheShkYXRlLCB2YWx1ZSk7XG4gICAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGluY29tcGF0aWJsZVRva2VucyA9IFtcbiAgICBcInlcIixcbiAgICBcIllcIixcbiAgICBcInVcIixcbiAgICBcInFcIixcbiAgICBcIlFcIixcbiAgICBcIk1cIixcbiAgICBcIkxcIixcbiAgICBcIndcIixcbiAgICBcImRcIixcbiAgICBcIkRcIixcbiAgICBcIkVcIixcbiAgICBcImVcIixcbiAgICBcImNcIixcbiAgICBcInRcIixcbiAgICBcIlRcIixcbiAgXTtcbn1cbiIsImltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RydWN0RnJvbS5tanNcIjtcbmltcG9ydCB7IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgfSBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzLm1qc1wiO1xuaW1wb3J0IHsgdGltZXpvbmVQYXR0ZXJucyB9IGZyb20gXCIuLi9jb25zdGFudHMubWpzXCI7XG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgcGFyc2VUaW1lem9uZVBhdHRlcm4gfSBmcm9tIFwiLi4vdXRpbHMubWpzXCI7XG5cbi8vIFRpbWV6b25lIChJU08tODYwMSlcbmV4cG9ydCBjbGFzcyBJU09UaW1lem9uZVBhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIHByaW9yaXR5ID0gMTA7XG5cbiAgcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4pIHtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwieFwiOlxuICAgICAgICByZXR1cm4gcGFyc2VUaW1lem9uZVBhdHRlcm4oXG4gICAgICAgICAgdGltZXpvbmVQYXR0ZXJucy5iYXNpY09wdGlvbmFsTWludXRlcyxcbiAgICAgICAgICBkYXRlU3RyaW5nLFxuICAgICAgICApO1xuICAgICAgY2FzZSBcInh4XCI6XG4gICAgICAgIHJldHVybiBwYXJzZVRpbWV6b25lUGF0dGVybih0aW1lem9uZVBhdHRlcm5zLmJhc2ljLCBkYXRlU3RyaW5nKTtcbiAgICAgIGNhc2UgXCJ4eHh4XCI6XG4gICAgICAgIHJldHVybiBwYXJzZVRpbWV6b25lUGF0dGVybihcbiAgICAgICAgICB0aW1lem9uZVBhdHRlcm5zLmJhc2ljT3B0aW9uYWxTZWNvbmRzLFxuICAgICAgICAgIGRhdGVTdHJpbmcsXG4gICAgICAgICk7XG4gICAgICBjYXNlIFwieHh4eHhcIjpcbiAgICAgICAgcmV0dXJuIHBhcnNlVGltZXpvbmVQYXR0ZXJuKFxuICAgICAgICAgIHRpbWV6b25lUGF0dGVybnMuZXh0ZW5kZWRPcHRpb25hbFNlY29uZHMsXG4gICAgICAgICAgZGF0ZVN0cmluZyxcbiAgICAgICAgKTtcbiAgICAgIGNhc2UgXCJ4eHhcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBwYXJzZVRpbWV6b25lUGF0dGVybih0aW1lem9uZVBhdHRlcm5zLmV4dGVuZGVkLCBkYXRlU3RyaW5nKTtcbiAgICB9XG4gIH1cblxuICBzZXQoZGF0ZSwgZmxhZ3MsIHZhbHVlKSB7XG4gICAgaWYgKGZsYWdzLnRpbWVzdGFtcElzU2V0KSByZXR1cm4gZGF0ZTtcbiAgICByZXR1cm4gY29uc3RydWN0RnJvbShcbiAgICAgIGRhdGUsXG4gICAgICBkYXRlLmdldFRpbWUoKSAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkgLSB2YWx1ZSxcbiAgICApO1xuICB9XG5cbiAgaW5jb21wYXRpYmxlVG9rZW5zID0gW1widFwiLCBcIlRcIiwgXCJYXCJdO1xufVxuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuLi8uLi8uLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuaW1wb3J0IHsgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyB9IGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMubWpzXCI7XG5pbXBvcnQgeyB0aW1lem9uZVBhdHRlcm5zIH0gZnJvbSBcIi4uL2NvbnN0YW50cy5tanNcIjtcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBwYXJzZVRpbWV6b25lUGF0dGVybiB9IGZyb20gXCIuLi91dGlscy5tanNcIjtcblxuLy8gVGltZXpvbmUgKElTTy04NjAxLiArMDA6MDAgaXMgYCdaJ2ApXG5leHBvcnQgY2xhc3MgSVNPVGltZXpvbmVXaXRoWlBhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIHByaW9yaXR5ID0gMTA7XG5cbiAgcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4pIHtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiWFwiOlxuICAgICAgICByZXR1cm4gcGFyc2VUaW1lem9uZVBhdHRlcm4oXG4gICAgICAgICAgdGltZXpvbmVQYXR0ZXJucy5iYXNpY09wdGlvbmFsTWludXRlcyxcbiAgICAgICAgICBkYXRlU3RyaW5nLFxuICAgICAgICApO1xuICAgICAgY2FzZSBcIlhYXCI6XG4gICAgICAgIHJldHVybiBwYXJzZVRpbWV6b25lUGF0dGVybih0aW1lem9uZVBhdHRlcm5zLmJhc2ljLCBkYXRlU3RyaW5nKTtcbiAgICAgIGNhc2UgXCJYWFhYXCI6XG4gICAgICAgIHJldHVybiBwYXJzZVRpbWV6b25lUGF0dGVybihcbiAgICAgICAgICB0aW1lem9uZVBhdHRlcm5zLmJhc2ljT3B0aW9uYWxTZWNvbmRzLFxuICAgICAgICAgIGRhdGVTdHJpbmcsXG4gICAgICAgICk7XG4gICAgICBjYXNlIFwiWFhYWFhcIjpcbiAgICAgICAgcmV0dXJuIHBhcnNlVGltZXpvbmVQYXR0ZXJuKFxuICAgICAgICAgIHRpbWV6b25lUGF0dGVybnMuZXh0ZW5kZWRPcHRpb25hbFNlY29uZHMsXG4gICAgICAgICAgZGF0ZVN0cmluZyxcbiAgICAgICAgKTtcbiAgICAgIGNhc2UgXCJYWFhcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBwYXJzZVRpbWV6b25lUGF0dGVybih0aW1lem9uZVBhdHRlcm5zLmV4dGVuZGVkLCBkYXRlU3RyaW5nKTtcbiAgICB9XG4gIH1cblxuICBzZXQoZGF0ZSwgZmxhZ3MsIHZhbHVlKSB7XG4gICAgaWYgKGZsYWdzLnRpbWVzdGFtcElzU2V0KSByZXR1cm4gZGF0ZTtcbiAgICByZXR1cm4gY29uc3RydWN0RnJvbShcbiAgICAgIGRhdGUsXG4gICAgICBkYXRlLmdldFRpbWUoKSAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkgLSB2YWx1ZSxcbiAgICApO1xuICB9XG5cbiAgaW5jb21wYXRpYmxlVG9rZW5zID0gW1widFwiLCBcIlRcIiwgXCJ4XCJdO1xufVxuIiwiaW1wb3J0IHsgc2V0SVNPV2VlayB9IGZyb20gXCIuLi8uLi8uLi9zZXRJU09XZWVrLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZklTT1dlZWsgfSBmcm9tIFwiLi4vLi4vLi4vc3RhcnRPZklTT1dlZWsubWpzXCI7XG5pbXBvcnQgeyBudW1lcmljUGF0dGVybnMgfSBmcm9tIFwiLi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5tanNcIjtcbmltcG9ydCB7IHBhcnNlTkRpZ2l0cywgcGFyc2VOdW1lcmljUGF0dGVybiB9IGZyb20gXCIuLi91dGlscy5tanNcIjtcblxuLy8gSVNPIHdlZWsgb2YgeWVhclxuZXhwb3J0IGNsYXNzIElTT1dlZWtQYXJzZXIgZXh0ZW5kcyBQYXJzZXIge1xuICBwcmlvcml0eSA9IDEwMDtcblxuICBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiSVwiOlxuICAgICAgICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMud2VlaywgZGF0ZVN0cmluZyk7XG4gICAgICBjYXNlIFwiSW9cIjpcbiAgICAgICAgcmV0dXJuIG1hdGNoLm9yZGluYWxOdW1iZXIoZGF0ZVN0cmluZywgeyB1bml0OiBcIndlZWtcIiB9KTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZShfZGF0ZSwgdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPj0gMSAmJiB2YWx1ZSA8PSA1MztcbiAgfVxuXG4gIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHN0YXJ0T2ZJU09XZWVrKHNldElTT1dlZWsoZGF0ZSwgdmFsdWUpKTtcbiAgfVxuXG4gIGluY29tcGF0aWJsZVRva2VucyA9IFtcbiAgICBcInlcIixcbiAgICBcIllcIixcbiAgICBcInVcIixcbiAgICBcInFcIixcbiAgICBcIlFcIixcbiAgICBcIk1cIixcbiAgICBcIkxcIixcbiAgICBcIndcIixcbiAgICBcImRcIixcbiAgICBcIkRcIixcbiAgICBcImVcIixcbiAgICBcImNcIixcbiAgICBcInRcIixcbiAgICBcIlRcIixcbiAgXTtcbn1cbiIsImltcG9ydCB7IHN0YXJ0T2ZJU09XZWVrIH0gZnJvbSBcIi4uLy4uLy4uL3N0YXJ0T2ZJU09XZWVrLm1qc1wiO1xuaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuLi8uLi8uLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5tanNcIjtcbmltcG9ydCB7IHBhcnNlTkRpZ2l0c1NpZ25lZCB9IGZyb20gXCIuLi91dGlscy5tanNcIjtcblxuLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbmV4cG9ydCBjbGFzcyBJU09XZWVrWWVhclBhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIHByaW9yaXR5ID0gMTMwO1xuXG4gIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuKSB7XG4gICAgaWYgKHRva2VuID09PSBcIlJcIikge1xuICAgICAgcmV0dXJuIHBhcnNlTkRpZ2l0c1NpZ25lZCg0LCBkYXRlU3RyaW5nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VORGlnaXRzU2lnbmVkKHRva2VuLmxlbmd0aCwgZGF0ZVN0cmluZyk7XG4gIH1cblxuICBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgIGNvbnN0IGZpcnN0V2Vla09mWWVhciA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gICAgZmlyc3RXZWVrT2ZZZWFyLnNldEZ1bGxZZWFyKHZhbHVlLCAwLCA0KTtcbiAgICBmaXJzdFdlZWtPZlllYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgcmV0dXJuIHN0YXJ0T2ZJU09XZWVrKGZpcnN0V2Vla09mWWVhcik7XG4gIH1cblxuICBpbmNvbXBhdGlibGVUb2tlbnMgPSBbXG4gICAgXCJHXCIsXG4gICAgXCJ5XCIsXG4gICAgXCJZXCIsXG4gICAgXCJ1XCIsXG4gICAgXCJRXCIsXG4gICAgXCJxXCIsXG4gICAgXCJNXCIsXG4gICAgXCJMXCIsXG4gICAgXCJ3XCIsXG4gICAgXCJkXCIsXG4gICAgXCJEXCIsXG4gICAgXCJlXCIsXG4gICAgXCJjXCIsXG4gICAgXCJ0XCIsXG4gICAgXCJUXCIsXG4gIF07XG59XG4iLCJpbXBvcnQgeyBzZXREYXkgfSBmcm9tIFwiLi4vLi4vLi4vc2V0RGF5Lm1qc1wiO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5tanNcIjtcbmltcG9ydCB7IG1hcFZhbHVlLCBwYXJzZU5EaWdpdHMgfSBmcm9tIFwiLi4vdXRpbHMubWpzXCI7XG5cbi8vIExvY2FsIGRheSBvZiB3ZWVrXG5leHBvcnQgY2xhc3MgTG9jYWxEYXlQYXJzZXIgZXh0ZW5kcyBQYXJzZXIge1xuICBwcmlvcml0eSA9IDkwO1xuICBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gsIG9wdGlvbnMpIHtcbiAgICBjb25zdCB2YWx1ZUNhbGxiYWNrID0gKHZhbHVlKSA9PiB7XG4gICAgICAvLyBXZSB3YW50IGhlcmUgZmxvb3IgaW5zdGVhZCBvZiB0cnVuYywgc28gd2UgZ2V0IC03IGZvciB2YWx1ZSAwIGluc3RlYWQgb2YgMFxuICAgICAgY29uc3Qgd2hvbGVXZWVrRGF5cyA9IE1hdGguZmxvb3IoKHZhbHVlIC0gMSkgLyA3KSAqIDc7XG4gICAgICByZXR1cm4gKCh2YWx1ZSArIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgNikgJSA3KSArIHdob2xlV2Vla0RheXM7XG4gICAgfTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDNcbiAgICAgIGNhc2UgXCJlXCI6XG4gICAgICBjYXNlIFwiZWVcIjogLy8gMDNcbiAgICAgICAgcmV0dXJuIG1hcFZhbHVlKHBhcnNlTkRpZ2l0cyh0b2tlbi5sZW5ndGgsIGRhdGVTdHJpbmcpLCB2YWx1ZUNhbGxiYWNrKTtcbiAgICAgIC8vIDNyZFxuICAgICAgY2FzZSBcImVvXCI6XG4gICAgICAgIHJldHVybiBtYXBWYWx1ZShcbiAgICAgICAgICBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHVuaXQ6IFwiZGF5XCIsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgdmFsdWVDYWxsYmFjayxcbiAgICAgICAgKTtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSBcImVlZVwiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSkgfHxcbiAgICAgICAgICBtYXRjaC5kYXkoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJzaG9ydFwiLCBjb250ZXh0OiBcImZvcm1hdHRpbmdcIiB9KSB8fFxuICAgICAgICAgIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7IHdpZHRoOiBcIm5hcnJvd1wiLCBjb250ZXh0OiBcImZvcm1hdHRpbmdcIiB9KVxuICAgICAgICApO1xuXG4gICAgICAvLyBUXG4gICAgICBjYXNlIFwiZWVlZWVcIjpcbiAgICAgICAgcmV0dXJuIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgXCJlZWVlZWVcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBtYXRjaC5kYXkoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJzaG9ydFwiLCBjb250ZXh0OiBcImZvcm1hdHRpbmdcIiB9KSB8fFxuICAgICAgICAgIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7IHdpZHRoOiBcIm5hcnJvd1wiLCBjb250ZXh0OiBcImZvcm1hdHRpbmdcIiB9KVxuICAgICAgICApO1xuXG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlIFwiZWVlZVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBtYXRjaC5kYXkoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJ3aWRlXCIsIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiIH0pIHx8XG4gICAgICAgICAgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KSB8fFxuICAgICAgICAgIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7IHdpZHRoOiBcInNob3J0XCIsIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiIH0pIHx8XG4gICAgICAgICAgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHsgd2lkdGg6IFwibmFycm93XCIsIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiIH0pXG4gICAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID49IDAgJiYgdmFsdWUgPD0gNjtcbiAgfVxuXG4gIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgZGF0ZSA9IHNldERheShkYXRlLCB2YWx1ZSwgb3B0aW9ucyk7XG4gICAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGluY29tcGF0aWJsZVRva2VucyA9IFtcbiAgICBcInlcIixcbiAgICBcIlJcIixcbiAgICBcInVcIixcbiAgICBcInFcIixcbiAgICBcIlFcIixcbiAgICBcIk1cIixcbiAgICBcIkxcIixcbiAgICBcIklcIixcbiAgICBcImRcIixcbiAgICBcIkRcIixcbiAgICBcIkVcIixcbiAgICBcImlcIixcbiAgICBcImNcIixcbiAgICBcInRcIixcbiAgICBcIlRcIixcbiAgXTtcbn1cbiIsImltcG9ydCB7IHNldFdlZWsgfSBmcm9tIFwiLi4vLi4vLi4vc2V0V2Vlay5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZXZWVrIH0gZnJvbSBcIi4uLy4uLy4uL3N0YXJ0T2ZXZWVrLm1qc1wiO1xuaW1wb3J0IHsgbnVtZXJpY1BhdHRlcm5zIH0gZnJvbSBcIi4uL2NvbnN0YW50cy5tanNcIjtcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBwYXJzZU5EaWdpdHMsIHBhcnNlTnVtZXJpY1BhdHRlcm4gfSBmcm9tIFwiLi4vdXRpbHMubWpzXCI7XG5cbi8vIExvY2FsIHdlZWsgb2YgeWVhclxuZXhwb3J0IGNsYXNzIExvY2FsV2Vla1BhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIHByaW9yaXR5ID0gMTAwO1xuXG4gIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJ3XCI6XG4gICAgICAgIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG51bWVyaWNQYXR0ZXJucy53ZWVrLCBkYXRlU3RyaW5nKTtcbiAgICAgIGNhc2UgXCJ3b1wiOlxuICAgICAgICByZXR1cm4gbWF0Y2gub3JkaW5hbE51bWJlcihkYXRlU3RyaW5nLCB7IHVuaXQ6IFwid2Vla1wiIH0pO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHBhcnNlTkRpZ2l0cyh0b2tlbi5sZW5ndGgsIGRhdGVTdHJpbmcpO1xuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlKF9kYXRlLCB2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA+PSAxICYmIHZhbHVlIDw9IDUzO1xuICB9XG5cbiAgc2V0KGRhdGUsIF9mbGFncywgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gc3RhcnRPZldlZWsoc2V0V2VlayhkYXRlLCB2YWx1ZSwgb3B0aW9ucyksIG9wdGlvbnMpO1xuICB9XG5cbiAgaW5jb21wYXRpYmxlVG9rZW5zID0gW1xuICAgIFwieVwiLFxuICAgIFwiUlwiLFxuICAgIFwidVwiLFxuICAgIFwicVwiLFxuICAgIFwiUVwiLFxuICAgIFwiTVwiLFxuICAgIFwiTFwiLFxuICAgIFwiSVwiLFxuICAgIFwiZFwiLFxuICAgIFwiRFwiLFxuICAgIFwiaVwiLFxuICAgIFwidFwiLFxuICAgIFwiVFwiLFxuICBdO1xufVxuIiwiaW1wb3J0IHsgZ2V0V2Vla1llYXIgfSBmcm9tIFwiLi4vLi4vLi4vZ2V0V2Vla1llYXIubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mV2VlayB9IGZyb20gXCIuLi8uLi8uLi9zdGFydE9mV2Vlay5tanNcIjtcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBtYXBWYWx1ZSwgbm9ybWFsaXplVHdvRGlnaXRZZWFyLCBwYXJzZU5EaWdpdHMgfSBmcm9tIFwiLi4vdXRpbHMubWpzXCI7XG5cbi8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbmV4cG9ydCBjbGFzcyBMb2NhbFdlZWtZZWFyUGFyc2VyIGV4dGVuZHMgUGFyc2VyIHtcbiAgcHJpb3JpdHkgPSAxMzA7XG5cbiAgcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoKSB7XG4gICAgY29uc3QgdmFsdWVDYWxsYmFjayA9ICh5ZWFyKSA9PiAoe1xuICAgICAgeWVhcixcbiAgICAgIGlzVHdvRGlnaXRZZWFyOiB0b2tlbiA9PT0gXCJZWVwiLFxuICAgIH0pO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcIllcIjpcbiAgICAgICAgcmV0dXJuIG1hcFZhbHVlKHBhcnNlTkRpZ2l0cyg0LCBkYXRlU3RyaW5nKSwgdmFsdWVDYWxsYmFjayk7XG4gICAgICBjYXNlIFwiWW9cIjpcbiAgICAgICAgcmV0dXJuIG1hcFZhbHVlKFxuICAgICAgICAgIG1hdGNoLm9yZGluYWxOdW1iZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgdW5pdDogXCJ5ZWFyXCIsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgdmFsdWVDYWxsYmFjayxcbiAgICAgICAgKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBtYXBWYWx1ZShwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKSwgdmFsdWVDYWxsYmFjayk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLmlzVHdvRGlnaXRZZWFyIHx8IHZhbHVlLnllYXIgPiAwO1xuICB9XG5cbiAgc2V0KGRhdGUsIGZsYWdzLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gZ2V0V2Vla1llYXIoZGF0ZSwgb3B0aW9ucyk7XG5cbiAgICBpZiAodmFsdWUuaXNUd29EaWdpdFllYXIpIHtcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWRUd29EaWdpdFllYXIgPSBub3JtYWxpemVUd29EaWdpdFllYXIoXG4gICAgICAgIHZhbHVlLnllYXIsXG4gICAgICAgIGN1cnJlbnRZZWFyLFxuICAgICAgKTtcbiAgICAgIGRhdGUuc2V0RnVsbFllYXIoXG4gICAgICAgIG5vcm1hbGl6ZWRUd29EaWdpdFllYXIsXG4gICAgICAgIDAsXG4gICAgICAgIG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlLFxuICAgICAgKTtcbiAgICAgIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICByZXR1cm4gc3RhcnRPZldlZWsoZGF0ZSwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgY29uc3QgeWVhciA9XG4gICAgICAhKFwiZXJhXCIgaW4gZmxhZ3MpIHx8IGZsYWdzLmVyYSA9PT0gMSA/IHZhbHVlLnllYXIgOiAxIC0gdmFsdWUueWVhcjtcbiAgICBkYXRlLnNldEZ1bGxZZWFyKHllYXIsIDAsIG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgIHJldHVybiBzdGFydE9mV2VlayhkYXRlLCBvcHRpb25zKTtcbiAgfVxuXG4gIGluY29tcGF0aWJsZVRva2VucyA9IFtcbiAgICBcInlcIixcbiAgICBcIlJcIixcbiAgICBcInVcIixcbiAgICBcIlFcIixcbiAgICBcInFcIixcbiAgICBcIk1cIixcbiAgICBcIkxcIixcbiAgICBcIklcIixcbiAgICBcImRcIixcbiAgICBcIkRcIixcbiAgICBcImlcIixcbiAgICBcInRcIixcbiAgICBcIlRcIixcbiAgXTtcbn1cbiIsImltcG9ydCB7IG51bWVyaWNQYXR0ZXJucyB9IGZyb20gXCIuLi9jb25zdGFudHMubWpzXCI7XG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgcGFyc2VORGlnaXRzLCBwYXJzZU51bWVyaWNQYXR0ZXJuIH0gZnJvbSBcIi4uL3V0aWxzLm1qc1wiO1xuXG5leHBvcnQgY2xhc3MgTWludXRlUGFyc2VyIGV4dGVuZHMgUGFyc2VyIHtcbiAgcHJpb3JpdHkgPSA2MDtcblxuICBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwibVwiOlxuICAgICAgICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMubWludXRlLCBkYXRlU3RyaW5nKTtcbiAgICAgIGNhc2UgXCJtb1wiOlxuICAgICAgICByZXR1cm4gbWF0Y2gub3JkaW5hbE51bWJlcihkYXRlU3RyaW5nLCB7IHVuaXQ6IFwibWludXRlXCIgfSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gcGFyc2VORGlnaXRzKHRva2VuLmxlbmd0aCwgZGF0ZVN0cmluZyk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID49IDAgJiYgdmFsdWUgPD0gNTk7XG4gIH1cblxuICBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgIGRhdGUuc2V0TWludXRlcyh2YWx1ZSwgMCwgMCk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuICBpbmNvbXBhdGlibGVUb2tlbnMgPSBbXCJ0XCIsIFwiVFwiXTtcbn1cbiIsImltcG9ydCB7IG51bWVyaWNQYXR0ZXJucyB9IGZyb20gXCIuLi9jb25zdGFudHMubWpzXCI7XG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgbWFwVmFsdWUsIHBhcnNlTkRpZ2l0cywgcGFyc2VOdW1lcmljUGF0dGVybiB9IGZyb20gXCIuLi91dGlscy5tanNcIjtcblxuZXhwb3J0IGNsYXNzIE1vbnRoUGFyc2VyIGV4dGVuZHMgUGFyc2VyIHtcbiAgaW5jb21wYXRpYmxlVG9rZW5zID0gW1xuICAgIFwiWVwiLFxuICAgIFwiUlwiLFxuICAgIFwicVwiLFxuICAgIFwiUVwiLFxuICAgIFwiTFwiLFxuICAgIFwid1wiLFxuICAgIFwiSVwiLFxuICAgIFwiRFwiLFxuICAgIFwiaVwiLFxuICAgIFwiZVwiLFxuICAgIFwiY1wiLFxuICAgIFwidFwiLFxuICAgIFwiVFwiLFxuICBdO1xuXG4gIHByaW9yaXR5ID0gMTEwO1xuXG4gIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgIGNvbnN0IHZhbHVlQ2FsbGJhY2sgPSAodmFsdWUpID0+IHZhbHVlIC0gMTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgXCJNXCI6XG4gICAgICAgIHJldHVybiBtYXBWYWx1ZShcbiAgICAgICAgICBwYXJzZU51bWVyaWNQYXR0ZXJuKG51bWVyaWNQYXR0ZXJucy5tb250aCwgZGF0ZVN0cmluZyksXG4gICAgICAgICAgdmFsdWVDYWxsYmFjayxcbiAgICAgICAgKTtcbiAgICAgIC8vIDAxLCAwMiwgLi4uLCAxMlxuICAgICAgY2FzZSBcIk1NXCI6XG4gICAgICAgIHJldHVybiBtYXBWYWx1ZShwYXJzZU5EaWdpdHMoMiwgZGF0ZVN0cmluZyksIHZhbHVlQ2FsbGJhY2spO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuICAgICAgY2FzZSBcIk1vXCI6XG4gICAgICAgIHJldHVybiBtYXBWYWx1ZShcbiAgICAgICAgICBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHVuaXQ6IFwibW9udGhcIixcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB2YWx1ZUNhbGxiYWNrLFxuICAgICAgICApO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG4gICAgICBjYXNlIFwiTU1NXCI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgbWF0Y2gubW9udGgoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pIHx8XG4gICAgICAgICAgbWF0Y2gubW9udGgoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJuYXJyb3dcIiwgY29udGV4dDogXCJmb3JtYXR0aW5nXCIgfSlcbiAgICAgICAgKTtcblxuICAgICAgLy8gSiwgRiwgLi4uLCBEXG4gICAgICBjYXNlIFwiTU1NTU1cIjpcbiAgICAgICAgcmV0dXJuIG1hdGNoLm1vbnRoKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuICAgICAgY2FzZSBcIk1NTU1cIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgbWF0Y2gubW9udGgoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJ3aWRlXCIsIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiIH0pIHx8XG4gICAgICAgICAgbWF0Y2gubW9udGgoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pIHx8XG4gICAgICAgICAgbWF0Y2gubW9udGgoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJuYXJyb3dcIiwgY29udGV4dDogXCJmb3JtYXR0aW5nXCIgfSlcbiAgICAgICAgKTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZShfZGF0ZSwgdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPj0gMCAmJiB2YWx1ZSA8PSAxMTtcbiAgfVxuXG4gIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgZGF0ZS5zZXRNb250aCh2YWx1ZSwgMSk7XG4gICAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5tanNcIjtcbmltcG9ydCB7IHBhcnNlTkRpZ2l0cyB9IGZyb20gXCIuLi91dGlscy5tanNcIjtcblxuZXhwb3J0IGNsYXNzIFF1YXJ0ZXJQYXJzZXIgZXh0ZW5kcyBQYXJzZXIge1xuICBwcmlvcml0eSA9IDEyMDtcblxuICBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlIFwiUVwiOlxuICAgICAgY2FzZSBcIlFRXCI6IC8vIDAxLCAwMiwgMDMsIDA0XG4gICAgICAgIHJldHVybiBwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuICAgICAgY2FzZSBcIlFvXCI6XG4gICAgICAgIHJldHVybiBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHsgdW5pdDogXCJxdWFydGVyXCIgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuICAgICAgY2FzZSBcIlFRUVwiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIG1hdGNoLnF1YXJ0ZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pIHx8XG4gICAgICAgICAgbWF0Y2gucXVhcnRlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG5cbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuICAgICAgY2FzZSBcIlFRUVFRXCI6XG4gICAgICAgIHJldHVybiBtYXRjaC5xdWFydGVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuICAgICAgY2FzZSBcIlFRUVFcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgbWF0Y2gucXVhcnRlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KSB8fFxuICAgICAgICAgIG1hdGNoLnF1YXJ0ZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pIHx8XG4gICAgICAgICAgbWF0Y2gucXVhcnRlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID49IDEgJiYgdmFsdWUgPD0gNDtcbiAgfVxuXG4gIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgZGF0ZS5zZXRNb250aCgodmFsdWUgLSAxKSAqIDMsIDEpO1xuICAgIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuICBpbmNvbXBhdGlibGVUb2tlbnMgPSBbXG4gICAgXCJZXCIsXG4gICAgXCJSXCIsXG4gICAgXCJxXCIsXG4gICAgXCJNXCIsXG4gICAgXCJMXCIsXG4gICAgXCJ3XCIsXG4gICAgXCJJXCIsXG4gICAgXCJkXCIsXG4gICAgXCJEXCIsXG4gICAgXCJpXCIsXG4gICAgXCJlXCIsXG4gICAgXCJjXCIsXG4gICAgXCJ0XCIsXG4gICAgXCJUXCIsXG4gIF07XG59XG4iLCJpbXBvcnQgeyBudW1lcmljUGF0dGVybnMgfSBmcm9tIFwiLi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5tanNcIjtcbmltcG9ydCB7IHBhcnNlTkRpZ2l0cywgcGFyc2VOdW1lcmljUGF0dGVybiB9IGZyb20gXCIuLi91dGlscy5tanNcIjtcblxuZXhwb3J0IGNsYXNzIFNlY29uZFBhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIHByaW9yaXR5ID0gNTA7XG5cbiAgcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoKSB7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcInNcIjpcbiAgICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLnNlY29uZCwgZGF0ZVN0cmluZyk7XG4gICAgICBjYXNlIFwic29cIjpcbiAgICAgICAgcmV0dXJuIG1hdGNoLm9yZGluYWxOdW1iZXIoZGF0ZVN0cmluZywgeyB1bml0OiBcInNlY29uZFwiIH0pO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHBhcnNlTkRpZ2l0cyh0b2tlbi5sZW5ndGgsIGRhdGVTdHJpbmcpO1xuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlKF9kYXRlLCB2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA+PSAwICYmIHZhbHVlIDw9IDU5O1xuICB9XG5cbiAgc2V0KGRhdGUsIF9mbGFncywgdmFsdWUpIHtcbiAgICBkYXRlLnNldFNlY29uZHModmFsdWUsIDApO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgaW5jb21wYXRpYmxlVG9rZW5zID0gW1widFwiLCBcIlRcIl07XG59XG4iLCJpbXBvcnQgeyBzZXREYXkgfSBmcm9tIFwiLi4vLi4vLi4vc2V0RGF5Lm1qc1wiO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5tanNcIjtcbmltcG9ydCB7IG1hcFZhbHVlLCBwYXJzZU5EaWdpdHMgfSBmcm9tIFwiLi4vdXRpbHMubWpzXCI7XG5cbi8vIFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrXG5leHBvcnQgY2xhc3MgU3RhbmRBbG9uZUxvY2FsRGF5UGFyc2VyIGV4dGVuZHMgUGFyc2VyIHtcbiAgcHJpb3JpdHkgPSA5MDtcblxuICBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gsIG9wdGlvbnMpIHtcbiAgICBjb25zdCB2YWx1ZUNhbGxiYWNrID0gKHZhbHVlKSA9PiB7XG4gICAgICAvLyBXZSB3YW50IGhlcmUgZmxvb3IgaW5zdGVhZCBvZiB0cnVuYywgc28gd2UgZ2V0IC03IGZvciB2YWx1ZSAwIGluc3RlYWQgb2YgMFxuICAgICAgY29uc3Qgd2hvbGVXZWVrRGF5cyA9IE1hdGguZmxvb3IoKHZhbHVlIC0gMSkgLyA3KSAqIDc7XG4gICAgICByZXR1cm4gKCh2YWx1ZSArIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgNikgJSA3KSArIHdob2xlV2Vla0RheXM7XG4gICAgfTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDNcbiAgICAgIGNhc2UgXCJjXCI6XG4gICAgICBjYXNlIFwiY2NcIjogLy8gMDNcbiAgICAgICAgcmV0dXJuIG1hcFZhbHVlKHBhcnNlTkRpZ2l0cyh0b2tlbi5sZW5ndGgsIGRhdGVTdHJpbmcpLCB2YWx1ZUNhbGxiYWNrKTtcbiAgICAgIC8vIDNyZFxuICAgICAgY2FzZSBcImNvXCI6XG4gICAgICAgIHJldHVybiBtYXBWYWx1ZShcbiAgICAgICAgICBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHVuaXQ6IFwiZGF5XCIsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgdmFsdWVDYWxsYmFjayxcbiAgICAgICAgKTtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSBcImNjY1wiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgICAgfSkgfHxcbiAgICAgICAgICBtYXRjaC5kYXkoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJzaG9ydFwiLCBjb250ZXh0OiBcInN0YW5kYWxvbmVcIiB9KSB8fFxuICAgICAgICAgIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7IHdpZHRoOiBcIm5hcnJvd1wiLCBjb250ZXh0OiBcInN0YW5kYWxvbmVcIiB9KVxuICAgICAgICApO1xuXG4gICAgICAvLyBUXG4gICAgICBjYXNlIFwiY2NjY2NcIjpcbiAgICAgICAgcmV0dXJuIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgXCJjY2NjY2NcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBtYXRjaC5kYXkoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJzaG9ydFwiLCBjb250ZXh0OiBcInN0YW5kYWxvbmVcIiB9KSB8fFxuICAgICAgICAgIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7IHdpZHRoOiBcIm5hcnJvd1wiLCBjb250ZXh0OiBcInN0YW5kYWxvbmVcIiB9KVxuICAgICAgICApO1xuXG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlIFwiY2NjY1wiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBtYXRjaC5kYXkoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJ3aWRlXCIsIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiIH0pIHx8XG4gICAgICAgICAgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgICB9KSB8fFxuICAgICAgICAgIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7IHdpZHRoOiBcInNob3J0XCIsIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiIH0pIHx8XG4gICAgICAgICAgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHsgd2lkdGg6IFwibmFycm93XCIsIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiIH0pXG4gICAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID49IDAgJiYgdmFsdWUgPD0gNjtcbiAgfVxuXG4gIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgZGF0ZSA9IHNldERheShkYXRlLCB2YWx1ZSwgb3B0aW9ucyk7XG4gICAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGluY29tcGF0aWJsZVRva2VucyA9IFtcbiAgICBcInlcIixcbiAgICBcIlJcIixcbiAgICBcInVcIixcbiAgICBcInFcIixcbiAgICBcIlFcIixcbiAgICBcIk1cIixcbiAgICBcIkxcIixcbiAgICBcIklcIixcbiAgICBcImRcIixcbiAgICBcIkRcIixcbiAgICBcIkVcIixcbiAgICBcImlcIixcbiAgICBcImVcIixcbiAgICBcInRcIixcbiAgICBcIlRcIixcbiAgXTtcbn1cbiIsImltcG9ydCB7IG51bWVyaWNQYXR0ZXJucyB9IGZyb20gXCIuLi9jb25zdGFudHMubWpzXCI7XG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgbWFwVmFsdWUsIHBhcnNlTkRpZ2l0cywgcGFyc2VOdW1lcmljUGF0dGVybiB9IGZyb20gXCIuLi91dGlscy5tanNcIjtcblxuZXhwb3J0IGNsYXNzIFN0YW5kQWxvbmVNb250aFBhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIHByaW9yaXR5ID0gMTEwO1xuXG4gIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgIGNvbnN0IHZhbHVlQ2FsbGJhY2sgPSAodmFsdWUpID0+IHZhbHVlIC0gMTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgXCJMXCI6XG4gICAgICAgIHJldHVybiBtYXBWYWx1ZShcbiAgICAgICAgICBwYXJzZU51bWVyaWNQYXR0ZXJuKG51bWVyaWNQYXR0ZXJucy5tb250aCwgZGF0ZVN0cmluZyksXG4gICAgICAgICAgdmFsdWVDYWxsYmFjayxcbiAgICAgICAgKTtcbiAgICAgIC8vIDAxLCAwMiwgLi4uLCAxMlxuICAgICAgY2FzZSBcIkxMXCI6XG4gICAgICAgIHJldHVybiBtYXBWYWx1ZShwYXJzZU5EaWdpdHMoMiwgZGF0ZVN0cmluZyksIHZhbHVlQ2FsbGJhY2spO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuICAgICAgY2FzZSBcIkxvXCI6XG4gICAgICAgIHJldHVybiBtYXBWYWx1ZShcbiAgICAgICAgICBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHVuaXQ6IFwibW9udGhcIixcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB2YWx1ZUNhbGxiYWNrLFxuICAgICAgICApO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG4gICAgICBjYXNlIFwiTExMXCI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgbWF0Y2gubW9udGgoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICAgIH0pIHx8XG4gICAgICAgICAgbWF0Y2gubW9udGgoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJuYXJyb3dcIiwgY29udGV4dDogXCJzdGFuZGFsb25lXCIgfSlcbiAgICAgICAgKTtcblxuICAgICAgLy8gSiwgRiwgLi4uLCBEXG4gICAgICBjYXNlIFwiTExMTExcIjpcbiAgICAgICAgcmV0dXJuIG1hdGNoLm1vbnRoKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuICAgICAgY2FzZSBcIkxMTExcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgbWF0Y2gubW9udGgoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJ3aWRlXCIsIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiIH0pIHx8XG4gICAgICAgICAgbWF0Y2gubW9udGgoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICAgIH0pIHx8XG4gICAgICAgICAgbWF0Y2gubW9udGgoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJuYXJyb3dcIiwgY29udGV4dDogXCJzdGFuZGFsb25lXCIgfSlcbiAgICAgICAgKTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZShfZGF0ZSwgdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPj0gMCAmJiB2YWx1ZSA8PSAxMTtcbiAgfVxuXG4gIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgZGF0ZS5zZXRNb250aCh2YWx1ZSwgMSk7XG4gICAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGluY29tcGF0aWJsZVRva2VucyA9IFtcbiAgICBcIllcIixcbiAgICBcIlJcIixcbiAgICBcInFcIixcbiAgICBcIlFcIixcbiAgICBcIk1cIixcbiAgICBcIndcIixcbiAgICBcIklcIixcbiAgICBcIkRcIixcbiAgICBcImlcIixcbiAgICBcImVcIixcbiAgICBcImNcIixcbiAgICBcInRcIixcbiAgICBcIlRcIixcbiAgXTtcbn1cbiIsImltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBwYXJzZU5EaWdpdHMgfSBmcm9tIFwiLi4vdXRpbHMubWpzXCI7XG5cbmV4cG9ydCBjbGFzcyBTdGFuZEFsb25lUXVhcnRlclBhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIHByaW9yaXR5ID0gMTIwO1xuXG4gIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgXCJxXCI6XG4gICAgICBjYXNlIFwicXFcIjogLy8gMDEsIDAyLCAwMywgMDRcbiAgICAgICAgcmV0dXJuIHBhcnNlTkRpZ2l0cyh0b2tlbi5sZW5ndGgsIGRhdGVTdHJpbmcpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG4gICAgICBjYXNlIFwicW9cIjpcbiAgICAgICAgcmV0dXJuIG1hdGNoLm9yZGluYWxOdW1iZXIoZGF0ZVN0cmluZywgeyB1bml0OiBcInF1YXJ0ZXJcIiB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG4gICAgICBjYXNlIFwicXFxXCI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgbWF0Y2gucXVhcnRlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgICAgfSkgfHxcbiAgICAgICAgICBtYXRjaC5xdWFydGVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG4gICAgICBjYXNlIFwicXFxcXFcIjpcbiAgICAgICAgcmV0dXJuIG1hdGNoLnF1YXJ0ZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG4gICAgICBjYXNlIFwicXFxcVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBtYXRjaC5xdWFydGVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICAgIH0pIHx8XG4gICAgICAgICAgbWF0Y2gucXVhcnRlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgICAgfSkgfHxcbiAgICAgICAgICBtYXRjaC5xdWFydGVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZShfZGF0ZSwgdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPj0gMSAmJiB2YWx1ZSA8PSA0O1xuICB9XG5cbiAgc2V0KGRhdGUsIF9mbGFncywgdmFsdWUpIHtcbiAgICBkYXRlLnNldE1vbnRoKCh2YWx1ZSAtIDEpICogMywgMSk7XG4gICAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGluY29tcGF0aWJsZVRva2VucyA9IFtcbiAgICBcIllcIixcbiAgICBcIlJcIixcbiAgICBcIlFcIixcbiAgICBcIk1cIixcbiAgICBcIkxcIixcbiAgICBcIndcIixcbiAgICBcIklcIixcbiAgICBcImRcIixcbiAgICBcIkRcIixcbiAgICBcImlcIixcbiAgICBcImVcIixcbiAgICBcImNcIixcbiAgICBcInRcIixcbiAgICBcIlRcIixcbiAgXTtcbn1cbiIsImltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RydWN0RnJvbS5tanNcIjtcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBwYXJzZUFueURpZ2l0c1NpZ25lZCB9IGZyb20gXCIuLi91dGlscy5tanNcIjtcblxuZXhwb3J0IGNsYXNzIFRpbWVzdGFtcE1pbGxpc2Vjb25kc1BhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIHByaW9yaXR5ID0gMjA7XG5cbiAgcGFyc2UoZGF0ZVN0cmluZykge1xuICAgIHJldHVybiBwYXJzZUFueURpZ2l0c1NpZ25lZChkYXRlU3RyaW5nKTtcbiAgfVxuXG4gIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgcmV0dXJuIFtjb25zdHJ1Y3RGcm9tKGRhdGUsIHZhbHVlKSwgeyB0aW1lc3RhbXBJc1NldDogdHJ1ZSB9XTtcbiAgfVxuXG4gIGluY29tcGF0aWJsZVRva2VucyA9IFwiKlwiO1xufVxuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuLi8uLi8uLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5tanNcIjtcbmltcG9ydCB7IHBhcnNlQW55RGlnaXRzU2lnbmVkIH0gZnJvbSBcIi4uL3V0aWxzLm1qc1wiO1xuXG5leHBvcnQgY2xhc3MgVGltZXN0YW1wU2Vjb25kc1BhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIHByaW9yaXR5ID0gNDA7XG5cbiAgcGFyc2UoZGF0ZVN0cmluZykge1xuICAgIHJldHVybiBwYXJzZUFueURpZ2l0c1NpZ25lZChkYXRlU3RyaW5nKTtcbiAgfVxuXG4gIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgcmV0dXJuIFtjb25zdHJ1Y3RGcm9tKGRhdGUsIHZhbHVlICogMTAwMCksIHsgdGltZXN0YW1wSXNTZXQ6IHRydWUgfV07XG4gIH1cblxuICBpbmNvbXBhdGlibGVUb2tlbnMgPSBcIipcIjtcbn1cbiIsImltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBtYXBWYWx1ZSwgbm9ybWFsaXplVHdvRGlnaXRZZWFyLCBwYXJzZU5EaWdpdHMgfSBmcm9tIFwiLi4vdXRpbHMubWpzXCI7XG5cbi8vIEZyb20gaHR0cDovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS0zMS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9Gb3JtYXRfUGF0dGVybnNcbi8vIHwgWWVhciAgICAgfCAgICAgeSB8IHl5IHwgICB5eXkgfCAgeXl5eSB8IHl5eXl5IHxcbi8vIHwtLS0tLS0tLS0tfC0tLS0tLS18LS0tLXwtLS0tLS0tfC0tLS0tLS18LS0tLS0tLXxcbi8vIHwgQUQgMSAgICAgfCAgICAgMSB8IDAxIHwgICAwMDEgfCAgMDAwMSB8IDAwMDAxIHxcbi8vIHwgQUQgMTIgICAgfCAgICAxMiB8IDEyIHwgICAwMTIgfCAgMDAxMiB8IDAwMDEyIHxcbi8vIHwgQUQgMTIzICAgfCAgIDEyMyB8IDIzIHwgICAxMjMgfCAgMDEyMyB8IDAwMTIzIHxcbi8vIHwgQUQgMTIzNCAgfCAgMTIzNCB8IDM0IHwgIDEyMzQgfCAgMTIzNCB8IDAxMjM0IHxcbi8vIHwgQUQgMTIzNDUgfCAxMjM0NSB8IDQ1IHwgMTIzNDUgfCAxMjM0NSB8IDEyMzQ1IHxcbmV4cG9ydCBjbGFzcyBZZWFyUGFyc2VyIGV4dGVuZHMgUGFyc2VyIHtcbiAgcHJpb3JpdHkgPSAxMzA7XG4gIGluY29tcGF0aWJsZVRva2VucyA9IFtcIllcIiwgXCJSXCIsIFwidVwiLCBcIndcIiwgXCJJXCIsIFwiaVwiLCBcImVcIiwgXCJjXCIsIFwidFwiLCBcIlRcIl07XG5cbiAgcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoKSB7XG4gICAgY29uc3QgdmFsdWVDYWxsYmFjayA9ICh5ZWFyKSA9PiAoe1xuICAgICAgeWVhcixcbiAgICAgIGlzVHdvRGlnaXRZZWFyOiB0b2tlbiA9PT0gXCJ5eVwiLFxuICAgIH0pO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcInlcIjpcbiAgICAgICAgcmV0dXJuIG1hcFZhbHVlKHBhcnNlTkRpZ2l0cyg0LCBkYXRlU3RyaW5nKSwgdmFsdWVDYWxsYmFjayk7XG4gICAgICBjYXNlIFwieW9cIjpcbiAgICAgICAgcmV0dXJuIG1hcFZhbHVlKFxuICAgICAgICAgIG1hdGNoLm9yZGluYWxOdW1iZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgdW5pdDogXCJ5ZWFyXCIsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgdmFsdWVDYWxsYmFjayxcbiAgICAgICAgKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBtYXBWYWx1ZShwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKSwgdmFsdWVDYWxsYmFjayk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLmlzVHdvRGlnaXRZZWFyIHx8IHZhbHVlLnllYXIgPiAwO1xuICB9XG5cbiAgc2V0KGRhdGUsIGZsYWdzLCB2YWx1ZSkge1xuICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gICAgaWYgKHZhbHVlLmlzVHdvRGlnaXRZZWFyKSB7XG4gICAgICBjb25zdCBub3JtYWxpemVkVHdvRGlnaXRZZWFyID0gbm9ybWFsaXplVHdvRGlnaXRZZWFyKFxuICAgICAgICB2YWx1ZS55ZWFyLFxuICAgICAgICBjdXJyZW50WWVhcixcbiAgICAgICk7XG4gICAgICBkYXRlLnNldEZ1bGxZZWFyKG5vcm1hbGl6ZWRUd29EaWdpdFllYXIsIDAsIDEpO1xuICAgICAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cblxuICAgIGNvbnN0IHllYXIgPVxuICAgICAgIShcImVyYVwiIGluIGZsYWdzKSB8fCBmbGFncy5lcmEgPT09IDEgPyB2YWx1ZS55ZWFyIDogMSAtIHZhbHVlLnllYXI7XG4gICAgZGF0ZS5zZXRGdWxsWWVhcih5ZWFyLCAwLCAxKTtcbiAgICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBtaWxsaXNlY29uZHNJbkhvdXIsXG4gIG1pbGxpc2Vjb25kc0luTWludXRlLFxuICBtaWxsaXNlY29uZHNJblNlY29uZCxcbn0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy5tanNcIjtcbmltcG9ydCB7IG51bWVyaWNQYXR0ZXJucyB9IGZyb20gXCIuL2NvbnN0YW50cy5tanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1hcFZhbHVlKHBhcnNlRm5SZXN1bHQsIG1hcEZuKSB7XG4gIGlmICghcGFyc2VGblJlc3VsdCkge1xuICAgIHJldHVybiBwYXJzZUZuUmVzdWx0O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB2YWx1ZTogbWFwRm4ocGFyc2VGblJlc3VsdC52YWx1ZSksXG4gICAgcmVzdDogcGFyc2VGblJlc3VsdC5yZXN0LFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VOdW1lcmljUGF0dGVybihwYXR0ZXJuLCBkYXRlU3RyaW5nKSB7XG4gIGNvbnN0IG1hdGNoUmVzdWx0ID0gZGF0ZVN0cmluZy5tYXRjaChwYXR0ZXJuKTtcblxuICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHZhbHVlOiBwYXJzZUludChtYXRjaFJlc3VsdFswXSwgMTApLFxuICAgIHJlc3Q6IGRhdGVTdHJpbmcuc2xpY2UobWF0Y2hSZXN1bHRbMF0ubGVuZ3RoKSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVGltZXpvbmVQYXR0ZXJuKHBhdHRlcm4sIGRhdGVTdHJpbmcpIHtcbiAgY29uc3QgbWF0Y2hSZXN1bHQgPSBkYXRlU3RyaW5nLm1hdGNoKHBhdHRlcm4pO1xuXG4gIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIElucHV0IGlzICdaJ1xuICBpZiAobWF0Y2hSZXN1bHRbMF0gPT09IFwiWlwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiAwLFxuICAgICAgcmVzdDogZGF0ZVN0cmluZy5zbGljZSgxKSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3Qgc2lnbiA9IG1hdGNoUmVzdWx0WzFdID09PSBcIitcIiA/IDEgOiAtMTtcbiAgY29uc3QgaG91cnMgPSBtYXRjaFJlc3VsdFsyXSA/IHBhcnNlSW50KG1hdGNoUmVzdWx0WzJdLCAxMCkgOiAwO1xuICBjb25zdCBtaW51dGVzID0gbWF0Y2hSZXN1bHRbM10gPyBwYXJzZUludChtYXRjaFJlc3VsdFszXSwgMTApIDogMDtcbiAgY29uc3Qgc2Vjb25kcyA9IG1hdGNoUmVzdWx0WzVdID8gcGFyc2VJbnQobWF0Y2hSZXN1bHRbNV0sIDEwKSA6IDA7XG5cbiAgcmV0dXJuIHtcbiAgICB2YWx1ZTpcbiAgICAgIHNpZ24gKlxuICAgICAgKGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICtcbiAgICAgICAgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlICtcbiAgICAgICAgc2Vjb25kcyAqIG1pbGxpc2Vjb25kc0luU2Vjb25kKSxcbiAgICByZXN0OiBkYXRlU3RyaW5nLnNsaWNlKG1hdGNoUmVzdWx0WzBdLmxlbmd0aCksXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUFueURpZ2l0c1NpZ25lZChkYXRlU3RyaW5nKSB7XG4gIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG51bWVyaWNQYXR0ZXJucy5hbnlEaWdpdHNTaWduZWQsIGRhdGVTdHJpbmcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VORGlnaXRzKG4sIGRhdGVTdHJpbmcpIHtcbiAgc3dpdGNoIChuKSB7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLnNpbmdsZURpZ2l0LCBkYXRlU3RyaW5nKTtcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMudHdvRGlnaXRzLCBkYXRlU3RyaW5nKTtcbiAgICBjYXNlIDM6XG4gICAgICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMudGhyZWVEaWdpdHMsIGRhdGVTdHJpbmcpO1xuICAgIGNhc2UgNDpcbiAgICAgIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG51bWVyaWNQYXR0ZXJucy5mb3VyRGlnaXRzLCBkYXRlU3RyaW5nKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obmV3IFJlZ0V4cChcIl5cXFxcZHsxLFwiICsgbiArIFwifVwiKSwgZGF0ZVN0cmluZyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTkRpZ2l0c1NpZ25lZChuLCBkYXRlU3RyaW5nKSB7XG4gIHN3aXRjaCAobikge1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG51bWVyaWNQYXR0ZXJucy5zaW5nbGVEaWdpdFNpZ25lZCwgZGF0ZVN0cmluZyk7XG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLnR3b0RpZ2l0c1NpZ25lZCwgZGF0ZVN0cmluZyk7XG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLnRocmVlRGlnaXRzU2lnbmVkLCBkYXRlU3RyaW5nKTtcbiAgICBjYXNlIDQ6XG4gICAgICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMuZm91ckRpZ2l0c1NpZ25lZCwgZGF0ZVN0cmluZyk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG5ldyBSZWdFeHAoXCJeLT9cXFxcZHsxLFwiICsgbiArIFwifVwiKSwgZGF0ZVN0cmluZyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRheVBlcmlvZEVudW1Ub0hvdXJzKGRheVBlcmlvZCkge1xuICBzd2l0Y2ggKGRheVBlcmlvZCkge1xuICAgIGNhc2UgXCJtb3JuaW5nXCI6XG4gICAgICByZXR1cm4gNDtcbiAgICBjYXNlIFwiZXZlbmluZ1wiOlxuICAgICAgcmV0dXJuIDE3O1xuICAgIGNhc2UgXCJwbVwiOlxuICAgIGNhc2UgXCJub29uXCI6XG4gICAgY2FzZSBcImFmdGVybm9vblwiOlxuICAgICAgcmV0dXJuIDEyO1xuICAgIGNhc2UgXCJhbVwiOlxuICAgIGNhc2UgXCJtaWRuaWdodFwiOlxuICAgIGNhc2UgXCJuaWdodFwiOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gMDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplVHdvRGlnaXRZZWFyKHR3b0RpZ2l0WWVhciwgY3VycmVudFllYXIpIHtcbiAgY29uc3QgaXNDb21tb25FcmEgPSBjdXJyZW50WWVhciA+IDA7XG4gIC8vIEFic29sdXRlIG51bWJlciBvZiB0aGUgY3VycmVudCB5ZWFyOlxuICAvLyAxIC0+IDEgQUNcbiAgLy8gMCAtPiAxIEJDXG4gIC8vIC0xIC0+IDIgQkNcbiAgY29uc3QgYWJzQ3VycmVudFllYXIgPSBpc0NvbW1vbkVyYSA/IGN1cnJlbnRZZWFyIDogMSAtIGN1cnJlbnRZZWFyO1xuXG4gIGxldCByZXN1bHQ7XG4gIGlmIChhYnNDdXJyZW50WWVhciA8PSA1MCkge1xuICAgIHJlc3VsdCA9IHR3b0RpZ2l0WWVhciB8fCAxMDA7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcmFuZ2VFbmQgPSBhYnNDdXJyZW50WWVhciArIDUwO1xuICAgIGNvbnN0IHJhbmdlRW5kQ2VudHVyeSA9IE1hdGgudHJ1bmMocmFuZ2VFbmQgLyAxMDApICogMTAwO1xuICAgIGNvbnN0IGlzUHJldmlvdXNDZW50dXJ5ID0gdHdvRGlnaXRZZWFyID49IHJhbmdlRW5kICUgMTAwO1xuICAgIHJlc3VsdCA9IHR3b0RpZ2l0WWVhciArIHJhbmdlRW5kQ2VudHVyeSAtIChpc1ByZXZpb3VzQ2VudHVyeSA/IDEwMCA6IDApO1xuICB9XG5cbiAgcmV0dXJuIGlzQ29tbW9uRXJhID8gcmVzdWx0IDogMSAtIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTGVhcFllYXJJbmRleCh5ZWFyKSB7XG4gIHJldHVybiB5ZWFyICUgNDAwID09PSAwIHx8ICh5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwKTtcbn1cbiIsImltcG9ydCB7IGFkZERheXMgfSBmcm9tIFwiLi9hZGREYXlzLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgc2V0RGF5fSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgc2V0RGF5XG4gKiBAY2F0ZWdvcnkgV2Vla2RheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTZXQgdGhlIGRheSBvZiB0aGUgd2VlayB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFNldCB0aGUgZGF5IG9mIHRoZSB3ZWVrIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIGRheSAtIFRoZSBkYXkgb2YgdGhlIHdlZWsgb2YgdGhlIG5ldyBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKlxuICogQHJldHVybnMgVGhlIG5ldyBkYXRlIHdpdGggdGhlIGRheSBvZiB0aGUgd2VlayBzZXRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU2V0IHdlZWsgZGF5IHRvIFN1bmRheSwgd2l0aCB0aGUgZGVmYXVsdCB3ZWVrU3RhcnRzT24gb2YgU3VuZGF5OlxuICogY29uc3QgcmVzdWx0ID0gc2V0RGF5KG5ldyBEYXRlKDIwMTQsIDgsIDEpLCAwKVxuICogLy89PiBTdW4gQXVnIDMxIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU2V0IHdlZWsgZGF5IHRvIFN1bmRheSwgd2l0aCBhIHdlZWtTdGFydHNPbiBvZiBNb25kYXk6XG4gKiBjb25zdCByZXN1bHQgPSBzZXREYXkobmV3IERhdGUoMjAxNCwgOCwgMSksIDAsIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IFN1biBTZXAgMDcgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0RGF5KGRhdGUsIGRheSwgb3B0aW9ucykge1xuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIGNvbnN0IHdlZWtTdGFydHNPbiA9XG4gICAgb3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgb3B0aW9ucz8ubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24gPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5sb2NhbGU/Lm9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIDA7XG5cbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IGN1cnJlbnREYXkgPSBfZGF0ZS5nZXREYXkoKTtcblxuICBjb25zdCByZW1haW5kZXIgPSBkYXkgJSA3O1xuICBjb25zdCBkYXlJbmRleCA9IChyZW1haW5kZXIgKyA3KSAlIDc7XG5cbiAgY29uc3QgZGVsdGEgPSA3IC0gd2Vla1N0YXJ0c09uO1xuICBjb25zdCBkaWZmID1cbiAgICBkYXkgPCAwIHx8IGRheSA+IDZcbiAgICAgID8gZGF5IC0gKChjdXJyZW50RGF5ICsgZGVsdGEpICUgNylcbiAgICAgIDogKChkYXlJbmRleCArIGRlbHRhKSAlIDcpIC0gKChjdXJyZW50RGF5ICsgZGVsdGEpICUgNyk7XG4gIHJldHVybiBhZGREYXlzKF9kYXRlLCBkaWZmKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzZXREYXk7XG4iLCJpbXBvcnQgeyBhZGREYXlzIH0gZnJvbSBcIi4vYWRkRGF5cy5tanNcIjtcbmltcG9ydCB7IGdldElTT0RheSB9IGZyb20gXCIuL2dldElTT0RheS5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBzZXRJU09EYXlcbiAqIEBjYXRlZ29yeSBXZWVrZGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFNldCB0aGUgZGF5IG9mIHRoZSBJU08gd2VlayB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFNldCB0aGUgZGF5IG9mIHRoZSBJU08gd2VlayB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIElTTyB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheS5cbiAqIDcgaXMgdGhlIGluZGV4IG9mIFN1bmRheSwgMSBpcyB0aGUgaW5kZXggb2YgTW9uZGF5IGV0Yy5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSBkYXkgLSBUaGUgZGF5IG9mIHRoZSBJU08gd2VlayBvZiB0aGUgbmV3IGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgbmV3IGRhdGUgd2l0aCB0aGUgZGF5IG9mIHRoZSBJU08gd2VlayBzZXRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU2V0IFN1bmRheSB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gc2V0SVNPRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDEpLCA3KVxuICogLy89PiBTdW4gU2VwIDA3IDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldElTT0RheShkYXRlLCBkYXkpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IGN1cnJlbnREYXkgPSBnZXRJU09EYXkoX2RhdGUpO1xuICBjb25zdCBkaWZmID0gZGF5IC0gY3VycmVudERheTtcbiAgcmV0dXJuIGFkZERheXMoX2RhdGUsIGRpZmYpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHNldElTT0RheTtcbiIsImltcG9ydCB7IGdldElTT1dlZWsgfSBmcm9tIFwiLi9nZXRJU09XZWVrLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIHNldElTT1dlZWtcbiAqIEBjYXRlZ29yeSBJU08gV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTZXQgdGhlIElTTyB3ZWVrIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU2V0IHRoZSBJU08gd2VlayB0byB0aGUgZ2l2ZW4gZGF0ZSwgc2F2aW5nIHRoZSB3ZWVrZGF5IG51bWJlci5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0gd2VlayAtIFRoZSBJU08gd2VlayBvZiB0aGUgbmV3IGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgbmV3IGRhdGUgd2l0aCB0aGUgSVNPIHdlZWsgc2V0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNldCB0aGUgNTNyZCBJU08gd2VlayB0byA3IEF1Z3VzdCAyMDA0OlxuICogY29uc3QgcmVzdWx0ID0gc2V0SVNPV2VlayhuZXcgRGF0ZSgyMDA0LCA3LCA3KSwgNTMpXG4gKiAvLz0+IFNhdCBKYW4gMDEgMjAwNSAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0SVNPV2VlayhkYXRlLCB3ZWVrKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBkaWZmID0gZ2V0SVNPV2VlayhfZGF0ZSkgLSB3ZWVrO1xuICBfZGF0ZS5zZXREYXRlKF9kYXRlLmdldERhdGUoKSAtIGRpZmYgKiA3KTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHNldElTT1dlZWs7XG4iLCJpbXBvcnQgeyBnZXRXZWVrIH0gZnJvbSBcIi4vZ2V0V2Vlay5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIHNldFdlZWt9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBzZXRXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTZXQgdGhlIGxvY2FsIHdlZWsgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTZXQgdGhlIGxvY2FsIHdlZWsgdG8gdGhlIGdpdmVuIGRhdGUsIHNhdmluZyB0aGUgd2Vla2RheSBudW1iZXIuXG4gKiBUaGUgZXhhY3QgY2FsY3VsYXRpb24gZGVwZW5kcyBvbiB0aGUgdmFsdWVzIG9mXG4gKiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gICh3aGljaCBpcyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlaylcbiAqIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgICh3aGljaCBpcyB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzIGFsd2F5cyBpblxuICogdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIpXG4gKlxuICogV2VlayBudW1iZXJpbmc6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1dlZWsjVGhlX0lTT193ZWVrX2RhdGVfc3lzdGVtXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0gd2VlayAtIFRoZSB3ZWVrIG9mIHRoZSBuZXcgZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIG5ldyBkYXRlIHdpdGggdGhlIGxvY2FsIHdlZWsgc2V0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNldCB0aGUgMXN0IHdlZWsgdG8gMiBKYW51YXJ5IDIwMDUgd2l0aCBkZWZhdWx0IG9wdGlvbnM6XG4gKiBjb25zdCByZXN1bHQgPSBzZXRXZWVrKG5ldyBEYXRlKDIwMDUsIDAsIDIpLCAxKVxuICogLy89PiBTdW4gRGVjIDI2IDIwMDQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU2V0IHRoZSAxc3Qgd2VlayB0byAyIEphbnVhcnkgMjAwNSxcbiAqIC8vIGlmIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLFxuICogLy8gYW5kIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyIGFsd2F5cyBjb250YWlucyA0IEphbnVhcnk6XG4gKiBjb25zdCByZXN1bHQgPSBzZXRXZWVrKG5ldyBEYXRlKDIwMDUsIDAsIDIpLCAxLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMSxcbiAqICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiA0XG4gKiB9KVxuICogLy89PiBTdW4gSmFuIDQgMjAwNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0V2VlayhkYXRlLCB3ZWVrLCBvcHRpb25zKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBkaWZmID0gZ2V0V2VlayhfZGF0ZSwgb3B0aW9ucykgLSB3ZWVrO1xuICBfZGF0ZS5zZXREYXRlKF9kYXRlLmdldERhdGUoKSAtIGRpZmYgKiA3KTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHNldFdlZWs7XG4iLCJpbXBvcnQgeyBzdGFydE9mV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZJU09XZWVrXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhbiBJU08gd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYW4gSVNPIHdlZWtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZklTT1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mSVNPV2VlayhkYXRlKSB7XG4gIHJldHVybiBzdGFydE9mV2VlayhkYXRlLCB7IHdlZWtTdGFydHNPbjogMSB9KTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mSVNPV2VlaztcbiIsImltcG9ydCB7IGdldElTT1dlZWtZZWFyIH0gZnJvbSBcIi4vZ2V0SVNPV2Vla1llYXIubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mSVNPV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZJU09XZWVrLm1qc1wiO1xuaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZklTT1dlZWtZZWFyXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWstTnVtYmVyaW5nIFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLFxuICogd2hpY2ggYWx3YXlzIHN0YXJ0cyAzIGRheXMgYmVmb3JlIHRoZSB5ZWFyJ3MgZmlyc3QgVGh1cnNkYXkuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgMiBKdWx5IDIwMDU6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mSVNPV2Vla1llYXIobmV3IERhdGUoMjAwNSwgNiwgMikpXG4gKiAvLz0+IE1vbiBKYW4gMDMgMjAwNSAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZklTT1dlZWtZZWFyKGRhdGUpIHtcbiAgY29uc3QgeWVhciA9IGdldElTT1dlZWtZZWFyKGRhdGUpO1xuICBjb25zdCBmb3VydGhPZkphbnVhcnkgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBmb3VydGhPZkphbnVhcnkuc2V0RnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIHN0YXJ0T2ZJU09XZWVrKGZvdXJ0aE9mSmFudWFyeSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZklTT1dlZWtZZWFyO1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgc3RhcnRPZldlZWt9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTdW4gQXVnIDMxIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mV2VlayhkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgY29uc3Qgd2Vla1N0YXJ0c09uID1cbiAgICBvcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbiA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgMDtcblxuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgZGF5ID0gX2RhdGUuZ2V0RGF5KCk7XG4gIGNvbnN0IGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuXG4gIF9kYXRlLnNldERhdGUoX2RhdGUuZ2V0RGF0ZSgpIC0gZGlmZik7XG4gIF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZldlZWs7XG4iLCJpbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5tanNcIjtcbmltcG9ydCB7IGdldFdlZWtZZWFyIH0gZnJvbSBcIi4vZ2V0V2Vla1llYXIubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrLm1qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgc3RhcnRPZldlZWtZZWFyfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtZZWFyXG4gKiBAY2F0ZWdvcnkgV2Vlay1OdW1iZXJpbmcgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqIFRoZSBleGFjdCBjYWxjdWxhdGlvbiBkZXBlbmRzIG9uIHRoZSB2YWx1ZXMgb2ZcbiAqIGBvcHRpb25zLndlZWtTdGFydHNPbmAgKHdoaWNoIGlzIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrKVxuICogYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKHdoaWNoIGlzIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXMgYWx3YXlzIGluXG4gKiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhcilcbiAqXG4gKiBXZWVrIG51bWJlcmluZzogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvV2VlayNUaGVfSVNPX3dlZWtfZGF0ZV9zeXN0ZW1cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhbiBhIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIDIgSnVseSAyMDA1IHdpdGggZGVmYXVsdCBzZXR0aW5nczpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrWWVhcihuZXcgRGF0ZSgyMDA1LCA2LCAyKSlcbiAqIC8vPT4gU3VuIERlYyAyNiAyMDA0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIDIgSnVseSAyMDA1XG4gKiAvLyBpZiBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB3ZWVrXG4gKiAvLyBhbmQgNCBKYW51YXJ5IGlzIGFsd2F5cyBpbiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhcjpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrWWVhcihuZXcgRGF0ZSgyMDA1LCA2LCAyKSwge1xuICogICB3ZWVrU3RhcnRzT246IDEsXG4gKiAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogNFxuICogfSlcbiAqIC8vPT4gTW9uIEphbiAwMyAyMDA1IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mV2Vla1llYXIoZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIGNvbnN0IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9XG4gICAgb3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgb3B0aW9ucz8ubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIDE7XG5cbiAgY29uc3QgeWVhciA9IGdldFdlZWtZZWFyKGRhdGUsIG9wdGlvbnMpO1xuICBjb25zdCBmaXJzdFdlZWsgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBmaXJzdFdlZWsuc2V0RnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBfZGF0ZSA9IHN0YXJ0T2ZXZWVrKGZpcnN0V2Vlaywgb3B0aW9ucyk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mV2Vla1llYXI7XG4iLCIvKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gYXJndW1lbnQgLSBUaGUgdmFsdWUgdG8gY29udmVydFxuICpcbiAqIEByZXR1cm5zIFRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIGNvbnN0IGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKFxuICAgIGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fFxuICAgICh0eXBlb2YgYXJndW1lbnQgPT09IFwib2JqZWN0XCIgJiYgYXJnU3RyID09PSBcIltvYmplY3QgRGF0ZV1cIilcbiAgKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBhcmd1bWVudC5jb25zdHJ1Y3RvcigrYXJndW1lbnQpO1xuICB9IGVsc2UgaWYgKFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJudW1iZXJcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IE51bWJlcl1cIiB8fFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJzdHJpbmdcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IFN0cmluZ11cIlxuICApIHtcbiAgICAvLyBUT0RPOiBDYW4gd2UgZ2V0IHJpZCBvZiBhcz9cbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgdG9EYXRlO1xuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgdHJhbnNwb3NlXG4gKiBAY2F0ZWdvcnkgR2VuZXJpYyBIZWxwZXJzXG4gKiBAc3VtbWFyeSBUcmFuc3Bvc2UgdGhlIGRhdGUgdG8gdGhlIGdpdmVuIGNvbnN0cnVjdG9yLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIGZ1bmN0aW9uIHRyYW5zcG9zZXMgdGhlIGRhdGUgdG8gdGhlIGdpdmVuIGNvbnN0cnVjdG9yLiBJdCBoZWxwcyB5b3VcbiAqIHRvIHRyYW5zcG9zZSB0aGUgZGF0ZSBpbiB0aGUgc3lzdGVtIHRpbWUgem9uZSB0byBzYXkgYFVUQ0RhdGVgIG9yIGFueSBvdGhlclxuICogZGF0ZSBleHRlbnNpb24uXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlSW5wdXRUeXBlIC0gVGhlIGlucHV0IGBEYXRlYCB0eXBlIGRlcml2ZWQgZnJvbSB0aGUgcGFzc2VkIGFyZ3VtZW50LlxuICogQHR5cGVQYXJhbSBEYXRlT3V0cHV0VHlwZSAtIFRoZSBvdXRwdXQgYERhdGVgIHR5cGUgZGVyaXZlZCBmcm9tIHRoZSBwYXNzZWQgY29uc3RydWN0b3IuXG4gKlxuICogQHBhcmFtIGZyb21EYXRlIC0gVGhlIGRhdGUgdG8gdXNlIHZhbHVlcyBmcm9tXG4gKiBAcGFyYW0gY29uc3RydWN0b3IgLSBUaGUgZGF0ZSBjb25zdHJ1Y3RvciB0byB1c2VcbiAqXG4gKiBAcmV0dXJucyBEYXRlIHRyYW5zcG9zZWQgdG8gdGhlIGdpdmVuIGNvbnN0cnVjdG9yXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENyZWF0ZSBKdWx5IDEwLCAyMDIyIDAwOjAwIGluIGxvY2FsZSB0aW1lIHpvbmVcbiAqIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgyMDIyLCA2LCAxMClcbiAqIC8vPT4gJ1N1biBKdWwgMTAgMjAyMiAwMDowMDowMCBHTVQrMDgwMCAoU2luZ2Fwb3JlIFN0YW5kYXJkIFRpbWUpJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUcmFuc3Bvc2UgdGhlIGRhdGUgdG8gSnVseSAxMCwgMjAyMiAwMDowMCBpbiBVVENcbiAqIHRyYW5zcG9zZShkYXRlLCBVVENEYXRlKVxuICogLy89PiAnU3VuIEp1bCAxMCAyMDIyIDAwOjAwOjAwIEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSknXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc3Bvc2UoZnJvbURhdGUsIGNvbnN0cnVjdG9yKSB7XG4gIGNvbnN0IGRhdGUgPVxuICAgIGNvbnN0cnVjdG9yIGluc3RhbmNlb2YgRGF0ZVxuICAgICAgPyBjb25zdHJ1Y3RGcm9tKGNvbnN0cnVjdG9yLCAwKVxuICAgICAgOiBuZXcgY29uc3RydWN0b3IoMCk7XG4gIGRhdGUuc2V0RnVsbFllYXIoXG4gICAgZnJvbURhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICBmcm9tRGF0ZS5nZXRNb250aCgpLFxuICAgIGZyb21EYXRlLmdldERhdGUoKSxcbiAgKTtcbiAgZGF0ZS5zZXRIb3VycyhcbiAgICBmcm9tRGF0ZS5nZXRIb3VycygpLFxuICAgIGZyb21EYXRlLmdldE1pbnV0ZXMoKSxcbiAgICBmcm9tRGF0ZS5nZXRTZWNvbmRzKCksXG4gICAgZnJvbURhdGUuZ2V0TWlsbGlzZWNvbmRzKCksXG4gICk7XG4gIHJldHVybiBkYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHRyYW5zcG9zZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFRvZG8gZnJvbSBcIi4vdG9kb3NcIjtcbmltcG9ydCBOb3RlIGZyb20gXCIuL25vdGVzXCI7XG5pbXBvcnQgeyBDaGVja2xpc3QsIENoZWNrIH0gZnJvbSBcIi4vY2hlY2tsaXN0c1wiO1xuaW1wb3J0IHsgUHJvamVjdCwgUHJvamVjdFdyYXBwZXIgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgcnVuVGVzdHNUb2RvcywgcnVuVGVzdHNQcm9qZWN0cywgcnVuVGVzdERlbGV0ZSwgcnVuVGVzdFN0b3JhZ2UgfSBmcm9tIFwiLi90ZXN0c1wiO1xuXG4vLyBydW5UZXN0c1RvZG9zKCk7XG4vLyBydW5UZXN0c1Byb2plY3RzKCk7XG4vLyBydW5UZXN0RGVsZXRlKCk7XG4vLyBydW5UZXN0U3RvcmFnZSgpO1xuXG5jb25zdCBwcm9qZWN0SG9tZSA9IG5ldyBQcm9qZWN0KCdIb21lJyk7XG5jb25zdCBwcm9qZWN0VG9kb3MgPSBuZXcgUHJvamVjdCgnVG8tZG9zJyk7XG5jb25zdCBwcm9qZWN0Tm90ZXMgPSBuZXcgUHJvamVjdCgnTm90ZXMnKTtcbmNvbnN0IHByb2plY3RDaGVja2xpc3RzID0gbmV3IFByb2plY3QoJ0NoZWNrbGlzdHMnKTtcbmNvbnN0IHByb2plY3RUb2RheSA9IG5ldyBQcm9qZWN0KCdUb2RheScpO1xubGV0IHdyYXBwZXIgPSBuZXcgUHJvamVjdFdyYXBwZXIoKTtcblxud3JhcHBlci5hZGRQcm9qZWN0KHByb2plY3RIb21lKTtcbndyYXBwZXIuYWRkUHJvamVjdChwcm9qZWN0VG9kb3MpO1xud3JhcHBlci5hZGRQcm9qZWN0KHByb2plY3ROb3Rlcyk7XG53cmFwcGVyLmFkZFByb2plY3QocHJvamVjdENoZWNrbGlzdHMpO1xud3JhcHBlci5hZGRQcm9qZWN0KHByb2plY3RUb2RheSk7XG5cbmNvbnN0IHRvZG9EZWZhdWx0MSA9IG5ldyBUb2RvKCdUaGlzIGlzIGEgVG8tZG8nLCAnWW91IGNhbiBjbGljayB0aGUgY2hlY2tib3ggdG8gbWFyayBpdCBhcyBmaW5pc2hlZCcsICcxMi8wNC8yMDI0JywgJ21pZCcpO1xuY29uc3Qgbm90ZURlZmF1bHQxID0gbmV3IE5vdGUoJ1RoaXMgaXMgYSBub3RlJywgJ1lvdSBjYW4gd3JpdGUgYW55dGhpbmcgeW91IHdhbnQsIG5vIGR1ZSBkYXRlIGFuZCBubyBwcmlvcml0eScpO1xuY29uc3QgY2hlY2tEZWZhdWx0MSA9IG5ldyBDaGVjaygnVGhpcyBpcyBhIGNoZWNrbGlzdCBpdGVtLCBjbGljayB0aGUgY2hlY2tib3ggdG8gbWFyayBpdCBhcyBmaW5pc2hlZCcpO1xubGV0IGNoZWNrRGVmYXVsdEFycmF5ID0gW2NoZWNrRGVmYXVsdDFdO1xuY29uc3QgY2hlY2tsaXN0RGVmYXVsdDEgPSBuZXcgQ2hlY2tsaXN0KCdUaGlzIGlzIGEgY2hlY2tsaXN0JywgJ0l0IGNhbiBjb250YWluIG1hbnkgdGFza3MnLCBjaGVja0RlZmF1bHRBcnJheSwgJzEyLzA0LzIwMjQnLCAnbWlkJyk7XG5cbnByb2plY3RIb21lLmFkZEl0ZW0odG9kb0RlZmF1bHQxKTtcbnByb2plY3RIb21lLmFkZEl0ZW0oY2hlY2tsaXN0RGVmYXVsdDEpO1xuXG5wcm9qZWN0VG9kb3MuYWRkSXRlbSh0b2RvRGVmYXVsdDEpO1xuXG5wcm9qZWN0Tm90ZXMuYWRkSXRlbShub3RlRGVmYXVsdDEpO1xuXG5wcm9qZWN0Q2hlY2tsaXN0cy5hZGRJdGVtKGNoZWNrbGlzdERlZmF1bHQxKTtcblxuY29uc3QgZGl2UHJvamVjdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpdi1wcm9qZWN0LWJ1dHRvbnNcIik7XG5jb25zdCBpdGVtc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaXRlbXNcIik7XG5cbmxldCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RIb21lO1xuXG5mdW5jdGlvbiBTY3JlZW5Db250cm9sbGVyKCkge1xuICAgIGZ1bmN0aW9uIHJlbmRlclByb2plY3RCdXR0b25zKCkge1xuICAgICAgICBkaXZQcm9qZWN0QnV0dG9ucy5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICB3cmFwcGVyLnByb2plY3RzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBwcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gZWxlbWVudC5uYW1lO1xuICAgICAgICAgICAgcHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpKTtcbiAgICAgICAgICAgIHByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVuZGVyUHJvamVjdEl0ZW1zKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGxldCBpZCA9IHByb2plY3RCdXR0b24uZ2V0QXR0cmlidXRlKFwiaWRcIik7XG4gICAgICAgICAgICAgICAgY3VycmVudFByb2plY3QgPSB3cmFwcGVyLnByb2plY3RzW2lkXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGl2UHJvamVjdEJ1dHRvbnMuYXBwZW5kQ2hpbGQocHJvamVjdEJ1dHRvbik7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlclByb2plY3RJdGVtcyhwcm9qZWN0KSB7XG4gICAgICAgIGl0ZW1zRGl2LnJlcGxhY2VDaGlsZHJlbigpO1xuICAgICAgICBwcm9qZWN0Lml0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBvYmplY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG9iamVjdERpdi50ZXh0Q29udGVudCA9IGVsZW1lbnQudGl0bGU7XG4gICAgICAgICAgICBpdGVtc0Rpdi5hcHBlbmRDaGlsZChvYmplY3REaXYpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3B1bGF0ZVN0b3JhZ2UoKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd3cmFwcGVyJywgSlNPTi5zdHJpbmdpZnkod3JhcHBlcikpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJldHJpZXZlU3RvcmFnZSgpIHtcbiAgICAgICAgbGV0IHNhdmVkV3JhcHBlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3dyYXBwZXInKSk7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihzYXZlZFdyYXBwZXIsIFByb2plY3RXcmFwcGVyLnByb3RvdHlwZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHNhdmVkV3JhcHBlcik7XG4gICAgICAgIHdyYXBwZXIgPSBzYXZlZFdyYXBwZXI7XG4gICAgICAgIHNhdmVkV3JhcHBlclsncHJvamVjdHMnXS5mb3JFYWNoKHAgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHAsIFByb2plY3QucHJvdG90eXBlKTtcbiAgICAgICAgICAgIHJlYnVpbGRJdGVtcyhwWydpdGVtcyddKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVidWlsZEl0ZW1zKGl0ZW1zKSB7XG4gICAgICAgIGlmIChpdGVtcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5pZCA9PT0gJ3RvZG8nKSB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihpdGVtLCBUb2RvLnByb3RvdHlwZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLmlkID09PSAnbm90ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGl0ZW0sIE5vdGUucHJvdG90eXBlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoaXRlbSwgQ2hlY2tsaXN0LnByb3RvdHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2hlY2tzLmZvckVhY2goKGNoZWNrKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoY2hlY2ssIENoZWNrLnByb3RvdHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYnV0dG9uTmV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tbmV3XCIpO1xuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1uZXctb2JqZWN0XCIpO1xuICAgIGJ1dHRvbk5ldy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZGlhbG9nLnNob3dNb2RhbCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYnV0dG9uQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1jbG9zZVwiKTtcbiAgICBidXR0b25DbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZGlhbG9nLmNsb3NlKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBmb3JtQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1jb250ZW50XCIpO1xuICAgIGNvbnN0IGZvcm1Ub2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgY29uc3QgZm9ybU5vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBjb25zdCBmb3JtQ2hlY2tsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgY29uc3QgZm9ybVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBjb25zdCBidXR0b25OZXdUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tbmV3LXRvZG9cIik7XG4gICAgYnV0dG9uTmV3VG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZm9ybUNvbnRlbnQucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgICAgIGZvcm1Ub2RvLnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gICAgICAgIGNvbnN0IGxhYmVsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGxhYmVsVGl0bGUudGV4dENvbnRlbnQgPSBcIlRvLWRvIHRpdGxlXCI7XG4gICAgICAgIGxhYmVsVGl0bGUuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidG9kby10aXRsZVwiKTtcbiAgICAgICAgY29uc3QgaW5wdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgaW5wdXRUaXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICAgICAgaW5wdXRUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tdGl0bGVcIik7XG4gICAgICAgIGlucHV0VGl0bGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRvZG8tdGl0bGVcIik7XG4gICAgICAgIGlucHV0VGl0bGUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJUaXRsZVwiKTtcblxuICAgICAgICBjb25zdCBsYWJlbERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGxhYmVsRGVzYy50ZXh0Q29udGVudCA9IFwiVG8tZG8gZGVzY3JpcHRpb25cIjtcbiAgICAgICAgbGFiZWxEZXNjLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRvZG8tZGVzY3JpcHRpb25cIik7XG4gICAgICAgIGNvbnN0IGlucHV0RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgaW5wdXREZXNjLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgICAgICBpbnB1dERlc2Muc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLWRlc2NyaXB0aW9uXCIpO1xuICAgICAgICBpbnB1dERlc2Muc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRvZG8tZGVzY3JpcHRpb25cIik7XG4gICAgICAgIGlucHV0RGVzYy5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkRlc2NyaXB0aW9uXCIpO1xuXG4gICAgICAgIGNvbnN0IGxhYmVsRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgbGFiZWxEYXRlLnRleHRDb250ZW50ID0gXCJEdWUgZGF0ZVwiO1xuICAgICAgICBsYWJlbERhdGUuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidG9kby1kYXRlXCIpO1xuICAgICAgICBjb25zdCBpbnB1dERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGlucHV0RGF0ZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICAgICAgaW5wdXREYXRlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby1kYXRlXCIpO1xuICAgICAgICBpbnB1dERhdGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRvZG8tZGF0ZVwiKTtcbiAgICAgICAgaW5wdXREYXRlLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiZGQvbW0veXl5eVwiKTtcblxuICAgICAgICBsZXQgcHJpb3JpdHkgPSBcImxvd1wiO1xuICAgICAgICBjb25zdCBidXR0b25Qcmlvcml0eUxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGJ1dHRvblByaW9yaXR5TG93LnRleHRDb250ZW50ID0gXCJMb3dcIjtcbiAgICAgICAgYnV0dG9uUHJpb3JpdHlMb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBwcmlvcml0eSA9IFwibG93XCI7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvblByaW9yaXR5TWlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYnV0dG9uUHJpb3JpdHlNaWQudGV4dENvbnRlbnQgPSBcIk1pZFwiO1xuICAgICAgICBidXR0b25Qcmlvcml0eU1pZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHByaW9yaXR5ID0gXCJtaWRcIjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgYnV0dG9uUHJpb3JpdHlIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYnV0dG9uUHJpb3JpdHlIaWdoLnRleHRDb250ZW50ID0gXCJIaWdoXCI7XG4gICAgICAgIGJ1dHRvblByaW9yaXR5SGlnaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHByaW9yaXR5ID0gXCJoaWdoXCI7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvblN1Ym1pdFRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBidXR0b25TdWJtaXRUb2RvLnRleHRDb250ZW50ID0gXCJBZGQgbmV3IHRvLWRvXCI7XG5cbiAgICAgICAgZm9ybVRvZG8uYXBwZW5kQ2hpbGQobGFiZWxUaXRsZSk7XG4gICAgICAgIGZvcm1Ub2RvLmFwcGVuZENoaWxkKGlucHV0VGl0bGUpO1xuICAgICAgICBmb3JtVG9kby5hcHBlbmRDaGlsZChsYWJlbERlc2MpO1xuICAgICAgICBmb3JtVG9kby5hcHBlbmRDaGlsZChpbnB1dERlc2MpO1xuICAgICAgICBmb3JtVG9kby5hcHBlbmRDaGlsZChsYWJlbERhdGUpO1xuICAgICAgICBmb3JtVG9kby5hcHBlbmRDaGlsZChpbnB1dERhdGUpO1xuICAgICAgICBmb3JtVG9kby5hcHBlbmRDaGlsZChidXR0b25Qcmlvcml0eUxvdyk7XG4gICAgICAgIGZvcm1Ub2RvLmFwcGVuZENoaWxkKGJ1dHRvblByaW9yaXR5TWlkKTtcbiAgICAgICAgZm9ybVRvZG8uYXBwZW5kQ2hpbGQoYnV0dG9uUHJpb3JpdHlIaWdoKTtcbiAgICAgICAgZm9ybVRvZG8uYXBwZW5kQ2hpbGQoYnV0dG9uU3VibWl0VG9kbyk7XG4gICAgICAgIGZvcm1Db250ZW50LmFwcGVuZENoaWxkKGZvcm1Ub2RvKTtcblxuICAgICAgICBmb3JtVG9kby5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZS50YXJnZXQpO1xuXG4gICAgICAgICAgICBjb25zdCBmb3JtRGF0YU9iaiA9IE9iamVjdC5mcm9tRW50cmllcyhmb3JtRGF0YS5lbnRyaWVzKCkpO1xuICAgICAgICAgICAgZGlhbG9nLmNsb3NlKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld1RvZG8gPSBuZXcgVG9kbyhcbiAgICAgICAgICAgICAgICBmb3JtRGF0YU9ialtcInRvZG8tdGl0bGVcIl0sIFxuICAgICAgICAgICAgICAgIGZvcm1EYXRhT2JqW1widG9kby1kZXNjcmlwdGlvblwiXSxcbiAgICAgICAgICAgICAgICBmb3JtRGF0YU9ialtcInRvZG8tZGF0ZVwiXSxcbiAgICAgICAgICAgICAgICBwcmlvcml0eVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY3VycmVudFByb2plY3QuYWRkSXRlbShuZXdUb2RvKTtcbiAgICAgICAgICAgIHJlbmRlclByb2plY3RCdXR0b25zKCk7XG4gICAgICAgICAgICByZW5kZXJQcm9qZWN0SXRlbXMoY3VycmVudFByb2plY3QpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBidXR0b25OZXdOb3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tbmV3LW5vdGVcIik7XG4gICAgYnV0dG9uTmV3Tm90ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZm9ybUNvbnRlbnQucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgICAgIGZvcm1Ob3RlLnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gICAgICAgIGNvbnN0IGxhYmVsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGxhYmVsVGl0bGUudGV4dENvbnRlbnQgPSBcIk5vdGUgdGl0bGVcIjtcbiAgICAgICAgbGFiZWxUaXRsZS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJub3RlLXRpdGxlXCIpO1xuICAgICAgICBjb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBpbnB1dFRpdGxlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgICAgICBpbnB1dFRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibm90ZS10aXRsZVwiKTtcbiAgICAgICAgaW5wdXRUaXRsZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibm90ZS10aXRsZVwiKTtcbiAgICAgICAgaW5wdXRUaXRsZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlRpdGxlXCIpO1xuXG4gICAgICAgIGNvbnN0IGxhYmVsRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgbGFiZWxEZXNjLnRleHRDb250ZW50ID0gXCJOb3RlIGRlc2NyaXB0aW9uXCI7XG4gICAgICAgIGxhYmVsRGVzYy5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJub3RlLWRlc2NyaXB0aW9uXCIpO1xuICAgICAgICBjb25zdCBpbnB1dERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGlucHV0RGVzYy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICAgICAgaW5wdXREZXNjLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibm90ZS1kZXNjcmlwdGlvblwiKTtcbiAgICAgICAgaW5wdXREZXNjLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJub3RlLWRlc2NyaXB0aW9uXCIpO1xuICAgICAgICBpbnB1dERlc2Muc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJEZXNjcmlwdGlvblwiKTtcblxuICAgICAgICBjb25zdCBidXR0b25TdWJtaXROb3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYnV0dG9uU3VibWl0Tm90ZS50ZXh0Q29udGVudCA9IFwiQWRkIG5ldyBub3RlXCI7XG5cbiAgICAgICAgZm9ybU5vdGUuYXBwZW5kQ2hpbGQobGFiZWxUaXRsZSk7XG4gICAgICAgIGZvcm1Ob3RlLmFwcGVuZENoaWxkKGlucHV0VGl0bGUpO1xuICAgICAgICBmb3JtTm90ZS5hcHBlbmRDaGlsZChsYWJlbERlc2MpO1xuICAgICAgICBmb3JtTm90ZS5hcHBlbmRDaGlsZChpbnB1dERlc2MpO1xuICAgICAgICBmb3JtTm90ZS5hcHBlbmRDaGlsZChidXR0b25TdWJtaXROb3RlKTtcbiAgICAgICAgZm9ybUNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ybU5vdGUpO1xuXG4gICAgICAgIGZvcm1Ob3RlLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShlLnRhcmdldCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhT2JqID0gT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhLmVudHJpZXMoKSk7XG4gICAgICAgICAgICBkaWFsb2cuY2xvc2UoKTtcblxuICAgICAgICAgICAgY29uc3QgbmV3Tm90ZSA9IG5ldyBOb3RlKFxuICAgICAgICAgICAgICAgIGZvcm1EYXRhT2JqW1wibm90ZS10aXRsZVwiXSwgXG4gICAgICAgICAgICAgICAgZm9ybURhdGFPYmpbXCJub3RlLWRlc2NyaXB0aW9uXCJdXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdC5hZGRJdGVtKG5ld05vdGUpO1xuICAgICAgICAgICAgcmVuZGVyUHJvamVjdEJ1dHRvbnMoKTtcbiAgICAgICAgICAgIHJlbmRlclByb2plY3RJdGVtcyhjdXJyZW50UHJvamVjdCk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgICAgICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGJ1dHRvbk5ld0NoZWNrbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLW5ldy1jaGVja2xpc3RcIik7XG4gICAgYnV0dG9uTmV3Q2hlY2tsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBmb3JtQ29udGVudC5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICAgICAgZm9ybUNoZWNrbGlzdC5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICAgICAgICBjb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBpbnB1dFRpdGxlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgICAgICBpbnB1dFRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2hlY2tsaXN0LXRpdGxlXCIpO1xuICAgICAgICBpbnB1dFRpdGxlLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiVGl0bGVcIik7XG5cbiAgICAgICAgY29uc3QgaW5wdXREZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBpbnB1dERlc2Muc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgICAgIGlucHV0RGVzYy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNoZWNrbGlzdC1kZXNjcmlwdGlvblwiKTtcbiAgICAgICAgaW5wdXREZXNjLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRGVzY3JpcHRpb25cIik7XG5cbiAgICAgICAgY29uc3QgaW5wdXREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBpbnB1dERhdGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgICAgIGlucHV0RGF0ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNoZWNrbGlzdC1kYXRlXCIpO1xuICAgICAgICBpbnB1dERhdGUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJkZC9tbS95eXl5XCIpO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvblByaW9yaXR5TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYnV0dG9uUHJpb3JpdHlMb3cudGV4dENvbnRlbnQgPSBcIkxvd1wiO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvblByaW9yaXR5TWlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYnV0dG9uUHJpb3JpdHlNaWQudGV4dENvbnRlbnQgPSBcIk1pZFwiO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvblByaW9yaXR5SGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGJ1dHRvblByaW9yaXR5SGlnaC50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xuXG4gICAgICAgIGNvbnN0IGRpdkNoZWNrSXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXZDaGVja0l0ZW1zLmNsYXNzTmFtZSA9IFwiZGl2LWNoZWNrLWl0ZW1zXCI7XG5cbiAgICAgICAgY29uc3QgaW5wdXRDaGVja0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGlucHV0Q2hlY2tEZXNjLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgICAgICBpbnB1dENoZWNrRGVzYy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNoZWNrLWRlc2NyaXB0aW9uXCIpO1xuICAgICAgICBpbnB1dENoZWNrRGVzYy5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkRlc2NyaXB0aW9uXCIpO1xuICAgICAgICBkaXZDaGVja0l0ZW1zLmFwcGVuZENoaWxkKGlucHV0Q2hlY2tEZXNjKTtcblxuICAgICAgICBjb25zdCBidXR0b25BZGRDaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGJ1dHRvbkFkZENoZWNrLnRleHRDb250ZW50ID0gXCJBZGQgaXRlbVwiO1xuICAgICAgICBidXR0b25BZGRDaGVjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0Q2hlY2tEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgaW5wdXRDaGVja0Rlc2Muc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgICAgICAgICBpbnB1dENoZWNrRGVzYy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNoZWNrLWRlc2NyaXB0aW9uXCIpO1xuICAgICAgICAgICAgaW5wdXRDaGVja0Rlc2Muc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJEZXNjcmlwdGlvblwiKTtcbiAgICAgICAgICAgIGRpdkNoZWNrSXRlbXMuYXBwZW5kQ2hpbGQoaW5wdXRDaGVja0Rlc2MpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBidXR0b25TdWJtaXRDaGVja2xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBidXR0b25TdWJtaXRDaGVja2xpc3QudGV4dENvbnRlbnQgPSBcIkFkZCBuZXcgY2hlY2tsaXN0XCI7XG5cbiAgICAgICAgZm9ybUNoZWNrbGlzdC5hcHBlbmRDaGlsZChpbnB1dFRpdGxlKTtcbiAgICAgICAgZm9ybUNoZWNrbGlzdC5hcHBlbmRDaGlsZChpbnB1dERlc2MpO1xuICAgICAgICBmb3JtQ2hlY2tsaXN0LmFwcGVuZENoaWxkKGlucHV0RGF0ZSk7XG4gICAgICAgIGZvcm1DaGVja2xpc3QuYXBwZW5kQ2hpbGQoYnV0dG9uUHJpb3JpdHlMb3cpO1xuICAgICAgICBmb3JtQ2hlY2tsaXN0LmFwcGVuZENoaWxkKGJ1dHRvblByaW9yaXR5TWlkKTtcbiAgICAgICAgZm9ybUNoZWNrbGlzdC5hcHBlbmRDaGlsZChidXR0b25Qcmlvcml0eUhpZ2gpO1xuICAgICAgICBmb3JtQ2hlY2tsaXN0LmFwcGVuZENoaWxkKGRpdkNoZWNrSXRlbXMpO1xuICAgICAgICBmb3JtQ2hlY2tsaXN0LmFwcGVuZENoaWxkKGJ1dHRvbkFkZENoZWNrKTtcbiAgICAgICAgZm9ybUNoZWNrbGlzdC5hcHBlbmRDaGlsZChidXR0b25TdWJtaXRDaGVja2xpc3QpO1xuICAgICAgICBmb3JtQ29udGVudC5hcHBlbmRDaGlsZChmb3JtQ2hlY2tsaXN0KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGJ1dHRvbk5ld1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1uZXctcHJvamVjdFwiKTtcbiAgICBidXR0b25OZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBmb3JtQ29udGVudC5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICAgICAgZm9ybVByb2plY3QucmVwbGFjZUNoaWxkcmVuKCk7XG5cbiAgICAgICAgY29uc3QgbGFiZWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgbGFiZWxUaXRsZS50ZXh0Q29udGVudCA9IFwiUHJvamVjdCB0aXRsZVwiO1xuICAgICAgICBsYWJlbFRpdGxlLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByb2plY3QtdGl0bGVcIik7XG4gICAgICAgIGNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGlucHV0VGl0bGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgICAgIGlucHV0VGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0LXRpdGxlXCIpO1xuICAgICAgICBpbnB1dFRpdGxlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcm9qZWN0LXRpdGxlXCIpO1xuICAgICAgICBpbnB1dFRpdGxlLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiVGl0bGVcIik7XG5cbiAgICAgICAgY29uc3QgYnV0dG9uU3VibWl0UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGJ1dHRvblN1Ym1pdFByb2plY3QudGV4dENvbnRlbnQgPSBcIkFkZCBuZXcgcHJvamVjdFwiO1xuICAgICAgICBidXR0b25TdWJtaXRQcm9qZWN0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG5cbiAgICAgICAgZm9ybVByb2plY3QuYXBwZW5kQ2hpbGQobGFiZWxUaXRsZSk7XG4gICAgICAgIGZvcm1Qcm9qZWN0LmFwcGVuZENoaWxkKGlucHV0VGl0bGUpO1xuICAgICAgICBmb3JtUHJvamVjdC5hcHBlbmRDaGlsZChidXR0b25TdWJtaXRQcm9qZWN0KTtcbiAgICAgICAgZm9ybUNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ybVByb2plY3QpO1xuXG4gICAgICAgIGZvcm1Qcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShlLnRhcmdldCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhT2JqID0gT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhLmVudHJpZXMoKSk7XG4gICAgICAgICAgICBkaWFsb2cuY2xvc2UoKTtcblxuICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KGZvcm1EYXRhT2JqW1wicHJvamVjdC10aXRsZVwiXSk7XG5cbiAgICAgICAgICAgIHdyYXBwZXIuYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICAgICAgICAgIHJlbmRlclByb2plY3RCdXR0b25zKCk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgICAgICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBcbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCd3cmFwcGVyJykpIHtcbiAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0cmlldmVTdG9yYWdlKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyUHJvamVjdEJ1dHRvbnMoKTtcbiAgICByZW5kZXJQcm9qZWN0SXRlbXMod3JhcHBlci5wcm9qZWN0c1swXSk7XG59XG5cblNjcmVlbkNvbnRyb2xsZXIoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=