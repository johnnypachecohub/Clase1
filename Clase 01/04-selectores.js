const navs = document.getElementsByTagName('nav')
console.log(navs)  //devuelve un HTMLCollection

const rojo = document.getElementsByClassName('rojo')
console.log(rojo)

const titular = document.getElementById('titular')
console.log(titular)
//los anteriores practicamente no se usan

const navsSelector = document.querySelectorAll('nav')
// devuelve NodeList

const rojoSelector = document.querySelector('section.rojo')
console.log(rojoSelector)  //devuelve solo 1

//selector de tipo atributo (no es de JS sino de CSS)
const dataRel10 = document.querySelectorAll('[data-rel="10"]')

const dataRel = document.querySelectorAll('[data-rel]')

const dataRel1 = document.querySelectorAll('[data-rel^="1"]')
// devuelve los data rel que empiezan con 1

const dataRel0 = document.querySelectorAll('[data-rel$="1"]')
// devuelve los data rel que terminan con 0

