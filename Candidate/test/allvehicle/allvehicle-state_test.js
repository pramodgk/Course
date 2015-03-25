/*global describe, inject*/
'use strict';

describe('FMS.allvehicle', function () {
  var $rootScope, $state, $injector, state = 'FMS.allvehicle';

  inject(function ($rS, $st, $injt, $templateCache) {
    $rootScope = $rS;
    $state = $st;
    $injector = $injt;

    $templateCache.put('allvehicle.tpl.html', '');
  });
});
