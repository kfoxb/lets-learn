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
})
.directive('itemsContainer', function() {
  return {
    restrict: 'E',
    template: `
      <div class="itemsContainer">
        <item ng-repeat="item in items" item="item"></item>
      </div>`
  };
})
.directive('item', function() {
  return {
    controller: 'itemController',
    restrict: 'E',
    replace: true,
    template: `
      <div>
          <img ng-src={{item.imgUrl}} ng-click="playAudio()"/>
      </div>`
  };
})
.controller('itemController', function($scope) {
  let audUrl = $scope.item.audUrl;
  $scope.playAudio = function($scope) {
    var audio = new Audio(audUrl);
    audio.play();
  };
});