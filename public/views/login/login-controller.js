angular.module('seed-main', [])


.controller('LoginController', ["$scope", "$http", 'Upload',
	function($scope)
	{
		$scope.login = function()
		{
			alert('LEMMONS')
		}
	}
]);