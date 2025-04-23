const express = require('express');
const {
  getCategories, getCategory, createCategory, updateCategory, deleteCategory
} = require('../controllers/categoryController');
const auth = require('../middleware/auth');
const roleCheck = require('../middleware/roleCheck');
const router = express.Router();

router.get('/', getCategories);
router.get('/:id', getCategory);
router.post('/', auth, roleCheck(['admin']), createCategory);
router.put('/:id', auth, roleCheck(['admin']), updateCategory);
router.delete('/:id', auth, roleCheck(['admin']), deleteCategory);

module.exports = router;
