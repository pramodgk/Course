/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('addtripCtrl', function () {
  var ctrl;

  beforeEach(module('addtrip'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('addtripCtrl');
  }));
 console.log('My new app initialized');
  it('should have ctrlName as addtripCtrl', function () {
    expect(ctrl.ctrlName).toEqual('addtripCtrl');
  });

});
