var models = require('../models'),
    express = require('express'),
    router = express.Router();

var userController = require('../controllers/userController')(models);

router.route('/')
    .post(userController.post)
    .get(userController.get);

router.route('/:user_id')
    .put(userController.put)
    .delete(userController.remove)
    .get(userController.getUser);

module.exports = router;