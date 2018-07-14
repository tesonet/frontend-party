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

authModule.controller('LoginCtrl',['$scope','$http', 'store', '$state', 'Auth', function($scope, $http, store, $state, Auth) {
	var loginCtrl = this;
	Auth.logout();
	loginCtrl.login = function(){
	//	var data = {"username": "tesonet", "password": "partyanimal"},
		var data = {"username": loginCtrl.username, "password": loginCtrl.password};
		this.successCallback = function(data){
			Auth.storeToken(data.data.token);
			$state.go("auth.server_list");
		};
		this.errorCallback = function(err){
			console.log(err);
			if(err.status === 401){
				loginCtrl.serverErrorMsg = "Unauthorized error: make sure your username and/or password is correct.";
			}
		};
		$http.post(token_url, data).then(this.successCallback, this.errorCallback);
	}
}]);