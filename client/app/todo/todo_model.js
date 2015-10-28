export class TodoModel {
    constructor(message) {
        this.message = message;
        this.createdAt = Date.now();
    }
}
