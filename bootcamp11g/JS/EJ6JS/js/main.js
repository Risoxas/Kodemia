var mentorsArray = [
    {
        name:"Israel Salinas Martinez",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:8
            },
            {
                signature:"ReactJS",
                score:8
            }
        ]
    },
    {
        name:"David Cermeño Moranchel",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:7
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    },
    {
        name:"Charles Silva",
        scores:[
            {
                signature:"HTML",
                score:9
            },
            {
                signature:"CSS",
                score:9
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:9
            }
        ]
    },
    {
        name:"Michael Villalba Sotelo",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:9
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    }
]



var promedio =[]
const prinTable = () => {

    //******* Inicio del tHead *******//
    
    let mentorTable = document.createElement("table")
    let mentorHeader = document.createElement("thead")

    let headArray = ["  Mentor  ", "  Html  ", "  CSS  ", "  JS  ","  ReactJs  ", "  Promedio  "]

    headArray.forEach((array) => {
        let headCol = document.createElement("td")
        let headText = document.createTextNode(array)

        headCol.appendChild(headText)
        mentorHeader.appendChild(headCol)
    })
    mentorTable.appendChild(mentorHeader)
    //******* Inicio del tBody *******

    let mentorBody = document.createElement("tbody")

    mentorsArray.forEach((array,index) => {
        
    const getResults = (curso) =>{
        let puntuaciones = array.scores.reduce((accum,current) =>{

            if(current.signature === curso){
                accum = current.score
            }
            return accum
        }  ,0)
        return puntuaciones

    }
        let avg = array.scores.reduce((accum,current) => accum + current.score,0)
        avg = avg/array.scores.length
        promedio[index]= avg
        let mentorRow = document.createElement("tr")
        let mentorCol = document.createElement("td")
        let HTMLCol = document.createElement("td")
        let CSSCol = document.createElement("td")
        let JSCol = document.createElement("td")
        let ReactJSCol = document.createElement("td")
        let avgCol = document.createElement("td")
        let mentorText = document.createTextNode(array.name)
        let HTMLVal = getResults("HTML")
        let CSSVal = getResults("CSS")
        let JSVal = getResults("JS")
        let ReactJSVal = getResults("ReactJS")
        mentorCol.appendChild(mentorText)
        mentorRow.appendChild(mentorCol)
        HTMLCol.appendChild(document.createTextNode(HTMLVal))
        CSSCol.appendChild(document.createTextNode(CSSVal))
        JSCol.appendChild(document.createTextNode(JSVal))
        ReactJSCol.appendChild(document.createTextNode(ReactJSVal))
        avgCol.appendChild(document.createTextNode(avg))
        mentorRow.appendChild(HTMLCol)
        mentorRow.appendChild(CSSCol)
        mentorRow.appendChild(JSCol)
        mentorRow.appendChild(ReactJSCol)
        mentorRow.appendChild(avgCol)
        mentorBody.appendChild(mentorRow)

    })

    mentorTable.appendChild(mentorBody)
    // Mandamos a llamar elementos al body
    document.body.appendChild(mentorTable)

}
const deleteMentor = () => {


}

prinTable();


let resultados = document.createElement("p")
let avg = promedio.reduce((accum,current)=> accum + current ,0)
let info = document.createTextNode(avg/promedio.length)
resultados.appendChild(info)
document.body.appendChild(resultados)
