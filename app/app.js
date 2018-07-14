'use strict';
var resource = 'http://playground.tesonet.lt/v1';
angular.module('tesonetApp', [
  'ui.router',
  'angular-storage',
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
  $urlRouterProvider.otherwise('/login')
}])
.run(function ($state, $rootScope){
  $rootScope.$on('$locationChangeStart', function () {
//TODO: token expiration check implementation
	})
})

