const personas = ['Johnny', 'Luis', 'Cinthia', 'Paola']

personas.push('Al Final')
personas.unshift('Al Inicio')

personas.pop();   //quita el ultimo elemento del arreglo
const ultimo = personas.pop()  //captura y luego elimina el ultimo del arreglo
personas.shift()  //quita el primero del arreglo

const unElemento = personas.slice(2,3)  //captura el elemento 'Cinthia' pero no lo quita del arreglo

