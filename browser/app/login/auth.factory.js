app.factory('AuthFactory', function($http, $location, $state) {
	var AuthFactory = {
		// email : "",
		// password: ""
	};

	// var data = {email: AuthFactory.email, password: AuthFactory.password}

	AuthFactory.checkAuthentication = function(data){
		return $http.post('/login',data)
				
					.then(function(response){
			//console.log(response)
				//console.log(user)
					$location.path("/stories");
				  }).catch(console.log("YOU are a Phony, a big fat phony!!!"));

	};

	AuthFactory.signUp = function(data){
		return $http.post('/api/users', data)
					.then(function(response){
					console.log(response)
					$location.path("/stories");
					}).catch(function(err) {
						console.log(err)
					})

	}

	AuthFactory.loggingOut = function(){

		console.log("ARARARARARARARA")
		return $http.delete('/login/logout')
		.then(function(response){
			console.log(response);
			$state.go("home");
		}).catch(function(err){
			console.log(err)
		})
	}

	
	return AuthFactory
})