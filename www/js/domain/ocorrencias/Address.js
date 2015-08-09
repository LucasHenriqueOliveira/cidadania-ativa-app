/**
 * Endereco da Ocorrencia
 * Recebe um objeto com as Propriedades:
 * street: Logradouro
 * neighborhood: Bairro
 * city: Cidade
 * State: UF
 * postalCodePrefix: primeiros digitos do CEP
 * @param {object} objAddress
 * @returns {Address}
 */
define('ocorrencias/Address', function () {

    "use strict";

    var Address = function (objAddress) {

        Object.defineProperties(this, {
            street: {
                value: objAddress.street
            },
            number: {
                value: objAddress.number
            },
            neighborhood: {
                value: objAddress.neighborhood
            },
            city: {
                value: objAddress.city
            },
            state: {
                value: objAddress.state
            },
            postalCodePrefix: {
                value: objAddress.postalCodePrefix
            }
        });
    };

    Address.prototype.toString = function () {
        return this.street + ', ' + this.number + ' ' + this.neighborhood + ' ' + this.city + ' ' + this.state + ' ' + ' ' + this.postalCodePrefix;
    };
    
    return Address;

});