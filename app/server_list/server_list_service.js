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

