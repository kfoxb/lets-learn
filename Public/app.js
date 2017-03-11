let letsLearnColors = angular.module('letsLearnColors', [])

.controller('appController', ['$scope', '$http', function($scope, $http) {
  $scope.playAudio = function() {
    var audio = new Audio('aud/orange.wav');
    console.log(audio);
    audio.play();
  };
  $http.get('/api/items')
    .success(function(data) {
      $scope.images = data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });
}]);