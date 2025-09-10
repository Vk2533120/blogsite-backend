const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String },
  image: { type: String }, // store image URL here
}, { timestamps: true });

module.exports = mongoose.model("Post", postSchema);
