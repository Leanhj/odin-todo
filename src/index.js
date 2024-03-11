import Todo from "./todos";
import Note from "./notes";
import Checklist from "./checklists";
import Check from "./checks";

const todoTest = new Todo('Todo 1', 'First todo', 'tomorrow', 'high');
todoTest.log();
todoTest.editTitle('New title');
todoTest.editDescription('Edited description');
todoTest.editDueDate('not tomorrow');
todoTest.editPriority('mid');
todoTest.editStatus();
todoTest.log();

const noteTest = new Note('Note 1', 'First note');
noteTest.log();
noteTest.editTitle('New note title');
noteTest.editDescription('nevermind');
noteTest.log();

const check1 = new Check('check 1');
const check2 = new Check('check 2');
check2.editState();
let checkArray = [check1, check2];
const checklistTest = new Checklist('Checklist 1', 'First checklist', checkArray, 'next week', 'low');
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