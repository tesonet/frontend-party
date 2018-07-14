'use strict';

describe('Auth in serviceModule', function () {

  beforeEach(module('tesonetApp.serviceModule'));
  beforeEach(module('angular-storage'));

 	describe('has a method: storeToken()', function() {

 		var auth_service, store, $log;
 		var token = "abc12345";

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
