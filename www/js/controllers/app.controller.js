(function() {
    'use strict';

    angular
        .module('CidadaniaAtivaApp')
        .controller('AppCtrl', AppCtrl);

    AppCtrl.$inject = ['$scope', '$location', 'AuthService'];

    function AppCtrl($scope, $location, AuthService) {

        if(AuthService.isLogged()) {
            $location.path('/app/main');
        } else {
            $location.path('/login');
        }

        $scope.userName = AuthService.getUserName();
        $scope.userIdentify = AuthService.getUserIdentify();
        var picture = AuthService.getUserPicture();

        if (picture !== undefined) {
            $scope.userPicture = picture;
        } else{
            $scope.userPicture = '../img/avatar.png';
        }

    };
})();
