const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient
const random = require('random')

var db
var random_quote

// Initial quotes for inserting
var quotes = [
    {
        name: "Yoda",
        quote: "When gone am I, the last of the Jedi will you be. The Force runs strong in your family. Pass on what you have learned."
    },
    {
        name: "Anakin Skywalker",
        quote: "Someday I will be the most powerful Jedi ever."
    },
    {
        name: "Obi-Wan Kenobi",
        quote: "The Force will be with you. Always."
    }
] 

DATABASEUSERNAME = process.env.MONGO_INITDB_ROOT_USERNAME
DATABASEPASSWORD = process.env.MONGO_INITDB_ROOT_PASSWORD
DATABASEHOST = process.env.MONGO_HOST

connection_string = "mongodb://"+ DATABASEUSERNAME + ':'+ DATABASEPASSWORD+ "@" + DATABASEHOST +":27017"

MongoClient.connect(connection_string, (err, client) => {
    if (err) return console.log(err)

    app.listen(3000, () => {
        console.log('listening on 3000')
    })

    db = client.db("star-wars")
    db.dropCollection("quotes")

    db.collection("quotes").insertMany(quotes, (err, res) => {
        if (err) return console.log(err)
        console.log( res.insertedCount + " documents inserted" )
    })

    app.get('/', (req, res) => {

        db.collection("quotes").find({}).toArray((err, result) => {
            if (err) console.log(err)
            res.send(result[random.int(min = 0, max = 2)])
        })
    
    })
})
