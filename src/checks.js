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

export default Check;