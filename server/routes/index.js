const express = require('express');
const router = express.Router();
const tasks = require('./tasks');
const notes = require('./notes');
const users = require('./users');

//uncomment later
router.use('/users',users);
router.use('/tasks', tasks);
router.use('/notes', notes);


module.exports = router;