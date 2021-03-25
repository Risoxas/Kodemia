/* -Crear una función que pida al usuario el número de koders a registrar
    -tantas veces como koders se deseen registrar:
        -Pedir el nombre del koder
        -Pedir el apellido del koder
        -Imprimir el nombre completo del koder */
function koders() {
    let nuevo = 'si';
    while (nuevo != "no") {
        let nombre = prompt("Ingrese el nombre del koder")
        let apellido = prompt("Ingrese el apellido del koder")
        console.log(nombre, apellido)
        nuevo = prompt("desea agregar un nuevo koder?")
    }
}



