/**
 * Factory de objetos Location
 * @returns {LocationFactory}
 */
define(function (require) {

    "use strict";
    
    var Position = require('ocorrencias/Position'),
          AddressFactory = require('ocorrencias/AddressFactory'),
          Location = require('ocorrencias/Location');

    var LocationFactory = function () {
    };

    /**
     * Retorna um objeto com as propriedades da array da API do google, extendidas as propriedades latitude e longitude
     * @param {array} arrGoogle
     * @returns {Location}
     */
    LocationFactory.createFromGoogle = function (arrGoogle) {

        var position = new Position(arrGoogle.latitude, arrGoogle.longitude);
        var address = AddressFactory.createFromGoogle(arrGoogle);
        return new Location(position, address);

    };

    return LocationFactory;

});