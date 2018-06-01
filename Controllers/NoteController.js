const express = require('express');
const Note = require('../Models/NoteModel');
const db = express.Router();

const NoteController = {

    //Notes, get all, gets all of notes=======================================================================//
    getNotes: (req, res) => {
        Note
            .find()
            .then(Notes => res.status(200).json(Notes))
            .catch(err => {
                res.status(500).json({ error: 'could not retrieve notes!' });
                process.abort();
            });
    },

    //======================where i am: need to make sure all these controllers are set up to this current format

    //Notes get id, gets the note of a specified id===========================================================//
    getNote: (req, res) => {
        const id = req.params.id;
        Note
            .findById(id)
            .then(note => {
                if (id === 'undefined') {
                    res.status(404).json({ message: 'The note with the specified ID does not exist.' })
                } else {
                    res.status(200).json(note); //returns null :/ how to fix?
                }
            }) 
            .catch(err => {
                res.status(500).json({ error: 'The note information could not be found' });
                process.abort();
            });
    },

    //Note delete, delete the note======================================================================//
    removeNote: (req, res) => {
        const id = req.params.id;
        let note;
        Note
            .findByIdAndDelete(id)
            .then(user => {
                // if (id === 'undefined') {
                //     res.status(404).json({ message: 'The note with the specified ID does not exist.' })
                // } else {
                //     (user => {
                        res.status(200).json(user);
                    })
    //             }
    // })
            .catch(err => {
                res.status(500).json({ error: 'The note could not be removed.' });
                process.abort();
            })
},

//note update, update note/note contents==============================================================//
updateNote: function(req, res) {
    const { id } = req.params;
    const update = req.body;

    db.update(id, update)
        .then(count => {
            if (count > 0) {
                res.status(200).json({ msg: 'note updated successfully' })
            } else {
                res.status(404).json({ msg: 'note not found' });
            }
        })
        .catch(err => {
            res.status(500).json(err)
        })
},

//Notes Post, create new note=================================================================//
postNote: (req, res) => {
    const newNote = req.body;
    if (!newNote.title || !newNote.content) {
        res.status(400).json({
            errorMessage: "Please provide content and a title for this note!"
        });
    }
    db
        .insert(newNote)
        .then(note => {
            res.status(201).json(note);
        })
        .catch(err => {
            res.status(500).json({
                error: "There was an error while saving the note to the database!"
            });
        });
}

} //note controller

module.exports = NoteController;