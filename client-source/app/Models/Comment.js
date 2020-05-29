export default class Comment {
    constructor(data) {
        this.title = data.title
        this.user = data.user
        this.description = data.description
    }

    get Template() {
        return /*html*/`

        <div class="offset-1 col-10">
        <div class="row">
            <div class="col-1 ml-1" id="answerVoteButtons">
                <div class="row">
                    <div class="col">
                        <h5><i class="text-success fas fa-chevron-up pointer"
                                onclick="app.answersController.upvote()"></i> <span class="text-success"
                                id="answerUpvotes">0</span></h5>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <h5><i class="text-danger fas fa-chevron-down pointer"
                                onclick="app.answersController.downvote()"></i> <span
                                class="text-danger" id="answerDownvotes">0</span></h5>
                    </div>
                </div>
            </div>
            <div class="col" id="answer">
                <div class="row">
                    <div class="col-12">
                        <small>Answered by: <span id="answeredBy">USER2</span></small>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <h5 id="answerText">ANSWER TEXT ANSWER TEXT</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>

        `
    }
}