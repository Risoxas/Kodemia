/*
    Usando la frase "La mejor forma de predecir el futuro es creándolo" lograr los siguientes resultados:
    1.- Mostrar la misma frase en snake_case
    2.- Mostrar la misma frase en kebab-case
    3.- Mostrar la misma frase con todas las vocales en mayúscula
    4.- Mostrar los primeros 10 caracteres de la frase
    5.- Mostrar los últimos 10 caracteres de la frase 
*/


var frase = "La mejor forma de predecir el futuro es creándolo"

/********* 1 *************/

console.log(frase.replace(/ /gi,"_"))

/********** 2 *************/

console.log(frase.replace(/ /gi,"-"))

/********** 3 **************/

var newFrase = frase.split("")

for (var i = 0; i < frase.length; i++) {

    if(frase[i].match(/[aeiouáéíóú]/gi)){
        newFrase[i] = frase[i].toUpperCase()
    }
}
newFrase = newFrase.join('')
console.log(newFrase)


/***************** 4 **************/

var firstTen = frase.split('',10)
console.log(firstTen.join(''))


/*************** 5 ********************/

var lastTen = frase.split('').slice(-10)
console.log(lastTen.join(''))