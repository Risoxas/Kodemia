const express = require('express')

const server = express()

function middleware (request, response, next) {
    console.log('middleware externo')
    next()
}

server.use(middleware)

server.use((request, response, next) => {
    console.log('middleware a nivel de aplicacion')
    next()
}, (request, response, next) => {
    console.log('middleware a nivel de aplicacion 2')
    next()
})

server.use((request, response, next) => {
    console.log('middleware a nivel de aplicacion 3')
    next()
})

server.get('/', (request, response, next) => {
    console.log('middleware a nivel de ruta')
    next()
}, (request, response) => {
    response.json({ message: 'API Middleware' })
})
 
server.get('/a', (request, response) => {
    response.json( {message: 'ruta a'})
})

server.listen(8080, () => {
    console.log('Server listening')
})