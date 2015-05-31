var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var localModel = new Schema({
    id: {
        type: String, nullable: false, primary: true
    },
    local: {
        type: String, maxlength: 254, nullable: false
    },
    latitude: {
        type: String, maxlength: 20, nullable: false
    },
    longitude: {
        type: String, maxlength: 20, nullable: false
    }
});

module.exports = mongoose.model('Local', localModel);