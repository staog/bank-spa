angular.module('accountsController', []).controller('accountsCtrl', function ($scope, db) {
  $scope.caption = 'All accounts';
  $scope.users = db;
})
