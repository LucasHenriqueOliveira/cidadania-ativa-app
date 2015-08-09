/**
 * Status do tipo Reaberto. 
 * Ocorrencia que foi reaberta pelo usuario.
 * Um DECORATOR que recebe o Status atual da Occurrence
 * @param {Status} status
 * @returns {Reopenned}
 */
define('ocorrencias/Pendent', ['ocorrencias/Status'], function (Status) {

    "use strict";

    var Reopenned = function (status) {

        if (!(status instanceof Status)) {
            throw new Error("Status informado nao e uma instancia correta");
        }

        Status.apply(this, arguments);

        Object.defineProperties(this, {
            status: {
                value: status
            },
            name: {
                get: function () {
                    return this.status + ' Reaberto';
                }
            }
        });

    };

    Reopenned.prototype = Object.create(Status.prototype);
    Reopenned.prototype.constructor = Reopenned;

    return Reopenned;

});
