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

    addComment(event) {
        event.preventDefault();
        let formData = event.target
        let newComment = {
            title: formData.title.value,
            description: formData.description.value,
            user: formData.user.value
        }
        commentsService.addComment(newComment)
        formData.reset()
    }


}



