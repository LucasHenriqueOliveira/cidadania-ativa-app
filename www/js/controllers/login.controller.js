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
                $state.go('app.main');
            };

            function gplusLogin() {
                $state.go('app.main');
            };

            function twLogin(){
                $state.go('app.main');
            };
        });
    };
})();
