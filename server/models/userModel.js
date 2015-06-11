//var mongoose = require('mongoose'),
//    Schema = mongoose.Schema;
//
//var userModel = new Schema({
//    id: {
//        type: Number, nullable: false, primary: true
//    },
//    name: {
//        type: String, maxlength: 100, nullable: false
//    },
//    email: {
//        type: String, maxlength: 30, nullable: false
//    },
//    picture: {
//        type: String, maxlength: 80
//    },
//    type: {
//        type: Number, min: 1, max: 3, nullable: false
//    }
//});
//
//module.exports = mongoose.model('User', userModel);

"use strict";

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        picture: DataTypes.STRING,
        type: DataTypes.INTEGER
    }, {
        instanceMethods: {
            retrieveAll: function(onSuccess, onError) {
                User.findAll({}, {raw: true}).success(onSuccess).error(onError);
            },
            retrieveById: function(id, onSuccess, onError) {
                User.find({where: {id: id}}, {raw: true}).success(onSuccess).error(onError);
            },
            add: function(onSuccess, onError) {
                var name = this.name;
                var email = this.email;
                var picture = this.picture;
                var type = this.type;

                User.build({ name: name, email: email, picture: picture,  type: type})
                    .save().success(onSuccess).error(onError);
            },
            updateById: function(id, onSuccess, onError) {
                var id = id;
                var name = this.name;
                var email = this.email;
                var picture = this.picture;
                var type = this.type;

                User.update({ name: name, email: email, picture: picture,  type: type},{where: {id: id} }).success(onSuccess).error(onError);
            },
            removeById: function(id, onSuccess, onError) {
                User.destroy({where: {id: id}}).success(onSuccess).error(onError);
            }
        }
    });

    return User;
};
