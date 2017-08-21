// Library imports
var express = require('express');
var bodyParser = require('body-parser')

// Local imports
var { mongoose } = require('./db/mongoose')
var { Todo } = require('./models/Todo')
var { Users } = require('./models/users')

var app = express();

// To convert data to json
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    //console.log(JSON.stringify(req.body, undefined, 2));
    var todo = new Todo({
        text: req.body.text,
        completed: req.body.completed,
        completedAt: req.body.completedAt
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.listen(3000, () => {
    console.log(`Start up on port 3000`);
});
