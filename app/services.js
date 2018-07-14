'use strict';

angular.module('tesonetApp.serviceModule', [])
.service('Auth', ['store', function(store) {
		this.storeToken = function (token) {
			store.set('auth_token', token);
			return true;
		}
	  this.logout = function () {
	  	if (store.get("auth_token")){
	    	store.remove('auth_token');
	      return true;	  		
	  	} else {
	  		return false;
	  	}
    }
 }]);