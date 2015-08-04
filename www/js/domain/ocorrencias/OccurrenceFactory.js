"use strict";

/**
 * Factory de objetos Occurrence
 * @returns {undefined}
 */
var OccurrenceFactory = function () {
};

/**
 * Recebe um objeto com os valores, tendo as seguintes propriedades:
 * description: Descriçao da ocorrencia
 * location: um objeto Location
 * arrGoogle: um objeto com os valores retornados pela API do Google
 * status: o nome do status
 * occurrenceTypeId: id do tipo de ocorrencia
 * occurrenceTypeName: nome do tipo de ocorrencia
 * base64picture: uma imagem em base64 (opcional)
 * @param {object} objValues
 * @returns {Occurrence}
 */
OccurrenceFactory.create = function(objValues){
    var description = objValues.description;
    
    var location; 
    if(objValues.arrGoogle){
        location = LocationFactory.createFromGoogle(objValues.arrGoogle);
    }else{
        location = objValues.location;
    }
    
    var status = StatusFactory.create(objValues.status);
    
    var occurrenceType = OccurrenceTypeFactory.create(
            objValues.occurrenceTypeId, 
            objValues.occurrenceTypeName);
    
    if(objValues.picture){
        var picture = new Picture(objValues.base64picture);
    }
    
    return new Occurrence (description, location, picture, status, occurrenceType) ;
    
};