var app = angular.module('bankApp', ['ngRoute',
                                     'accountsController',
                                     'addAccountController',
                                     'editAccountController',
                                     'deleteAccountController',
                                     'timeController',
                                     'activeLinkController',
                                     'dbService'])
 .config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
    .when('/', {
      templateUrl : "views/accounts.html",
      controller : "accountsCtrl"
    })
    .when('/add-account', {
      templateUrl : "views/add-account.html",
      controller : "addAccountCtrl"
    })
    .when('/edit-account', {
      templateUrl : "views/edit-account.html",
      controller : "editAccountCtrl"
    })
    .when('/delete-account', {
      templateUrl : "views/delete-account.html",
      controller : "deleteAccountCtrl"
    })
    .otherwise({
      redirectTo : "/"
    })
});
