(function(){
  'use strict';
  var resource = 'http://playground.tesonet.lt/v1';

  angular.module('tesonetApp.constants', [])
  .constant('ENDPOINTS',{
    'TOKEN_URL': 'http://playground.tesonet.lt/v1/tokens',
    'SERVERLIST_URL': 'http://playground.tesonet.lt/v1/servers'
  });

  angular.module('tesonetApp', [
    'ui.router',
    'angular-storage',
    'tesonetApp.constants',
    'tesonetApp.login',
    'tesonetApp.server_list',
    'tesonetApp.auth',
    'tesonetApp.serviceModule'
  ])
  .constant('URLS',{
    'TOKEN_URL': resource + '/tokens',
    'SERVERLIST_URL': resource + '/servers'
  })
  .config(['$urlRouterProvider', function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
  }])

  .run(function ($state, $rootScope, store, $transitions){

    $transitions.onStart( { to: 'auth.**' }, function(trans) {
        var MyAuthService = trans.injector().get('Auth');
        if (!MyAuthService.isAuthenticated()) {
          return $state.target("login");
        }
      });
    $transitions.onStart( { to : 'login' }, function(trans) {
        var MyAuthService = trans.injector().get('Auth');
        if (MyAuthService.isAuthenticated()) {
          return $state.target("auth.server_list");
        }
      });
  });

})();
