"use strict";

/**
 * Status do tipo Reaberto. 
 * Ocorrencia que foi reaberta pelo usuario.
 * Um DECORATOR que recebe o Status atual da Occurrence
 * @param {Status} status
 * @returns {Reopenned}
 */
var Reopenned = function (status) {

    if (!(status instanceof Status)) {
        throw new Error("Status informado nao e uma instancia correta");
    }

    Status.apply(this, arguments);

    Object.defineProperty(this, 'status', {
        value: status
    });

    Object.defineProperty(this, 'name', {
        get: function(){
            return this.status + ' Reaberto';
        }
    });

};

Reopenned.prototype = Object.create(Status.prototype);
Reopenned.prototype.constructor = Reopenned;
