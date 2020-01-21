angular.module("archiveds", []).controller('archivedsCtrl',function($scope, $http, $window)
{
	$http.get('/getArchiveds').then(function (response) {
		$scope.items = response.data;
	});
	$scope.delete = function (id) {
		$http.post('/deleteArchived/' + id).success(function (response) {
			$window.location.reload();
		});
	}
});
