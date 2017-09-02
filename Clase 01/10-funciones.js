//en JS 6
//funcion flecha

const nombreCompleto = (nombre, apellido) => {
	return nombre + ' ' + apellido
}

//funciona solo si la funcion tiene 1 sola fila
const nombreCompleto = (nombre, apellido) => nombre + ' ' + apellido

//si solo es un solo parametro no es necesario el parentesis
const nombreCompleto = palabra => palabra.toUpperCase()

//si la funcion no requiere de parametro
const obtenerFecha = () => new Date()
