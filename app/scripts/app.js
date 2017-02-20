angular.module("misPelisSeriesApp", ["ngRoute", "route-segment", "view-segment"]);

angular.module("misPelisSeriesApp").config(["$routeSegmentProvider","$routeProvider", function($routeSegmentProvider,$routeProvider){

	$routeSegmentProvider.when("/peliculas", "peliculas");
	$routeSegmentProvider.when("/peliculas/proximamente", "peliculas.proximamente");
	$routeSegmentProvider.when("/peliculas/cartelera", "peliculas.cartelera");
	$routeSegmentProvider.when("/peliculas/detalles","peliculas.detalles")
	$routeSegmentProvider.when("/series", "series");
	$routeSegmentProvider.when("/series/hoy", "series.hoy");
	$routeSegmentProvider.when("/series/emision", "series.emision");
	$routeProvider.otherwise({

		redirectTo: "/peliculas/proximamente"

});

	$routeSegmentProvider.segment("peliculas", {
		controller: "peliculasCtrl",
		templateUrl: "views/peliculas.html"
	});

	$routeSegmentProvider.within("peliculas").segment("proximamente", {
		controller: "peliculasProximamenteCtrl",
		templateUrl: "views/peliculasProximamente.html",
		resolve: {
			Peliculas: ["apiService", function(apiService){
				return apiService.consultaApi("movie/upcoming");
			}]
		}
	});

	$routeSegmentProvider.within("peliculas").segment("cartelera", {
		controller: "peliculasCarteleraCtrl",
		templateUrl: "views/peliculasCartelera.html",
		resolve: {
			Peliculas: ["apiService", function(apiService){
				return apiService.consultaApi("movie/now_playing");
			}]
		}
	});

	$routeSegmentProvider.within("peliculas").segment("detalles", {
		controller:"peliculasDetallesCtrl",
		templateUrl:"views/peliculasDetalles.html",
		resolve: {
			Pelicula: ["apiService","$routeParams", function(apiService,$routeParams){
				return apiService.consultaApi("movie/" + $routeParams.idPeliculas);
			}]
		}
	});


	$routeSegmentProvider.segment("series", {
		controller: "seriesCtrl",
		templateUrl: "views/series.html"
	});

	$routeSegmentProvider.within("series").segment("hoy", {
		controller: "seriesHoyCtrl",
		templateUrl: "views/seriesHoy.html"
	});


	$routeSegmentProvider.within("series").segment("emision", {
		controller: "seriesEmisionCtrl",
		templateUrl: "views/seriesEmision.html"
	});
}]);