import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class CommentsService {
  async find(query = {}) {
    return await dbContext.Comments.find(query).populate("questionId")
  }

  async findById(id) {
    let data = await dbContext.Comments.findById(id).populate("questionId")
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
    return data
  }

  async create(comment) {

    // let comments = await dbContext.Questions.findById(comment.questionId).populate("comments")
    // // await question.save
    // let comments = {body:comments.body, questionId, user}
    return await dbContext.Comments.create(comment)
  }

  async edit(update) {
    let data = await dbContext.Comments.findByIdAndUpdate(update.id, update, { new: true, runValidators: true })
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
    return data
  }

  async delete(id) {
    let data = await dbContext.Comments.findByIdAndDelete(id)
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
    return data
  }
}



export const commentsService = new CommentsService();