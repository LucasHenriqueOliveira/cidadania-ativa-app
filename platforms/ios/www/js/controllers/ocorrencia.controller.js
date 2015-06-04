(function() {
    'use strict';

    angular
        .module('CidadaniaAtivaApp')
        .controller('OcorrenciaCtrl', OcorrenciaCtrl);

    OcorrenciaCtrl.$inject = ['$scope', '$state', '$localstorage'];

    function OcorrenciaCtrl($scope, $state, $localstorage) {
        $scope.address = $localstorage.get('address');
    };
})();

