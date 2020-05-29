import ValueSchema from "../models/Value";
import mongoose from "mongoose";
import Question from "../models/Question"

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Questions = mongoose.model("Question", Question)
}

export const dbContext = new DbContext();
