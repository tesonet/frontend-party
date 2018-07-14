'use strict';
var token_url = "http://playground.tesonet.lt/v1/tokens";

angular.module('tesonetApp.serviceModule', [])
.service('Auth', ['store', '$http', "$q", function(store, $http, $q) {
		return {
	    login: function(username, password) {
        var deferred = $q.defer();
        var login_data = {"username": username, "password": password};
        $http.post(token_url, login_data)
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