import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Question = new Schema(
  {
    user: { type: String, required: true },


    question: { type: String, required: true },

  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Question;
