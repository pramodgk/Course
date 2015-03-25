(function() {
    'use strict';

    /* @ngdoc object
     * @name myNewApp
     * @requires $urlRouterProvider
     *
     * @description
     *
     */
    angular
        .module('myNewApp', [
            'ngAria',
            'ui.router',
            'mgcrea.ngStrap',
            'home',
            'Create','admin'
        ]);

    angular
        .module('myNewApp')
        .config(config);

    function config($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/Course/admin');
        $stateProvider
            .state('Course', {
                url: '/Course',
                views: {
                    'header@': {
                        templateUrl: 'header/header.tpl.html'
                    },
                    'sidebar@': {
                        Url: '/Course',
                        templateUrl: 'sidebar/sidebar.tpl.html'
                    }
                }
            });
          
    }

})();
