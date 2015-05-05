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

                $cordovaOauth.facebook("967556483257669", ["email"]).then(function(result) {
                    // results
                }, function(error) {
                    // error
                });

                event.preventDefault();
                $state.go('app.main');
            };

            function gplusLogin() {

                $cordovaOauth.google("277046291573-uvsja7nvgnop8fccfn4qcde8o194im7f.apps.googleusercontent.com", ["email"]).then(function(result) {
                    console.log("Response Object -> " + JSON.stringify(result));
                }, function(error) {
                    console.log("Error -> " + error);
                });

                event.preventDefault();
                $state.go('app.main');
            };

            function twLogin(){

                //$cordovaOauth.twitter(string consumerKey, string consumerSecretKey).then(function(result) {
                //    console.log("Response Object -> " + JSON.stringify(result));
                //}, function(error) {
                //    console.log("Error -> " + error);
                //});

                event.preventDefault();
                $state.go('app.main');
            };
        });
    };
})();
