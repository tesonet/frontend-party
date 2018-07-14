(function(){
  'use strict';

  angular.module('tesonetApp.auth', ['ui.router'])
  .config(function($stateProvider) {
    $stateProvider
      .state('auth', {
        abstract: true,
        controller: 'AuthCtrl',
        controllerAs: 'authCtrl',
        templateUrl: 'header/header.html',
        data: {
          requiresLogin: true
        }
      });
  })
  .controller('AuthCtrl',['$scope', '$state', 'Auth', AuthController]);

  function AuthController($scope, $state, Auth){
    var authCtrl = this;
    authCtrl.logout = logout;

    function logout(){      
      Auth.logout();
      $state.go('login');
    }
  };
})();