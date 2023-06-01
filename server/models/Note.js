// Import required modules
// const db = require('../db');
const { sequelize, DataTypes } = require('../db');


// Define the Note model
const Note = sequelize.define('Note', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt:  DataTypes.DATE,
  });

module.exports = { Note };

/* 
 look up docs to help with asociations
 change model naming convention
 task has many notes, notes are only assigned to 1 task 
 Jest Testing for associations
 Musician project for reference
 https://github.com/MultiverseLearningProducts/movie-theater-api/blob/main/models/index.js
 */