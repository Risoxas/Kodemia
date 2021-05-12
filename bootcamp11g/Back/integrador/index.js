const express = require('express')
const server = express()
const fs = require('fs')
const data = JSON.parse(fs.readFileSync('koders.json'))

// middleware
server.use(express.json())

server.get('/koders', (request, response) => {
    let names = data.koders.reduce((accum, current) => {
        accum.push(current.name)
        return accum
    }, [])

    response.json(names)
})

server.listen(8080, () => {
    console.log('Server listening to port 8080')
})