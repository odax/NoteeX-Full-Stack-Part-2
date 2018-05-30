const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = process.env.PORT || 5000;
const server = express();

server.use(cors({}));
server.use(bodyParser.json());

server.get('/', (req, res) => {
    res.json({ Message: 'Hello World'});
});

server.listen(port, err => {
    if (err) {
        console.log(err);
    }
    console.log(`Server Started on ${port}`)
})