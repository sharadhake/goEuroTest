/***
Created By : Sharad
Description: Purpose of this file is to have all the common APIs and utilities at one place so whenever required can consumed by application.
*/
GoEuroTest.api.factory('API', function($http) {

  var goEuroAPIServices = {};

  //To get all repositories for the selected user.
  goEuroAPIServices.getRepositories = function(user) {
      return $http.get(APIURL + user + "/repos");
  }

  return goEuroAPIServices;

});
