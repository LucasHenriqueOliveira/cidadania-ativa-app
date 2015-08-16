(function () {
    'use strict';

    angular
            .module('CidadaniaAtivaApp')
            .controller('OcorrenciaCtrl', OcorrenciaCtrl);  

    OcorrenciaCtrl.$inject = ['$scope', '$state', '$localstorage', '$http', '$cordovaCamera'];

 
    function OcorrenciaCtrl($scope, $state, $localstorage, $http, $cordovaCamera) {
 
        $scope.selOpcoes = [
            {"id": "1", "value": "Escada Acessível"},
            {"id": "2", "value": "Linha-guia"},
            {"id": "3", "value": "Piso Tátil"},
            {"id": "4", "value": "Rampa de Acesso"},
            {"id": "5", "value": "Sinalização Sonora"},
            {"id": "6", "value": "Tecnologia Assistiva"},
            {"id": "7", "value": "Banheiro Acessível"},
        ];

        $scope.descricao = null;
        $scope.address = $localstorage.get('address');

        $scope.addImage = function() {
            var options = {
                quality : 75,
                destinationType : Camera.DestinationType.DATA_URL,
                sourceType : Camera.PictureSourceType.CAMERA,
                allowEdit : true,
                encodingType: Camera.EncodingType.JPEG,
                targetWidth: 300,
                targetHeight: 300,
                popoverOptions: CameraPopoverOptions,
                saveToPhotoAlbum: false
            };

            $cordovaCamera.getPicture(options).then(function(imageData) {
                $scope.imgURI = "data:image/jpeg;base64," + imageData;
            }, function(err) {
                // An error occured. Show a message to the user
            });
        }

        $scope.gravarOcorrencia = function () {

            var ocorrencia = {
                //"user_id": $localstorage.get('userId'),
                "user_id": 1,
                "latitude": "-5.7999189", //verifiar onde foram guardadas essas coordenadas...ou criar funcao para obter a partir do endereco
                "longitude": "-35.2222441",
                "status_id": 1,
                "occurrence_type_id": $scope.selOpcoes.id,
                "description": $scope.descricao,
                "picture": "dddd",
                "street": "ffffff",
                "neighborhood": "gsgsgsgsgs",
                "state": "SP",
                "city" : "Brasilia",
                "postal_code_prefix" : 33200    

            }

            $http({
                method: 'POST',
                url: "http://www.cidadaniaativa.com.br/api/v1/occurrences/",
                data: ocorrencia,
                headers: {'Access-Control-Allow-Origin': '*'}
            }).
                    success(function (data, status, headers, config) {

                        console.log('gravado' + data);


                    }).
                    error(function (data, status, headers, config) {
                        console.log('Erro' + data + status);
                    });

        };
    }
    ;



})();

