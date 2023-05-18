// Import required modules
const db = require('../db');

// Define the Note model
const Note = db.define('Note', {
    title: { // The unique identefier for the note un the user-end
        type: DataTypes.STRING,
        allowNull: false
    },
    id: { // The unique identifier for the note
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  taskId: { // The ID of the associated task
    type: DataTypes.INTEGER,
    allowNull: false
  },
  content: { // The content of the note
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: { // The creation date of the note
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updatedAt: { // The last update date of the note
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
});

module.exports = Note;
