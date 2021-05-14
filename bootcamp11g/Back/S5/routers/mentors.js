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

  let mentoresData = null

  if (genderFilter) {
    mentoresData = jsonParsed.mentores.filter(koder => koder.gender === genderFilter)
  }

  if (nameFilter) {
    const dataToFilter = mentoresData || jsonParsed.mentores
    mentoresData = dataToFilter.filter(koder => koder.name === nameFilter)
  }

  if (countFilter) {
    const dataToFilter = mentoresData || jsonParsed.mentores
    mentoresData = dataToFilter.splice(0, countFilter)
  }

  jsonParsed.mentores = mentoresData || jsonParsed.mentores

  response.json(jsonParsed.mentores)
})

router.post('/', (request, response) => {
  const name = request.body.name
  const gender = request.body.gender

  const newMentor = { name, gender }

  const json = getKodersFile()

  json.mentores.push(newMentor)

  fs.writeFileSync('koders.json', JSON.stringify(json, null, 2), 'utf8')
  response.json({
    success: true
  })
})

router.patch('/:id', (request, response) => {
  const id = parseInt(request.params.id) // string
  const name = request.body.name

  const json = getKodersFile()

  const newMentors = json.mentores.reduce((mentores, mentorActual) => {
    if (id === mentorActual.id) {
      mentorActual.name = name
    }

    return [
      ...mentors,
      mentorActual
    ]
  }, [])

  json.mentors = newMentors

  fs.writeFileSync('koders.json', JSON.stringify(json, null, 2), 'utf8')

  response.json({
    success: true
  })
})

router.get('/:id', (request, response) => {
  const id = request.params.id

  console.log('query: ', request.query)

  const json = getKodersFile()

  const mentorFound = json.mentores.find(mentor => mentor.id == id)

  if (!mentorFound) {
    response.status(404)
    response.json({
      success: false,
      message: 'Mentor not found :C'
    })
    return
  }

  response.json({
    success: true,
    message: 'Mentor found',
    data: {
      mentor: mentorFound
    }
  })
})

router.delete('/:id', (request, response) => {
  const id = request.params.id

  const json = getKodersFile()

  const newMentors = json.mentores.filter(mentor => mentor.id != id)

  json.mentores = newMentors

  fs.writeFileSync('koders.json', JSON.stringify(json, null, 2), 'utf8')

  response.json({
    success: true
  })
})

module.exports = router