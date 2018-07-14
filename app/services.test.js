'use strict';

describe('Unit test: Auth in serviceModule', function () {

  beforeEach(module('tesonetApp.serviceModule'));
  beforeEach(module('angular-storage'));

 	describe('has methods:', function() {

 		var auth_service, store, $log;
 		var token = "abc12345",
 				username = "bigboy",
 				password = "n3v3rgiv3up";

	  beforeEach(inject(
	  	function(_$log_, $injector){
	  		auth_service = $injector.get('Auth');
	  		store = $injector.get('store');

	  		spyOn(auth_service,'login').and.callThrough();
	  		auth_service.login(username, password);

	  		spyOn(auth_service,'storeToken').and.callThrough();
	  		auth_service.storeToken(token);

	  		spyOn(auth_service,'logout').and.callThrough();
	  		auth_service.logout();
		  }
		))
	  it('login():', function() {
	  	expect( auth_service.login ).toHaveBeenCalledWith(username, password);
	    expect( auth_service.login ).toBeDefined();
   		expect( typeof auth_service.login ).toEqual("function");
	  });
	  it('storeToken():', function() {
	  	expect( auth_service.storeToken ).toHaveBeenCalledWith(token);
	    expect( auth_service.storeToken ).toBeDefined();
   		expect( typeof auth_service.storeToken ).toEqual("function");
	  });
	  it('logout():', function() {
	  	expect( auth_service.logout ).toHaveBeenCalled();
	    expect( auth_service.logout ).toBeDefined();
   		expect( typeof auth_service.logout ).toEqual("function");
	  });
	 });
});
