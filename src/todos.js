import { parse } from "date-fns";

class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = new Date(parse(dueDate, 'dd/MM/yyyy', new Date())).toDateString();
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
        this.dueDate = parse(newDue, 'dd/MM/yyyy', new Date());
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