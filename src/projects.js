class Project {
    constructor(name) {
        this.name = name;
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    editName(newName) {
        this.name = newName;
    }

    log() {
        console.log(`Name: ${this.name}`);
        this.items.forEach((i) => i.log());
    }
}

export default Project;