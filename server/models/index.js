const { sequelize } = require('../db');
const { User } = require('./User');
const { Note } = require('./Note');
const { Task } = require('./Task');

module.exports = {
    Note,
    Task,
    User,
    sequelize
};