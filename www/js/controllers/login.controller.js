(function() {
    'use strict';

    angular
        .module('CidadaniaAtivaApp')
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$ionicPlatform', '$scope', '$state'];

    function LoginCtrl($ionicPlatform, $scope, $state) {
        $ionicPlatform.ready(function () {

            $scope.fbLogin = fbLogin;
            $scope.gplusLogin = gplusLogin;
            $scope.twLogin = twLogin;

            if(window.StatusBar) {
                StatusBar.hide();
            }

            function fbLogin() {
                event.preventDefault();
                $state.go('app.main');
            };

            function gplusLogin() {
                event.preventDefault();
                $state.go('app.main');
            };

            function twLogin(){
                event.preventDefault();
                $state.go('app.main');
            };
        });
    };
})();
