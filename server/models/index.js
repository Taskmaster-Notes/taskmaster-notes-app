const { sequelize } = require('../db');
const { User } = require('./User');
const { Note } = require('./Note');
const { Task } = require('./Task');

User.hasMany(Task);
User.hasMany(Note);

Task.belongsTo(User);
Note.belongsTo(User);


module.exports = {
    Note,
    Task,
    User,
    sequelize
};