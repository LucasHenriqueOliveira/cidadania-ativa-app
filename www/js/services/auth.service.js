(function() {
    'use strict';

    angular
        .module('CidadaniaAtivaApp')
        .factory('AuthService', AuthService);

    AuthService.$inject = ['$localstorage', '$cordovaOauth', '$location', '$http', '$cordovaOauthUtility'];

    function AuthService($localstorage, $cordovaOauth, $location, $http, $cordovaOauthUtility) {
        return {
            loginFacebook: function() {
                /*
                 * Primeiro conecta-se ao facebook e se obtem o token de autenticacao
                 */
                $cordovaOauth.facebook("967556483257669", ["email"]).then(function(result) {

                    $http.get("https://graph.facebook.com/v2.2/me", { params: { access_token: result.access_token, fields: "id,name,email,picture", format: "json" }}).then(function(result) {

                        var params = { name: result.data.name, identify: result.data.email, picture: result.data.picture.data.url, type: 1 };

                        var urlPost = $location.$$protocol + '://'+ $location.$$host + ':' + $location.$$port + "/api/v1/users";
                        $http.post(urlPost, params,
                            { headers: {'Content-Type': 'application/x-www-form-urlencoded'} }
                        )
                            .then(function(response) {

                                $localstorage.set('authToken', result.access_token);
                                $localstorage.set('userId', result.data.id);
                                $localstorage.set('userName', result.data.name);
                                $localstorage.set('userIdentify', result.data.email);
                                $localstorage.set('userPicture', result.data.picture.data.url);

                                $location.path('/app/main');
                            }, function(error) {
                                alert("Login failure" + JSON.stringify(error));
                                console.log(error);
                            });

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
                $cordovaOauth.google("277046291573-uvsja7nvgnop8fccfn4qcde8o194im7f.apps.googleusercontent.com", ["https://www.googleapis.com/auth/plus.login","https://www.googleapis.com/auth/userinfo.email"]).then(function(result) {

                    $http.get("https://www.googleapis.com/oauth2/v1/userinfo?alt=json", { params: { access_token: result.access_token }}).then(function(result) {

                        var params = { name: result.data.name, identify: result.data.email, picture: result.data.picture.data.url, type: 1 };

                        var urlPost = $location.$$protocol + '://'+ $location.$$host + ':' + $location.$$port + "/api/v1/users";
                        $http.post(urlPost, params,
                            { headers: {'Content-Type': 'application/x-www-form-urlencoded'} }
                        )
                            .then(function(response) {

                                $localstorage.set('authToken', result.access_token);
                                $localstorage.set('userId', result.data.id);
                                $localstorage.set('userName', result.data.name);
                                $localstorage.set('userIdentify', result.data.email);
                                $localstorage.set('userPicture', result.data.picture);

                                $location.path('/app/main');

                            }, function(error) {
                                alert("Login failure" + JSON.stringify(error));
                                console.log(error);
                            });

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

            loginTwitter: function() {
                /*
                 * Primeiro conecta-se ao twitter e se obtem o token de autenticacao
                 */
                $cordovaOauth.twitter("NPdS21200O14f3K3VS3Zw6CFP", "kAKBzcKw2T8Ekr7l8F1O1PWpUlOO6EuvK1ZlbKrzXSpByWFgvq").then(function(result) {

                    $localstorage.set('authToken', result.oauth_token);
                    $localstorage.set('authTokenSecret', result.oauth_token_secret);

                    var oauthObject = {
                        oauth_consumer_key: 'NPdS21200O14f3K3VS3Zw6CFP',
                        oauth_nonce: $cordovaOauthUtility.createNonce(10),
                        oauth_signature_method: "HMAC-SHA1",
                        oauth_token: result.oauth_token,
                        oauth_timestamp: Math.round((new Date()).getTime() / 1000.0),
                        oauth_version: "1.0"
                    };
                    var method = 'GET';
                    var url = 'https://api.twitter.com/1.1/account/verify_credentials.json';
                    var signatureObj = $cordovaOauthUtility.createSignature(method, url, oauthObject, {}, "kAKBzcKw2T8Ekr7l8F1O1PWpUlOO6EuvK1ZlbKrzXSpByWFgvq", result.oauth_token_secret);
                    $http.defaults.headers.common.Authorization = signatureObj.authorization_header;

                    $http.get("https://api.twitter.com/1.1/account/verify_credentials.json").then(function(result) {

                        var params = { name: result.data.name, identify: result.data.email, picture: result.data.picture.data.url, type: 1 };

                        var urlPost = $location.$$protocol + '://'+ $location.$$host + ':' + $location.$$port + "/api/v1/users";
                        $http.post(urlPost, params,
                            { headers: {'Content-Type': 'application/x-www-form-urlencoded'} }
                        )
                            .then(function(response) {

                                $localstorage.set('userId', result.data.id);
                                $localstorage.set('userName', result.data.name);
                                $localstorage.set('userIdentify', result.data.screen_name);
                                $localstorage.set('userPicture', result.data.profile_image_url);

                                $location.path('/app/main');

                            }, function(error) {
                                alert("Login failure" + JSON.stringify(error));
                                console.log(error);
                            });

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
                return ($localstorage.get('userId') && $localstorage.get('userName') && $localstorage.get('userIdentify') && $localstorage.get('authToken'));
            },

            logout: function(callback) {
                delete $localstorage.get('userId');
                delete $localstorage.get('userName');
                delete $localstorage.get('authToken');
                delete $localstorage.get('userIdentify');
            },

            getToken: function() {
                return $localstorage.get('authToken');
            },

            getUserId: function() {
                return $localstorage.get('userId');
            },

            getUserIdentify: function() {
                return $localstorage.get('userIdentify');
            },

            getUserName: function() {
                return $localstorage.get('userName');
            },

            getUserPicture: function() {
                return $localstorage.get('userPicture');
            }
        }
    }
})();