const express = require('express');
const { createCatgory, getCatgories } = require('../controllers');
const router = express.Router();

router.post('/', createCatgory);
router.get('/', getCatgories);

module.exports = router;
