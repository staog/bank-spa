angular.module('dbService', []).factory('db', function () {

  var users = [
    {
    id : 542,
    name : 'Francisco Chang',
    deposit : '$11100',
    card : 'Visa Electron'
    },
    {
    id : 1040,
    name : 'Helen Bennett',
    deposit : '$22200',
    card : 'Master Card'
    },
    {
    id : 739,
    name : 'Yoshi Tannamuri',
    deposit : '$33300',
    card : 'American Express'
    },
    {
    id : 122,
    name : 'Giovanna Rovelli',
    deposit : '$44400',
    card : 'Maestro Debit Card'
    },
    {
    id : 357,
    name : 'Roland Mendel',
    deposit : '$55500',
    card : 'SunTrust Card'
    }
  ];
  return users;

})
