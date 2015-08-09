/**
 * Tipo de Ocorrencia
 * @param {int} id
 * @param {string} name
 * @returns {undefined}
 */
define(function () {

    "use strict";

    var OccurrenceType = function (id, name) {

        Object.defineProperty(this, 'id', {
            value: name
        });

        Object.defineProperty(this, 'name', {
            value: name
        });

    };
    
    return OccurrenceType;

});