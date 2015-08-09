/**
* Status do tipo Pendente.
* Ocorrencia aberta e ainda sem resultado
* @returns {Pendent}
*/
define(['ocorrencias/Status'], function(Status){
    
    "use strict";

    var Pendent = function () {

        Status.apply(this, arguments);

        Object.defineProperties(this, {
            id: {
                value: 1
            },
            name: {
                value: 'Pendente'
            }
        });

    };

    Pendent.prototype = Object.create(Status.prototype);
    Pendent.prototype.constructor = Pendent;

    return Pendent;

});