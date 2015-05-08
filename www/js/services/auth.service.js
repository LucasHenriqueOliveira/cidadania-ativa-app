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
                 * Primeiro conecta-se ao facebook e se obtem o token de autenticacao
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

            loginGoogle: function() {
                /*
                 * Primeiro conecta-se ao google e se obtem o token de autenticacao
                 */
                $cordovaOauth.google("277046291573-uvsja7nvgnop8fccfn4qcde8o194im7f.apps.googleusercontent.com", ["email"]).then(function(result) {

                    $localstorage.set('authToken', result.access_token);

                }, function(error) {
                    alert("There was a problem signing in!  See the console for logs");
                    console.log(error);
                    $location.path('/login');
                });
            },

            loginTwitter: function() {
                /*
                 * Primeiro conecta-se ao twitter e se obtem o token de autenticacao
                 */
                $cordovaOauth.twitter("NPdS21200O14f3K3VS3Zw6CFP", "kAKBzcKw2T8Ekr7l8F1O1PWpUlOO6EuvK1ZlbKrzXSpByWFgv").then(function(result) {

                    $localstorage.set('authToken', result.access_token);

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