(function() {
    'use strict';

    angular
        .module('CidadaniaAtivaApp')
        .controller('MainCtrl', MainCtrl);

        MainCtrl.$inject = ['$scope', '$ionicPlatform', '$cordovaGeolocation'];

        function MainCtrl($scope, $ionicPlatform, $cordovaGeolocation) {
            var vm = this;
            $scope.myLocation = myLocation;

            myLocation();

            function myLocation() {
                $ionicPlatform.ready(function () {
                    var posOptions = {timeout: 10000, enableHighAccuracy: false, maximumAge: 65000};
                    $cordovaGeolocation
                        .getCurrentPosition(posOptions)
                        .then(function (position) {

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
                                showWindow: false,
                                title: 'Panther Coffee, Wynwood',
                                address: '2390 NW 2nd Ave Miami, FL 33127'
                            }
                            ;
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
            }
        }

})();