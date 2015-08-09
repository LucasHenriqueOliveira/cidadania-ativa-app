/**
 * Uma Ocorrencia de um problema social.
 * @param {string} description
 * @param {Location} location
 * @param {Picture} picture
 * @param {Status} status
 * @param {OccurrenceType} occurrenceType
 * @returns {Occurrence}
 */
define(function () {

    "use strict";
    
    var Occurrence = function (description, location, picture, status, occurrenceType) {

        if (!(location instanceof Location)) {
            throw new Error("Local informado nao e uma instancia correta");
        }

        if (!(status instanceof Status)) {
            throw new Error("Status informado nao e uma instancia correta");
        }

        Object.defineProperties(this, {
            description: {
                value: description,
                enumerable: true
            },
            location: {
                value: location,
                enumerable: true
            },
            picture: {
                value: picture
            },
            status: {
                value: status
            },
            occurrenceType: {
                value: occurrenceType
            }
        });

    };

    Object.defineProperties(Occurrence.prototype, {
        latitude: {
            get: function () {
                return this.location.latitude.valueOf();
            },
            enumerable: true
        }
    });

    return Occurrence;

});