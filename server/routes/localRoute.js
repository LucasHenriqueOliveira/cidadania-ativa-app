var express = require('express'),
    mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit : 100,
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'cidadaniaativa',
    debug :  false
});

function handle_database(req,res, sql) {

    pool.getConnection(function(err,connection){
        if (err) {
            connection.release();
            res.json({"code" : 100, "status" : "Error in connection database"});
            return;
        }

        connection.query(sql,function(err,rows){
            connection.release();
            if(!err) {
                res.json(rows);
            }
        });

        connection.on('error', function(err) {
            res.json({"code" : 100, "status" : "Error in connection database"});
            return;
        });
    });
}

var routes = function(Local){
    var localRouter = express.Router();

    var LocalController = require('../controllers/localController')(Local);

    localRouter.route('/:latitude/:longitude')
        .post(LocalController.post)
        .get(LocalController.get);

    localRouter.use('/', function(req, res, next){
        var sql = 'SELECT * from ocorrencia';
        handle_database(req, res, sql);
    });

    return localRouter;
}

module.exports = routes;