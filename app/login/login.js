(function(){
	'use strict';

	angular.module('tesonetApp.login', ['ui.router'])

	.config(['$stateProvider', function($stateProvider) {
	  $stateProvider
	    .state('login', {
	    	url: '/login',
	      controller: 'LoginCtrl',
	      controllerAs: 'loginCtrl',
	      templateUrl: 'login/login.html'
	    });
	}])
	.controller('LoginCtrl',['$scope', '$state', 'Auth', LoginController]);

	function LoginController($scope, $state, Auth) { 
		var loginCtrl = this;
		loginCtrl.login = login;

		Auth.logout();
		function login(){
			Auth.login(loginCtrl.username, loginCtrl.password)
				.then(function(data){
		      Auth.storeToken(data.token);
					$state.go("auth.server_list",{},{reload:true})
		   	})
		   	.catch(function(response){
		      console.error(response);
		     if(response.status === 401){
						loginCtrl.serverErrorMsg = "Unauthorized error: make sure your username and/or password is correct.";
					}
		   	}); 
		}
	}
})();
