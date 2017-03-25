angular.module('editAccountController', []).controller('editAccountCtrl', function ($scope, db, $location) {
  $scope.caption = 'Edit account';
  $scope.users = db;
  $scope.showForm = false;

  $scope.editUser = function (i) {
    $scope.showForm = true;
    $scope.id = db[i].id;
    $scope.name = db[i].name;
    $scope.deposit = db[i].deposit;
    $scope.card = db[i].card;
    $scope.dbIndex = i;
  };

  $scope.saveNewData = function (ind) {
    db[ind].id = $scope.id;
    db[ind].name = $scope.name;
    db[ind].deposit = $scope.deposit;
    db[ind].card = $scope.card;
  };

  $scope.cancelEditing = function () {
    $scope.showForm = false;
  }
})
