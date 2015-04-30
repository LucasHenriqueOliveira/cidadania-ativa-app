(function() {
    'use strict';

    angular
        .module('CidadaniaAtivaApp')
        .directive('googleplace', googleplace);

    function googleplace() {
        return {
            require: 'ngModel',
            link: function(scope, element, attrs, model) {
                var options = {
                    types: [],
                    componentRestrictions: {}
                };
                scope.gPlace = new google.maps.places.Autocomplete(element[0], options);

                google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
                    scope.$apply(function() {
                        model.$setViewValue(element.val());

                        var mapOptions = {
                            center: new google.maps.LatLng(-15.799712, -47.864163),
                            zoom: 4
                        };

                        var map = new google.maps.Map(document.getElementById('map'),
                            mapOptions);

                        var place = scope.gPlace.getPlace();
                        if (!place.geometry) {
                            window.alert("Autocomplete's returned place contains no geometry");
                            return;
                        }

                        // If the place has a geometry, then present it on a map.
                        if (place.geometry.viewport) {
                            map.fitBounds(place.geometry.viewport);
                        } else {
                            map.setCenter(place.geometry.location);
                            map.setZoom(17);
                        }
                        marker.setIcon(/** @type {google.maps.Icon} */({
                            icon: '../../img/my-location.png',
                            size: new google.maps.Size(71, 71),
                            origin: new google.maps.Point(0, 0),
                            anchor: new google.maps.Point(17, 34),
                            scaledSize: new google.maps.Size(35, 35)
                        }));
                        marker.setPosition(place.geometry.location);
                        marker.setVisible(true);
                    });
                });
            }
        };
    }
})();