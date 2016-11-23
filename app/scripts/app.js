'use strict';

/**
 * @ngdoc overview
 * @name ng1App
 * @description
 * # ng1App
 *
 * Main module of the application.
 */
angular
  .module('ng1App', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
