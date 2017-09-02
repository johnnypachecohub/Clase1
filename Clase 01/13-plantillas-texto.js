const nombre = 'Johnny',
	  apellido = 'Pacheco'

//concatenando usando comillas backstick: `
console.log(`${nombre} ${apellido}`)

let tabla = ''
tabla += '<table>'
tabla += '</table>'

let tablaJS6 = `
	<table>
		<tr>
			<td>${nombre}</td>
			<td>${apellido}</td>
		</tr>
	</table>
`

const personas = ['Johnny', 'Luis', 'Cinthia', 'Paola']
const formatoFila = item => {
	return `
		${item.toUpperCase()}
		${new Date()}
	`
}
let filasPersonas = '<table>'
personas.forEach(item => {
	filasPersonas += `
		<tr>
			<td>${new Date()} ${item.toUpperCase()}</td>
		</tr>
		<tr>
			<td>${formatoFila(item)}</td>
		</tr>
	`
})
filasPersonas += '</table>'
console.log(filasPersonas)
