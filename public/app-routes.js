app.config(function($routeProvider)
{
	$routeProvider

	.when('/',
	{
		templateUrl: 'views/login/login-view.html',
		controller: 'LoginController'
	})

	.when('/edit',
	{
		templateUrl: 'views/main/main-view.html',
		controller: 'MainController'
	})

});