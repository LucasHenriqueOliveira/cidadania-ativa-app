"use strict";

/**
 * Uma Ocorrencia de um problema social.
 * @param {string} description
 * @param {Location} location
 * @param {Picture} picture
 * @param {Status} status
 * @param {OccurrenceType} occurrenceType
 * @returns {Occurrence}
 */
var Occurrence = function (description, location, picture, status, occurrenceType) {
    
    if(!(location instanceof Location)){
        throw new Error("Local informado nao e uma instancia correta");
    }
    
    if(!(status instanceof Status)){
        throw new Error("Status informado nao e uma instancia correta");
    }
    
    Object.defineProperty(this, 'description', {
        value: description
    });
    Object.defineProperty(this, 'location', {
        value: location
    });
    Object.defineProperty(this, 'picture', {
        value: picture
    });
    Object.defineProperty(this, 'status', {
        value: status
    });
    Object.defineProperty(this, 'occurrenceType', {
        value: occurrenceType
    });
    
};