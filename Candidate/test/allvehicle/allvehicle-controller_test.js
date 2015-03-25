/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('allvehicleCtrl', function () {
  var ctrl;

  beforeEach(module('allvehicle'));

  beforeEach(inject(function ($controller) {
    ctrl = $controller('allvehicleCtrl');
  }));

  it('should have ctrlName as allvehicleCtrl', function () {
    expect(ctrl.ctrlName).toEqual('allvehicleCtrl');
  });

});
