import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId

const Answer = new Schema(
  {
    user: { type: String, required: true },

    body: { type: String, required: true },

    // questionId: { type: ObjectId, ref: "Question", required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Answer;