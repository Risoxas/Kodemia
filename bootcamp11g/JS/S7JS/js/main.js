
// const getIniciales = nombre => {
//     console.log(nombre)
//     array = nombre.split(',')
//     let initials = array.map(item => item.charAt(0))
//     initials.join('. ')
//     return initials + '.'
// }

function getInitials (name){
    const nameSplitted = name.split(" ")
    let initials = ""
    nameSplitted.forEach((word) => {
       initials += word.charAt(0) + '.'
    }) 
    // console.log(name)
    // console.log(initials)
    return initials
    
}


nombre = 'David Alvarez Gasca'
console.log(getInitials(nombre))
let vowels = {}
let vocales = {}

const getVowels = (objeto, ...strings) => {
    objeto = strings.forEach(array => {
        objectName = array.replace(/\s+/g, '')
        objeto[objectName] = array.match(/[aeiou]/ig).length
    })
}

getVowels(vowels, "holaaaa", "comowe", "estan", "todos espero")
getVowels(vocales, "espero", 'y esto', 'funcione')
console.log(vowels)
console.log(vocales)

/************************ ROUND 2  ************************************/

const arrayNames = [
    ["Ruben", "Flores"],
    ["Andre", "Vazquez"],
    ["Fernanda", "Palacios"],
    ["Goerge", "Camarillo"],
    ["Ale", "Paez"],
    ["Shari", "Andrade"],
    ["Erick", "Trujillo"],
    ["Arce", "Gutiérrez"],
    ["Juan", "Hernandez"]
]




// console.log(arrayNames[0].join(' ') + ' ' + Ruben)

arrayNames.forEach((array) => console.log(array.join(' ') + ' ' + getInitials(array.join(' '))) )

const arrayKoders = [
    [
        ["name", "Ruben"],
        ["lastName", "Alvarez"],
        ["generation", 1],
        ["bootcamp", "python"],
        ["score", 90]
    ],
    [
        ["name", "Andre"],
        ["lastName", "Alvarez"],
        ["generation", 1],
        ["bootcamp", "python"],
        ["score", 90]
    ],
    [
        ["name", "Ale"],
        ["lastName", "Paez"],
        ["generation", 1],
        ["bootcamp", "python"],
        ["score", 98]
    ],
    [
        ["name", "Juan Pi"],
        ["lastName", "López"],
        ["generation", 10],
        ["bootcamp", "JavaScript"],
        ["score", 95]
    ],
    [

        ["name", "Cintia"],
        ["lastName", "Gomez"],
        ["generation", 10],
        ["bootcamp", "JavaScript"],
        ["score", 85]
    ],
    [
        ["name", "Shari"],
        ["lastName", "Andrade"],
        ["generation", 10],
        ["bootcamp", "JavaScript"],
        ["score", 90]
    ],
    [
        ["name", "Arce"],
        ["lastName", "Gutierrez"],
        ["generation", 10],
        ["bootcamp", "JavaScript"],
        ["score", 90]
    ],
    [
        ["name", "JC"],
        ["lastName", "Hernandez"],
        ["generation", 10],
        ["bootcamp", "JavaScript"],
        ["score", 90]
    ],
    [
        ["name", "Erick"],
        ["lastName", "Trujillo"],
        ["generation", 10],
        ["bootcamp", "JavaScript"],
        ["score", 90]
    ]
]

function Koder(name,lastName,generation,bootcamp,score){
    this.name = name
    this.lastName = lastName
    this.generation = generation
    this.bootcamp = bootcamp
    this.score = score
}

const newArrayKoders = arrayKoders.map((arrayProperties) => {
    const objectKoder =  arrayProperties.reduce((accum , koderProperty) => {
        const key = koderProperty[0]
        const value = koderProperty[1]
        accum[key] = value
        return accum
    },{})
    console.log(objectKoder)
    //return objectKoder
    return new Koder(objectKoder.name,objectKoder.lastName,objectKoder.generation,objectKoder.bootcamp,objectKoder.score)
})

console.log(newArrayKoders)
