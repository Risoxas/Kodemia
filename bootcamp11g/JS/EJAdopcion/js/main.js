const getPet = () => {

    $.ajax({
        method: "GET",
        url: "https://adoptame-57713-default-rtdb.firebaseio.com/pets.json",
        success: (response) => {
            petsCollection = response;
        },
        error: (error) => {
            console.log(error);
        },
        async: false,
    });
    return petsCollection;
};
let newPet = {}

// const savePet = () => {
    $("#save-pet").click(() => {
        newPet.petId = Date.now()
        $("input").each(() => {
            console.log(this.location)
            let key = this.name
            let value = this.value
            newPet[key] = value
        })
        console.log(newPet)
    });
// }
// savePet();



const printPets = pets => {
    $('#pets-wrapper').children().remove()
    for (key in pets) {
        let petCard =
            `
        <div class="card mr-3 my-2" style="width: 18rem; height: 370px">
            <img
            class="card-img-top"
            src=${pets[key].url}
            alt=""
            style="height: 50%"
            />
            <div class="card-body h-50">
            <p class="card-text font-weight-bold">Nombre de la mascota: <span class="font-weight-light text-muted">${pets[key].petName}<span></p>
            <p class="card-text text-uppercase font-weight-bold">Raza: <span class="font-weight-light text-muted">${pets[key].race}<span></p>
            <div class="adopt-wrapper" data-pet-id=${pets[key].petId}>
                ${pets[key].ownerId == undefined ?
                `
                    <button
                    id=${pets[key].petId}
                    data-pet-id=${pets[key].petId}
                    type="button"
                    href="#"
                    class="btn btn-primary adopt-pet-btn"
                    >
                        Adoptar
                    </button>
                    `:
                `
                    <p class="card-text text-uppercase font-weight-bold">Dueño: <span class="font-weight-light text-muted">${getOwnerById(pets[key].ownerId, getOwner())}<span></p>
                    `
            }
            </div>
            </div>
        </div>
        `;
        $('#pets-wrapper').prepend(petCard);
    }
}
