/**
 * Imagem da Ocorrencia
 * @param {string} base64picture
 * @returns {Picture}
 */
define(function () {

    "use strict";

    var Picture = function (base64picture) {

        Object.defineProperty(this, 'picture', {
            value: base64picture
        });

    };

    return Picture;

});