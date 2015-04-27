(function() {
    'use strict';

    angular
        .module('CidadaniaAtivaApp')
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$ionicPlatform', '$scope'];

    function LoginCtrl($ionicPlatform, $scope) {
        $ionicPlatform.ready(function () {

            if(window.StatusBar) {
                StatusBar.hide();
            }
        });
    };
})();
