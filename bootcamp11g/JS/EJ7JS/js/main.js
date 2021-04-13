

$("input[type='radio']").click(event => {
    $(`#element`).removeClass()
    switch (event.target.id) {
        case "Square":
            $(`#element`).addClass("square")
            break
        case "Rectangle":
            $(`#element`).addClass("rectangle")
            break
        default:
            $(`#element`).addClass("circle")

    }
})

// $("input[type='radio']").click( () => {
//     /*determinamos cuál fue la forma seleccionada*/
//     let selection = $("input[type='radio']:checked").val()
//     console.log( selection )
//     /*a nuestro elemento mutable le agregamos una clase con el mismo nombre que la selección*/
//     $("#element").removeClass().addClass(selection)
// })