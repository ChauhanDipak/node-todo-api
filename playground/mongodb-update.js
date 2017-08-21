// var MongoClient = require('mongodb').MongoClient;
var { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    // update a single data
    // db.collection('Todos').findOneAndUpdate({ _id: new ObjectID('5998536fbbba22199c17cb02')}, {
    //     $set: {
    //         completed: false
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    // increment value of a single field
    db.collection('Users').findOneAndUpdate({ _id: new ObjectID("5998536fbbba22199c17cb03") }, {
        $inc: {
            age: 2
        }
    }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        });

    //db.close();
});