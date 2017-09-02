function Usuario() {
	//this para ser publica
	this.id = 50
	this.userName = 'jplserver'

	this.listarTareas = () => {
		console.log(this.userName + ' tiene 20 tareas')
	}

	this.listarTareasTodas = function() {
		console.log(this.userName + ' tiene 5 tareas')
	}

	
	this.mostrarUsuario = function () {
		console.log(enMayuscula())
	}
	//esta funcion es privada, aqui si sale error, xq el this.userName no es de la funcion
	/*function enMayuscula() {
		return this.userName.toUpperCase()
	}*/
	//esta funcion sigue siendo privada x el const
	const enMayuscula = () => {
		return this.userName.toUpperCase()
	}
}

const usuario = new Usuario()
usuario.listarTareas()
usuario.listarTareasTodas()
usuario.mostrarUsuario()
