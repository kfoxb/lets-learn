angular.module('letsLearnColors')
.directive('itemsContainer', function() {
  return {
    restrict: 'E',
    template: `
      <div class="itemsContainer">
        <item ng-repeat="item in items" item="item"></item>
      </div>`
  };
});