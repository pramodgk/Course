'use strict';

describe('alldriver', function() {
  describe('dataService', function() {
    var createService;

    beforeEach(module('alldriver'));

    beforeEach(inject(function($injector) {
      createService = function() {
        return $injector.get('dataService');        
      }
    }));
console.log('My service initialized');
    it('should be defined', function() {
      var service = createService();
      expect(service).toBeTruthy();
    });
  });
});