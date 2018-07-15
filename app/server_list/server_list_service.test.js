'use strict';

describe('Unit test: ServerList in serviceModule', function () {

  beforeEach(module('tesonetApp.serviceModule'));
  beforeEach(module('tesonetApp.constants'));
  beforeEach(module('angular-storage'));

 	describe('has methods:', function() {

 		var list_service, store, ENDPOINTS;
 		var token = "abc12345";

	  beforeEach(inject(
	  	function(_$log_, $injector){
	  		list_service = $injector.get('ServerList');
	  		store = $injector.get('store');
	  		ENDPOINTS = $injector.get('ENDPOINTS');

	  		spyOn(list_service,'fetchAll').and.callThrough();
	  		list_service.fetchAll(token);
		  }
		));
	  it('fetchAll():', function() {
	  	expect( list_service.fetchAll ).toHaveBeenCalled();
	    expect( list_service.fetchAll ).toBeDefined();
   		expect( typeof list_service.fetchAll ).toEqual("function");
	  });
	 });
});
