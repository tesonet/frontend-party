'use strict';

var serverListModule = angular.module('tesonetApp.server_list', ['ui.router']),
		serverlist_url = "http://playground.tesonet.lt/v1/servers";

authModule.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('auth.server_list', {
    	url:'/server_list',
      controller: 'ServerListCtrl',
      controllerAs: 'listCtrl',
      templateUrl: 'server_list/server_list.html'
    });
}])

serverListModule.controller('ServerListCtrl',['$scope','$http', 'store', function($scope, $http, store) {
	var listCtrl = this,
			token = store.get('auth_token');

	console.log("serverlist controller");

	$http.defaults.headers.common['Authorization'] = 'Bearer '+ token;
	listCtrl.fetchList = function(){
		this.successCallback = function(data){
			listCtrl.servers = data.data;
		};
		this.errorCallback = function(err){
			console.log(err);
		};
		$http.get(serverlist_url).then(this.successCallback, this.errorCallback);
	}
	listCtrl.fetchList();

  listCtrl.propertyName = 'name';
  listCtrl.reverse = true;

  listCtrl.sortBy = function(propertyName) {
    listCtrl.reverse = (listCtrl.propertyName === propertyName) ? !listCtrl.reverse : false;
   	listCtrl.propertyName = propertyName;
  };	
}]);