angular.module('alurapic').controller('FotosController', function ($scope, recursoFoto) {

	$scope.fotos = [];
	$scope.filtro = '';
	$scope.mensagem = '';

	recursoFoto.query(function (fotos) {
		$scope.fotos = fotos;
	}, function (error) {
		console.log(erro);
	})

//--> O codigo acima faz a mesma coisa usando ngResource
//	$http.get('/v1/fotos')
//		.success(function (retorno) {
//			console.log(retorno);
//			$scope.fotos = retorno; // não precisa fazer retorno.data
//		})
//		.error(function (erro) {
//			console.log(erro);
//		});

	$scope.remover = function (foto) {

			recursoFoto.delete({fotoId : foto._id}, function(){
				var indiceFoto = $scope.fotos.indexOf(foto);
				$scope.fotos.splice(indiceFoto, 1);
				$scope.mensagem = "A foto " + foto.titulo + " foi removida com sucesso.";
			}, function(erro){
				$scope.mensagem = "Ocorreu um erro durante a remoção da foto";
			});
	};

});