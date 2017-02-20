angular.module("misPelisSeriesApp").controller("peliculasDetallesCtrl",["$scope","Pelicula","apiService",
  function($scope, Pelicula, apiService) {

 	$scope.pelicula = Pelicula.data;

 	 $scope.rutaImagen = function(ruta) {

            return ruta == null ? null : apiService.obtenerRutaImagen(150, ruta)
        }


}]);