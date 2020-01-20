const MongoDB = require('mongodb');

const url = 'mongodb://localhost:27017/news';

module.exports = {
    init() {
        MongoDB.connect(url)
            .then(function(database) {
            const collection = database.collection('news');
            return collection;
            })    
            .then(function(result) {
            console.log(result);
            });
    }
}

