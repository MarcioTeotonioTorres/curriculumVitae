var visitantesModulo = angular.module('visitantesModulo', ["ngRoute"]);

visitantesModulo.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "templates/apresentacao.html"
  })
  .when("/login", {
    templateUrl : "templates/login.html"
  }).
    otherwise({
        redirect: "/apresentacao"
    });
});

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

	$scope.captcha = (function() {
		const fonts = ["cursive", "sans-serif", "serif", "monospace"];
		let captchaValue = "";
		function generateCaptcha() {
			let value = btoa(Math.random() * 1000000000);
			value = value.substring(0, 5 + Math.random() * 5);
			captchaValue = value;
		}
		function setCaptcha() {
			captchaValue.split("").map((charString) => {
				const rotate = -20 + Math.trunc(Math.random() * 30);
				const font = Math.trunc(Math.random() * fonts.length);
				$scope.char = charString;
				return '<span stily = "transform:rotate()">{{char}}</span>'
			});
		}
	})();

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
				$scope.desativarBotao = true;
				window.alert("Contato salvo!");
				$scope.limparCampos();

			}, function errorCallback(response) {
				if (response.status == 500) {
					window.alert("Esse contato já existe!");
				}
				console.log(response);
				window.alert("Tente novamente!");
				$scope.limparCampos();
			});

		} else {

			window.alert("Campos em vermelho são obrigatórios");
			$scope.limparCampos();

		}

	}
	
}



);
