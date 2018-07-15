(function(){
	'use strict';

	angular.module('tesonetApp.serviceModule')
	.factory('ServerList', ['store', '$http', '$q', 'ENDPOINTS', function(store, $http, $q, ENDPOINTS) {

			var token = store.get('auth_token');
			$http.defaults.headers.common.Authorization = 'Bearer '+ token;
			
			return {
		    fetchAll: function() {
	        var deferred = $q.defer();
	        $http.get(ENDPOINTS.SERVERLIST_URL)
	        	.then(function(response){
	           	deferred.resolve(response.data);
	        	})
		        .catch(function(response){
		          deferred.reject(response);
		        });
	        return deferred.promise;
		    }
		  };
	 }]);
})();

