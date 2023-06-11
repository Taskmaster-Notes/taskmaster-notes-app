const express = require('express');
const router = express.Router();
const { Note } = require('../models/index');

// Get all notes
router.get('/', async (req, res) => {
  try {
    const notes = await Note.findAll();
    res.json(notes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
});

// //add task (POST)
// router.post('/user/:id', async (req,res,next)=>{
//   const { title, description, status, due_date } = req.body;
//   const id = req.params.id;
//   const newTask = await Task.create({
//       title,
//       description,
//       status,
//       due_date,
//       UserId: id
//   });
//   currentUser = User.findByPk(id);
//   //currentUser.addTask(newTask);
//   res.status(201).send({newTask});
// })

// Create a new note
router.post('/user/:id', async (req, res) => {
  const { title, content } = req.body;
  const id = req.params.id;
  try {
    const newNote = await Note.create({
      title,
      content,
      UserId: id
    });
    //currentUser = User.findByPk(id);
    res.status(201).json(newNote);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
});

// Update a note
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;

  try {
    const note = await Note.findByPk(id);

    if (!note) {
      return res.status(404).json({ error: 'Note not found' });
    }

    note.content = content;
    note.updatedAt = new Date();
    await note.save();

    res.json(note);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
});

// Delete a note
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const note = await Note.findByPk(id);

    if (!note) {
      return res.status(404).json({ error: 'Note not found' });
    }

    await note.destroy();

    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
});

module.exports = router;
