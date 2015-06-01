var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var userModel = new Schema({
    id: {
        type: String, nullable: false, primary: true
    },
    name: {
        type: String, maxlength: 100, nullable: false
    },
    email: {
        type: String, maxlength: 30, nullable: false
    }
});

module.exports = mongoose.model('User', userModel);
