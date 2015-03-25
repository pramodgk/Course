(function() {
    'use strict';

    /* @ngdoc object
     * @name home
     * @requires $stateProvider
     *
     * @description
     *
     */
   angular
    .module('Create', [
      'ui.router'
    ])
    .controller("CreateCtrl",function($scope,$location){

      $scope.chk1=function()
     {
       $scope.uname=$scope.txt1;
       $scope.pwd=$scope.txt2;
       if($scope.uname=="pramod" && $scope.pwd=="12345")
       {
     

      
          $location.path("Course/SuccessPage");         

        alert("Login Success");

       }
       else
       {
        alert("Username or Password incorrect");
        $scope.txt1='';
        $scope.txt2='';

       }
       
     };
    })
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('Course.Create', {
        url: '/Create',
        views: {
          '@': {
            url: '/Create',
            templateUrl: 'Create/Login.html'
          }
        }
      });
  }
})();
