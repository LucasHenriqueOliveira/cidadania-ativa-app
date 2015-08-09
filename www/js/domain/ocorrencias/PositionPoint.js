/**
 * Um ponto de Posiçao (latitude/longitude)
 * @param {float} value
 * @returns {PositionPoint}
 */
define([], function () {

    "use strict";
   
    var PositionPoint = function (value) {
        this.validate(value);

        Object.defineProperty(this, 'point', {
            value: value
        });

        if (PositionPoint.instances[this]) {
            return PositionPoint.instances[this];
        }
        else {
            PositionPoint.instances[this] = this;
        }
    };

    // VARIÁRVEL ESTÁTICA
    // guarda uma referencia às instâncias criadas desta classe.}
    PositionPoint.instances = [];

    PositionPoint.prototype.toString = function () {
        return this.point;
    };

    // valueOf garante a comparação de grandeza. 
    // Se maior ou menor
    PositionPoint.prototype.valueOf = function () {
        return Number(this.point);
    };

    Object.defineProperties(PositionPoint.prototype, {
        validate: {
            value: function (point) {
//                if (!validator.isFloat(point)) {
//                    throw Error('valor '+point+' nao e um ponto flutuante.');
//                }
                return true;
            }
        }
    });

    return PositionPoint;

});

