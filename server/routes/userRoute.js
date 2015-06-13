var models = require('../models'),
    express = require('express'),
    router = express.Router();

router.post('/', function(req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var picture = req.body.picture;
    var rede_social = req.body.rede_social;

    models.User.findOrCreate({where:{email: email, rede_social: rede_social}, defaults:{name: name, email: email, picture: picture, rede_social: rede_social}})
        .spread(function(user, created) {
            if(created){
                res.status(201);
                res.json({ message: 'User created!' });
            } else{
                res.status(200);
                res.json({ message: 'User exist!' });
            }
        })
        .error(function(err){
            console.log('Error occured' + err);
        });
});

router.get('/', function(req, res) {
    models.User.findAll()
        .then(function(users) {
            if (users) {
                res.status(200);
                res.json(users);
            } else {
                res.status(400);
                res.json({ message: 'User not found!' });
            }
    }, function(error) {
        res.send(error);
    });
});

module.exports = router;