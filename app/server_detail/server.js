(function(){
	'use strict';

	angular.module('tesonetApp.server_list')
  .config(['$stateProvider', function($stateProvider) {
	  $stateProvider
	    .state('auth.server', {
	    	url:'/server/:serverName',
        templateUrl: 'server_detail/server.html',
        controller: 'ServerDetailCtrl'
	    });
	}])

  .controller('ServerDetailCtrl',['$scope', '$stateParams', ServerDetailController]);

  function ServerDetailController($scope, $stateParams) {
    $scope.serverName = $stateParams.serverName;
  }
})();
