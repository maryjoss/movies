angular.module("misPelisSeriesApp").controller("seriesEmisionCtrl",  ["$scope", "apiService", function ($scope, apiService) {
	
apiService
		.consultaApi("tv/on_the_air")
		.then(
				function (resultado) {

					$scope.series = resultado.data.results;

				},

				function () {
					alert("ha habido un error")
				}

			)

}]);