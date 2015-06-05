'use strict';

/**
 * @ngdoc function
 * @name bootstrapPracticeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bootstrapPracticeApp
 */
angular.module('bootstrapPracticeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
