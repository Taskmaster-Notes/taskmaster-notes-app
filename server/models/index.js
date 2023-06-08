const { sequelize } = require('../db');
const { User } = require('./User');
const { Note } = require('./Note');
const { Task } = require('./Task');

Task.belongsTo(User);
Note.belongsTo(User);

User.hasMany(Task);
User.hasMany(Note);

module.exports = {
    Note,
    Task,
    User,
    sequelize
};