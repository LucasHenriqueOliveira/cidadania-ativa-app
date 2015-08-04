"use strict";

/**
 * Imagem da Ocorrencia
 * @param {string} base64picture
 * @returns {Picture}
 */
var Picture = function (base64picture) {
    
    Object.defineProperty(this, 'picture', {
        value: base64picture
    });
    
};