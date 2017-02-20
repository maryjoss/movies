angular.module("misPelisSeriesApp")
       .controller("peliculasProximamenteCtrl", ["$scope", "$filter", "Peliculas", "$location",
     function($scope, $filter, Peliculas,$location) {

        $scope.peliculas = $filter("orderBy")(Peliculas.data.results, "release_date");

        // apiService.consultaApi("movie/upcoming")

        //     .then(
        //         function(resultado) {

        //           $scope.peliculas = $filter("orderBy")(resultado.data.results, "release_date");
        //         },

        //         function() {
        //          alert("algo no ha ido como el culo")

        //         }

        //     );


        $scope.verDetalle = function(id){

            $location.path("/peliculas/detalles").search({
                idPeliculas: id
            })
        }
    }
]);
