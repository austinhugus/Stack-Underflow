import store from "../store.js";
import Question from "../Models/Question.js";


const _mainApi = axios.create({
    baseURL: ""
})



class QuestionsService {
    constructor() {
        this.getQuestions();

    }

    getQuestions() {
        _mainApi.get("questions")
            .then(res => {
                let questions = res.data.map(q => new Question(q))
                store.commit("questions", question)
            })
            .catch(err => console.error(err))
    }

    addQuestion() {
        _mainApi.post("questions", newHouse)
            .then(res => {
                this.getQuestions()
            })
            .catch(err => console.error(err))
    }

    upVote(id) {
        let question = store.State.questions.find(q => q.id == id)
        let update = question.votes += 1
        _mainApi.put(question, update)
            .then(res => {
                this.getQuestions()
            })
            .catch(err => console.error(err))
    }

    downVote(id) {
        let question = store.State.questions.find(q => q.id == id)
        let update = question.votes -= 1
        _mainApi.put(question, update)
            .then(res => {
                this.getQuestions()
            })
            .catch(err => console.error(err))
    }



}

const questionsService = new QuestionsService();
export default questionsService;
