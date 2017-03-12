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
    .when('/add-account.html', {
      templateUrl : "views/add-account.html",
      controller : "addAccountCtrl"
    })
    .when('/edit-account.html', {
      templateUrl : "views/edit-account.html",
      controller : "editAccountCtrl"
    })
    .when('/delete-account.html', {
      templateUrl : "views/delete-account.html",
      controller : "deleteAccountCtrl"
    })
    .otherwise({
      redirectTo : "/"
    })
});
