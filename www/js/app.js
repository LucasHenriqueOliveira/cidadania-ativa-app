(function() {
    'use strict';

    angular.module('CidadaniaAtivaApp', ['ionic', 'uiGmapgoogle-maps', 'ngCordova'])

    .run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }
      });
    })

    .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('app', {
            url: "/app",
            abstract: true,
            templateUrl: "templates/menu.html",
            controller: 'MenuCtrl',
            controllerAs: 'menu'
        })

        .state('app.login', {
            url: "/login",
            views: {
                'menuContent': {
                templateUrl: "templates/login.html",
                    controller: 'LoginCtrl',
                    controllerAs: 'login'
                }
            }
        })

        .state('app.main', {
            url: "/main",
            views: {
                'menuContent': {
                    templateUrl: "templates/main.html",
                    controller: 'MainCtrl',
                    controllerAs: 'main'
                }
            }
        });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/login');
    });

})();