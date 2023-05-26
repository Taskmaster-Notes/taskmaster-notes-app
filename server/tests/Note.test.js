const request = require('supertest');
const express = require('express');
const app = express();
const Note = require('../models/Note');


// Test for GET /notes
describe('GET /notes', () => {
    it('should retrieve all notes', async () => {
      const response = await request(app).get('/notes');
      expect(response.status).toBe(200);
      expect(response.body).toBeDefined();
    });
  
    it('should handle server errors', async () => {
      jest.spyOn(Note, 'findAll').mockRejectedValueOnce(new Error('Server Error'));

      const response = await request(app).get('/notes');
      expect(response.status).toBe(500);
      expect(response.body).toEqual({ error: 'Server Error' });
    });
  });

  
  // Test for POST /notes
  describe('POST /notes', () => {
    it('should create a new note', async () => {
      const newNoteData = {
        taskId: 'task-123',
        content: 'This is a new note',
      };
  
      const response = await request(app).post('/notes').send(newNoteData);
      expect(response.status).toBe(201);
      expect(response.body).toBeDefined();
    });
  
    it('should handle server errors', async () => {
      jest.spyOn(Note, 'create').mockRejectedValueOnce(new Error('Server Error'));
  
      const newNoteData = {
        taskId: 'task-123',
        content: 'This is a new note',
      };
  
      const response = await request(app).post('/notes').send(newNoteData);
      expect(response.status).toBe(500);
      expect(response.body).toEqual({ error: 'Server Error' });
    });
  });

  
  // Test for PUT /notes/:id
  describe('PUT /notes/:id', () => {
    it('should update a note', async () => {
      const existingNote = await Note.create({
        taskId: 'task-123',
        content: 'Existing note',
      });
  
      const updatedNoteData = {
        content: 'Updated note',
      };
  
      const response = await request(app)
        .put(`/notes/${existingNote.id}`)
        .send(updatedNoteData);
  
      expect(response.status).toBe(200);
      expect(response.body).toBeDefined();
    });
  
    it('should handle note not found', async () => {
      const nonExistingNoteId = 'non-existing-note-id';
      const updatedNoteData = {
        content: 'Updated note',
      };
  
      const response = await request(app)
        .put(`/notes/${nonExistingNoteId}`)
        .send(updatedNoteData);
  
      expect(response.status).toBe(404);
      expect(response.body).toEqual({ error: 'Note not found' });
    });
  
    it('should handle server errors', async () => {
      jest.spyOn(Note, 'findByPk').mockRejectedValueOnce(new Error('Server Error'));
  
      const existingNote = await Note.create({
        taskId: 'task-123',
        content: 'Existing note',
      });
  
      const updatedNoteData = {
        content: 'Updated note',
      };
  
      const response = await request(app)
        .put(`/notes/${existingNote.id}`)
        .send(updatedNoteData);
  
      expect(response.status).toBe(500);
      expect(response.body).toEqual({ error: 'Server Error' });
    });
  });
  

// Test for DELETE /notes/:id
describe('DELETE /notes/:id', () => {
    it('should delete a note', async () => {
      const existingNote = await Note.create({
        taskId: 'task-123',
        content: 'Existing note',
      });
  
      const response = await request(app).delete(`/notes/${existingNote.id}`);
      expect(response.status).toBe(204);
    });
  
    it('should handle note not found', async () => {
      const nonExistingNoteId = 'non-existing-note-id';
  
      const response = await request(app).delete(`/notes/${nonExistingNoteId}`);
      expect(response.status).toBe(404);
      expect(response.body).toEqual({ error: 'Note not found' });
    });
  
    it('should handle server errors', async () => {
      jest.spyOn(Note, 'findByPk').mockRejectedValueOnce(new Error('Server Error'));
  
      const existingNote = await Note.create({
        taskId: 'task-123',
        content: 'Existing note',
      });
  
      const response = await request(app).delete(`/notes/${existingNote.id}`);
      expect(response.status).toBe(500);
      expect(response.body).toEqual({ error: 'Server Error' });
    });
  });
  