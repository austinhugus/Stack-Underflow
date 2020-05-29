export default class Comment {
    constructor(data) {
        this.title = data.title
        this.user = data.user
        this.description = data.description
    }

    get Template() {
        return /*html*/`

        `
    }
}