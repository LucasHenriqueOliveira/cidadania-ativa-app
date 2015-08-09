/**
 * Factory de objetos OccurrenceType
 * @returns {undefined}
 */
define(function () {

    "use strict";
    
    var OccurrenceType = require('ocorrencias/OccurrenceType');

    var OccurrenceTypeFactory = function () {
    };

    /**
     * Cria um objeto OccurrenceType
     * @param {int} id
     * @param {string} name
     * @returns {OccurrenceType}
     */
    OccurrenceTypeFactory.create = function () {
        return new OccurrenceType(arguments[0], arguments[1]);
    }

    return OccurrenceTypeFactory;

});