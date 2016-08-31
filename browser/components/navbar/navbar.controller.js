app.controller("navbarCtrl", function($scope,AuthFactory){

	$scope.logOUT = AuthFactory.loggingOut
})