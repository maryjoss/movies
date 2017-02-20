angular.module("misPelisSeriesApp").controller("seriesHoyCtrl",  ["$scope", "apiService", function ($scope,apiService) {

	apiService
		.consultaApi("tv/airing_today")
		.then(
				function (resultado) {

					$scope.series = resultado.data.results;

				},

				function () {
					alert("ha habido un error")
				}

			)
	 
}]);