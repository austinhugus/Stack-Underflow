import store from "../store.js";
import Comment from "../Models/Comment.js";


// @ts-ignore
const _mainApi = axios.create({
    baseURL: "//localhost:3000/api/",
    timeout: 3000
})



class CommentsService {
    constructor() {
        this.getComments();

    }

    getComments() {
        _mainApi.get("comments")
            .then(res => {
                let comments = res.data.map(c => new Comment(c))
                store.commit("comments", comments)
            })
            .catch(err => console.error(err))
    }

    addComment(newComment) {
        _mainApi.post("comments", newComment)
            .then(res => {
                this.getComments()
            })
            .catch(err => console.error(err))
    }

    removeComment(questionId){
        _mainApi.delete("comments/" + questionId)
        .then(res =>{
            this.getComments()
        })
        .catch(err => console.error(err))
        }

    // async removeComment(commentId) {
    //     try {
    //       let comment = store.State.comments.find(c => c.id == commentId);
    //       await _mainApi.delete(commentId);
    //       this.getComments()
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   }
}

const commentsService = new CommentsService();
export default commentsService;
