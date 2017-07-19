angular.module('userProfiles').service('mainService', function($http) {

    var user = {
        username: 'Steven', age: 25, height: 72
    }

  this.getUsers = function() {
    return $http({
        method: 'get', //get, post, delete, put
        url: 'https://reqres.in/api/users?page=1' // the url part is the endpoint
    })
  };

  this.addUser = function(user) {
    return $http({
        method: 'post',
        url: 'https://reqres.in/api/users',
        data: user
    });
  }

  this.removeFriend = function() {
    return $http({
        method: 'delete',
        url: 'https://reqres.in/api/user' + user
    })
  }


});
