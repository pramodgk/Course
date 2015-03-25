/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('alldriverCtrl', function () {
  var ctrl;

  beforeEach(module('alldriver'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('alldriverCtrl');
  }));

  it('should have ctrlName as alldriverCtrl', function () {
    expect(ctrl.ctrlName).toEqual('alldriverCtrl');
  });

});
