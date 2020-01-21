angular.module("news", []).controller('newsCtrl',function($scope, $http, $window)
{
	$http.get('/getNews').then(function (response) {
		$scope.items = response.data;
	});
	$scope.archiveNew = function (id) {
			$http.post('/updateArchiveDate/' + id).success(function (response) {
				$window.location = "/archived.html";
			});
	}
});
