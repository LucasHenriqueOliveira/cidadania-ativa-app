(function() {
    'use strict';

    angular
        .module('CidadaniaAtivaApp')
        .controller('MainCtrl', MainCtrl);

        MainCtrl.$inject = ['$scope', '$ionicPlatform', '$cordovaGeolocation'];

        function MainCtrl($scope, $ionicPlatform, $cordovaGeolocation) {
            var vm = this;

            $ionicPlatform.ready(function() {
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
                                //icon: 'assets/img/blue_marker.png',
                                coords: {
                                    latitude: position.coords.latitude,
                                    longitude: position.coords.longitude
                                },
                                options: { draggable: true },
                                showWindow: false,
                                title: 'Panther Coffee, Wynwood',
                                address: '2390 NW 2nd Ave Miami, FL 33127'
                            }
                        ;
                    }, function (err) {
                        // error
                    });
            });
        };
})();