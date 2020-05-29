import questionsService from "../Services/questionsService.js";
import store from "../store.js";

//Private
function _drawApiQuestions() {
    let Questions = store.State.questions;
    let template = ''
    Questions.forEach(q => template += q.Template)
    document.getElementById("questions").innerHTML = template;
}

//Public
export default class QuestionsController {
    constructor() {
        store.subscribe("questions", _drawApiQuestions);
    }

    getQuestions() {
        questionsService.getQuestions();
    }

    addQuestion(event) {
        event.preventDefault();
        let formData = event.target
        let newQuestion = {
            question: formData.question.value,
            user: formData.user.value
        }
        console.log(newQuestion)
        questionsService.addQuestion(newQuestion)
        formData.reset()
    }

    upVote(id) {
        questionsService.upVote(id)
    }

    downVote(id) {
        questionsService.downVote(id)
    }



}



