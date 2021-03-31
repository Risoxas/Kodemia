var kodersList = [[ "Fernanda","Palacios Vera"],
    [
        "Jorge",
        "Ochoa"
    ],
    [
        "Naomi",
        "Puertos"
    ],
    [
        "Rurick",
        "Maqueo Poissot"
    ]
]
/*
    -crear un nuevo array que contenga los nombres completos de todos los koders de kodersList
*/



const createNewArray = () => {
    let newKodersList = []
    for(i = 0; i < kodersList.length; i++){
        newKodersList.push(kodersList[i].join(" "))
    }
    return newKodersList
}

var joinedNames = createNewArray()