/*
-Obtener el score promedio de cada materia( HTML, CSS, JS, ReactJS )
-Obtener el promedio individual de cada mentor
-Obtener un array de strings con la siguiente forma:
     "Mi nombre es {nombre} y mi promedio es de {promedio}"
-Obtener la lista de mentores cuyo promedio sea mayor a 9.5
*/

let mentorsArray = [
    {
        name: "Israel Salinas Martinez",
        scores: [
            { signature: "HTML", score: 8 },
            { signature: "CSS", score: 10 },
            { signature: "JS", score: 8 },
            { signature: "ReactJS", score: 8 }
        ]
    },
    {
        name: "David Cermeño Moranchel",
        scores: [
            { signature: "HTML", score: 8 },
            { signature: "CSS", score: 7 },
            { signature: "JS", score: 10 },
            { signature: "ReactJS", score: 10 }
        ]
    },
    {
        name: "Charles Silva",
        scores: [
            { signature: "HTML", score: 9 },
            { signature: "CSS", score: 9 },
            { signature: "JS", score: 10 },
            { signature: "ReactJS", score: 9 }
        ]
    },
    {
        name: "Michael Villalba Sotelo",
        scores: [
            { signature: "HTML", score: 8 },
            { signature: "CSS", score: 10 },
            { signature: "JS", score: 9 },
            { signature: "ReactJS", score: 10 }
        ]
    }
]




const getAverage = (materia) => {
    let totalMateria = mentorsArray.reduce((accum,current) => {
        
        let puntuacionMateria = current.scores.find(score => score.signature === materia).score
        return accum + puntuacionMateria
    },0)
    
    let average = totalMateria/mentorsArray.length
    return average
}




const getMentorInfo = (array, mentorName) => array.filter (mentor => mentor.name === mentorName)



let isra = getMentorInfo(mentorsArray,"Israel Salinas Martinez" )
let david = getMentorInfo(mentorsArray,"David Cermeño Moranchel" )
let charles = getMentorInfo(mentorsArray,"Charles Silva" )
let michael = getMentorInfo(mentorsArray,"Michael Villalba Sotelo" )

const getScores = (arr,grades) => arr.map(score => score[grades])
const filterBySignature = (array, selectedSignature) => array.filter(grade => grade.signature === selectedSignature)

let allScores = getScores(mentorsArray, "scores")

let scoreHTML = getAverage ("HTML")
let scoreCSS = getAverage ("CSS")
let scoreJS = getAverage ("JS")
let scoreReactJS = getAverage ("ReactJS")
console.log(scoreHTML, scoreCSS,scoreJS,scoreReactJS)


console.log(' ')


/******************************* 2 ************************/
const getTotalGrade = (array,index) => (array[index].scores.reduce((accum,current) => accum + current.score,0))/array[index].scores.length

let israGrades = getTotalGrade(isra, 0)
let charlesGrades = getTotalGrade(charles, 0)
let davidGrades = getTotalGrade(david, 0)
let michaelGrades = getTotalGrade(michael, 0)

console.log(israGrades)
console.log(charlesGrades)
console.log(davidGrades)
console.log(michaelGrades)



/***************************** 3 ************************/


/**************************** 4 ***************************/