const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    // required: true,
  },
  cloudinaryId: {
    type: String,
    // required: true,
  },
  sharing: {
    type: String,
    required: true,
  },
  // caption: {
  //   type: String,
  //   required: false,
  // },
  createdBy: {
    type: String,
    ref: "User",
  },
  likes: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);
