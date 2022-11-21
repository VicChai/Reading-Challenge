const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/comment");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now

router.post("/createComment/:id", commentsController.createComment);

// router.put("/likePost/:id", commentsController.likePost);

router.delete("/deleteComment/:postid/:commentid", commentsController.deleteComment);

module.exports = router;
