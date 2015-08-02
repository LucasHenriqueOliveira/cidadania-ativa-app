"use strict";

module.exports = function(sequelize, DataTypes) {
    var Occurrence = sequelize.define("Occurrence", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'user_id'
        },
        latitude: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'latitude'
        },
        longitude: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'longitude'
        },
        description: {
            type: DataTypes.STRING,
            field: 'description'
        },
        picture: {
            type: DataTypes.STRING,
            field: 'picture'
        },
        status_id: {
            type: DataTypes.INTEGER,
            field: 'status_id'
        },
        occurrence_type_id: {
            type: DataTypes.INTEGER,
            field: 'occurrence_type_id'
        }
    }, {
        timestamps: true,
        freezeTableName: true,
        tableName: "occurrence",
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        classMethods: {
            associate: function(models) {
                Occurrence.belongsTo(models.User, {
                    foreignKey: 'user_id'
                });
            }
        }
    });

    return Occurrence;
};
