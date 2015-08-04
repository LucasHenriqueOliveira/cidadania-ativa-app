"use strict";

/**
 * Tipo de Ocorrencia
 * @param {int} id
 * @param {string} name
 * @returns {undefined}
 */
var OccurrenceType = function (id, name) {

    Object.defineProperty(this, 'id', {
        value: name
    });

    Object.defineProperty(this, 'name', {
        value: name
    });

};