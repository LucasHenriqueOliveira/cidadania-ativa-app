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
            type: DataTypes.STRING
        },
        nickname: {
            type: DataTypes.STRING
        },
        picture: {
            type: DataTypes.STRING
        },
        type: {
            type: DataTypes.INTEGER
        }
    }, {
        timestamps: true,
        freezeTableName: true,
        tableName: "user",
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        deletedAt: 'deletedAt'
    });

    return User;
};
