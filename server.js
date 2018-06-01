const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
const NoteRouter = require('./Routes/NoteRoutes');
const port = process.env.PORT || 5000;
const cors = require('cors');

// const db = require('./data/db.js');

const app = express();

// db
//     .connectTo('noteex')
//     .then(() => console.log('\n... API Connected to Database ...'))
//     .catch(err => console.log('/***ERROR Connecting to Database ***\n', err));

//MLAB connection==========================================================================

const mongoDB = "mongodb://nalee:superman1@ds139920.mlab.com:39920/noteex";
    
mongoose.connect(mongoDB);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//=========================================================================================
app.use(helmet());
app.use(cors({}));
app.use(express.json());

app.use('/notes', NoteRouter);

app.get('/', (req, res) => res.send('API Running!'));

app.listen(port, err => {
    if (err) { 
        console.log(err);
    }
    console.log(`Server Started on ${port}`)
});