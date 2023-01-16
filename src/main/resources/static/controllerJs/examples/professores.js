var professoresModulo = angular.module('professoresModulo', []);
professoresModulo.controller("professoresController", function($scope, $http) {

urlProfessores = 'http://localhost:8080/CadastroProfessores/app/professores';

	$scope.listarProfessores = function() {

		$http({
			method: 'GET',
			url: urlProfessores
		}).then(function successCallback(response) {
			$scope.professores = response.data;
		}, function errorCallback(response) {
			alert(response);
		});

	}

	$scope.limparCampos = function() {
		$scope.professor = null;
	}
	
	$scope.selecionaProfessor = function(professorSelecionado){
		$scope.professor = professorSelecionado;
	}
	
	$scope.excluir = function(){
		if($scope.professor.codigo == undefined){
			alert("Favor selecionar registro para excluir");
			
		}else{
			$http.delete(urlProfessores+'/'+$scope.professor.codigo).then(function(){
				$scope.listarProfessores();
				$scope.limparCampos();
			})
		}
	}
	
	
	
	$scope.salvar = function(){
		if($scope.professor.codigo == undefined){

			
			$http.post(urlProfessores, $scope.professor).then(function successCallback(){
				$scope.professores.push($scope.professor);
				$scope.limparCampos();
			},function(professor){
				alert(professor);
			});
		
		}else{
			$http.put(urlProfessores,$scope.professor).then(function(){
				$scope.listarProfessores();
				$scope.limparCampos();
			},function(professor){
				alert(professor);
			});
		}
	}
	
	
	
	
	//o metodo neste scopo sera executado primeiro
	$scope.listarProfessores();



	//	$scope.professores = [
	//		{ codigo: 1, nome: 'Marcio Torres', email: 'marcio@gmail.com', telefone: '(99)99999-9999' },
	//		{ codigo: 2, nome: 'Teotonio da Hora', email: 'teotonio@gmail', telefone: '(88)88888-8888' },
	//		{ codigo: 3, nome: 'Beatriz Caroline', email: 'beatriz@gmail.com', telefone: '(00)00000-0000' }
	//
	//	];
	//
	//	$scope.selecionaProfessor = function(professorSelecionado) {
	//		$scope.professor = professorSelecionado;
	//
	//	}
	//
	//	$scope.salvar = function(codigo, nome, email, telefone) {
	//
	//		if (codigo != null && nome != null && email != null && telefone != null) {
	//			$scope.professores.push($scope.professor);
	//			$scope.limparCampos();
	//		} else {
	//			window.alert("Campos obrigatórios");
	//		}
	//	}
	//
	//	$scope.limparCampos = function() {
	//		$scope.professor = null;
	//	}
	//	$scope.excluir = function() {
	//		$scope.professores.splice($scope.professores.indexOf($scope.professor), 1);
	//		$scope.limparCampos();
	//	}


});																																															