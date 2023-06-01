const { sequelize, DataTypes } = require('../db');

const Task = sequelize.define('task', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.ENUM('Still Have Time', 'In Progress', 'Overdue'),
    due_date: DataTypes.DATE
})
module.exports = {Task};