const Blog = require('../models/Blog');

exports.getBlogs = async (req, res) => {
  const blogs = await Blog.find().populate('author', 'username').populate('category', 'name');
  res.json(blogs);
};

exports.getBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id).populate('author').populate('category');
  if (!blog) return res.status(404).json({ msg: 'Blog not found' });
  res.json(blog);
};

exports.createBlog = async (req, res) => {
  const { title, content, category } = req.body;
  const blog = new Blog({
    title,
    content,
    author: req.user.id,
    category
  });
  await blog.save();
  res.json(blog);
};

exports.updateBlog = async (req, res) => {
  const { title, content } = req.body;
  const blog = await Blog.findByIdAndUpdate(
    req.params.id,
    { title, content },
    { new: true }
  );
  if (!blog) return res.status(404).json({ msg: 'Blog not found' });
  res.json(blog);
};

exports.deleteBlog = async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.json({ msg: 'Blog deleted' });
};

exports.getBlogsByCategory = async (req, res) => {
  const blogs = await Blog.find({ category: req.params.categoryId });
  res.json(blogs);
};
