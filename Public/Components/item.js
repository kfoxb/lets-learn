angular.module('letsLearnColors')
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