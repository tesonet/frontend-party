'use strict';

describe('Unit test: AuthCtrl', function() {
	
	var $controller, $scope, deferred, $q, $rootScope, authCtrl, createAuthCtrl, authMock, endpoints;

  beforeEach(module('tesonetApp.auth'));
  beforeEach(module('tesonetApp.serviceModule'));
  beforeEach(module('tesonetApp.constants'));
  beforeEach(module('ui.router'));
  beforeEach(module('angular-storage'));

  var username = "bigboy",
      password = "n3v3rgiv3up";

  beforeEach(inject(
    function(_$q_, _ENDPOINTS_, _$controller_, $injector){
      $q = _$q_;
      $controller = _$controller_;

      deferred = $q.defer();

      endpoints = _ENDPOINTS_;
      
      authMock = {
        logout: function() {
          return true;
        }
      };
    }
  ))


  beforeEach(inject(
    function(_$rootScope_, $controller, Auth){
      $rootScope = _$rootScope_;
      
      $scope = $rootScope.$new();

      createAuthCtrl = function(){
        return $controller('AuthCtrl', {
              '$scope': $scope,
               Auth: authMock
          });
      }

    }
  ))

  it('calls Auth.logout():', function() {
    authCtrl = createAuthCtrl();
    spyOn(authCtrl, 'logout').and.callThrough();
    
    authCtrl.logout();
    $rootScope.$digest();
    expect( authCtrl.logout.calls.count()).toEqual(1);
    expect( authCtrl.logout ).toBeDefined();
    expect( typeof authCtrl.logout ).toEqual("function");
  });

});
