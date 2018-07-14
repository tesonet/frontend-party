'use strict';

var app = angular.module('tesonetApp', [
  'ui.router',
  'angular-storage',
  'tesonetApp.login',
  'tesonetApp.server_list',
  'tesonetApp.auth',
  'tesonetApp.serviceModule'
]);
app.config(['$urlRouterProvider', function($urlRouterProvider) {
  $urlRouterProvider.otherwise('/login');
}]);
