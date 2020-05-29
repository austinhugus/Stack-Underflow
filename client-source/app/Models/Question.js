export default class Question {
    constructor(data) {
        this.title = data.title
        this.user = data.user
        this.description = data.description
        this.votes = data.votes || 0
    }

    get Template() {
        return /*html*/`

        `
    }
}