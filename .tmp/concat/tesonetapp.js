(function(){
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
})();
angular.module('tesonetApp.serviceModule', [])
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
(function(){
	'use strict';

	angular.module('tesonetApp.serviceModule')
	.factory('Auth', ['store', '$http', '$q', 'URLS', function(store, $http, $q, URLS) {
			return {
		    login: function(username, password) {
	        var deferred = $q.defer();
	        var login_data = {"username": username, "password": password};
	        $http.post(URLS.TOKEN_URL, login_data)
	        	.then(function(response){
	           	deferred.resolve(response.data);
	        	})
		        .catch(function(response){
		          deferred.reject(response);
		        });
	        return deferred.promise;
		    },
		    storeToken: function (token) {
					store.set('auth_token', token);
					return true;
				},
			logout: function () {
			  	if (store.get("auth_token")){
			    	store.remove('auth_token');
			      	return true;	  		
			  	} else {
			  		return false;
			  	}
		    }
		  }
	 }]);
})();
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
(function(){
	'use strict';

	angular.module('tesonetApp.server_list', ['ui.router'])

	.config(['$stateProvider', function($stateProvider) {
	  $stateProvider
	    .state('auth.server_list', {
	    	url:'/server_list',
	      controller: 'ServerListCtrl',
	      controllerAs: 'listCtrl',
	      templateUrl: 'server_list/server_list.html'
	    });
	}])

	.controller('ServerListCtrl',['$scope', 'ServerList', ServerListController]);

	function ServerListController($scope, ServerList) {
		var listCtrl = this;

		listCtrl.sortBy = sortBy;
	  listCtrl.propertyName = 'name';
	  listCtrl.reverse = true;
		listCtrl.fetchList = fetchList;

		listCtrl.fetchList();

		function fetchList(){
			ServerList.fetchAll()
				.then(function(data){
					listCtrl.servers = data;
		   	})
		   	.catch(function(response){
		      console.error(response);
		     	if(response.status === 401){
						listCtrl.serverError = true;
						listCtrl.errorMessage = "There was a problem with your authorization, try loggin in again."
					}
		   	}); 
		}
	  function sortBy(propertyName) {
	    listCtrl.reverse = (listCtrl.propertyName === propertyName) ? !listCtrl.reverse : false;
	   	listCtrl.propertyName = propertyName;
	  };	
	};
})();

(function(){
	'use strict';

	angular.module('tesonetApp.serviceModule')
	.factory('ServerList', ['store', '$http', '$q', 'URLS', function(store, $http, $q, URLS) {

			var token = store.get('auth_token');
			$http.defaults.headers.common['Authorization'] = 'Bearer '+ token;
			
			return {
		    fetchAll: function(username, password) {
	        var deferred = $q.defer();
	        $http.get(URLS.SERVERLIST_URL)
	        	.then(function(response){
	           	deferred.resolve(response.data);
	        	})
		        .catch(function(response){
		          deferred.reject(response);
		        });
	        return deferred.promise;
		    }
		  }
	 }]);
})();

