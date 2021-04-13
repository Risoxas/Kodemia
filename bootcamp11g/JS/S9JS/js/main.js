$('#save-user').click(() => {
    console.log('guardando usuario')
})

$('#toggle-text').click(() => {
    console.log('toggleando')
    // document.getElementById("text").classList.add("d-none") con vanilla
    // $("#text").hide() Ocultar con jquery

    // let element = document.getElementById("text")  con vanilla
    // let elementIsVisible = element.classList.contains("d-none")
    // console.log(elementIsVisible)

    // elementIsVisible ? element.classList.remove("d-none") : element.classList.add('d-none')

    $('#text').toggle() //JQuery
})



