const getData = () => {
    let mentorsArray;
    $.ajax({
        method: "GET",
        //url: base de datos,
        success: response => {
            mentorsArray = response
        },
        async: false
    })
    return mentorsArray
}

const saveNewMentor = mentorData => {
    $.ajax({
        method: "POST",
        data: JSON.stringify(mentorData),
        //url: base de datos
        success: response => {
            console.log(response)
            printMentors(getMentors())
        },
        error: error => {
            console.log(error)
        }
    })
}

const deleteMentor = key => {
    $.ajax({
        method: "DELETE",
        //url: base de datos
        success: response => {
            console.log(response)
        },
        error: error =>{
            console.log(error)
        }
    })
}

const putMentor = key => {
    
}

$("#save").click(() => {
    let mentor = {}
    $("form input").each(function () {
        let key = this.key
        let value = this.value

        mentor[key] = value
    })

    saveNewMentor(mentor)
})

const printMentors = mentorsArray => {
    $(".mentors-wrapper").empty()
    for (mentor in mentorsArray) {
        let { name, mail, phone } = mentorsArray[mentor]
        let mentorCard = `
            <div class="col-3">
                <div class="card mb-3">
                    <div class="card-body">
                        <div class="card-text">Nombre: ${name}</div>
                        <div class="card-text">Email: ${mail}</div>
                        <div class="card-text">Phone: ${phone}</div>
                        <div class="d-flex justifycontent-between">
                            <div class="btn btnsecondary">Eliminar</div>
                            <div class="btn btn-primary">Editar</div>
                        </div>
                    </div>
                </div>
            </div>
            `
            $(".mentors-wrapper").append(mentorCard)
    }
}

printMentors(getData())