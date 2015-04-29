(function() {
    'use strict';

    angular
        .module('CidadaniaAtivaApp')
        .controller('MenuCtrl', MenuCtrl);

    MenuCtrl.$inject = ['$scope', '$ionicSideMenuDelegate'];

    function MenuCtrl($scope, $ionicSideMenuDelegate) {

        $scope.toggleLeft = function() {
            $ionicSideMenuDelegate.toggleLeft();
        };

    };
})();
