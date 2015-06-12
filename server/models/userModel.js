"use strict";

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        picture: {
            type: DataTypes.STRING
        },
        rede_social: {
            type: DataTypes.INTEGER
        }
    }, {
        timestamps: false,
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
                var rede_social = this.rede_social;

                User.build({ name: name, email: email, picture: picture,  rede_social: rede_social})
                    .save().success(onSuccess).error(onError);
            },
            updateById: function(id, onSuccess, onError) {
                var id = id;
                var name = this.name;
                var email = this.email;
                var picture = this.picture;
                var rede_social = this.rede_social;

                User.update({ name: name, email: email, picture: picture,  rede_social: rede_social},{where: {id: id} }).success(onSuccess).error(onError);
            },
            removeById: function(id, onSuccess, onError) {
                User.destroy({where: {id: id}}).success(onSuccess).error(onError);
            }
        }
    });

    return User;
};
