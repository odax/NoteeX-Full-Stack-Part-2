const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const server = express();

server.use(cors({}));
server.use(bodyParser.json());

server.get('/', (req, res) => {
    res.json({ Message: 'Hello World'});
});

server.listen(5000, err => {
    if (err) {
        console.log(err);
    }
    console.log('Server Started on 5000')
})