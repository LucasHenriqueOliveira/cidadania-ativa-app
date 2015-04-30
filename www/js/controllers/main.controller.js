(function() {
    'use strict';

    angular
        .module('CidadaniaAtivaApp')
        .controller('MainCtrl', MainCtrl);

        MainCtrl.$inject = ['$scope', '$ionicPlatform', '$cordovaGeolocation', '$state', '$ionicLoading'];

        function MainCtrl($scope, $ionicPlatform, $cordovaGeolocation, $state, $ionicLoading) {
            $scope.myLocation = myLocation;
            $scope.setDenuncia = setDenuncia;

            myLocation();

            function myLocation() {
                $ionicLoading.show({template: '<i class="icon ion-loading-a"></i><br> Aguarde enquanto buscamos a sua localização...'});

                $ionicPlatform.ready(function () {
                    var posOptions = {timeout: 10000, enableHighAccuracy: false, maximumAge: 65000};
                    $cordovaGeolocation
                        .getCurrentPosition(posOptions)
                        .then(function (position) {

                            var geocoder = new google.maps.Geocoder();
                            var latlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);

                            geocoder.geocode({'latLng': latlng}, function(result, status) {
                                if (status == google.maps.GeocoderStatus.OK) {
                                    if(result[0]){
                                        $scope.address = result[0].formatted_address;
                                    }
                                }
                            });

                            $scope.map = {
                                center: {
                                    latitude: position.coords.latitude,
                                    longitude: position.coords.longitude
                                },
                                zoom: 16,
                                "options": {
                                    "zoomControl": false,
                                    "mapTypeControl": false,
                                    "streetViewControl": false,
                                    "draggable": true,
                                    "panControl": false,
                                    "scaleControl": false,
                                    "optimized": true
                                }
                            };

                            $scope.marker =
                            {
                                id: 1,
                                icon: '../../img/my-location.png',
                                coords: {
                                    latitude: position.coords.latitude,
                                    longitude: position.coords.longitude
                                },
                                options: {draggable: true, animation: 1},
                                showWindow: false
                            };

                        }, function (err) {

                            $scope.map = {
                                center: {
                                    latitude: -15.799712,
                                    longitude: -47.864163
                                },
                                zoom: 4,
                                "options": {
                                    "zoomControl": false,
                                    "mapTypeControl": false,
                                    "streetViewControl": false,
                                    "draggable": true,
                                    "panControl": false,
                                    "scaleControl": false,
                                    "optimized": true
                                }
                            };

                        });
                });

                $ionicLoading.hide();
            }

            function setDenuncia() {
                $state.go('app.denuncia');
            }
        }

})();