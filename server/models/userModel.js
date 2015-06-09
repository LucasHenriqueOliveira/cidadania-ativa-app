var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var userModel = new Schema({
    id: {
        type: Number, nullable: false, primary: true
    },
    name: {
        type: String, maxlength: 100, nullable: false
    },
    email: {
        type: String, maxlength: 30, nullable: false
    },
    picture: {
        type: String, maxlength: 80
    },
    type: {
        type: Number, min: 1, max: 3, nullable: false
    }
});

module.exports = mongoose.model('User', userModel);
