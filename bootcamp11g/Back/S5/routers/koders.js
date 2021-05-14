const express = require('express')
const fs = require('fs')

const router = express.Router()

function getKodersFile() {
  const content = fs.readFileSync('koders.json', 'utf8')
  return JSON.parse(content)
}

router.get('/', async (request, response) => {
  const genderFilter = request.query.gender
  const countFilter = parseInt(request.query.count || 0)
  const nameFilter = request.query.name

  const jsonParsed = getKodersFile()

  let mentorsData = null

  if (genderFilter) {
    mentorsData = jsonParsed.mentores.filter(mentor => mentor.gender === genderFilter)
  }

  if (nameFilter) {
    const dataToFilter = mentorsData || jsonParsed.mentors
    mentorsData = dataToFilter.filter(mentor => mentor.name === nameFilter)
  }

  if (countFilter) {
    const dataToFilter = mentorsData || jsonParsed.mentors
    mentorsData = dataToFilter.splice(0, countFilter)
  }

  jsonParsed.mentors = mentorsData || jsonParsed.mentors

  response.json(jsonParsed.mentors)
})

router.post('/', (request, response) => {
  const name = request.body.name
  const gender = request.body.gender

  const newMentor = { name, gender }

  const json = getKodersFile()

  json.koders.push(newMentor)

  fs.writeFileSync('koders.json', JSON.stringify(json, null, 2), 'utf8')
  response.json({
    success: true
  })
})

router.patch('/:id', (request, response) => {
  const id = parseInt(request.params.id) // string
  const name = request.body.name

  const json = getKodersFile()

  const newMentor = json.koders.reduce((koders, koderActual) => {
    if (id === koderActual.id) {
      koderActual.name = name
    }

    return [
      ...koders,
      koderActual
    ]
  }, [])

  json.koders = newMentor

  fs.writeFileSync('koders.json', JSON.stringify(json, null, 2), 'utf8')

  response.json({
    success: true
  })
})

router.get('/:id', (request, response) => {
  const id = request.params.id

  console.log('query: ', request.query)

  const json = getKodersFile()

  const mentorFound = json.mentors.find(mentor => mentor.id == id)

  if (!mentorFound) {
    response.status(404)
    response.json({
      success: false,
      message: 'mentor not found :C'
    })
    return
  }

  response.json({
    success: true,
    message: 'mentor found',
    data: {
      mentor: mentorFound
    }
  })
})

router.delete('/:id', (request, response) => {
  const id = request.params.id

  const json = getKodersFile()

  const newMentor = json.koders.filter(koder => koder.id != id)

  json.koders = newMentor

  fs.writeFileSync('koders.json', JSON.stringify(json, null, 2), 'utf8')

  response.json({
    success: true
  })
})

module.exports = router