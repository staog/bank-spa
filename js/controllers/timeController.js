angular.module('timeController', []).controller('timeCtrl', function ($scope, $timeout) {
  $scope.clock = 'Loading clock...';

  var showClock = function () {
    $scope.clock = Date.now();
    $timeout(showClock, 1000);
  }

  $timeout(showClock, 1000);
})
