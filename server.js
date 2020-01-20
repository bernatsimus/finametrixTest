const express = require('express');
const app = express();
const path = require('path');
console.log(__dirname);
app.use(express.static(__dirname + '/public'));

// app.use(express.bodyParser());
// app.get('/api', function(request, response) {
//     response.send('asdas')
// });

// app.get('/api/users', function(request, response) {
//     response.json('user')
// });

app.get('/',function(request,response) {
    response.sendFile(path.join(__dirname+'/index.html'));
  });

app.listen(80, function(request, response){
    require ('./database').init();
});