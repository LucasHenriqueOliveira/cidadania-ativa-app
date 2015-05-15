(function() {
    'use strict';

    angular
        .module('CidadaniaAtivaApp')
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$scope', '$location', 'AuthService'];

    function LoginCtrl($scope, $location, AuthService) {

        $scope.user = {};

        if(AuthService.isLogged()) {
            event.preventDefault();
            $location.path('/app/main');
        }

        $scope.loginFacebook = function() {
            AuthService.loginFacebook();
        };


        $scope.loginGoogle = function() {
            AuthService.loginGoogle();
        };


        $scope.loginTwitter = function() {
            AuthService.loginTwitter();
        };
    };
})();
