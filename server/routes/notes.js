const express = require('express');
const router = express.Router();
const { Note } = require('../models/Note');

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

// Create a new note
router.post('/', async (req, res) => {
  const { title, content, userID } = req.body;

  try {
    const newNote = await Note.create({
      title,
      content,
      userID
    });

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
