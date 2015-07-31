"use strict";

module.exports = function(sequelize, DataTypes) {
    var Occurrence = sequelize.define("Occurrence", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        latitude: {
            type: DataTypes.STRING,
            allowNull: false
        },
        longitude: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING
        },
        picture: {
            type: DataTypes.STRING
        },
        status_id: {
            type: DataTypes.INTEGER
        },
        occurrence_type_id: {
            type: DataTypes.INTEGER
        }
    }, {
        timestamps: true,
        freezeTableName: true,
        tableName: "occurrence",
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    });

    return Occurrence;
};
