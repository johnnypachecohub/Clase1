//declaracion de una clase (en JS 6 la estructura es similar a c# pero a las finales lo pasa a un function tradicional)
function Persona() {
	this.nombre = 'Johnny'
	this.apellido = 'Pacheco'

	//var self = this    //esto es un parche en JS 5

	//si no ponemos el this la funcion no sera publica
	this.nombreCompleto = () => {
		console.log(this.nombre + ' ' + this.apellido)
	}

	/*function mayuscula() {
		this.nombre  //aqui saldria error xq nombre no pertenece a esta funcion
	}*/

	setInterval( () => {
		console.log(this.nombre)
	}, 1000)
	/*setInterval(function() {
		//console.log(this.nombre)
		//el this que nombre aqui trata de llamar al this de la funcion setInterval
		console.log(self.nombre)
	}, 1000)*/
}

//convertimos la clase en un objeto
const persona = new Persona()
persona.nombreCompleto()
