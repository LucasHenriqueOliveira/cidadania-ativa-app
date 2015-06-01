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

var routes = function(User){
    var userRouter = express.Router();

    userRouter.use('/', function(req, res, next){
        var sql = 'SELECT * from usuario';
        handle_database(req, res, sql);
    });

    return userRouter;
}

module.exports = routes;
