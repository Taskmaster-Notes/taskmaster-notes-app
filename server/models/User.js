const { Sequelize, sequelize } = require("../db");

//user model
const User  = sequelize.define("user", {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    username: Sequelize.STRING,
    password: Sequelize.STRING
});

module.exports = { User }