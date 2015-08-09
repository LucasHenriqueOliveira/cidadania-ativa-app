/**
 * Uma coordenada
 * @param {PositionPoint} latitude
 * @param {PositionPoint} longitude
 * @returns {unresolved}
 */
define(['ocorrencias/PositionPoint'], function (PositionPoint) {

    "use strict";

    var Position = function (latitude, longitude) {

        this._latitude = new PositionPoint(latitude);
        this._longitude = new PositionPoint(longitude);

        if (Position.instances[this]) {
            return Position.instances[this];
        }
        else {
            Position.instances[this] = this;
        }
    };

    Position.instances = [];

    Position.prototype.toString = function () {
        return this.latitude.toString() + ' ' + this.longitude.toString();
    };

    Position.prototype.valueOf = function () {
        return this.toString();
    };

    Object.defineProperties(Position.prototype, {
        latitude: {
            get: function () {
                return this._latitude;
            }
        },
        longitude: {
            get: function () {
                return this._longitude;
            }
        }
    });

    return Position;

});