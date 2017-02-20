angular.module("misPelisSeriesApp").service("apiService", ["$http", "configuracion", function($http, configuracion) {


	this.consultaApi = function (servicio) {

		var url = "https://api.themoviedb.org/"+ configuracion.apiVersion 
		url += "/" + servicio + "?api_key="+ configuracion.apiKey +"&language=es"
		
		return  $http.get(url)
	};
 
 	this.obtenerRutaImagen = function(tamanyo, ruta) {

 		return configuracion.rutaImagenApi + tamanyo + ruta
 	}


}]);