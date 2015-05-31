var express = require('express'),
    mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'cidadaniaativa'
});

connection.connect(function(err){
    if(!err) {
        console.log("Database is connected ... \n\n");
    } else {
        console.log("Error connecting database ... \n\n");
    }
});

var routes = function(Local){
    var localRouter = express.Router();

    var LocalController = require('../controllers/localController')(Local);

    localRouter.route('/:latitude/:longitude')
        .post(LocalController.post)
        .get(LocalController.get);

    localRouter.use('/', function(req, res, next){
        connection.query('SELECT * from ocorrencia', function(err, rows, fields) {
            connection.end();
            if (!err)
                res.json(rows);
            else
                console.log('Error while performing Query.');
        });
    });

    return localRouter;
}

module.exports = routes;