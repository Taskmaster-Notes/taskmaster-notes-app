const express = require('express');
const router = express.Router();
const tasks = require('./tasks');
const notes = require('./notes');

router.use('/tasks', tasks);
router.use('/notes', notes);

module.exports = router;