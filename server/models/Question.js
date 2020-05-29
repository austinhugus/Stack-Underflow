import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId

const Question = new Schema(
  {
    user: { type: String, required: true },

    question: { type: String, required: true },

    upvotes: { type: Number, required: true },

    downvotes: { type: Number, required: true },

    answers: [{ type: ObjectId }]

  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Question;
