/**
 * Status do tipo Cancelado.
 * Ocorrencia cancelada pelo proprio usuario que abriu
 * @returns {Cancelled}
 */
define('ocorrencias/Cancelled', ['ocorrencias/Status'], function (Status) {

    "use strict";

    var Cancelled = function () {

        Status.apply(this, arguments);

        Object.defineProperty(this, 'name', {
            value: 'Cancelado'
        });

    };

    Cancelled.prototype = Object.create(Status.prototype);
    Cancelled.prototype.constructor = Cancelled;

    return Cancelled;

});