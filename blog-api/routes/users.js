const express = require('express');
const {
  getUsers, getUser, updateUser, deleteUser
} = require('../controllers/userController');
const auth = require('../middleware/auth');
const roleCheck = require('../middleware/roleCheck');
const router = express.Router();

router.get('/', auth, roleCheck(['admin']), getUsers);
router.get('/:id', auth, getUser);
router.put('/:id', auth, updateUser);
router.delete('/:id', auth, roleCheck(['admin']), deleteUser);

module.exports = router;
