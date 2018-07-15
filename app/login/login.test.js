'use strict';

describe('Unit test: LoginCtrl', function() {
	
	var $controller, $scope, deferred, $q, $rootScope, loginCtrl, createLoginCtrl, authMock, mockToken, endpoints;

  beforeEach(module('tesonetApp.login'));
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

      mockToken = "abc12345";
      endpoints = _ENDPOINTS_;
      
      authMock = {
        //ENDPOINTS.TOKEN_URL: endpoint,
        login: function() {
          deferred.resolve(mockToken);
          return deferred.promise;
        },
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

      createLoginCtrl = function(){
        return $controller('LoginCtrl', {
              '$scope': $scope,
               Auth: authMock
          });
      }

    }
  ))

  it('calls Auth.login():', function() {
    loginCtrl = createLoginCtrl();
    spyOn(loginCtrl, 'login').and.returnValue(mockToken);
    
    loginCtrl.login(username, password);
    $rootScope.$digest();
    expect( loginCtrl.login.calls.count()).toEqual(1);
    expect( loginCtrl.login ).toBeDefined();
    expect( typeof loginCtrl.login ).toEqual("function");
  });

});
