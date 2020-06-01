import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId

const Comment = new Schema(
  {
    user: { type: String, required: true },

    questionId: { type: ObjectId, ref: "Question", required: true },

    upvotes: { type: Number, default: 0 },

    downvotes: { type: Number, default: 0 },

    body: { type: String, required: true },

    // commentId: { type: ObjectId, ref: "Comment", required: true }

  },
  
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Comment;