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

export default Project;