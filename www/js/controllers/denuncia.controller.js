(function() {
    'use strict';

    angular
        .module('CidadaniaAtivaApp')
        .controller('DenunciaCtrl', DenunciaCtrl);

    DenunciaCtrl.$inject = ['$scope', '$state', '$localstorage'];

    function DenunciaCtrl($scope, $state, $localstorage) {
        $scope.address = $localstorage.get('address');
    };
})();

