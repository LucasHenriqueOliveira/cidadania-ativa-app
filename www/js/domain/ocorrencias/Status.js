"use strict";

/**
 * Objeto abstrato Status. 
 * @returns {Status}
 */
var Status = function () {
    
    if(this.constructor == Status){
        throw new Error("Nao e possivel instanciar uma clase Status");
    }
    
};

Status.prototype.toString = function () {
    return this.name;
};

// valueOf garante a comparação de grandeza. 
// Se maior ou menor
Status.prototype.valueOf = function () {
    return this.name;
};