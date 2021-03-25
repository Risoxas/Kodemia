/*
    -pedir al usuario la cantidad de koders a guardar
    -pedir nombre y apellido de cada koder
    -guardar cada koder en un array 
    -imprimir cada uno de los koders
*/
/*
    permitir guardar koders adicionales
    permitir borrar un koder aleatorio de la lista
*/

function save_Koder(nombre, apellido) {
    return nombre.concat(' ', apellido)
}
function borrar_Koder(array, index) {
    return array.splice(index, 1)
}

let n = prompt("cuantos koders desea agregar?")
let array = []

for (let i = 0; i < n; i++) {
    let nombre = prompt("Ingrese Nombre de Koder")
    let apellido = prompt("Ingrese Apellido de Koder")
    array[i] = save_Koder(nombre, apellido)
    console.log(array[i])
}

while (true) {
    var m = prompt("cuantos koders desea eliminar?")
    if (m <= array.length) {
        break;
    } else {
        console.log("no hay suficientes koders para eliminar")
    }
}

for (let i = 0; i < m; i++) {
    let index = prompt("que koder desea eliminar")
    if (array[index-1] != null) {
        borrar_Koder(array, index - 1)
        console.log(array)
    } else {
        console.log("Ese koder no existe")
    }
}
console.log(array)

