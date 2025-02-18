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
let wrapper = new ProjectWrapper();

wrapper.addProject(projectHome);

const todoDefault1 = new Todo('This is a To-do', 'You can click the checkbox to mark it as finished', '12/04/2024', 'mid');
const noteDefault1 = new Note('This is a note', 'You can write anything you want, no due date and no priority');
const checkDefault1 = new Check('This is a checklist item, click the checkbox to mark it as finished');
let checkDefaultArray = [checkDefault1];
const checklistDefault1 = new Checklist('This is a checklist', 'It can contain many tasks', checkDefaultArray, '12/04/2024', 'mid');

projectHome.addItem(todoDefault1);
projectHome.addItem(noteDefault1);
projectHome.addItem(checklistDefault1);

const divProjectButtons = document.querySelector(".div-project-buttons");
const itemsDiv = document.querySelector(".items");

let currentProject = projectHome;

function ScreenController() {
    function renderProjectButtons() {
        divProjectButtons.replaceChildren();
        let i = 0;
        wrapper.projects.forEach(element => {
            const projectButtonDiv = document.createElement("div");
            const projectButton = document.createElement('button');
            projectButton.textContent = element.name;
            projectButton.setAttribute("id", i);
            projectButton.addEventListener('click', () => {
                renderProjectItems(element);
                const id = projectButton.getAttribute("id");
                currentProject = wrapper.projects[id];
            });
            const projectDeleteButton = document.createElement("button");
            projectDeleteButton.textContent = "Delete";
            projectDeleteButton.setAttribute("id", i);
            projectDeleteButton.addEventListener("click", () => {
                const id = projectDeleteButton.getAttribute("id");
                const toDelete = wrapper.projects[id];
                toDelete.items.forEach(item => {
                    toDelete.deleteItem(item);
                });
                wrapper.deleteProject(toDelete);
                renderProjectItems(currentProject);
                currentProject = projectHome;
                renderProjectButtons();
                localStorage.clear();
                populateStorage();
            });
            projectButtonDiv.appendChild(projectButton);
            if (i != 0) {
                projectButtonDiv.appendChild(projectDeleteButton);
            }
            divProjectButtons.appendChild(projectButtonDiv);
            i++;
        });
    }

    function renderProjectItems(project) {
        itemsDiv.replaceChildren();
        project.items.forEach(element => {
            let i = 0;
            const objectDiv = document.createElement('div');
            objectDiv.className = "div-object";
            objectDiv.setAttribute("id", i);
            if (element.id === "todo") {
                renderTodo(element, i, objectDiv);
            } else if (element.id === "note") {
                renderNote(element, i, objectDiv);
            } else {
                renderChecklist(element, i, objectDiv);
            }
            itemsDiv.appendChild(objectDiv);
            i++
        });
    }

    function renderTodo(todo, i, div) {
        const checkmark = document.createElement('input');
        checkmark.setAttribute("type", "checkbox");
        if (todo.status) {
            checkmark.checked = true;
        }
        checkmark.addEventListener("click", () => {
            todo.editStatus();
            localStorage.clear();
            populateStorage();
        });
        const divTitle = document.createElement("div");
        divTitle.textContent = todo.title;
        const divPriority = document.createElement("div");
        divPriority.textContent = todo.priority;
        const divDate = document.createElement("div");
        divDate.textContent = todo.dueDate;
        const buttonExpand = document.createElement("button");
        buttonExpand.textContent = "Expand";
        buttonExpand.addEventListener("click", () => {
            const dialogTodo = document.querySelector(".item-expand");
            dialogTodo.showModal();
            dialogTodo.replaceChildren();
            const dialogTitle = document.createElement("div");
            dialogTitle.textContent = todo.title;
            const dialogDesc = document.createElement("div");
            dialogDesc.textContent = todo.description;
            const dialogPriority = document.createElement("div");
            dialogPriority.textContent = todo.priority;
            const dialogDate = document.createElement("div");
            dialogDate.textContent = todo.dueDate;
            const dialogEdit = document.createElement("button");
            dialogEdit.textContent = "Edit";
            dialogEdit.addEventListener("click", () => {
                const modalEdit = document.querySelector(".edit");
                modalEdit.showModal();
                modalEdit.replaceChildren();
                const editForm = document.createElement("form");
                editForm.replaceChildren();

                const labelTitle = document.createElement("label");
                labelTitle.textContent = "To-do title";
                labelTitle.setAttribute("for", "todo-title");
                const inputTitle = document.createElement("input");
                inputTitle.setAttribute("type", "text");
                inputTitle.setAttribute("id", "todo-title");
                inputTitle.setAttribute("name", "todo-title");
                inputTitle.setAttribute("placeholder", todo.title);
        
                const labelDesc = document.createElement("label");
                labelDesc.textContent = "To-do description";
                labelDesc.setAttribute("for", "todo-description");
                const inputDesc = document.createElement("input");
                inputDesc.setAttribute("type", "text");
                inputDesc.setAttribute("id", "todo-description");
                inputDesc.setAttribute("name", "todo-description");
                inputDesc.setAttribute("placeholder", todo.description);
        
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
                buttonSubmitTodo.textContent = "Confirm";
                buttonSubmitTodo.setAttribute("type", "submit");

                const buttonClose = document.createElement("button");
                buttonClose.textContent = "Close";
                buttonClose.addEventListener("click", (e) => {
                    e.preventDefault();
                    modalEdit.close();
                });
        
                editForm.appendChild(labelTitle);
                editForm.appendChild(inputTitle);
                editForm.appendChild(labelDesc);
                editForm.appendChild(inputDesc);
                editForm.appendChild(labelDate);
                editForm.appendChild(inputDate);
                editForm.appendChild(buttonPriorityLow);
                editForm.appendChild(buttonPriorityMid);
                editForm.appendChild(buttonPriorityHigh);
                editForm.appendChild(buttonSubmitTodo);
                editForm.appendChild(buttonClose);
        
                editForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
        
                    const formDataObj = Object.fromEntries(formData.entries());
                    modalEdit.close();
                    dialogTodo.close();

                    todo.editTitle(formDataObj["todo-title"]);
                    todo.editDescription(formDataObj["todo-description"]);
                    todo.editDueDate(formDataObj["todo-date"]);
                    todo.editPriority(priority);

                    // renderProjectButtons();
                    renderProjectItems(currentProject);
                    localStorage.clear();
                    populateStorage();
                });

                modalEdit.appendChild(editForm);
            });

            const dialogClose = document.createElement("button");
            dialogClose.textContent = "Close";
            dialogClose.addEventListener("click", (e) => {
                e.preventDefault();
                dialogTodo.close();
            });
            dialogTodo.appendChild(dialogTitle);
            dialogTodo.appendChild(dialogDesc);
            dialogTodo.appendChild(dialogPriority);
            dialogTodo.appendChild(dialogDate);
            dialogTodo.appendChild(dialogEdit);
            dialogTodo.appendChild(dialogClose);
        });
        const buttonDelete = document.createElement("button");
        buttonDelete.textContent = "Delete";
        buttonDelete.addEventListener("click", () => {
            currentProject.deleteItem(todo);
            renderProjectItems(currentProject);
            // localStorage.clear();
            // populateStorage();
        });
        div.appendChild(checkmark);
        div.appendChild(divTitle);
        div.appendChild(divPriority);
        div.appendChild(divDate);
        div.appendChild(buttonExpand);
        div.appendChild(buttonDelete);
    }

    function renderNote(note, i, div) {
        const divTitle = document.createElement("div");
        divTitle.textContent = note.title;
        const buttonExpand = document.createElement("button");
        buttonExpand.textContent = "Expand";
        buttonExpand.addEventListener("click", () => {
            const dialogNote = document.querySelector(".item-expand");
            dialogNote.showModal();
            dialogNote.replaceChildren();
            const dialogTitle = document.createElement("div");
            dialogTitle.textContent = note.title;
            const dialogDesc = document.createElement("div");
            dialogDesc.textContent = note.description;
            const dialogEdit = document.createElement("button");
            dialogEdit.textContent = "Edit";
            dialogEdit.addEventListener("click", () => {
                const modalEdit = document.querySelector(".edit");
                modalEdit.showModal();
                modalEdit.replaceChildren();
                const editForm = document.createElement("form");
                editForm.replaceChildren();

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
                buttonSubmitNote.textContent = "Confirm";
                buttonSubmitNote.setAttribute("type", "submit");

                const buttonClose = document.createElement("button");
                buttonClose.textContent = "Close";
                buttonClose.addEventListener("click", (e) => {
                    e.preventDefault();
                    modalEdit.close();
                });
        
                editForm.appendChild(labelTitle);
                editForm.appendChild(inputTitle);
                editForm.appendChild(labelDesc);
                editForm.appendChild(inputDesc);
                editForm.appendChild(buttonSubmitNote);
                editForm.appendChild(buttonClose);
        
                editForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
        
                    const formDataObj = Object.fromEntries(formData.entries());
                    modalEdit.close();
                    dialogNote.close();

                    note.editTitle(formDataObj["note-title"]);
                    note.editDescription(formDataObj["note-description"]);

                    // renderProjectButtons();
                    renderProjectItems(currentProject);
                    localStorage.clear();
                    populateStorage();
                });

                modalEdit.appendChild(editForm);
            });

            const dialogClose = document.createElement("button");
            dialogClose.textContent = "Close";
            dialogClose.addEventListener("click", () => {
                dialogNote.close();
            });
            dialogNote.appendChild(dialogTitle);
            dialogNote.appendChild(dialogDesc);
            dialogNote.appendChild(dialogEdit);
            dialogNote.appendChild(dialogClose);
        });
        const buttonDelete = document.createElement("button");
        buttonDelete.textContent = "Delete";
        buttonDelete.addEventListener("click", () => {
            currentProject.deleteItem(note);
            renderProjectItems(currentProject);
            // localStorage.clear();
            // populateStorage();
        });
        div.appendChild(divTitle);
        div.appendChild(buttonExpand);
        div.appendChild(buttonDelete);
    }

    function renderChecklist(checklist, i, div) {
        const divTitle = document.createElement("div");
        divTitle.textContent = checklist.title;
        const divPriority = document.createElement("div");
        divPriority.textContent = checklist.priority;
        const divDate = document.createElement("div");
        divDate.textContent = checklist.dueDate;
        const buttonExpand = document.createElement("button");
        buttonExpand.textContent = "Expand";
        buttonExpand.addEventListener("click", () => {
            const dialogChecklist = document.querySelector(".item-expand");
            dialogChecklist.showModal();
            dialogChecklist.replaceChildren();
            const dialogTitle = document.createElement("div");
            dialogTitle.textContent = checklist.title;
            const dialogDesc = document.createElement("div");
            dialogDesc.textContent = checklist.description;
            const dialogDivChecks = document.createElement("div");
            checklist.checks.forEach(item => {
                const divDialogCheckItems = document.createElement("div");
                const itemCheckmark = document.createElement("input");
                itemCheckmark.setAttribute("type", "checkbox");
                if (item.state) {
                    itemCheckmark.checked = true;
                }
                itemCheckmark.addEventListener("click", () => {
                    item.editState();
                    localStorage.clear();
                    populateStorage();
                });
                const itemDesc = document.createElement("div");
                itemDesc.textContent = item.description;
                divDialogCheckItems.appendChild(itemCheckmark);
                divDialogCheckItems.appendChild(itemDesc);
                dialogDivChecks.appendChild(divDialogCheckItems);
            });
            const dialogPriority = document.createElement("div");
            dialogPriority.textContent = checklist.priority;
            const dialogDate = document.createElement("div");
            dialogDate.textContent = checklist.dueDate;
            const dialogEdit = document.createElement("button");
            dialogEdit.textContent = "Edit";
            dialogEdit.addEventListener("click", () => {
                const modalEdit = document.querySelector(".edit");
                modalEdit.showModal();
                modalEdit.replaceChildren();
                const editForm = document.createElement("form");
                editForm.replaceChildren();

                const labelTitle = document.createElement("label");
                labelTitle.textContent = "Checklist title";
                labelTitle.setAttribute("for", "checklist-title");
                const inputTitle = document.createElement("input");
                inputTitle.setAttribute("type", "text");
                inputTitle.setAttribute("id", "checklist-title");
                inputTitle.setAttribute("name", "checklist-title");
                inputTitle.setAttribute("placeholder", "Title");
        
                const labelDesc = document.createElement("label");
                labelDesc.textContent = "Checklist description";
                labelDesc.setAttribute("for", "checklist-description");
                const inputDesc = document.createElement("input");
                inputDesc.setAttribute("type", "text");
                inputDesc.setAttribute("id", "checklist-description");
                inputDesc.setAttribute("name", "checklist-description");
                inputDesc.setAttribute("placeholder", "Description");
        
                const labelDate = document.createElement("label");
                labelDate.textContent = "Due date";
                const inputDate = document.createElement("input");
                inputDate.setAttribute("type", "text");
                inputDate.setAttribute("id", "checklist-date");
                inputDate.setAttribute("name", "checklist-date");
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
        
                const divCheckItems = document.createElement("div");
                divCheckItems.className = "div-check-items";
                divCheckItems.setAttribute("id", "checks");
        
                const inputCheckDesc = document.createElement("input");
                inputCheckDesc.setAttribute("type", "text");
                inputCheckDesc.setAttribute("id", "check-description");
                inputCheckDesc.setAttribute("placeholder", "Description");
                divCheckItems.appendChild(inputCheckDesc);
        
                const buttonAddCheck = document.createElement("button");
                buttonAddCheck.textContent = "Add item";
                buttonAddCheck.addEventListener('click', (e) => {
                    e.preventDefault();
                    const inputCheckDesc = document.createElement("input");
                    inputCheckDesc.setAttribute("type", "text");
                    inputCheckDesc.setAttribute("id", "check-description");
                    inputCheckDesc.setAttribute("placeholder", "Description");
                    divCheckItems.appendChild(inputCheckDesc);
                });
        
                const buttonSubmitChecklist = document.createElement("button");
                buttonSubmitChecklist.textContent = "Confirm";
                buttonSubmitChecklist.setAttribute("type", "submit");

                const buttonClose = document.createElement("button");
                buttonClose.textContent = "Close";
                buttonClose.addEventListener("click", (e) => {
                    e.preventDefault();
                    modalEdit.close();
                });
        
                editForm.appendChild(labelTitle);
                editForm.appendChild(inputTitle);
                editForm.appendChild(labelDesc);
                editForm.appendChild(inputDesc);
                editForm.appendChild(labelDate);
                editForm.appendChild(inputDate);
                editForm.appendChild(buttonPriorityLow);
                editForm.appendChild(buttonPriorityMid);
                editForm.appendChild(buttonPriorityHigh);
                editForm.appendChild(divCheckItems);
                editForm.appendChild(buttonAddCheck);
                editForm.appendChild(buttonSubmitChecklist);
                editForm.appendChild(buttonClose);
        
                editForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
        
                    const formDataObj = Object.fromEntries(formData.entries());
                    modalEdit.close();
                    dialogChecklist.close();
        
                    let checksArr = [];
                    const checksDiv = document.getElementById("checks").children;
                    for (let i = 0; i < checksDiv.length; i++) {
                        const itemDesc = checksDiv[i];
                        const description = itemDesc.value;
                        const item = new Check(description);
                        checksArr.push(item);
                    }

                    checklist.editTitle(formDataObj["checklist-title"]);
                    checklist.editDescription(formDataObj["checklist-description"]);
                    checklist.editDueDate(formDataObj["checklist-date"]);
                    checklist.editPriority(priority);
                    checklist.editChecks(checksArr);
        
                    // renderProjectButtons();
                    renderProjectItems(currentProject);
                    localStorage.clear();
                    populateStorage();
                });

                modalEdit.appendChild(editForm);
            });

            const dialogClose = document.createElement("button");
            dialogClose.textContent = "Close";
            dialogClose.addEventListener("click", () => {
                dialogChecklist.close();
            });
            dialogChecklist.appendChild(dialogTitle);
            dialogChecklist.appendChild(dialogDesc);
            dialogChecklist.appendChild(dialogDivChecks);
            dialogChecklist.appendChild(dialogPriority);
            dialogChecklist.appendChild(dialogDate);
            dialogChecklist.appendChild(dialogEdit);
            dialogChecklist.appendChild(dialogClose);
        });
        const buttonDelete = document.createElement("button");
        buttonDelete.textContent = "Delete";
        buttonDelete.addEventListener("click", () => {
            currentProject.deleteItem(checklist);
            renderProjectItems(currentProject);
            // localStorage.clear();
            // populateStorage();
        });
        div.appendChild(divTitle);
        div.appendChild(divPriority);
        div.appendChild(divDate);
        div.appendChild(buttonExpand);
        div.appendChild(buttonDelete);
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
        buttonSubmitTodo.setAttribute("type", "submit");

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
        buttonSubmitNote.setAttribute("type", "submit");

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

        const labelTitle = document.createElement("label");
        labelTitle.textContent = "Checklist title";
        labelTitle.setAttribute("for", "checklist-title");
        const inputTitle = document.createElement("input");
        inputTitle.setAttribute("type", "text");
        inputTitle.setAttribute("id", "checklist-title");
        inputTitle.setAttribute("name", "checklist-title");
        inputTitle.setAttribute("placeholder", "Title");

        const labelDesc = document.createElement("label");
        labelDesc.textContent = "Checklist description";
        labelDesc.setAttribute("for", "checklist-description");
        const inputDesc = document.createElement("input");
        inputDesc.setAttribute("type", "text");
        inputDesc.setAttribute("id", "checklist-description");
        inputDesc.setAttribute("name", "checklist-description");
        inputDesc.setAttribute("placeholder", "Description");

        const labelDate = document.createElement("label");
        labelDate.textContent = "Due date";
        const inputDate = document.createElement("input");
        inputDate.setAttribute("type", "text");
        inputDate.setAttribute("id", "checklist-date");
        inputDate.setAttribute("name", "checklist-date");
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

        const divCheckItems = document.createElement("div");
        divCheckItems.className = "div-check-items";
        divCheckItems.setAttribute("id", "checks");

        const inputCheckDesc = document.createElement("input");
        inputCheckDesc.setAttribute("type", "text");
        inputCheckDesc.setAttribute("id", "check-description");
        inputCheckDesc.setAttribute("placeholder", "Description");
        divCheckItems.appendChild(inputCheckDesc);

        const buttonAddCheck = document.createElement("button");
        buttonAddCheck.textContent = "Add item";
        buttonAddCheck.addEventListener('click', (e) => {
            e.preventDefault();
            const inputCheckDesc = document.createElement("input");
            inputCheckDesc.setAttribute("type", "text");
            inputCheckDesc.setAttribute("id", "check-description");
            inputCheckDesc.setAttribute("placeholder", "Description");
            divCheckItems.appendChild(inputCheckDesc);
        });

        const buttonSubmitChecklist = document.createElement("button");
        buttonSubmitChecklist.textContent = "Add new checklist";
        buttonSubmitChecklist.setAttribute("type", "submit");

        formChecklist.appendChild(labelTitle);
        formChecklist.appendChild(inputTitle);
        formChecklist.appendChild(labelDesc);
        formChecklist.appendChild(inputDesc);
        formChecklist.appendChild(labelDate);
        formChecklist.appendChild(inputDate);
        formChecklist.appendChild(buttonPriorityLow);
        formChecklist.appendChild(buttonPriorityMid);
        formChecklist.appendChild(buttonPriorityHigh);
        formChecklist.appendChild(divCheckItems);
        formChecklist.appendChild(buttonAddCheck);
        formChecklist.appendChild(buttonSubmitChecklist);
        formContent.appendChild(formChecklist);

        formChecklist.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);

            const formDataObj = Object.fromEntries(formData.entries());
            dialog.close();

            let checksArr = [];
            const checksDiv = document.getElementById("checks").children;
            for (let i = 0; i < checksDiv.length; i++) {
                const itemDesc = checksDiv[i];
                const description = itemDesc.value;
                const item = new Check(description);
                checksArr.push(item);
            }

            const newChecklist = new Checklist(
                formDataObj["checklist-title"], 
                formDataObj["checklist-description"],
                checksArr,
                formDataObj["checklist-date"],
                priority
            );

            currentProject.addItem(newChecklist);
            renderProjectButtons();
            renderProjectItems(currentProject);
            localStorage.clear();
            populateStorage();
        });
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