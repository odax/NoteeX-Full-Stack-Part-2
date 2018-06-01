const express = require('express');
const NoteRouter = require('/Routes/NoteRoutes');
const port = process.env.PORT || 5000;
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

server.use(bodyParser.json());
server.use(cors({}));
app.use(express.json());
app.use('/notes', NoteRouter);

server.listen(port, err => {
    if (err) { 
        console.log(err);
    }
    console.log(`Server Started on ${port}`)
});