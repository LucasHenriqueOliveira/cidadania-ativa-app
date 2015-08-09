/**
 * Factory de objetos Address
 * @returns {undefined}
 */

define('ocorrencias/AddressFactory', ['ocorrencias/Address'], function (Address) {

    "use strict";

    var AddressFactory = function () {
    };

    /**
     * Cria um objeto baseado an array retornada pela API do google, extendida com  as propriedades latitude e longitude
     * @param {array} arrGoogle
     * @returns {Address}
     */
    AddressFactory.createFromGoogle = function (arrGoogle) {

        var arrEndereco = {};

        if (arrGoogle[0].types === "street_number")
            throw new Error("Array informada nao possui o campo numero");
        arrEndereco.number = arrGoogle[0].long_name;

        if (arrGoogle[1].types === "route")
            throw new Error("Array informada nao possui o campo route");
        arrEndereco.street = arrGoogle[1].long_name;

        if (arrGoogle[2].types === "neighborhood")
            throw new Error("Array informada nao possui o campo neighborhood");
        arrEndereco.neighborhood = arrGoogle[2].long_name;

        if (arrGoogle[3].types === "locality")
            throw new Error("Array informada nao possui o campo locality");
        arrEndereco.city = arrGoogle[3].long_name;

        if (arrGoogle[5].types === "administrative_area_level_1")
            throw new Error("Array informada nao possui o campo administrative area level 1");
        arrEndereco.state = arrGoogle[5].long_name;

        if (arrGoogle[7].types === "postal_code_prefix")
            throw new Error("Array informada nao possui o campo postal code prefix");
        arrEndereco.postalCodePrefix = arrGoogle[7].long_name;

        return new Address(arrEndereco);

    };
    
    return AddressFactory;

});