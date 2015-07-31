(function() {
    'use strict';

    angular
        .module('CidadaniaAtivaApp')
        .controller('OcorrenciaCtrl', OcorrenciaCtrl);

    OcorrenciaCtrl.$inject = ['$scope', '$state', '$localstorage'];

    function OcorrenciaCtrl($scope, $state, $localstorage) {
    	$scope.selOpcoes = [

    			{	"id": "1", "value": "Escada Acessível"	},
    			{	"id": "2", "value": "Linha-guia"	} ,
    			{	"id": "3", "value": "Piso Tátil"	},
    			{	"id": "4", "value": "Rampa de Acesso"	} ,
    			{	"id": "5", "value": "Sinalização Sonora"	},
    			{	"id": "6", "value": "Tecnologia Assistiva"	} ,
    			{	"id": "7", "value": "Banheiro Acessível"	} ,
    			
    		];
    	$scope.opcaoSelecionada = null;
    	$scope.descricao = null;
        $scope.address = $localstorage.get('address');
        
        console.log($scope.address);
  

    };

    function createOcorrencia(){

    	var ocorrencia = {
  							"user_id": $localstorage.get('userId'),
  							"latitude": "-5.7999189",
 							"longitude": "-35.2222441",
 							"status_id": 1,
 							"occurrence_type_id": $scope.opcaoSelecionada,
							"description": $scope.descricao,
 							"picture": "dddd" 
						}
    }
})();

