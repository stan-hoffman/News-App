import { type InferSchemaType, Schema, model } from "mongoose";

const newsSchema = new Schema({
  title: {
    type: String,
    require: [true, "A todo must have a title"],
    trim: true,
    maxlength: [120, "A news title can only have a max of 120 chars"],
    minlength: [3, "A news can only have a min of 3 chars"],
  },
  description: {
    type: String,
    trim: true,
    maxlength: [2000, "A news can only have a max of 2000 chars"],
    minlength: [3, "A news can only have a min of 3 chars"],

  },
  postedAt:{
    type: Date
  },

  Author: {
    type: String,
    maxlength: [20, "Author name must be 10 chars long"],
  },

  Images:{
    type: String
  },
  Content: {
  type: [String],
    },
})

type News = InferSchemaType<typeof newsSchema>;

export default model<News>("News", newsSchema);
