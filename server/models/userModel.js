"use strict";

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'name'
        },
        email: {
            type: DataTypes.STRING,
            field: 'email'
        },
        nickname: {
            type: DataTypes.STRING,
            field: 'nickname'
        },
        picture: {
            type: DataTypes.STRING,
            field: 'picture'
        },
        type: {
            type: DataTypes.INTEGER,
            field: 'type'
        }
    }, {
        timestamps: true,
        freezeTableName: true,
        tableName: "user",
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        deletedAt: 'deletedAt',
        classMethods: {
            associate: function(models) {
                User.hasMany(models.Occurrence, {foreignKey: 'user_id'})
            }
        }
    });

    return User;
};
