"use strict";

/**
 * Local da Ocorrencia.
 * @param {Position} position
 * @param {Address} address
 * @returns {Location}
 */
var Location = function (position, address) {
    
    if(!(position instanceof Position)){
        throw new Error("Posiçao informada nao e uma instancia correta");
    }
    if(!(address instanceof Address)){
        throw new Error("Endereco informado nao e uma instancia correta");
    }     
    
    Object.defineProperty(this, 'position', {
        value: position
    });
    Object.defineProperty(this, 'address', {
        value: address
    });
    
};