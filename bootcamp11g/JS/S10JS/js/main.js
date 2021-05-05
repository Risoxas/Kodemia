/* GET */
const getData = key => {
    let mentorsArray;
    $.ajax({
        method: "GET",
        url: "https://ajaxclass-1ca34.firebaseio.com/11g/david/mentors/${key}.json",
        success: response => {
            mentorsArray = response
        },
        async: false
    })
    return mentorsArray
}

/*UPDATE*/
const saveNewMentor = mentorData => {
    $.ajax({
        method: "POST",
        url: "https://ajaxclass-1ca34.firebaseio.com/11g/david/mentors/mentorsjson",
        data: JSON.stringify(mentorData),
        success: response => {
            console.log(response)
            printMentors(getMentors())
        },
        error: error => {
            console.log(error)
        }
    })
}

/**DELETE */
const deleteMentor = key => {
    $.ajax({
        method: "DELETE",
        url: "https://ajaxclass-1ca34.firebaseio.com/11g/david/mentors/${key}.json",
        success: response => {
            console.log(response)
        },
        error: error =>{
            console.log(error)
        }
    })
}

/**  PUT  */
const putMentor = key => {
    $.ajax({
        method: "PUT",
        url: "https://ajaxclass-1ca34.firebaseio.com/11g/david/mentors/${key}.json",
        data: JSON.stringify({mentorData}),
        success: response => {
            console.log(response)
        },
        error: error => {
            console.log(error)
        }
    })
}

/**PATCH */

const updateData =  key => {
    $.ajax({
        method: "PATCH",
        url: "https://ajaxclass-1ca34.firebaseio.com/11g/david/mentors/${key}.json",
        data: JSON.stringify(mentorData),
        success: response => {
            console.log(response)
        },
        error: error => {
            console.log(error)
        }
    })
}

$("#save").click(() => {
    let mentor = {}
    $("form input").each(function () {
        let key = this.key
        let value = this.value
        console.log(key,value)

        mentor[key] = value
        console.log(mentor)
    })

    // saveNewMentor(mentor)
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