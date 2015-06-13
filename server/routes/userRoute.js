var models = require('../models'),
    express = require('express'),
    router = express.Router();

router.post('/', function(req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var picture = req.body.picture;
    var rede_social = req.body.rede_social;

    models.User.findOrCreate({email: email, rede_social: rede_social},{ name: name, email: email, picture: picture, rede_social: rede_social})
        .success(function(user, created) {
            res.json({ message: 'User created!' });
            res.send(200);
        })
        .error(function(err){
            console.log('Error occured' + err);
        });
    //    .then(function(user) {
    //        res.status(201);
    //        res.json({ message: 'User created!' });
    //}, function(error) {
    //    res.send(error);
    //});
});

router.get('/', function(req, res) {
    models.User.findAll()
        .then(function(users) {
            if (users) {
                res.status(200);
                res.json(users);
            } else {
                res.send(401, "User not found");
            }
    }, function(error) {
        res.send(error);
    });
});

module.exports = router;