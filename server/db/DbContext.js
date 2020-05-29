import ValueSchema from "../models/Value";
import mongoose from "mongoose";
import Question from "../models/Question"
import Answer from "../models/Answer"

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Questions = mongoose.model("Question", Question)
  Answers = mongoose.model("Answer", Answer)
}

export const dbContext = new DbContext();
