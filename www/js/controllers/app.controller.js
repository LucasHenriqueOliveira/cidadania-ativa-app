(function() {
    'use strict';

    angular
        .module('CidadaniaAtivaApp')
        .controller('AppCtrl', AppCtrl);

    AppCtrl.$inject = ['$location', 'AuthService'];

    function AppCtrl($location, AuthService) {

        if(AuthService.isLogged()) {
            $location.path('/app/main');
        } else {
            $location.path('/login');
        }

    };
})();
