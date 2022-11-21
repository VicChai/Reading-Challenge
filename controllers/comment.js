const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const Comment = require("../models/Comment.js");

module.exports = {
    createComment: async (req, res) => {
        try {
        await Comment.create({
            comment: req.body.comment,
            likes: 0,
            post: req.params.id,
            createdBy: req.user.userName,
            createdByID: req.user._id
        });
        console.log("Comment has been added!");
        res.redirect(`/post/${req.params.id}`);
        } catch (err) {
        console.log(err);
        }
    },
    deleteComment: async (req, res) => {
        try {
        await Comment.deleteOne({ _id: req.params.commentid})
        // Delete post from db
        // await Comment.remove({ _id: req.params.id });
        console.log("Deleted Comment");
        res.redirect(`/post/${req.params.postid}`);
        } catch (err) {
        res.redirect(`/post/${req.params.id}`);
        }
    },
}    