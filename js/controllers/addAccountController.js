angular.module('addAccountController', []).controller('addAccountCtrl', function ($scope, $location, db) {
  $scope.caption = 'Add account';
  $scope.addNewUser = function () {
    var randomNumber = Math.ceil(Math.random() * 10000);
    var newAccount = {
      id : randomNumber,
      name : $scope.newuser.name,
      deposit : $scope.newuser.deposit,
      card : $scope.newuser.card,
    }
    db.push(newAccount);
    $location.path('/');
  };
})
