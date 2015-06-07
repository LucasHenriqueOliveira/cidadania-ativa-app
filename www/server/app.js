var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var Local = require('./models/localModel');
var User = require('./models/userModel');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send('Welcome to API Cidadania Ativa!');

});

localRouter = require('./routes/localRoute')(Local);
app.use('/api/local', localRouter);

userRouter = require('./routes/userRoute')(User);
app.use('/api/users', userRouter);


app.listen(port, function(){
    console.log('Gulp is running my app on PORT: ' + port);
});

module.exports = app;
