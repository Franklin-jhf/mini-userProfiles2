angular.module('userProfiles').controller('MainController', function($scope, mainService) {

  $scope.getUsers = function() {
  	$scope.users = mainService.getUsers().then(function(response) {
  		$scope.users = response.data.data;
  	});
  }


  $scope.getUsers();



  $scope.addUser = function(user) {
  	mainService.addUser(user).then(function(response) {
  		if (response.status === 200) {
  			$scope.alert = 'User Added';
  		} else {
  			$scope.alert = 'Error in Request';
  		}
  	});
  }

  $scope.removeFriend = function(user) {
  	mainService.removeFriend(user).then(function(response) {
		if (!response) {
			$scope.alert = 'unavailable';
		} else if (response.err) {
			$console.log(resposne.err);
			$scope.alert = response.err;
		}
  	})
  }
});