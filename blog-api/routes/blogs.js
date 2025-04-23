const express = require('express');
const {
  getBlogs, getBlog, createBlog, updateBlog, deleteBlog, getBlogsByCategory
} = require('../controllers/blogController');
const auth = require('../middleware/auth');
const ownerCheck = require('../middleware/ownerCheck');
const router = express.Router();

router.get('/', getBlogs);
router.get('/:id', getBlog);
router.get('/category/:categoryId', getBlogsByCategory);
router.post('/', auth, createBlog);
router.put('/:id', auth, ownerCheck, updateBlog);
router.delete('/:id', auth, ownerCheck, deleteBlog);

module.exports = router;
