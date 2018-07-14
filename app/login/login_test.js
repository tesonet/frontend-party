/*'use strict';

describe('LoginCtrl', function() {
	
	var $controller, $scope, mockStringService;

  beforeEach(module('tesonetApp.login'));
  beforeEach(module('tesonetApp.serviceModule'));
  beforeEach(module('ui.router'));

  describe('has login() method', function() {
    
    beforeEach(inject(
      function(_$controller_){
        $controller = _$controller_;
      }
    ))

    beforeEach(inject(
      function(_$log_, $injector){
        auth_service = $injector.get('Auth');
        store = $injector.get('store');

        spyOn(auth_service, 'storeToken').and.callThrough();
        auth_service.storeToken(token);
      }
    ))

    it('calls store.set():', function() {
      expect( auth_service.storeToken ).toHaveBeenCalledWith(token);
      expect( auth_service.storeToken ).toBeDefined();
      expect( typeof auth_service.storeToken ).toEqual("function");
    });

  });
});
*/