"use strict";

/**
 * Factory de objetos filhos de Status
 * @returns {undefined}
 */
var StatusFactory = function () {
};

/**
 * Retorna um objeto Status de acordo com o parametro
 * @param {string} status
 * @param {string} statusDecorator
 * @returns {Reopenned|Pendent|Resolved|Excluded}
 */
StatusFactory.create = function(){
    
    var lowCaseStatusType = arguments[0].toLowerCase();
    
    var status = null;
    
    switch (lowCaseStatusType){
        
        case 'pendent':
        case 'pendente':
            status = new Pendent();
            break;
        case 'resolved':
        case 'resolvido':
            status = new Resolved();
            break;
        case 'excluded':
        case 'excluido':
            status = new Excluded();
            break;
        default :
            throw new Error("Status nao reconhecido");
    }
    
    if(arguments[1]){
        var lowCaseStatusDecoratorType = arguments[1].toLowerCase();
        switch (lowCaseStatusDecoratorType){
            case 'reopenned':
            case 'reaberto':
                status = new Reopenned(status);
                break;
            default :
                throw new Error("Status Decorator nao reconhecido");
        }
    }
    
    return status;
};