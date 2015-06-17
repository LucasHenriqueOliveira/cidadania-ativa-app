var userController = function(models){

    // Find user that exist and update the updatedAt field or create new user
    var post = function(req, res){
        var name = req.body.name;
        var email = req.body.email;
        var nickname = req.body.nickname;
        var picture = req.body.picture;
        var rede_social = req.body.rede_social;

        models.User.findOrCreate({where:{email: email, nickname: nickname, rede_social: rede_social}, defaults:{name: name, email: email, nickname: nickname, picture: picture, rede_social: rede_social}})
            .spread(function(user, created) {
                if(created){
                    res.status(201);
                    res.json({ message: 'User created!' });
                } else {
                    models.User.update({updatedAt: new Date()}, { where: {email: email, nickname: nickname, rede_social: rede_social}})
                        .then(function (user) {
                            res.status(200);
                            res.json({message: 'User exist!'});
                        })
                }
            })
            .error(function(err){
                console.log('Error occured' + err);
            });

    }

    // return all the users
    var get = function(req, res){
        models.User.findAll()
            .then(function(users) {
                if (users) {
                    //res.status(200);
                    //res.json(users);
                    res.render('index', {
                        title: 'Express',
                        users: users
                    });
                } else {
                    res.status(400);
                    res.json({ message: 'User not found!' });
                }
            }, function(error) {
                res.send(error);
            });
    }

    // edit the user
    var put = function(req, res){

        var id = req.params.user_id;

        models.User.update({updatedAt: new Date()}, { where: {id: id}})
            .then(function (user) {
                res.status(200);
                res.json({message: 'User updated!'});
            }, function(error) {
                res.send(error);
            });
    }

    // remove the user
    var remove = function(req, res){

        var id = req.params.user_id;

        models.User.destroy({ where: {id: id}})
            .then(function (user) {
                res.status(200);
                res.json({message: 'User removed!'});
            }, function(error) {
                res.send(error);
            });
    }

    return {
        post: post,
        get: get,
        put: put,
        remove: remove
    }
}

module.exports = userController;

