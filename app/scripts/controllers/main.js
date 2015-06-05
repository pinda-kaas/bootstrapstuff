'use strict';

/**
 * @ngdoc function
 * @name bootstrapPracticeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bootstrapPracticeApp
 */
angular.module('bootstrapPracticeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
