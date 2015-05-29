var express = require('express'),
    bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send('Welcome to API Cidadania Ativa!');

});

app.listen(port, function(){
    console.log('Gulp is running my app on PORT: ' + port);
});

module.exports = app;
