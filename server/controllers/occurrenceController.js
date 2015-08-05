var occurrenceController = function(models){

    // Find occurrence that exist and update the updatedAt field or create new occurrence
    var post = function(req, res){
        var user_id = req.body.user_id;
        var latitude = req.body.latitude;
        var longitude = req.body.longitude;
        var description = req.body.description;
        var picture = req.body.picture;
        var status_id = req.body.status_id;
        var occurrence_type_id = req.body.occurrence_type_id;
        var street = req.body.street;
        var neighborhood = req.body.neighborhood;
        var city = req.body.city;
        var state = req.body.state;
        var postal_code_prefix = req.body.postal_code_prefix;

        models.Occurrence.findOrCreate(
            {where:{user_id: user_id, latitude: latitude, longitude: longitude, occurrence_type_id: occurrence_type_id},
            defaults:{
                user_id: user_id,
                latitude: latitude,
                longitude: longitude,
                description: description,
                picture: picture,
                status_id: status_id,
                occurrence_type_id: occurrence_type_id,
                street: street,
                neighborhood: neighborhood,
                city: city,
                state: state,
                postal_code_prefix: postal_code_prefix
            }})
            .spread(function(occurrence, created) {
                if(created){
                    res.status(201);
                    res.json({ message: 'Occurrence created!' });
                } else {
                    res.status(200);
                    res.json({message: 'Occurrence exist!'});
                }
            })
            .error(function(err){
                console.log('Error occured' + err);
            });

    }

    // return all the occurrences
    var get = function(req, res){
        models.Occurrence.findAll()
            .then(function(occurrences) {
                res.json(users);
                res.status(200);
            }, function(error) {
                res.status(404);
                res.send(error);
            });
    }

    // edit the occurrence
    var put = function(req, res){

        var id = req.params.occurrence_id;

        models.Occurrence.update({updatedAt: new Date()}, { where: {id: id}})
            .then(function (occurrence) {
                res.status(200);
            }, function(error) {
                res.status(404);
                res.send(error);
            });
    }

    // remove the occurrence
    var remove = function(req, res){

        var id = req.params.occurrence_id;

        models.Occurrence.destroy({ where: {id: id}})
            .then(function (occurrence) {
                res.status(200);
            }, function(error) {
                res.status(404);
                res.send(error);
            });
    }

    // get the occurrence
    var getOccurrence = function(req, res){

        var id = req.params.occurrence_id;

        models.Occurrence.find({ where: {id: id}})
            .then(function(occurrence) {
                if (occurrence) {
                    res.status(200);
                    res.json(occurrence);
                } else {
                    res.status(404);
                    res.json({ message: 'Occurrence not found!' });
                }
            }, function(error) {
                res.status(404);
                res.send(error);
            });
    }

    return {
        post: post,
        get: get,
        put: put,
        remove: remove,
        getOccurrence: getOccurrence
    }
}

module.exports = occurrenceController;