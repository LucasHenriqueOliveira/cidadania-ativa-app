"use strict";

/**
 * Status do tipo Pendente.
 * Ocorrencia aberta e ainda sem resultado
 * @returns {Pendent}
 */
var Pendent = function () {
    
   Status.apply(this, arguments);
   
   Object.defineProperty(this, 'name', {
        value: 'Pendente'
    });
    
};

Pendent.prototype = Object.create(Status.prototype);
Pendent.prototype.constructor = Pendent;
