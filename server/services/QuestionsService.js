import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class QuestionsService {
  async find(query={}) {
   return await dbContext.Questions.find(query)
  }

  async findById(id) {
    let data = await dbContext.Questions.findById(id)
    if (!data){
      throw new BadRequest("Invalid Id")
    }
    return data
  }

  async create(rawData) {
    return await dbContext.Questions.create(rawData)
  }
  async edit(update) {
    let data = await dbContext.Questions.findByIdAndUpdate(update.id, update, {new: true, runValidators: true})
    if (!data){
      throw new BadRequest("Invalid Id")
    }
    return data
  }
      
  async delete(id) {
   let data = await dbContext.Questions.findByIdAndDelete(id)
   if (!data){
    throw new BadRequest("Invalid Id")
      }
  return data
    }
  }
  


export const questionsService = new QuestionsService();