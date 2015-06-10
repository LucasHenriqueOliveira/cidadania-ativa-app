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

    //var userController = require('../controllers/userController')(User);

    //userRouter.route('/')
    //    .post(userController.post)
    //    .get(userController.get);

    userRouter.route('/')
        .post(function(req, res, user){
            var user = new User(req.body);

            if(!req.body.name && !req.body.identify){
                res.status(400);
                res.send('Name and identify are required.');
            } else{
                pool.getConnection(function(err,connection){
                    if (err) {
                        connection.release();
                        res.json({"code" : 100, "status" : "Error in connection database"});
                        return;
                    }

                    connection.query('INSERT INTO usuario SET ?', user,function(err,info){
                        connection.release();
                        if(!err) {
                            res.status(400);
                            res.json(info);
                        }
                    });
                });
            }

        })
        .get(function(req, res, next){
                var sql = 'SELECT * from usuario';
                handle_database(req, res, sql);
        });

    //userRouter.use('/', function(req, res, next){
    //    var sql = 'SELECT * from usuario';
    //    handle_database(req, res, sql);
    //});

    userRouter.use('/:userId', function(req, res, next){
        User.findById(req.params.userId, function(err, user){
            if(err)
                res.status(500).send(err);
            else if(user){
                req.user = user;
                next();
            } else{
                res.status(404).send('no book found');
            }
        });
    });

    userRouter.route('/:userId')
        .get(function(req, res){

            var returnUser = req.user.toJSON();
            res.json(returnUser);

        })
        .put(function(req, res){

            req.user.title = req.body.title;
            req.user.author = req.body.author;
            req.user.genre = req.body.genre;
            req.user.read = req.body.read;
            req.user.save(function(err){
                if(err)
                    res.status(500).send(err);
                else {
                    res.json(req.user)
                }
            });

        })
        .delete(function(req, res){
            req.user.remove(function(err){
                if(err)
                    res.status(500).send(err);
                else {
                    res.status(204).send('Removed');
                }
            });
        });

    return userRouter;
}

module.exports = routes;
