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

const divProjectButtons = document.querySelector(".div-project-buttons");
const itemsDiv = document.querySelector(".items");

let currentProject = projectHome;

function ScreenController() {
    function renderProjectButtons() {
        divProjectButtons.replaceChildren();
        wrapper.projects.forEach(element => {
            const projectButton = document.createElement('button');
            projectButton.textContent = element.name;
            projectButton.addEventListener('click', () => {
                renderProjectItems(element);
            });
            divProjectButtons.appendChild(projectButton);
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
    const buttonNewTodo = document.querySelector(".button-new-todo");
    buttonNewTodo.addEventListener('click', () => {
        formContent.replaceChildren();

        const inputTitle = document.createElement("input");
        inputTitle.setAttribute("type", "text");
        inputTitle.setAttribute("id", "todo-title");
        inputTitle.setAttribute("placeholder", "Title");

        const inputDesc = document.createElement("input");
        inputDesc.setAttribute("type", "text");
        inputDesc.setAttribute("id", "todo-description");
        inputDesc.setAttribute("placeholder", "Description");

        const inputDate = document.createElement("input");
        inputDate.setAttribute("type", "text");
        inputDate.setAttribute("id", "todo-date");
        inputDate.setAttribute("placeholder", "dd/mm/yyyy");

        const buttonPriorityLow = document.createElement("button");
        buttonPriorityLow.textContent = "Low";

        const buttonPriorityMid = document.createElement("button");
        buttonPriorityMid.textContent = "Mid";

        const buttonPriorityHigh = document.createElement("button");
        buttonPriorityHigh.textContent = "High";

        const buttonSubmitTodo = document.createElement("button");
        buttonSubmitTodo.textContent = "Add new to-do";

        formContent.appendChild(inputTitle);
        formContent.appendChild(inputDesc);
        formContent.appendChild(inputDate);
        formContent.appendChild(buttonPriorityLow);
        formContent.appendChild(buttonPriorityMid);
        formContent.appendChild(buttonPriorityHigh);
        formContent.appendChild(buttonSubmitTodo);
    });

    const buttonNewNote = document.querySelector(".button-new-note");
    buttonNewNote.addEventListener('click', () => {
        formContent.replaceChildren();

        const inputTitle = document.createElement("input");
        inputTitle.setAttribute("type", "text");
        inputTitle.setAttribute("id", "todo-title");
        inputTitle.setAttribute("placeholder", "Title");

        const inputDesc = document.createElement("input");
        inputDesc.setAttribute("type", "text");
        inputDesc.setAttribute("id", "todo-description");
        inputDesc.setAttribute("placeholder", "Description");

        const buttonSubmitNote = document.createElement("button");
        buttonSubmitNote.textContent = "Add new note";

        formContent.appendChild(inputTitle);
        formContent.appendChild(inputDesc);
        formContent.appendChild(buttonSubmitNote);
    });

    const buttonNewChecklist = document.querySelector(".button-new-checklist");
    buttonNewChecklist.addEventListener('click', () => {
        formContent.replaceChildren();

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

        formContent.appendChild(inputTitle);
        formContent.appendChild(inputDesc);
        formContent.appendChild(inputDate);
        formContent.appendChild(buttonPriorityLow);
        formContent.appendChild(buttonPriorityMid);
        formContent.appendChild(buttonPriorityHigh);
        formContent.appendChild(divCheckItems);
        formContent.appendChild(buttonAddCheck);
        formContent.appendChild(buttonSubmitChecklist);
    });

    const buttonNewProject = document.querySelector(".button-new-project");
    buttonNewProject.addEventListener('click', () => {
        formContent.replaceChildren();

        const inputTitle = document.createElement("input");
        inputTitle.setAttribute("type", "text");
        inputTitle.setAttribute("id", "project-title");
        inputTitle.setAttribute("placeholder", "Title");

        const buttonSubmitProject = document.createElement("button");
        buttonSubmitProject.textContent = "Add new project";

        formContent.appendChild(inputTitle);
        formContent.appendChild(buttonSubmitProject);
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