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
    // $scope.items = [0, 1]//http get here;
    },
    template: '<items-container></items-container>',
  };
})
.directive('itemsContainer', function() {
  return {
    restrict: 'E',
    template: `
      <div>
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
        <span class="item-name">{{item.title}}</span>
        <span>
          <img ng-src={{item.imgUrl}} ng-click="playAudio()"/>
        </span>
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