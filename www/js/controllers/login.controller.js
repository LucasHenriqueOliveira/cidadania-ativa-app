(function() {
    'use strict';

    angular
        .module('CidadaniaAtivaApp')
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$ionicPlatform', '$scope', '$location', '$cordovaOauth', '$localstorage', 'AuthService'];

    function LoginCtrl($ionicPlatform, $scope, $location, $cordovaOauth, $localstorage, AuthService) {

        $scope.user = {};

        if(AuthService.isLogged()) {
            event.preventDefault();
            $location.go('app.main');
        }

        $scope.loginFacebook = function() {
            AuthService.loginFacebook();
        };


        $scope.loginGoogle = function() {
            event.preventDefault();
            $location.go('app.main');
        };


        $scope.loginTwitter = function() {
            event.preventDefault();
            $location.go('app.main');
        };



        //$ionicPlatform.ready(function () {
        //
        //    $scope.fbLogin = fbLogin;
        //    $scope.gplusLogin = gplusLogin;
        //    $scope.twLogin = twLogin;
        //
        //    if(window.StatusBar) {
        //        StatusBar.hide();
        //    }
        //
        //    function fbLogin() {
        //
        //        $cordovaOauth.facebook("967556483257669", ["email"]).then(function(result) {
        //            console.log("Response Object -> " + JSON.stringify(result));
        //            $localstorage.set('accessToken', result.access_token);
        //            alert(result.access_token);
        //        }, function(error) {
        //            console.log(error);
        //            //event.preventDefault();
        //            //$state.go('app.main');
        //        });
        //
        //
        //    };
        //
        //    function gplusLogin() {
        //
        //        $cordovaOauth.google("277046291573-uvsja7nvgnop8fccfn4qcde8o194im7f.apps.googleusercontent.com", ["email"]).then(function(result) {
        //            console.log("Response Object -> " + JSON.stringify(result));
        //        }, function(error) {
        //            console.log(error);
        //            //event.preventDefault();
        //            //$state.go('app.main');
        //        });
        //    };
        //
        //    function twLogin(){
        //
        //        //$cordovaOauth.twitter(string consumerKey, string consumerSecretKey).then(function(result) {
        //        //    console.log("Response Object -> " + JSON.stringify(result));
        //        //}, function(error) {
        //        //    console.log("Error -> " + error);
        //        //});
        //
        //        event.preventDefault();
        //        $state.go('app.main');
        //    };
        //});
    };
})();
