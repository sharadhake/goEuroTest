/***
Created By : Sharad
Description: Entry point of application. Defines all modules of the application with its route configurtion.
***/

GoEuroTest = angular.module('goEuroTest', [
  'ngRoute',
  'GoEuroTest.api',
  'GoEuroTest.controllers'
]);

GoEuroTest.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/', {templateUrl: "app/templates/repositoryList.html", controller: "repositoryListController"}).
    otherwise({redirectTo: '/'});
}]);

//Separate module to keep the code clarity and easy to understand
GoEuroTest.api  = angular.module('GoEuroTest.api', []); //This is the API module which has all the service calls and utilities consumed by applications.
GoEuroTest.controllers = angular.module('GoEuroTest.controllers', []); //Controller module which holds all the controllers used in applications.
