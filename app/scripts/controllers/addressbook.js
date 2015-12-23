'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoAngularApp
 */
angular.module('yoAngularApp')
  .controller('AddressbookCtrl', function ($scope, $http, $stateParams) {
    console.log("Inside AdressbookCtrl");

    console.log("$scope.people "+ $scope.people);

    if($scope.people == undefined || $scope.people == ""){
      $http.jsonp('http://www.filltext.com/?rows=30&state={usState|abbr}&address={streetAddress}&zip={zip}&tel={phone|format}&id={index}&fname={firstName}&lname={lastName}&city={city}&callback=JSON_CALLBACK')
        .success(function (data) {
          console.log(data);
          $scope.people = data;
          $scope.person = $scope.people[$stateParams.id];
        });
    }
  });
