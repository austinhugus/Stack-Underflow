import store from "../store.js";
import Question from "../Models/Question.js";


// @ts-ignore
const _mainApi = axios.create({
    baseURL: "//localhost:3000/api/",
    timeout: 3000
})



class QuestionsService {
    constructor() {
        this.getQuestions();

    }

    getQuestions() {
        _mainApi.get("questions")
            .then(res => {
                let questions = res.data.map(q => new Question(q))
                store.commit("questions", questions)

            })
            .catch(err => console.error(err))
    }


    addQuestion(newQuestion) {
        _mainApi.post("questions", newQuestion)

            .then(res => {
                this.getQuestions()
            })
            .catch(err => console.error(err))
    }

    upVote(id) {
        let question = store.State.questions.find(q => q.id == id)
            ;


        question.upvotes += 1
        // console.log(update)
        _mainApi.put("questions/" + id, question)
            .then(res => {
                this.getQuestions()
            })
            .catch(err => console.error(err))
    }

    downVote(id) {
        let question = store.State.questions.find(q => q.id == id)

        question.downvotes -= 1

        _mainApi.put("questions/" + id, question)
            .then(res => {
                this.getQuestions()
            })
            .catch(err => console.error(err))
    }



}

const questionsService = new QuestionsService();
export default questionsService;
