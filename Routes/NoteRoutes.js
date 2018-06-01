const express = require('express');
const NoteController = require('../Controllers/NoteController');

const NoteRouter = express.Router();

//get all Notes
NoteRouter.get('/', NoteController.getNotes);
//get Note of specified id
NoteRouter.get('/:id', NoteController.getNote);
//create Note
NoteRouter.post('/', NoteController.postNote);
//delte Note
NoteRouter.delete('/:id', NoteController.removeNote);
//update Note
NoteRouter.put('/id', NoteController.updateNote);
//future: Get note tags
// NoteRouter.put('/:id/tags', getNoteTags);

module.exports = NoteRouter;