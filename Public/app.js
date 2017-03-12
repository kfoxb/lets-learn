let letsLearnColors = angular.module('letsLearnColors', [])
.directive('app', function() {
  return {
    restrict: 'E',
    controller: function($scope, $http) {
      $http.get('/api/items')
        .success(function(data) {
          $scope.items = data;
        })
        .error(function(data) {
          console.log('Error: ' + data);
        });
    },
    template: '<h1>Let\'s Learn Colors</h1><items-container></items-container>',
  };
});