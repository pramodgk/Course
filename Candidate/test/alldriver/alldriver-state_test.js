/*global describe, inject*/
'use strict';

describe('FMS.alldriver', function () {
  var $rootScope, $state, $injector, state = 'FMS.alldriver';

  inject(function ($rS, $st, $injt, $templateCache) {
    $rootScope = $rS;
    $state = $st;
    $injector = $injt;

    $templateCache.put('alldriver.tpl.html', '');
  });
});
