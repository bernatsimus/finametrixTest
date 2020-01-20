const news = angular.module("news", []);
// news.controller('HelloWorldCtrl',function($scope)
// {
//     console.log("asdasdasd");
//     $scope.message = "Hello World";
//     $scope.items = [];
// });

function HelloWorldCtrl($scope, $http) {
	$scope.message = "Hello World";

	// Cuando se cargue la página, pide del API todos los TODOs
	// $http.get('/api/todos')
	// 	.success(function(data) {
	// 		$scope.todos = data;
	// 		console.log(data)
	// 	})
	// 	.error(function(data) {
	// 		console.log('Error: ' + data);
	// 	});
}