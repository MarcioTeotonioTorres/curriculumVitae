var visitantesModulo = angular.module('visitantesModulo', []);
visitantesModulo.controller('visitantesController', function($scope, $http) {

	$scope.registrar = "Hello World";



	urlSalvarVisitante = 'http://localhost:8080/salvar';
	$scope.salvar = function(nome, email) {
		if (nome != undefined && email != undefined) {
			$scope.visitante = { nome: nome, email: email };
			console.log($scope.visitante);
			$http.post(urlSalvarVisitante, $scope.visitante).then(function successCallback() {
				$scope.visitantes.push($scope.visitante);
				console.log(visitante);
				$scope.limparCampos();
			});

		}
				else {
					$http.put(urlSalvarVisitante, $scope.visitante).then(function() {
						$scope.listarVisitantes();
						//$scope.limparCampos();
					});
				}
	}


	$scope.limparCampos = function() {
		$scope.visitante = null;
	}
	$scope.excluir = function() {
		$scope.visitantes.splice($scope.visitantes.indexOf($scope.visitante), 1);
		$scope.limparCampos();
	}


});
