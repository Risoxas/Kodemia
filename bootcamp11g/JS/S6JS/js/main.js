
/*
Obtener la edad a partir de la fecha de nacimiento

Obtener promedio de sus scores

Colección de Koder que pertenezcan a JavaScript

Colección de Koder que pertenezcan a Python*/

const kodersCollection = [
    {
        name: 'Javier',
        lastName: 'López',
        birthday: '1996/06/24',
        generation: 9,
        bootcamp: 'JavaScript',
        scores: [
            {
                module: 'Frontend',
                score: 90
            },
            {
                module: 'Backend',
                score: 80
            },
            {
                module: 'Cloud',
                score: 80
            },
        ]
    },
    {
        name: 'Ale',
        lastName: 'Paez',
        birthday: '1998/05/12',
        generation: 1,
        bootcamp: 'Python',
        scores: [
            {
                module: 'Frontend',
                score: 90
            },
            {
                module: 'Backend',
                score: 100
            },
            {
                module: 'Cloud',
                score: 100
            },
        ]
    },
    {
        name: 'Juan Pablo',
        lastName: 'Sánchez',
        birthday: '1994/10/26',
        generation: 10,
        bootcamp: 'JavaScript',
        scores: [
            {
                module: 'Frontend',
                score: 100
            },
            {
                module: 'Backend',
                score: 95
            },
            {
                module: 'Cloud',
                score: 80
            },
        ]
    },
    {
        name: 'Oscar',
        lastName: 'Ruiz',
        birthday: '1996/06/24',
        generation: 1,
        bootcamp: 'Python',
        scores: [
            {
                module: 'Frontend',
                score: 98
            },
            {
                module: 'Backend',
                score: 100
            },
            {
                module: 'Cloud',
                score: 70
            },
        ]
    },
    {
        name: 'Javier',
        lastName: 'López',
        birthday: '1996/06/24',
        generation: 9,
        bootcamp: 'JavaScript',
        scores: [
            {
                module: 'Frontend',
                score: 80
            },
            {
                module: 'Backend',
                score: 90
            },
            {
                module: 'Cloud',
                score: 100
            },
        ]
    }
]




function Koder(name, lastName, generation, birthday, bootcamp, scores) {

    this.name = name
    this.lastName = lastName
    this.generation = generation
    this.birthDay = birthday
    this.bootcamp = bootcamp
    this.scores = scores

    this.getAge = function () {
        let today = new Date()
        let bday = new Date(this.birthDay)
        let age = today.getFullYear() - bday.getFullYear()
        return age
    }

    this.getAverage = function () {
        return this.scores.reduce((accum, current) => accum + current.score, 0) / this.scores.length
    }
    this.getBootcamp = function () {
        return console.log(this.bootcamp)
    }

}

var Javier = new Koder('Javier', 'López', 9, '1996/06/24', 'Javascript', [{ module: 'Frontend', score: 90 }, { module: 'Backend', score: 80 }, { module: 'Cloud', score: 80 }])

var Ale = new Koder('Ale', 'Paez', 1, '1999/05/12', 'Python', [{ module: 'Frontend', score: 90 }, { module: 'Backend', score: 100 }, { module: 'Cloud', score: 100 }])

var JuanP = new Koder('Juan Pablo', 'Sánchez', 10, '1994/10/26', 'Javascript', [{ module: 'Frontend', score: 100 }, { module: 'Backend', score: 95 }, { module: 'Cloud', score: 80 }])

var Oscar = new Koder('Oscar', 'Ruiz', 1, '1996/06/24', 'Python', [{ module: 'Frontend', score: 98 }, { module: 'Backend', score: 100 }, { module: 'Cloud', score: 70 }])



/***************** EJERCICIO  ****************************/


const Productos = [
    {
        nombre: "Leche",
        descripcion: "lacteo",
        precioCosto: 12,
        clasificacion: "bebida",
        ganancia: .15,
        precio6M: [
            {
                mes1: 11,
                mes2: 10,
                mes3: 9,
                mes4: 8,
                mes5: 7,
                mes6: 6
            }
        ],
        ventaU: 30,
        fechaC: "2021/04/30"
    },
    {
        nombre: "Manzana",
        descripcion: "roja",
        precioCosto: 7,
        clasificacion: "fruta",
        ganancia: .20,
        precio6M: [
            {
                mes1: 7,
                mes2: 7,
                mes3: 6.5,
                mes4: 6.2,
                mes5: 6,
                mes6: 6
            }
        ],
        ventaU: 15,
        fechaC: "2021/04/10"
    },
    {
        nombre: "Mango",
        descripcion: "petacon",
        precioCosto: 10,
        clasificacion: "fruta",
        ganancia: .20,
        precio6M: [
            {
                mes1: 10,
                mes2: 10,
                mes3: 9,
                mes4: 9,
                mes5: 8,
                mes6: 7
            }
        ],
        ventaU: 30,
        fechaC: "2021/04/30"
    },
    {
        nombre: "huevos",
        descripcion: "blanco",
        precioCosto: 8,
        clasificacion: "alimento",
        ganancia: .16,
        precio6M: [8, 8, 8, 8, 8, 7],
        ventaU: 100,
        fechaC: "2021/04/23"
    }
]



function Producto(nombre, descripcion, precioCosto, categoria, ganancia, fechaC, ventaU, precio6M) {
    this.nombre = nombre
    this.descripcion = descripcion
    this.precioCosto = precioCosto
    this.categoria = categoria
    this.ganancia = ganancia
    this.fechaC = fechaC
    this.ventaU = ventaU
    this.precio6M = precio6M
    this.precioVenta = precioCosto * (1 + ganancia)

    this.getDays = function () {
        let today = new Date()
        let caducidad = new Date(this.fechaC)
        console.log(caducidad)
        let mes = (caducidad.getMonth() - today.getMonth()) * 30
        return restantes = caducidad.getDay() - today.getDay() + mes
    }
    this.getPrecioPromedio = function () {
        return (precio6M.reduce((accum, current) => accum + current, 0))/precio6M.length
    }

}

let huevos = new Producto('huevos', 'blanco', 8, 'alimento', .16, "2021/04/23", 100, [8, 8, 8, 8, 8, 7])

const getProductsAbove = (cantidad) => Productos.filter(array => array.ventaU >= cantidad)

console.log(getProductsAbove(50) )
console.log(getProductsAbove(10))
