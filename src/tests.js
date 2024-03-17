import Todo from "./todos";
import Note from "./notes";
import { Checklist, Check } from "./checklists";
import { Project, ProjectWrapper } from "./projects";

function runTestsTodos() {
    const todoTest = new Todo('Todo 1', 'First todo', '11/03/2024', 'high');
    todoTest.log();
    todoTest.editTitle('New title');
    todoTest.editDescription('Edited description');
    todoTest.editDueDate('12/03/2024');
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
    const checklistTest = new Checklist('Checklist 1', 'First checklist', checkArray, '18/03/2024', 'low');
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
    const projectTest = new Project('Study');
    const todo1 = new Todo('todo test', 'testing project', '17/03/2024', 'low');
    const check1 = new Check('check 1');
    let checkArray = [check1];
    const checklist1 = new Checklist('checklist test', 'testing project', checkArray, '13/03/2024', 'mid');

    projectTest.addItem(todo1);
    projectTest.addItem(checklist1);

    projectTest.log();
}

function runTestDelete() {
    const projectHome = new Project('Home');
    const projectTodos = new Project('Todo');
    const projectNotes = new Project('Notes');
    const projectChecklists = new Project('Checklists');
    const projectTest = new Project('Test');

    const todo1 = new Todo('Todo 1', 'First todo', '12/04/2024', 'high');
    const todo2 = new Todo('Todo 2', 'Second todo', '12/04/2024', 'high');
    const note1 = new Note('Note 1', 'First note');
    const check1 = new Check('check 1');
    let checkArray = [check1];
    const checklist1 = new Checklist('Checklist 1', 'First checklist', checkArray, '12/04/2024', 'high');

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
    const projectHome = new Project('Home');
    const projectTodos = new Project('Todo');
    const projectNotes = new Project('Notes');
    const projectChecklists = new Project('Checklists');
    const projectTest = new Project('Test');

    const todo1 = new Todo('Todo 1', 'First todo', '12/04/2024', 'high');
    const todo2 = new Todo('Todo 2', 'Second todo', '12/04/2024', 'high');
    const note1 = new Note('Note 1', 'First note');
    const check1 = new Check('check 1');
    let checkArray = [check1];
    const checklist1 = new Checklist('Checklist 1', 'First checklist', checkArray, '12/04/2024', 'high');

    projectHome.addItem(todo1);
    projectHome.addItem(todo2);
    projectHome.addItem(checklist1);

    projectTodos.addItem(todo1);
    projectTodos.addItem(todo2);

    projectNotes.addItem(note1);

    projectChecklists.addItem(checklist1);

    projectTest.addItem(todo1);
    projectTest.addItem(checklist1);

    let projects = new ProjectWrapper();
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
    projects = new ProjectWrapper();
    savedProjects['projects'].forEach(element => {
        projects.addProject(element);
    });
    projects.log();
}

export { runTestsTodos, runTestsProjects, runTestDelete, runTestStorage };