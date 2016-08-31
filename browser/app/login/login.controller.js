'use strict';

app.controller('LoginCrtl', function($scope,$http,$location,AuthFactory) {
	// AuthFactory.email = $scope.email
	//  AuthFactory.password = $scope.password
	$scope.submitLogin = AuthFactory.checkAuthentication

	
})