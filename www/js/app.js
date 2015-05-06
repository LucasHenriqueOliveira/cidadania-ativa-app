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

    .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('login', {
            url: "/login",
            templateUrl: "templates/login.html",
            controller: 'LoginCtrl'
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

        .state('app.denuncia', {
            url: "/denuncia",
            views: {
                'menuContent': {
                    templateUrl: "templates/denuncia.html",
                    controller: 'DenunciaCtrl'
                }
            }
        });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app');
    });

})();