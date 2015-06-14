var models = require('../models'),
    express = require('express'),
    router = express.Router();

var userController = require('../controllers/userController')(models);

router.route('/')
    .post(userController.post)
    .get(userController.get);

module.exports = router;