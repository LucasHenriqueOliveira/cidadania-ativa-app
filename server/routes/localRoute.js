var express = require('express');

var routes = function(Local){
    var localRouter = express.Router();

    var LocalController = require('../controllers/localController')(Local);

    localRouter.route('/:latitude/:longitude')
        .post(LocalController.post)
        .get(LocalController.get);

    return localRouter;
}

module.exports = routes;