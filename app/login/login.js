'use strict';

var authModule = angular.module('tesonetApp.login', ['ui.router']),
		token_url = "http://playground.tesonet.lt/v1/tokens";

authModule.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('login', {
    	url: '/login',
      controller: 'LoginCtrl',
      controllerAs: 'loginCtrl',
      templateUrl: 'login/login.html'
    });
}])

authModule.controller('LoginCtrl',['$scope', '$state', 'Auth', function($scope, $state, Auth) {
	var loginCtrl = this;
	Auth.logout();
	loginCtrl.login = function(){
		Auth.login(loginCtrl.username, loginCtrl.password)
			.then(function(data){
	      Auth.storeToken(data.token);
				$state.go("auth.server_list");
	   	})
	   	.catch(function(response){
	      console.error(response);
	     if(response.status === 401){
					loginCtrl.serverErrorMsg = "Unauthorized error: make sure your username and/or password is correct.";
				}
	   	}); 
	}
}]);