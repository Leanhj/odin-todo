class Project {
    constructor(name) {
        this.name = name;
        this.items = [];
        this.itemsDateSort = [];
    }

    addItem(item) {
        this.items.push(item);
        this.itemsDateSort = this.items;
    }

    deleteItem(item) {
        const index = this.items.indexOf(item);
        this.items.splice(index, 1);
        this.itemsDateSort = this.items;
    }

    editName(newName) {
        this.name = newName;
    }

    log() {
        console.log(`Name: ${this.name}`);
        this.items.forEach((i) => i.log());
        console.log('------------------------------');
    }
}

class ProjectWrapper {
    constructor() {
        this.projects = [];
    }

    addProject(project) {
        this.projects.push(project);
    }

    deleteProject(project) {
        const index = this.projects.indexOf(project);
        this.projects.splice(index, 1);
    }

    log() {
        this.projects.forEach((p) => console.log(p.name));
    }
}

export { Project, ProjectWrapper };