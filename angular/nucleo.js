angular.module('MainApp', [])


function controladorPrincipal( $scope, $http ){
	$scope.areas = {};
	$scope.newArea = {};

	$http.get('/api/areas').success( function(data){
		$scope.areas = data;
	}).error( function(data) {
		console.log('Error: ' + data);
	});
	

//Agregar una nueva area

$scope.registrarArea = function(){

$http.post('/api/area', $scope.newArea)
	.success( function(data){
		$scope.newArea = {}; //borramos los datos del formulario
		$scope.areas = data;
	})
	.error( function(data){
		console.log('Error:'+ data);
	});
	};

}
	







