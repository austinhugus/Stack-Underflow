export default class Comment {
    constructor(data) {
        this.body = data.body
        this.user = data.user
        this.questionId = data.questionId
        this.upvotes = data.upvotes || 0
        this.downvotes = data.downvotes || 0
        this.id = data.id
    }

    get Template() {
        return /*html*/`

        <div class="offset-1 col-10">
        <div class="row">
            <div class="col-1 ml-1" id="commentVoteButtons">
                <div class="row">
                    <div class="col">
                        <h5><i class="text-success fas fa-chevron-up pointer"
                                onclick="app.commentsController.upvote()"></i> <span class="text-success"
                                id="commentUpvotes">0</span></h5>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <h5><i class="text-danger fas fa-chevron-down pointer"
                                onclick="app.commentsController.downvote()"></i> <span
                                class="text-danger" id="commentDownvotes">0</span></h5>
                    </div>
                </div>
            </div>
            <div class="col" id="comments">
                <div class="row">
                    <div class="col-12">
                        <small>Answered by: <span id="commentedBy">${this.user}</span></small>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <h5 id="commentText">${this.body}</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>

        `
    }
}