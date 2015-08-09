/**
 * Status do tipo Resolvido.
 * Ocorrencia que foi solucionada. 
 * @returns {Resolved}
 */
define('ocorrencias/Pendent', ['ocorrencias/Status'], function (Status) {

    "use strict";

    var Resolved = function () {

        Status.apply(this, arguments);

        Object.defineProperty(this, 'name', {
            value: 'Resolvido'
        });

    };

    Resolved.prototype = Object.create(Status.prototype);
    Resolved.prototype.constructor = Resolved;

    return Resolved;

});