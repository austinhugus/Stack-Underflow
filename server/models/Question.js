import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Question = new Schema(
  {
    creator: { type: String, required: true },

    title: { type: String, required: true },

    body: { type: String, required: true },

  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Question;
