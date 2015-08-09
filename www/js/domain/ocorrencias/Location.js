/**
 * Local da Ocorrencia.
 * @param {Position} position
 * @param {Address} address
 * @returns {Location}
 */
define(['ocorrencias/Position', 'ocorrencias/Address'], function (Position, Address) {

    "use strict";

    var Location = function (position, address) {

        if (!(position instanceof Position)) {
            throw new Error("Posiçao informada nao e uma instancia correta");
        }
        if (!(address instanceof Address)) {
            throw new Error("Endereco informado nao e uma instancia correta");
        }

        Object.defineProperties(this, {
            position: {
                value: position,
                enumerable: true
            },
            address: {
                value: address,
                enumerable: true
            }
        });
    };

    Object.defineProperties(Location.prototype, {
        latitude: {
            get: function () {
                return this.position.latitude;
            }
        },
        longitude: {
            get: function () {
                return this.position.longitude;
            }
        },
        formattedAddress: {
            get: function () {
                return this.address.toString();
            }
        }
    });
    
    return Location;

});