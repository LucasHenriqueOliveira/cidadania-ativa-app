var models = require('../models'),
    express = require('express'),
    router = express.Router();

router.post('/', function(req, res) {
    models.User.add(function(success){
        res.json({ message: 'User created!' });
    },
    function(err) {
        res.send(err);
    });
});

router.get('/', function(req, res) {
    models.User.findAll()
        .then(function(users) {
            if (users) {
                res.status(200);
                res.json(users);
            } else {
                res.send(401, "dddUser not found");
            }
    }, function(error) {
        res.send(error);
    });
});

module.exports = router;