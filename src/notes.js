class Note {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.id = 'note';
    }

    editTitle(newTitle) {
        this.title = newTitle;
    }

    editDescription(newDesc) {
        this.description = newDesc;
    }

    log() {
        console.log(`Title: ${this.title}`);
        console.log(`Description: ${this.description}`);
    }
}

export default Note;