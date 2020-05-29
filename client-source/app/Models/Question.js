export default class Question {
    constructor(data) {

        this.question = data.question
        this.user = data.user
        this.upvotes = data.upvotes || 0
        this.downvotes = data.downvotes || 0
        this.answers = []

    }

    get Template() {
        return /*html*/`

        <div class="row my-3 border-bottom border-primary" id="QUESTION-TEMPLATE">
            <div class="col-12">
                <div class="row" id="buttons-and-question">
                    <div class="col-1 ml-1" id="questionVoteButtons">
                        <div class="row">
                            <div class="col">
                                <h3><i class="text-success fas fa-chevron-up pointer"
                                        onclick="app.questionsController.upVote()"></i> <span class="text-success"
                                        id="questionUpvotes">${this.upvotes}</span></h3>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <h3><i class="text-danger fas fa-chevron-down pointer"
                                        onclick="app.questionsController.downVote()"></i> <span class="text-danger"
                                        id="questionDownvotes">${this.downvotes}</span></h3>
                            </div>
                        </div>
                    </div>
                    <div class="col m-auto mr-1" id="questionBody">
                        <div class="row">
                            <div class="col-5">
                                <p>Asked by: <span id="askedBy">${this.user}</span></p>
                            </div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-12">
                                <h4 id="questionText">${this.question}</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="offset-1 col-10">
                        <button class="btn btn-outline-info" onclick="app.answersController.answer()">Answer</button>
                        <span class="ml-3 pointer" onclick="app.answersController.showAnswers()"><u>Show
                                Answers</u></span>
                    </div>
                </div>
                <div class="row mb-3 hidden" id="formForAnswer">
                    <form onsubmit="app.commentsController.addComment(event)">
                        <h4>Answer this Question:</h4>
                        <div class="form-group">
                            <label for="user">Your Name:</label>
                            <input class="form-control" id="user" placeholder="Name"></input>
                        </div>
                        <div class="form-group">
                            <label for="question">Question:</label>
                            <input class="form-control" id="question" placeholder="Ask A Question!"></input>
                        </div>
                        <button class="btn btn-outline-warning" type="submit">Answer</button>
                    </form>
                <div class="row mb-3" id="ANSWER-TEMPLATE">
                        
                </div>
            </div>
        </div>

        `
    }
}