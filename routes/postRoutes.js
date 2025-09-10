const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost,
  likePost,
  addComment,
} = require("../controllers/postController");

router.post("/", upload.single("image"), createPost); // With image
router.get("/", getPosts);
router.get("/:id", getPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

router.put("/:id/like", likePost); // Like a post
router.post("/:id/comment", addComment); // Add comment

module.exports = router;
