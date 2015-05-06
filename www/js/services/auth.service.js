(function() {
    'use strict';

    angular
        .module('CidadaniaAtivaApp')
        .factory('AuthService', AuthService);

    AuthService.$inject = ['$localstorage', '$cordovaOauth', '$location'];

    function AuthService($localstorage, $cordovaOauth, $location) {
        return {
            loginFacebook: function() {
                /*
                 * Primeiro conecta-se ao facebook e se obtem o token de authenticacao
                 */
                $cordovaOauth.facebook("967556483257669", ["email"]).then(function(result) {

                    $localstorage.set('fbAccessToken', result.access_token);

                    /*
                     * Depois solicito dados pessoais do usuario, enviando o token_access
                     */
                    $http.get("https://graph.facebook.com/v2.2/me",
                        { params: { access_token: $localstorage.get('fbAccessToken'), fields: "id,name,email", format: "json" } })
                        .then(function(result) {

                            $location.path('/app/main');

                            //var formData = { name: result.data.name, email: result.data.email, type: 3 };
                            //formData = mergeDeviceInfo(formData);
                            //var params = snack4meLib.toQueryString(formData);
                            /*
                             * Por ultimo, faco o login no snack4me
                             */
                            //var urlPost = "http://" + proxy + "www.snack4me.com/global/customer-social.php";
                            //$http.post(urlPost, params,
                            //    { headers: {'Content-Type': 'application/x-www-form-urlencoded'} }
                            //)
                            //    .then(function(response) {
                            //
                            //        if(response.data.error === false) {
                            //            $localStorage.userId = response.data.response.id;
                            //            $localStorage.email = response.data.response.email;
                            //            $localStorage.userName = response.data.response.name;
                            //            $localStorage.authToken = response.data.response.XSRF;
                            //            $localStorage.userType = response.data.response.type;
                            //            $localStorage.uuid = formData.uuid;
                            //        }
                            //
                            //        $ionicHistory.nextViewOptions({
                            //            disableBack: true
                            //        });
                            //        $location.path('/app/events');
                            //
                            //    }, function(error) {
                            //        alert("Login failure" + JSON.stringify(error));
                            //        console.log(error);
                            //    });

                        }, function(error) {
                            alert("There was a problem getting your profile.");
                            console.log(error);
                        });

                }, function(error) {

                });
            },

            isLogged: function() {
                return ($localstorage.userId && $localstorage.authToken && $localstorage.email);
            },

            logout: function(callback) {
                delete $localstorage.userId;
                delete $localstorage.userName;
                delete $localstorage.authToken;
                delete $localstorage.uuid;
                delete $localstorage.email;
            }
        }
    }
})();