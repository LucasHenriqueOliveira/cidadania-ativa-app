(function() {
    'use strict';

    angular
        .module('CidadaniaAtivaApp')
        .factory('AuthService', AuthService);

    AuthService.$inject = ['$localstorage', '$cordovaOauth', '$location', '$http'];

    function AuthService($localstorage, $cordovaOauth, $location, $http) {
        return {
            loginFacebook: function() {
                /*
                 * Primeiro conecta-se ao facebook e se obtem o token de authenticacao
                 */
                $cordovaOauth.facebook("967556483257669", ["email"]).then(function(result) {

                    $http.get("https://graph.facebook.com/v2.2/me", { params: { access_token: result.access_token, fields: "id,name,email,picture", format: "json" }}).then(function(result) {

                        $localstorage.set('authToken', result.access_token);
                        $localstorage.set('userId', result.data.id);
                        $localstorage.set('userName', result.data.name);
                        $localstorage.set('userEmail', result.data.email);

                        $location.path('/app/main');

                    }, function(error) {
                        alert("There was a problem getting your profile.  Check the logs for details.");
                        console.log(error);
                        $location.path('/login');
                    });

                }, function(error) {
                    alert("There was a problem signing in!  See the console for logs");
                    console.log(error);
                    $location.path('/login');
                });
            },

            isLogged: function() {
                return ($localstorage.userId && $localstorage.authToken);
            },

            logout: function(callback) {
                delete $localstorage.userId;
                delete $localstorage.userName;
                delete $localstorage.authToken;
                delete $localstorage.userEmail;
            }
        }
    }
})();