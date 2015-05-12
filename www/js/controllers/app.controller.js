(function() {
    'use strict';

    angular
        .module('CidadaniaAtivaApp')
        .controller('AppCtrl', AppCtrl);

    AppCtrl.$inject = ['$scope', '$location', 'AuthService', '$localstorage'];

    function AppCtrl($scope, $location, AuthService, $localstorage) {

        $scope.userName = $localstorage.get('userName');

        if ($localstorage.get('userPicture') !== undefined) {
            $scope.userPicture = $localstorage.get('userPicture');
        } else{
            $scope.userPicture = '../img/avatar.png';
        }

        $scope.userIdentify = $localstorage.get('userEmail');

        //if(AuthService.isLogged()) {
        //    $location.path('/app/main');
        //} else {
        //    $location.path('/login');
        //}

    };
})();
