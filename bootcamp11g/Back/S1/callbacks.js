function irACasa (avisar) {
    console.log('llendo a casa ...')
    console.log('llegamos a casa')
    avisar()
}

function llamarAMama () {
    console.log('Hola ma ya llegue a casa')
}

irACasa(llamarAMama())