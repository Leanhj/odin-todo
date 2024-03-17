import Todo from "./todos";
import Note from "./notes";
import { Checklist, Check } from "./checklists";
import { Project, ProjectWrapper } from "./projects";
import { runTestsTodos, runTestsProjects, runTestDelete, runTestStorage } from "./tests";

// runTestsTodos();
// runTestsProjects();
// runTestDelete();
// runTestStorage();

const projectHome = new Project('Home');
const projectTodos = new Project('To-dos');
const projectNotes = new Project('Notes');
const projectChecklists = new Project('Checklists');
const projectToday = new Project('Today');
let wrapper = new ProjectWrapper();

wrapper.addProject(projectHome);
wrapper.addProject(projectTodos);
wrapper.addProject(projectNotes);
wrapper.addProject(projectChecklists);
wrapper.addProject(projectToday);

const todoDefault1 = new Todo('This is a To-do', 'You can click the checkbox to mark it as finished', '12/04/2024', 'mid');
const noteDefault1 = new Note('This is a note', 'You can write anything you want, no due date and no priority');
const checkDefault1 = new Check('This is a checklist item, click the checkbox to mark it as finished');
let checkDefaultArray = [checkDefault1];
const checklistDefault1 = new Checklist('This is a checklist', 'It can contain many tasks', checkDefaultArray, '12/04/2024', 'mid');

projectHome.addItem(todoDefault1);
projectHome.addItem(checklistDefault1);

projectTodos.addItem(todoDefault1);

projectNotes.addItem(noteDefault1);

projectChecklists.addItem(checklistDefault1);

const sidebar = document.querySelector(".sidebar");
const itemsDiv = document.querySelector(".items");

function ScreenController() {
    function renderSidebar() {
        sidebar.replaceChildren();
        wrapper.projects.forEach(element => {
            const projectButton = document.createElement('button');
            projectButton.textContent = element.name;
            projectButton.addEventListener('click', () => {
                renderProjectItems(element);
            });
            sidebar.appendChild(projectButton);
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
        console.log(savedWrapper);
        wrapper = new ProjectWrapper();
        savedWrapper['projects'].forEach(p => {
            const project = new Project(p.name);
            rebuildItems(project, p['items']);
            wrapper.addProject(project);
        });
    }

    function rebuildItems(project, items) {
        if (items.length !== 0) {
            let rebuilt = 0;
            items.forEach((item) => {
                if (item.id === 'todo') {
                    rebuilt = rebuildTodo(item);
                } else if (item.id === 'note') {
                    rebuilt = rebuildNote(item);
                } else {
                    rebuilt = rebuildChecklist(item);
                }
                project.addItem(rebuilt);
            });
        }
    }

    function rebuildTodo(reTodo) {
        let todo = new Todo(reTodo.title, reTodo.description, reTodo.dueDate, reTodo.priority);
        return todo;
    }

    function rebuildNote(reNote) {
        let note = new Note(reNote.title, reNote.description);
        return note;
    }

    function rebuildChecklist(reChecklist) {
        let checks = rebuildChecks(reChecklist.checks);
        let checklist = new Checklist(reChecklist.title, 
            reChecklist.description, 
            checks, 
            reChecklist.dueDate, 
            reChecklist.priority);
        return checklist;
    }

    function rebuildChecks(reChecks) {
        let checks = [];
        reChecks.forEach((c) => {
            const check = new Check(c.description);
            checks.push(check);
        });
        return checks;
    }
    
    if (!localStorage.getItem('wrapper')) {
        populateStorage();
    } else {
        retrieveStorage();
    }

    renderSidebar();
    renderProjectItems(wrapper.projects[0]);
}

ScreenController();