var localController = function(){

    // retornar os dados por post
    var post = function(req, res){

        var local = new Local(req.body);

        if(!req.body.latitude && !req.body.longitude){
            res.status(400);
            res.send('Latitude e Longitude e obrigatorio.');
        } else{
            // Faltar salvar no banco
            res.status(201);
            res.send(local);
        }
    }

    var get = function(req, res){

        // retornar os dados por get
        var data = {
            "local": {
                "latitude": req.params.latitude,
                "logitude": req.params.longitude
            }
        };

        res.send(data);
    }

    return {
        post: post,
        get: get
    }
}

module.exports = localController;
