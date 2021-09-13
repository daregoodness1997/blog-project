const express = require('express');
const {
  getPost,
  createPost,
  updatePost,
  deletePost,
  getPosts,
} = require('../controllers');
const router = express.Router();

router.get('/', getPosts );
router.get('/:id', getPost);
router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

module.exports = router;
