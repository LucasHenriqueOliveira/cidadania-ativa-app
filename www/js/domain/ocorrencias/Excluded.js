"use strict";

/**
 * Status do tipo Cancelado.
 * Ocorrencia cancelada pelo proprio usuario que abriu
 * @returns {Cancelled}
 */
var Cancelled = function () {

    Status.apply(this, arguments);

    Object.defineProperty(this, 'name', {
        value: 'Cancelado'
    });

};

Cancelled.prototype = Object.create(Status.prototype);
Cancelled.prototype.constructor = Cancelled;
