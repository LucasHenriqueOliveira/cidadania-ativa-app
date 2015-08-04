"use strict";

/**
 * Status do tipo Resolvido.
 * Ocorrencia que foi solucionada. 
 * @returns {Resolved}
 */
var Resolved = function () {

    Status.apply(this, arguments);

    Object.defineProperty(this, 'name', {
        value: 'Resolvido'
    });

};

Resolved.prototype = Object.create(Status.prototype);
Resolved.prototype.constructor = Resolved;
