var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : '',
    password : '',
    database : ''
});

connection.connect(function(err){
    if(!err) {
        console.log("Database is connected ... \n\n");
    } else {
        console.log("Error connecting database ... \n\n");
    }
});

var Local = require('./models/localModel');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send('Welcome to API Cidadania Ativa!');

});

localRouter = require('./routes/localRoute')(Local);
app.use('/api/local', localRouter);


app.listen(port, function(){
    console.log('Gulp is running my app on PORT: ' + port);
});

module.exports = app;
