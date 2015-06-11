var express = require('express'),
    bodyParser = require('body-parser');

var Local = require('./models/localModel');

var app = express();

var port = process.env.PORT || 3000;

var env = "dev";
var config = require('config/config.json')[env];

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send('Welcome to API Cidadania Ativa!');

});

localRouter = require('./routes/localRoute')(Local);
app.use('/api/v1/local', localRouter);

userRouter = require('./routes/userRoute');
app.use('/api/v1/users', userRouter);


app.listen(port, function(){
    console.log('Gulp is running my app on PORT: ' + port);
});


//// catch 404 and forward to error handler
//app.use(function(req, res, next) {
//    var err = new Error('Not Found');
//    err.status = 404;
//    next(err);
//});
//
//// error handlers
//
//// development error handler
//// will print stacktrace
//if (app.get('env') === 'dev') {
//    app.use(function(err, req, res, next) {
//        res.status(err.status || 500);
//        res.render('error', {
//            message: err.message,
//            error: err
//        });
//    });
//}
//
//// production error handler
//// no stacktraces leaked to user
//app.use(function(err, req, res, next) {
//    res.status(err.status || 500);
//    res.render('error', {
//        message: err.message,
//        error: {}
//    });
//});

module.exports = app;
