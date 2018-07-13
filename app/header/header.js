var authModule = angular.module('tesonetApp.auth', [
  'ui.router'
]);
authModule.config(function($stateProvider) {
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
});
authModule.controller('AuthCtrl',['$scope', function($scope){
	console.log("authenticated controller");
}]);