const { sequelize } = require('../db');
const { Note } = require('./Note');
const { Task } = require('./Task');

module.exports = {
    Note,
    Task,
    sequelize
};