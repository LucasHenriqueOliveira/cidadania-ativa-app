(function() {
    'use strict';

    angular.module('CidadaniaAtivaApp', ['ionic', 'uiGmapgoogle-maps', 'ngCordova'])

    .run(function($rootScope, $ionicPlatform, $ionicLoading) {

        $ionicPlatform.ready(function() {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });

        $rootScope.$on('loading:show', function() {
            $ionicLoading.show(
                {
                    content: '',
                    animation: 'fade-in',
                    showBackdrop: true,
                    maxWidth: 300,
                    showDelay: 10
                }
            );
        });

        $rootScope.$on('loading:hide', function() {
            $ionicLoading.hide();
        });
    })

    .config(function($stateProvider, $urlRouterProvider, $httpProvider) {
        $httpProvider

            .interceptors.push(function($q, $rootScope) {
                return{
                    request: function(config) {
                        $rootScope.$broadcast('loading:show');
                        return config;
                    },
                    response: function(response) {
                        $rootScope.$broadcast('loading:hide');
                        return response;
                    },
                    requestError: function(rejection) {
                        if (rejection.code !== 404) {
                            alert('Request error ' + rejection.data)
                            console.log(rejection)
                        }
                        $rootScope.$broadcast('loading:hide');
                        return $q.reject(rejection);
                    },
                    responseError: function(rejection) {
                        $rootScope.$broadcast('loading:hide');
                        return $q.reject(rejection);
                    }
                }

            });

        $stateProvider

        .state('login', {
            url: "/login",
            templateUrl: "templates/login.html",
            controller: 'LoginCtrl'
        })
        
         .state('singup', {
            url: "/singup",
            templateUrl: "templates/singup.html",
            
        })

        .state('app', {
            url: "/app",
            templateUrl: "templates/menu.html",
            controller: 'AppCtrl'
        })

        .state('app.main', {
            url: "/main",
            views: {
                'menuContent': {
                    templateUrl: "templates/main.html",
                    controller: 'MainCtrl'
                }
            }
        })

        .state('app.ocorrencia', {
            url: "/ocorrencia",
            views: {
                'menuContent': {
                    templateUrl: "templates/ocorrencia.html",
                    controller: 'OcorrenciaCtrl'
                }
            }
        });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/login');
    });

})();