const express = require('express');
const app = express();
const path = require('path');
var mongo = require('mongodb');
const mongoClient = mongo.MongoClient;

app.use(express.static(__dirname + '/public'));


app.get('/getNews', function(request, response) {
    collection.find({ archiveDate: null }).sort({ date: 1 }).toArray((error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});

app.get('/getArchiveds', function (request, response) {
    collection.find({ archiveDate: { $ne: null } }).sort({ archiveDate: 1 }).toArray((error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});

app.post('/updateArchiveDate/:id', function (request, response) {
    const id = new mongo.ObjectID(request.params.id);
    collection.updateOne({ "_id": id },
        { $set: { "archiveDate": new Date() } }, (error, result) => {
            if (error) {
                return response.status(500).send(error);
            }
            response.send(result);
        });
});

app.post('/deleteArchived/:id', function (request, response) {
    const id = new mongo.ObjectID(request.params.id);
    collection.deleteOne({ "_id": id }, (error, result) => {
            if (error) {
                return response.status(500).send(error);
            }
            response.send(result);
        });
});

app.get('/',function(request,response) {
    response.sendFile(path.join(__dirname+'/index.html'));
    });

app.listen(80, function(request, response){
    mongoClient.connect('mongodb://localhost:27017', {}, (error, client) => {
        if (error) {
            return response.status(500).send(error);
        }
        database = client.db('news');
        collection = database.collection("news");
        console.log("Connected!");
    });
});


