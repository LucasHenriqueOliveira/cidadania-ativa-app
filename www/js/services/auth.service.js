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
                        $localstorage.set('userPicture', result.data.picture);

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
                $cordovaOauth.google("277046291573-uvsja7nvgnop8fccfn4qcde8o194im7f.apps.googleusercontent.com", ["https://www.googleapis.com/auth/plus.login","https://www.googleapis.com/auth/userinfo.email"]).then(function(result) {

                    $http.get("https://www.googleapis.com/oauth2/v1/userinfo?alt=json", { params: { access_token: result.access_token }}).then(function(result) {

                        $localstorage.set('authToken', result.access_token);
                        $localstorage.set('userId', result.data.id);
                        $localstorage.set('userName', result.data.name);
                        $localstorage.set('userEmail', result.data.email);
                        $localstorage.set('userPicture', result.data.picture);

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

            loginTwitter: function() {
                /*
                 * Primeiro conecta-se ao twitter e se obtem o token de autenticacao
                 */
                $cordovaOauth.twitter("NPdS21200O14f3K3VS3Zw6CFP", "kAKBzcKw2T8Ekr7l8F1O1PWpUlOO6EuvK1ZlbKrzXSpByWFgvq").then(function(result) {

                    function randomString(length, chars) {
                        var result = '';
                        for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
                        return result;
                    }

                    var nonce = randomString(32,'0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
                    var unixtime = Math.round((new Date()).getTime() / 1000.0);
                    var httpMethod = 'GET';
                    var url = 'https://api.twitter.com/1.1/account/verify_credentials.json';
                    var consumerSecret = 'kAKBzcKw2T8Ekr7l8F1O1PWpUlOO6EuvK1ZlbKrzXSpByWFgvq';
                    var tokenSecret = result.oauth_token_secret;
                    var parameters = {
                            oauth_consumer_key : 'NPdS21200O14f3K3VS3Zw6CFP',
                            oauth_nonce : nonce,
                            oauth_signature_method : 'HMAC-SHA1',
                            oauth_timestamp : unixtime,
                            oauth_token : result.oauth_token,
                            oauth_version : '1.0'
                        };

                    var parameter_string = "";
                    for (var key in parameters) {
                        parameter_string += encodeURIComponent(key) + "=" + encodeURIComponent(parameters[key]);
                        if(key != "oauth_version") {
                            parameter_string += "&";
                        }
                    }

                    var signature_base_string = httpMethod + "&" + encodeURIComponent('https://api.twitter.com/1.1/account/verify_credentials.json') + "&" +
                        encodeURIComponent("oauth_callback=http://127.0.0.1/callback&") +
                        encodeURIComponent(parameter_string);

                    var signing_key = encodeURIComponent("kAKBzcKw2T8Ekr7l8F1O1PWpUlOO6EuvK1ZlbKrzXSpByWFgvq") + "&";

                    var shaObj = new jsSHA(signature_base_string, "TEXT");
                    var signature = shaObj.getHMAC(signing_key, "TEXT", "SHA-1", "B64");

                    $http.get("https://api.twitter.com/1.1/account/verify_credentials.json", {
                        headers: {
                            'Authorization':
                            'Oauth oauth_consumer_key = "NPdS21200O14f3K3VS3Zw6CFP",' +
                            'oauth_signature_method="HMAC-SHA1",' +
                            'oauth_timestamp="'+ unixtime +'",' +
                            'oauth_nonce="'+ nonce +'",' +
                            'oauth_version="1.0",' +
                            'oauth_token="'+ result.oauth_token +'",' +
                            'oauth_signature="'+ signature +'"'
                        }}).then(function(result) {

                        alert(JSON.stringify(result));
                        //$localstorage.set('authToken', result.access_token);
                    //    //$localstorage.set('userId', result.data.id);
                    //    //$localstorage.set('userName', result.data.name);
                    //    //$localstorage.set('userEmail', result.data.email);
                    //    //$localstorage.set('userPicture', result.data.picture);
                    //    //
                    //    //$location.path('/app/main');
                    //
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