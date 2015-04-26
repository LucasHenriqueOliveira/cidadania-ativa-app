(function() {
    'use strict';

    angular
        .module('CidadaniaAtivaApp')
        .controller('MainCtrl', MainCtrl);

        MainCtrl.$inject = ['$scope'];

        function MainCtrl($scope) {
            var vm = this;

            $scope.map = {
                center: {
                    latitude: 25.7516486,
                    longitude: -80.2243542
                },
                zoom: 12,
                "options": {
                    "zoomControl": true,
                    "minZoom": 13,
                    "maxZoom": 20,
                    "mapTypeControl": false,
                    "streetViewControl": false,
                    "draggable": true,
                    "panControl": false,
                    "optimized": true
                }
            };

            var markers = [
                {
                    id: 1,
                    //icon: 'assets/img/blue_marker.png',
                    latitude: 25.799912,
                    longitude: -80.199248,
                    showWindow: false,
                    title: 'Panther Coffee, Wynwood',
                    address: '2390 NW 2nd Ave Miami, FL 33127'
                },
                {
                    id: 2,
                    //icon: 'assets/img/blue_marker.png',
                    latitude: 25.794506,
                    longitude: -80.144168,
                    showWindow: false,
                    title: 'Panther Coffee, South Beach',
                    address: '1875 Purdy Ave Miami Beach, FL 33139'
                }
            ];

            $scope.markers = markers;

        };
})();