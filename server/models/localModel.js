var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var localModel = new Schema({
    id: {
        type: String
    },
    local: {
        type: String
    },
    latitude: {
        type: String
    },
    longitude: {
        type: String
    }
});

module.exports = mongoose.model('Local', localModel);