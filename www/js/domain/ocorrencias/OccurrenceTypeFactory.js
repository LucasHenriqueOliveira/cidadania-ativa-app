"use strict";

/**
 * Factory de objetos OccurrenceType
 * @returns {undefined}
 */
var OccurrenceTypeFactory = function () {
};

/**
 * Cria um objeto OccurrenceType
 * @param {int} id
 * @param {string} name
 * @returns {OccurrenceType}
 */
OccurrenceTypeFactory.create = function(){
    return new OccurrenceType(arguments[0], arguments[1]);
}