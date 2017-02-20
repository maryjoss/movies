angular.module("misPelisSeriesApp").filter("fechaEstreno",function() {

	return function( datoEstreno) {

		return "Se estrena en: " + datoEstreno;

	}

})