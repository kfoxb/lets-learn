//this file will contain logic for angular
let letsLearnColors = angular.module('letsLearnColors', []);

function mainController($scope, $http) {
  $scope.formData = {};

  // when landing on the page, get all todos and show them
  $http.get('/api/img')
    .success(function(data) {
      $scope.images = data;
      console.log(data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });

}