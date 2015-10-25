(function() {
    'use strict';

    angular
        .module('CidadaniaAtivaApp')
        .controller('SingupCtrl', SingupCtrl);

    SingupCtrl.$inject = ['$scope'];

    function SingupCtrl($scope) {
        
        $scope.username = null;
        $scope.email = null;
        $scope.password = null;
        $scope.repassword = null;
        
        $scope.voltar = function(){
           window.history.go(-1);
        };
        
        $scope.salvar = function(){
          alert(  
                  
        $scope.username +
        $scope.email +
        $scope.password +
        $scope.repassword )  
        };
       
    };
})();
