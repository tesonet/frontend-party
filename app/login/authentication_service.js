(function(){
	'use strict';

	angular.module('tesonetApp.serviceModule')
	.factory('Auth', ['store', '$http', '$q', 'ENDPOINTS', function(store, $http, $q, ENDPOINTS) {
			return {
		    login: function(username, password) {
	        var deferred = $q.defer();
	        var login_data = {"username": username, "password": password};
	        $http.post(ENDPOINTS.TOKEN_URL, login_data)
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
		  };
	 }]);
})();