import store from "../store.js";
import Comment from "../Models/Comment.js";


const _mainApi = axios.create({
    baseURL: "localhost:3000/api/comments",
    timeout: 3000
})



class CommentsService {
    constructor() {
        this.getComments();

    }

    getComments() {
        _questionApi.get("comments")
            .then(res => {
                let comments = res.data.map(c => new Comment(c))
                store.commit("comments", comments)
            })
            .catch(err => console.error(err))
    }

    addComment() {
        _mainApi.post("comments", newHouse)
            .then(res => {
                this.getComments()
            })
            .catch(err => console.error(err))
    }



}

const commentsService = new CommentsService();
export default commentsService;
