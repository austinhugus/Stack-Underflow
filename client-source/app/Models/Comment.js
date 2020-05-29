export default class Comment {
    constructor(data) {
        this.body = data.body
        this.user = data.user
        this.questonId = data.questionId
        this.upvotes = data.upvotes || 0
        this.downvotes = data.downvotes || 0
    }

    get Template() {
        return /*html*/`

        <div class="offset-1 col-10">
        <div class="row">
            <div class="col-1 ml-1" id="answerVoteButtons">
                <div class="row">
                    <div class="col">
                        <h5><i class="text-success fas fa-chevron-up pointer"
                                onclick="app.commentsController.upVote()"></i> <span class="text-success"
                                id="answerUpvotes">${this.upvotes}</span></h5>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <h5><i class="text-danger fas fa-chevron-down pointer"
                                onclick="app.commentsController.downVote()"></i> <span
                                class="text-danger" id="answerDownvotes">${this.downvotes}</span></h5>
                    </div>
                </div>
            </div>
            <div class="col" id="comment">
                <div class="row">
                    <div class="col-12">
                        <small>Answered by: <span id="answeredBy">${this.user}</span></small>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <h5 id="answerText">${this.body}</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>

        `
    }
}