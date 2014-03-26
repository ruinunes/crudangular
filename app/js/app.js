var app = angular.module('peopleApp',['ngRoute','ngAnimate','appControllers']);


app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/people', {
        templateUrl: 'views/list.html',
        controller: 'controllerPeople'
      }).
      when('/people/:id', {
        templateUrl: 'views/details.html',
        controller: 'controllerDetails'
      }).
      when('/new', {
        templateUrl: 'views/addPerson.html',
        controller: 'controllerAddPerson'
      }).
      when('/people-edit/:id', {
        templateUrl: 'views/editPerson.html',
        controller: 'controllerEditPerson'
      }).
      otherwise({
        redirectTo: '/people'
      });
  }]);
