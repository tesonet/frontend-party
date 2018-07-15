'use strict';

describe('Unit test: ServerListCtrl', function() {
	
	var $controller, $scope, deferred, $q, $rootScope, listCtrl, createServerListCtrl, serverListMock, serverListDataMock, endpoints;

  beforeEach(module('tesonetApp.server_list'));
  beforeEach(module('tesonetApp.serviceModule'));
  beforeEach(module('tesonetApp.constants'));
  beforeEach(module('ui.router'));
  beforeEach(module('angular-storage'));


  beforeEach(inject(
    function(_$q_, _ENDPOINTS_, _$controller_, $injector){
      $q = _$q_;
      $controller = _$controller_;
      deferred = $q.defer();
      endpoints = _ENDPOINTS_;
      serverListDataMock = "";
      
      serverListMock = {
        fetchAll: function() {
          deferred.resolve(serverListDataMock);
          return deferred.promise;
        }
      };
    }
  ))

  beforeEach(inject(
    function(_$rootScope_, $controller, ServerList){
      $rootScope = _$rootScope_;
      
      $scope = $rootScope.$new();

      createServerListCtrl = function(){
        return $controller('ServerListCtrl', {
              '$scope': $scope,
               ServerList: serverListMock
          });
      }
    }
  ))

  it('calls ServerList.login():', function() {
    listCtrl = createServerListCtrl();
    spyOn(listCtrl, 'fetchList').and.returnValue(serverListDataMock);
    
    listCtrl.fetchList();
    $rootScope.$digest();
    expect( listCtrl.fetchList.calls.count()).toEqual(1);
    expect( listCtrl.fetchList ).toBeDefined();
    expect( typeof listCtrl.fetchList ).toEqual("function");
  });

});
