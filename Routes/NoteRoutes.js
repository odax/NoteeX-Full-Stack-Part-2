const express = require('express');
const NoteController = require('../Controllers/NoteController');

const NoteRouter = express.Router();

//get all Notes
NoteRouter.get('/', getNotes);
//get Note of specified id
NoteRouter.get('/:id', getNote);
//create Note
NoteRouter.post('/', postNote);
//delte Note
NoteRouter.delete('/:id', removeNote);
//update Note
NoteRouter.put('/id', updateNote);
//future: Get note tags
// NoteRouter.put('/:id/tags', getNoteTags);

export default NoteRouter;