"use strict";

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
var Address = function (objAddress) {
    
    Object.defineProperty(this, 'street', {
        value: objAddress.routeLongName
    });
    Object.defineProperty(this, 'neighborhood', {
        value: objAddress.neighborhood
    });
    Object.defineProperty(this, 'city', {
        value: objAddress.locality
    });
    Object.defineProperty(this, 'state', {
        value: objAddress.state
    });
    Object.defineProperty(this, 'postalCodePrefix', {
        value: objAddress.postalCodePrefix
    });
    
};