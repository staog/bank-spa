angular.module('deleteAccountController', []).controller('deleteAccountCtrl', function ($scope, db, $location) {
  $scope.caption = 'Delete account';
  $scope.users = db;
  $scope.deleteUser = function (i) {
    (confirm('Do you really want to delete this account?'))
    ? (db.splice(i, 1), $location.path('/')) : $location.path('/delete-account.html');
  };
})
