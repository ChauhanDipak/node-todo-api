// var MongoClient = require('mongodb').MongoClient;
var { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    // find whole documents

    // db.collection('Todos').find().toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // find by key-value

    // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // find by 'id'

    // db.collection('Todos').find({ 
    //     _id: new ObjectID('5998536fbbba22199c17cb02')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find({}).count().then((count) => {
    //     console.log(`Todos count :  ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // Delete many

    // db.collection('Todos').deleteMany({text: 'Each Lunch'}).then((resultas) => {
    //     console.log(resultas);
    // });

    // Delete one

    // db.collection('Todos').deleteOne({ text: 'Do brush' }).then((resultas) => {
    //     console.log(resultas);
    // });

    // find one and delete

    // db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
    //     console.log(result);
    // });

    //db.close();
});