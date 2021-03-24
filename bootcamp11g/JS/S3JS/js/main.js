/*
    var phrase = "La mejor forma de predecir el futuro es creándolo"
    1- saber la cantidad de palabras
    2- saber la cantidad de "a"
    3- crear una nueva frase usando sólo los caracteres que esten en posiciones nones
        "amjrf"
    4- crear una nueva frase usando sólo los caracteres que esten en posiciones pares
*/


var phrase = "La mejor forma de predecir el futuro es creándolo"

var palabras = phrase.split(" ").length
console.log(palabras)

var a = phrase.match(/[aá]/gi).length
console.log(a)

var oddPhrase = '';
for(var i = 1; i<phrase.length; i+=2){
     oddPhrase += phrase.charAt(i);
}
console.log(`la nueva frase es ${oddPhrase}`);

var evenPhrase = ''
for(var i =0; i< phrase.length; i+= 2){
    evenPhrase += phrase.charAt(i)
}
console.log(`la nueva frase es ${evenPhrase}`)