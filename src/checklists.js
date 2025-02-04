import { parse } from "date-fns";

class Checklist {
    constructor(title, description, checks, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.checks = checks;
        this.dueDate = new Date(parse(dueDate, 'dd/MM/yyyy', new Date())).toDateString();
        this.priority = priority;
        this.id = 'checklist';
    }

    editTitle(newTitle) {
        this.title = newTitle;
    }

    editDescription(newDesc) {
        this.description = newDesc;
    }

    editChecks(newChecks) {
        this.checks = newChecks;
    }

    editDueDate(newDue) {
        this.dueDate = new Date(parse(newDue, 'dd/MM/yyyy', new Date())).toDateString();
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