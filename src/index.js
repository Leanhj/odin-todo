import Todo from "./todos";
import Note from "./notes";
import { Checklist, Check } from "./checklists";
import Project from "./projects";
import { runTestsTodos, runTestsProjects, runTestDelete } from "./tests";

// runTestsTodos();
// runTestsProjects();
// runTestDelete();

const projectHome = new Project('Home');
const projectTodos = new Project('To-dos');
const projectNotes = new Project('Notes');
const projectChecklists = new Project('Checklists');
const projectToday = new Project('Today');
let projectArray = [projectHome, projectTodos, projectNotes, projectChecklists, projectToday];

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
        projectArray.forEach(element => {
            const projectDiv = document.createElement('button');
            projectDiv.textContent = element.name;
            sidebar.appendChild(projectDiv);
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
    
    renderSidebar();
    renderProjectItems(projectHome);
}

ScreenController();