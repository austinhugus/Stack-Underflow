import ValueSchema from "../models/Value";
import mongoose from "mongoose";
import Question from "../models/Question"
import Comment from "../models/Comment"

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Questions = mongoose.model("Question", Question)
 Comments = mongoose.model("Comment", Comment)
}

export const dbContext = new DbContext();
