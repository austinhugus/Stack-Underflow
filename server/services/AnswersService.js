import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class AnswersService {
  async find(query = {}) {
    return await dbContext.Answers.find(query).populate("questionId")
  }

  async findById(id) {
    let data = await (await dbContext.Answers.findById(id)).populate("questionId")
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
    return data
  }

  async create(answer) {
    let question = await dbContext.Questions.findById(answer.questionId)
    // await question.save
    return await dbContext.Answers.create(answer)
  }

  async edit(update) {
    let data = await dbContext.Answers.findByIdAndUpdate(update.id, update, { new: true, runValidators: true })
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
    return data
  }

  async delete(id) {
    let data = await dbContext.Answers.findByIdAndDelete(id)
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
    return data
  }
}



export const answersService = new AnswersService();