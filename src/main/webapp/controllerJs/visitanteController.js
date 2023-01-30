var visitantesModulo = angular.module('visitantesModulo', []);
visitantesModulo.controller('visitantesController', function($scope, $http) {

	$scope.registrar = "Hello World";
	
	$scope.desativarBotao = false;
	
	urlSalvarVisitante = 'http://localhost:8080/salvar';

	$scope.visitante = { nome: null, email: null };

	$scope.limparCampos = function() {
		$scope.visitante.nome = null;
		$scope.visitante.email = null;
	}
	$scope.excluir = function() {
		$scope.visitantes.splice($scope.visitantes.indexOf($scope.visitante), 1);
		$scope.limparCampos();
	}

	$scope.salvar = function(nome, email) {

		$scope.visitante = { nome: nome, email: email };

		if ($scope.visitante.nome != undefined && $scope.visitante.email != undefined) {
		
			$http({
				method: 'POST',
				url: urlSalvarVisitante,
				data: $scope.visitante
			}).then(function successCallback(response) {
//				$scope.visitantes.push($scope.visitante);
				console.log(response.status);
							
				window.alert("Contato salvo!");
				$scope.limparCampos();
				
			}, function errorCallback(response) {
				if(response.status == 500){
					window.alert("Esse contato já existe!");
				}				
				window.alert(response + "Tente novamente!");
				$scope.limparCampos();
			});

		} else {
			
			window.alert("Campos em vermelho são obrigatórios");		
			$scope.limparCampos();

		}

	}
});
