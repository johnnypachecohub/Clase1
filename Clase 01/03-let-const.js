//hasta la version 5, las variables se declaran con: var
//a partir de la version6: let y const
var nombre = 'Johnny'
let paterno = 'Pacheco'
const materno = 'Leon'

/*
Por el alcance:
	var: genera variables globales
	let, const: depende donde esten declaradas

Por la inmutabilidad del tipo de dato:
	- los mutables: var, let
	- inmutable: const (para las variables primitivas no es posible cambiar el valor, solo para los complejos)
*/

console.log("Tipo de dato:", typeof(nombre))

//const cadena = 'Nombre'   siempre se tiene q definir el dato en caso del const

//alcance de variable
if(true) {
	let tipo = 'leon'
	console.log('Dentro de if', tipo)

	var zoo = 'Parque'
}
console.log('Fuera del if', zoo)
console.log('Fuera del if', tipo)

