import store from "../store.js";
import Comment from "../Models/Comment.js";


// @ts-ignore
const _questionApi = axios.create({
    baseURL: "//localhost:3000/api",
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

    addComment(newComment) {
        _questionApi.post("comments", newComment)
            .then(res => {
                this.getComments()
            })
            .catch(err => console.error(err))
    }



}

const commentsService = new CommentsService();
export default commentsService;
