import { parse } from "date-fns";

class Checklist {
    constructor(title, description, checks, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.checks = checks;
        this.dueDate = parse(dueDate, 'dd/MM/yyyy', new Date());
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
        this.dueDate = parse(newDue, 'dd/MM/yyyy', new Date());
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

export { Checklist, Check };