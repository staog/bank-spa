angular.module('activeLinkController', []).controller('activeLinkCtrl', function ($scope, $window, $location) {

  $window.addEventListener('load', function () {
    $window.location.hash = '';
  })

  $scope.active = 1;
  $scope.changeActive = function (x) {
    $scope.active = x;
  };
})
