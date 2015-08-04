(function() {
    'use strict';

    angular
        .module('CidadaniaAtivaApp')
        .controller('MainCtrl', MainCtrl);

        MainCtrl.$inject = ['$scope', '$ionicPlatform', '$cordovaGeolocation', '$state', '$timeout', '$localstorage'];

        function MainCtrl($scope, $ionicPlatform, $cordovaGeolocation, $state, $timeout, $localstorage) {
            $scope.myLocation = myLocation;
            $scope.setOcorrencia = setOcorrencia;

            myLocation();

            function myLocation() {

                $ionicPlatform.ready(function () {

                    var posOptions = {timeout: 1000, enableHighAccuracy: false, maximumAge: 65000};
                    $cordovaGeolocation
                        .getCurrentPosition(posOptions)
                        .then(function (position) {

                            markerMyLocation(position.coords.latitude, position.coords.longitude);

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


                    var options = {
                        types: [],
                        componentRestrictions: {}
                    };
                    var inputFrom = document.getElementById('input-address');
                    var autocompleteFrom = new google.maps.places.Autocomplete(inputFrom, options);

                    google.maps.event.addListener(autocompleteFrom, 'place_changed', function() {
                        var place = autocompleteFrom.getPlace();
                        $scope.address = place.formatted_address;
                        markerMyLocation(place.geometry.location.lat(), place.geometry.location.lng());
                        $scope.$apply();
                    });

                    function markerMyLocation(latitude, longitude){

                        var geocoder = new google.maps.Geocoder();
                        var latlng = new google.maps.LatLng(latitude, longitude);

                        geocoder.geocode({'latLng': latlng}, function(result, status) {
                            if (status == google.maps.GeocoderStatus.OK) {
                                if(result[0]){
                                    
                                    var arr = result[0].address_components;
                                    arr.latitude = latitude;
                                    arr.longitude = longitude;
                                    
                                    var ocorrencia = OccurrenceFactory.create({
                                        description:'Descrição de Teste',
                                        arrGoogle: arr, 
                                        status:'pendente',
                                        occurrenceTypeId: 6,
                                        occurrenceTypeName: 'ocorrencia teste'
                                    });
                                    console.log(ocorrencia);
                                    
                                    $scope.address = result[0].formatted_address;
                                }
                            }
                        });

                        $scope.map = {
                            center: {
                                latitude: latitude,
                                longitude: longitude
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
                                latitude: latitude,
                                longitude: longitude
                            },
                            options: {draggable: true, animation: 1},
                            showWindow: false
                        };
                    }
                });
            }

            function setOcorrencia() {
                $localstorage.set('address', $scope.address);
                $state.go('app.ocorrencia');
            }
        }

})();