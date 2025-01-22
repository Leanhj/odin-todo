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
        Object.setPrototypeOf(savedWrapper, ProjectWrapper.prototype);
        console.log(savedWrapper);
        wrapper = savedWrapper;
        savedWrapper['projects'].forEach(p => {
            Object.setPrototypeOf(p, Project.prototype);
            rebuildItems(p['items']);
        });
    }

    function rebuildItems(items) {
        if (items.length !== 0) {
            items.forEach((item) => {
                if (item.id === 'todo') {
                    Object.setPrototypeOf(item, Todo.prototype);
                } else if (item.id === 'note') {
                    Object.setPrototypeOf(item, Note.prototype);
                } else {
                    Object.setPrototypeOf(item, Checklist.prototype);
                    item.checks.forEach((check) => {
                        Object.setPrototypeOf(check, Check.prototype);
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

            const newTodo = new Todo(
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

            const newNote = new Note(
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

            const newProject = new Project(formDataObj["project-title"]);

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