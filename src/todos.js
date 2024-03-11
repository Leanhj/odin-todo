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

export default Todo;