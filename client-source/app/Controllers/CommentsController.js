import commentsService from "../Services/commentsService.js";
import store from "../store.js";

//Private
function _drawApiComments() {
    let Comments = store.State.comments;
    let template = ''
    Comments.forEach(c => template += c.Template)
    document.getElementById("comments").innerHTML = template;
}

//Public
export default class CommentsController {
    constructor() {
        store.subscribe("comments", _drawApiComments);
    }

    getComments() {
        commentsService.getComments();
    }

    toggleForm() {
        document.getElementById("formForComment").classList.toggle("hidden")
    }
    
    toggleComments() {
        document.getElementById("comments").classList.toggle("hidden")
    }

    addComment(event, id) {
        event.preventDefault();
        document.getElementById("formForComment").classList.toggle("hidden")

        let formData = event.target
        let newComment = {

            questionId: id,
            body: formData.body.value,
            user: formData.user.value
        }
        console.log(newComment)
        commentsService.addComment(newComment)
        formData.reset()
    }

    removeComment(questionId){
        if(window.confirm("Are you sure you want to delete this Comment?")){
        commentsService.removeComment(questionId)
    }
}

}
