const mongoose = require("mongoose");
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: String,
  author: String,
  body: String,
  // comments: [{ body: String, date: Date }],
  // date: { type: Date, default: Date.now },
});

module.exports = {blogSchema};