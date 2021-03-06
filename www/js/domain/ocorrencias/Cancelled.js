"use strict";

/**
 * Status do tipo Excluido.
 * Ocorrencia excluida por avaliacao de relatos de ocorrencia falsa/indevida 
 * @returns {Excluded}
 */
var Excluded = function () {

    Status.apply(this, arguments);

    Object.defineProperty(this, 'name', {
        value: 'Excluido'
    });

};

Excluded.prototype = Object.create(Status.prototype);
Excluded.prototype.constructor = Excluded;
