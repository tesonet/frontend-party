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
						listCtrl.errorMessage = "There was a problem with your authorization, try loggin in again.";
					}
		   	});
		}
	  function sortBy(propertyName) {
	    listCtrl.reverse = (listCtrl.propertyName === propertyName) ? !listCtrl.reverse : false;
	   	listCtrl.propertyName = propertyName;
	  }
	}
})();
