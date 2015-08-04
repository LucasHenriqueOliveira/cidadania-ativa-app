(function() {
    'use strict';

    angular
        .module('CidadaniaAtivaApp')
        .controller('AppCtrl', AppCtrl);

    AppCtrl.$inject = ['$scope', '$location', 'AuthService'];

    function AppCtrl($scope, $location, AuthService) {

        $scope.logout = logout;
        $scope.userName = AuthService.getUserName();
        $scope.userIdentify = AuthService.getUserIdentify();
        var picture = AuthService.getUserPicture();

       // if(AuthService.isLogged()) {
            $location.path('/app/main');
        //} else {
          //  $location.path('/login');
        //}

        if (picture !== undefined) {
            $scope.userPicture = picture;
        } else{
            $scope.userPicture = '../img/avatar.png';
        }

        function logout(){
            AuthService.logout();
            $location.path('/login');
        }

    };
})();
