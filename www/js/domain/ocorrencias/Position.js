"use strict";

/**
 * Uma coordenada
 * @param {PositionPoint} latitude
 * @param {PositionPoint} longitude
 * @returns {unresolved}
 */
var Position = function (latitude, longitude) {
     
    Object.defineProperty(this, 'latitude', {
        value: new PositionPoint(latitude)
    });
    Object.defineProperty(this, 'longitude', {
        value: new PositionPoint(longitude)
    });
    
    if (Position.instances[this]) {
        return Position.instances[this];
    }
    else {
        Position.instances[this] = this;
    }
};

Position.instances = [];

Position.prototype.toString = function () {
    return this.latitude.toString() +' '+this.longitude.toString();
};

Position.prototype.valueOf = function () {
    return Number(this.point);
};
