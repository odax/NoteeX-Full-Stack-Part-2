




const server = express();

const db = require('./data/db.js');






//Home====================================================================================================//
server.get('/', (req, res) => {
    res.json({ Message: 'Hello World'});
});

//Notes, get all, gets all of notes=======================================================================//
server.get('/notes', (req, res) => {
    db.get().then(notes => {
        res.json(notes);
    })
    .catch(err => {
        res.status(500).json({error: 'could not retrieve note information!'});
        process.abort();
    })
});

//Notes get id, gets the note of a specified id===========================================================//
server.get('/notes/:id', (req, res) => {
    const id = req.params.id;
    db
    .get(id)
    .then(note => {
            res.json(note);
        }
    )
    .catch(err => {
        res.status(500).json({error: 'The note information could not be found'});
        process.abort();
    });
});

//Note delete, delete the note======================================================================//
server.delete('/notes/:id', (req, res) => {
    const { id } = req.params;
    let note;
    db
        .get(id)
        .then(foundnote => {
            note = { ...foundnote };
            })
        db.remove(id).then (response => {
        if (id === 'undefined') {
            res.status(404).json({ message: 'The note with the specified ID does not exist.'})
        } else {
            res.status(200).json(user);
        }
    })
    .catch(err => {
        res.status(500).json({error: 'The note could not be removed.'});
        process.abort();
        })
});

//note update, update note/note contents==============================================================//
server.put('/notes/:id', function(req, res) {
    const { id } = req.params;
    const update = req.body;

    db.update(id, update)
    .then(count => {
        if (count > 0) {
            res.status(200).json({ msg: 'note updated successfully' })
        } else {
            res.status(404).json({ msg: 'note not found'});
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

//Notes Post, create new note=================================================================//
server.post("/notes", (req, res) => {
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
  });