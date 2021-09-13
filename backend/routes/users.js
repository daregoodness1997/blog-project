const express = require('express');
const { updateUser, deleteUser, getUser } = require('../controllers');
const router = express.Router();

router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.get('/:id', getUser);

module.exports = router;
