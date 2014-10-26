var express = require('express');
var http = require('http');
var app = express();
var bodyParser = require('body-parser');
var feeds = require('./feeds');

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.set('port', process.env.PORT || 3000);
//app.use(express.favicon());
//app.use(express.logger('dev'));
//app.use(express.methodOverride());
app.use(bodyParser.json());

app.use(express.static('www'));
app.get('/api/feeds', feeds.findAll);
app.post('/api/feeds', feeds.addNew);
app.get('/api/feeds/:id', feeds.findByID);
app.put('/api/feeds/:id', feeds.update);
app.delete('/api/feeds/:id', feeds.delete);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});