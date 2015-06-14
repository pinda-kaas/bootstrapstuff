'use strict';

/**
 * @ngdoc overview
 * @name bootstrapPracticeApp
 * @description
 * # bootstrapPracticeApp
 *
 * Main module of the application.
 */
angular
  .module('bootstrapPracticeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/checkboxes', {
        templateUrl: 'views/checkboxes.html',
        controller: 'CheckboxesCtrl'
      })
      .otherwise({
        redirectTo: '/checkboxes'
      });
  });
