angular.module("misPelisSeriesApp").controller("navCtrl",  ["$scope", "$routeSegment", function ($scope, $routeSegment) {
	
	$scope.rutaEsPelicula = function () {

		return $routeSegment.startsWith("peliculas");

	}; 


	$scope.rutaEsSeries = function () {

		return $routeSegment.startsWith("series");


	};

}]);